import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LCDClient, Extension, Wallet,MnemonicKey,MsgSend } from '@terra-money/terra.js'
import './DemoPage.css'

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const demoContainerStyle = {
    display: 'grid', placeItems: 'center'
},
h1Style = {
    display: 'flex',
    alignItems: 'center',
    width: '100vw', 
    height: '10vh', 
    margin: '0', 
    padding: '0 0 0 25px',
    fontFamily: 'Nova Square',
    fontSize: '2.5rem',
    borderBottom: '1px solid black'
},
mainContentContainerStyle = {
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1.5fr 4fr 2.5fr'
}

const mk = new MnemonicKey({
  mnemonic: process.env.TERRA_MNEMOMIC_KEY,
});

const terra = new LCDClient({
  chainID: "tequila-0004",
  URL: "https://tequila-lcd.terra.dev",
});

const wallet = terra.wallet(mk);
const extension = new Extension();
extension.connect();
extension.on("connect", (w: Wallet) => {
  w = wallet;
});

const showTerraStation = () => {
  const send = new MsgSend(
    wallet.key.accAddress,
    "terra15c03nmgaadrdy4tpy03fekgtd4psg0d0yac6mj",
    { ust: 50 }
  );
  extension.post({
    msgs: [send]
  });
}

export default class DemoPage extends React.Component {
    state = {
        items: Array.from({ length: 20 })
      };
    
      fetchMoreData = () => {
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 1500);
      };

      render() {
        return (
          <div style={demoContainerStyle}>
            <h1 style={h1Style}>Spacecamp Nova Demo</h1>
            <div style={mainContentContainerStyle}>
                <div></div>
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  style={{width: 'auto', margin: '0', padding: '0'}}
                  height="90vh"
                >
                  {this.state.items.map((i, index) => (
                    <div style={style} key={index}>
                      div - #{index}
                    </div>
                  ))}
                </InfiniteScroll>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        justifyContent: 'space-evenly',
                        width: '80%',
                        height: '30%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{marginLeft: '5%'}}>
                            <h3 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 1] Deposit UST to Subscribe</h3>
                            <h5 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Mininum Deposit: 50 UST</h5>
                            <h5 style={{margin: '0', padding: '0', color: 'grey'}}>Your Current Deposit: 0 UST [rank: Ghost]</h5>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center'
                        }}>
                            <button style={{
                                cursor: 'pointer',
                                margin: '0',
                                padding: '10px 35px',
                                background: 'lightblue',
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '1rem'

                            }} onClick={showTerraStation}>Deposit</button>
                            <button style={{
                                cursor: 'pointer',
                                margin: '0',
                                padding: '10px 35px',
                                background: 'pink',
                                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                                color: 'white',
                                border: 'none',
                                borderRadius: '10px',
                                fontSize: '1rem'

                            }}>Withdraw</button>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        width: '80%',
                        height: '30%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{margin: '10% 0 0 5%'}}>
                            <h3 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 2] Stake NOVA for a chance to win weekly NFT picture/video drops</h3>
                            <h5 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Next drop in: 3 days</h5>
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        width: '80%',
                        height: '30%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{margin: '10% 0 0 5%'}}>
                            <h3 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 3] Sign up for the opportunity to buy the creator's most exclusive content with LUNA</h3>
                            <h5 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Next drop in: 3 days</h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}