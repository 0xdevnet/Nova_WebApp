import { 
    MnemonicKey, 
    LCDClient, 
    Extension, 
    Wallet,
    MsgSend 
} from "@terra-money/terra.js";
import { 
  subscribe_button_container, 
  subscribe_button_style 
} from "../../Styles";

const USTSubscribeButtons = () => {

    const mnemonic_key = new MnemonicKey({
        mnemonic: process.env.TERRA_MNEMOMIC_KEY,
      })
      
      const terra = new LCDClient({
        chainID: "tequila-0004",
        URL: "https://tequila-lcd.terra.dev",
      })
      
      const wallet = terra.wallet(mnemonic_key);
      const extension = new Extension();
      extension.connect();
      extension.on("connect", (w: Wallet) => {
        w = wallet;
      })
      
      const showTerraStation = () => {
        const send = new MsgSend(
          wallet.key.accAddress,
          "terra15c03nmgaadrdy4tpy03fekgtd4psg0d0yac6mj",
          { uust: 50000 }
        );
        extension.post({
          msgs: [send]
        })
    }

    return (
        <div style={subscribe_button_container}>
            <button style={{
              ...subscribe_button_style, background: 'lightblue'
            }} onClick={showTerraStation}>Deposit</button>
            <button style={{
              ...subscribe_button_style, background: 'pink'
            }}>Withdraw</button>
        </div>
    )
}

export default USTSubscribeButtons