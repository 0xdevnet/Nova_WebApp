import * as path from "path";
import BN from "bn.js";
import chalk from "chalk";
import * as chai from "chai";
import chaiAsPromised from "chai-as-promised";
import { LocalTerra, MsgExecuteContract } from "@terra-money/terra.js";
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

const terra = new LocalTerra();
const deployer = terra.wallets.test1;
const user1 = terra.wallets.test2;
const user2 = terra.wallets.test3;

let mirror_token: string;
let terraswap_pair: string;
let terraswap_lp_token: string;

//-----------------------------------------//

async function setupTest() {
  const cw20_code_id = await storeCode(terra, deployer, '../artifacts/terraswap_token.wasm')
  
  console.log("CW20 Code Id: " + cw20_code_id)

  const tokenResult = await instantiateContract(terra, deployer, deployer, cw20_code_id, {
    name: 'Mirror',
    symbol: 'MIR',
    decimals: 6,
    initial_balances: [],
    mint: { minter: deployer.key.accAddress },
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

  const event = pair_result.logs[0].events.find((event) => {
    return event.type == "instantiate_contract"
  })

  terraswap_pair = event?.attributes[3].value as string
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
}

//----------------------------------------------------------------------------------------
// Test 1. Provide Initial Liquidity
//
// User 1 provides 69 MIR + 420 UST
// User 1 should receive sqrt(69000000 * 420000000) = 170235131 uLP
//
// Result
// ---
// pool uMIR  69000000
// pool uusd  420000000
// user uLP   170235131
//----------------------------------------------------------------------------------------

async function testProvideLiquidity() {
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
          { //Mirror
            info: {
              token: {
                contract_addr: mirror_token
              }
            },
            amount: '69000000'
          },
          { //UST
            info: {
              native_token: {
                denom: 'uusd',
                amount: '420000000'
              }
            }
          }
        ]
      }
    })
  ])

  const pairMir = await queryTokenBalance(terra, terraswap_pair, mirror_token)
  expect(pairMir).to.equal("69000000")

  const pairUSD = await queryNativeTokenBalance(terra, terraswap_pair, 'uusd')
  expect(pairUSD).to.equal("420000000")
}

//----------------------------------------------------------------------------------------
// Test 2. Swap
//
// User 2 sells 1 MIR for UST
//
// k = poolUMir * poolUUsd
// = 69000000 * 420000000 = 28980000000000000
// returnAmount = poolUusd - k / (poolUMir + offerUMir)
// = 420000000 - 28980000000000000 / (69000000 + 1000000)
// = 6000000
// fee = returnAmount * feeRate
// = 6000000 * 0.003
// = 18000
// returnAmountAfterFee = returnUstAmount - fee
// = 6000000 - 18000
// = 5982000
// returnAmountAfterFeeAndTax = deductTax(5982000) = 5976023
// transaction cost for pool = addTax(5976023) = 5981999
//
// Result
// ---
// pool uMIR  69000000 + 1000000 = 70000000
// pool uusd  420000000 - 5981999 = 414018001
// user uLP   170235131
// user uMIR  10000000000 - 1000000 = 9999000000
// user uusd  balanceBeforeSwap + 5976023 - 4500000 (gas)
//----------------------------------------------------------------------------------------

async function testSwap() {
  
}

//----------------------------------------------------------------------------------------
// Test 3. Slippage tolerance
//
// User 2 tries to swap a large amount of MIR (say 50 MIR, while the pool only has 70) to
// UST with a low max spread. The transaction should fail
//----------------------------------------------------------------------------------------

async function testSlippage() {
  
}

//----------------------------------------------------------------------------------------
// Main
//----------------------------------------------------------------------------------------

(async () => {
  console.log(chalk.yellow("\nStep 1. Info"));

  console.log(`Use ${chalk.cyan(deployer.key.accAddress)} as deployer`);
  console.log(`Use ${chalk.cyan(user1.key.accAddress)} as user 1`);
  console.log(`Use ${chalk.cyan(user2.key.accAddress)} as user 1`);

  console.log(chalk.yellow("\nStep 2. Setup"));

  await setupTest();

  // console.log(chalk.yellow("\nStep 3. Tests"));

  // await testProvideLiquidity();
  // await testSwap();
  // await testSlippage();

  console.log("");
})();
