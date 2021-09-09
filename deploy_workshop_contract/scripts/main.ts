import * as path from "path";
import BN from "bn.js";
import chalk from "chalk";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { LCDClient, LocalTerra, MnemonicKey, MsgExecuteContract } from "@terra-money/terra.js";
import {
  toEncodedBinary,
  sendTransaction,
  storeCode,
  instantiateContract,
  queryNativeTokenBalance,
  queryTokenBalance,
} from "./helpers";

chai.use(chaiAsPromised);
const { expect } = chai;

const terra = new LocalTerra()

console.log(terra)

const deployer = terra.wallets.test1
const user1 = terra.wallets.test2;
const user2 = terra.wallets.test3;

let mirror_token: string;
let terraswap_pair: string;
let terraswap_lp_token: string;

//-----------------------------------------//

const setupTest = async () => {
  const cw20_code_id = await storeCode(terra, deployer, '../artifacts/terraswap_token.wasm')
  
  console.log("CW20 Code Id: " + cw20_code_id)

  const tokenResult = await instantiateContract(terra, deployer, deployer, cw20_code_id, {
    name: 'Mirror',
    symbol: 'MIR',
    decimals: 6,
    initial_balances: [],
    mint: { minter: deployer.key.accAddress }
  })

  mirror_token = tokenResult.logs[0].events[0].attributes[3].value

  const pair_code_id = await storeCode(terra, deployer, '../artifacts/terraswap_pair.wasm')

  const pair_result  = await instantiateContract(terra, deployer, deployer, pair_code_id, {
    asset_infos: 
    [
      { token: { contract_addr: mirror_token } },
      { native_token: { denom: "uusd" } }
    ],
    token_code_id: cw20_code_id
  })

  const event = pair_result.logs[0].events.find((event) => event.type == "instantiate_contract")

  console.log(pair_result)

  terraswap_pair     = event?.attributes[3].value as string
  terraswap_lp_token = event?.attributes[7].value as string

  await sendTransaction(terra, deployer, [
    new MsgExecuteContract(deployer.key.accAddress, mirror_token, {
      mint: {
        recipient: user1.key.accAddress,
        amount: '1337000000'
      }
    }),
    new MsgExecuteContract(deployer.key.accAddress, mirror_token, {
      mint: {
        recipient: user2.key.accAddress,
        amount: '1337000000'
      }
    })
  ])

  console.log("Finished Setup. :)")

  console.log("Mirror Token: " + mirror_token)
  console.log("Terraswap Pair: " + terraswap_pair)
  console.log("Terraswap LP Token: " + terraswap_lp_token)
}

const testProvideLiquidity = async () => {
  await sendTransaction(terra, user1, [
    new MsgExecuteContract(user1.key.accAddress, mirror_token, {
      increase_allowance: {
        spender: terraswap_pair,
        amount: '69000000'
      }
    }),
    new MsgExecuteContract(user1.key.accAddress, terraswap_pair, {
      provide_liquidity: {
        assets: [
          { //MIR
            info: { token: { contract_addr: mirror_token } },
            amount: '69000000'
          },
          { //UST
            info: { native_token: { denom: 'uusd' } },
            amount: '420000000'
          }
        ]
      }
    }, 
    {
      uusd: "420000000"
    })
  ])

  const pair_mir = await queryTokenBalance(terra, terraswap_pair, mirror_token)
  expect(pair_mir).to.equal("69000000")

  const pair_usd = await queryNativeTokenBalance(terra, terraswap_pair, 'uusd')
  expect(pair_usd).to.equal("420000000")

  const user_lp = await queryTokenBalance(terra, user1.key.accAddress, terraswap_lp_token)
  expect(user_lp).to.equal("170235131")

  console.log("Test 1 Passed! :)")
}

const testSwap = async () => {
  process.stdout.write("Should swap... ");

  const userUusdBefore = await queryNativeTokenBalance(
    terra,
    user2.key.accAddress,
    "uusd"
  );

  await sendTransaction(terra, user2, [
    new MsgExecuteContract(user2.key.accAddress, mirror_token, {
      send: {
        amount: "1000000",
        contract: terraswap_pair,
        msg: toEncodedBinary({
          swap: {},
        }),
      },
    }),
  ]);

  const poolUMir = await queryTokenBalance(terra, terraswap_pair, mirror_token);
  expect(poolUMir).to.equal("70000000");

  const poolUUsd = await queryNativeTokenBalance(terra, terraswap_pair, "uusd");
  expect(poolUUsd).to.equal("414018001");

  const userULp = await queryTokenBalance(terra, user1.key.accAddress, terraswap_lp_token);
  expect(userULp).to.equal("170235131");

  const userUMir = await queryTokenBalance(terra, user2.key.accAddress, mirror_token);
  expect(userUMir).to.equal("1336000000");

  const userUusdExpected = new BN(userUusdBefore)
    .add(new BN("5976023"))
    .sub(new BN("4500000"))
    .toString();

  const userUUsd = await queryNativeTokenBalance(terra, user2.key.accAddress, "uusd");
  expect(userUUsd).to.equal(userUusdExpected);

  console.log(chalk.green("Passed!"));
}

const testSlippage = async () => {
  process.stdout.write("Should check max spread... ")

  await expect(
    sendTransaction(terra, user2, [
      new MsgExecuteContract(user2.key.accAddress, mirror_token, {
        send: {
          amount: "50000000",
          contract: terraswap_pair,
          msg: toEncodedBinary({
            swap: {
              max_spread: "0.01",
            },
          }),
        },
      }),
    ])
  ).to.be.rejectedWith("Max spread assertion")

  console.log(chalk.green("Passed!"))
}

//----------------------------------------------------------------------------------------
// Main
//----------------------------------------------------------------------------------------

(async () => {
  console.log(chalk.yellow("\nStep 1. Info"))

  console.log(`Use ${chalk.cyan(deployer.key.accAddress)} as deployer`)
  console.log(`Use ${chalk.cyan(user1.key.accAddress)} as user 1`)
  console.log(`Use ${chalk.cyan(user2.key.accAddress)} as user 2`)

  console.log(chalk.yellow("\nStep 2. Setup"))

  await setupTest()

  console.log(chalk.yellow("\nStep 3. Tests"))

  await testProvideLiquidity()
  await testSwap()
  await testSlippage()

  console.log("")
})()
