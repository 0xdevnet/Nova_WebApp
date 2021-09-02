import { MsgInstantiateContract } from "@terra-money/terra.js";
import {
  LCDClient,
  MsgStoreCode,
  MnemonicKey,
  isTxError,
} from "@terra-money/terra.js";
import * as fs from "fs";

(async () => {
  try {
    const mnemonic_key = new MnemonicKey({
      mnemonic: process.env.TERRA_MNEMOMIC_KEY,
    });

    const terra = new LCDClient({
      chainID: "tequila-0004",
      URL: "https://tequila-lcd.terra.dev",
    });

    const wallet = terra.wallet(mnemonic_key);

    const storeCode = new MsgStoreCode(
      wallet.key.accAddress,
      fs.readFileSync("../artifacts/sample-contract.wasm").toString("base64")
    );

    const storeCodeTransact = await wallet.createAndSignTx({ msgs: [storeCode], });
    const storeCodeTxResult = await terra.tx.broadcast(storeCodeTransact);

    if ( isTxError(storeCodeTxResult) )
      throw new Error (
        `store code failed-
        code:      ${storeCodeTxResult.code},
        codespace: ${storeCodeTxResult.codespace},
        raw_log:   ${storeCodeTxResult.raw_log}`
      )
    else console.log(storeCodeTxResult)

    const { store_code: { code_id }, } = storeCodeTxResult.logs[0].eventsByType;

    console.log("Code ID: ", code_id);

    const code_id_num = Number.parseFloat(code_id[0]);

    const instantiate = new MsgInstantiateContract(
      wallet.key.accAddress,
      code_id_num,
      {
        count: 5,
      },
      { uluna: 100, ukrw: 100 } // initialize coins
    );

    console.log("instantiate: ", instantiate);

    const instantiateTx = await wallet.createAndSignTx({
      msgs: [instantiate],
    });

    console.log("instantiateTx: ", instantiateTx);

    const instantiateTxResult = await terra.tx.broadcast(instantiateTx);

    if (isTxError(instantiateTxResult))
      throw new Error(
        `instantiate failed. 
        code:      ${instantiateTxResult.code}, 
        codespace: ${instantiateTxResult.codespace}, 
        raw_log:   ${instantiateTxResult.raw_log}`
      )
    else console.log(instantiateTxResult);

    const {
      instantiate_contract: { contract_address },
    } = instantiateTxResult.logs[0].eventsByType;
  } catch (e) {
    console.log("error ", e);
  }
})();
