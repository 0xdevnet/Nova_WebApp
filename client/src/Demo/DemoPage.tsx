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
    borderBottom: '1px solid silver'
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
    { uust: 50000 }
  );
  extension.post({
    msgs: [send]
  });
}

const pictureUrl = 'https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

const stories = (
  <div style={{width: '100%', height: '150px',
  display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', padding: '0 0 0 15px'}}>
    <button style={{
      marginRight: '15px', 
      width: '100px', 
      height: '100px', 
      background: 'url("https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      fontSize: '1rem',
      letterSpacing: '1px'
      }}>
        Story
    </button>
    <button style={{
      marginRight: '15px', 
      width: '100px', 
      height: '100px', 
      background: 'url("https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      fontSize: '1rem',
      letterSpacing: '1px'
      }}>
        Portraits
    </button>
    <button style={{
      marginRight: '15px', 
      width: '100px', 
      height: '100px', 
      background: 'url("https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: 'none',
      borderRadius: '15px',
      color: 'white',
      fontSize: '1rem',
      letterSpacing: '1px'
      }}>
        Food
    </button>
  </div>
)

const subscribe = (
  <div style={{width: '100%', height: '100px', display: 'grid', placeItems: 'center'}}>
    <div style={{width: '95%', height: '50%', backgroundColor: '#9bddff',
        display: 'grid', placeItems: 'center', borderRadius: '30px',
        color: 'white', letterSpacing: '1px'}}>Subscribe to see the contents</div>
  </div>
)

const content = (
  <div style={{width: '100%', height: '150px',
  display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center', padding: '0 0 0 15px'}}>
    Hello
  </div>
)

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
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
                    <div style={{width: '150px'}}>
                      <div style={{
                      width: '150px',  height: '150px', 
                      background: `url(${pictureUrl})`, 
                      backgroundSize: '100%', backgroundPosition: 'center',
                      margin: '50px 0 0 0', borderRadius: '15px', boxShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px'
                      }}/>
                      <h1 style={{fontSize: '2rem', margin: '20px 0 5px 0'}}>Jane Doe</h1>
                      <p style={{margin: '0 0 20px 0', padding: '0', fontSize: '0.75rem', letterSpacing: '1px'}}>Photographer / Travel Blogger</p>
                    </div>
                    <div style={{height: 'auto', width: '150px'}}>
                      <div>
                        <h5 >Followers:</h5>
                        <p style={{color: '#292929'}}>4693</p>
                      </div>
                      <div>
                        <h5 >Total Deposit:</h5>
                        <p style={{color: '#292929'}}>192043 UST</p>
                      </div>
                      <div>
                        <h5 >NFT Dropped:</h5>
                        <p style={{color: '#292929'}}>7</p>
                      </div>
                    </div>
                </div>
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  style={{width: 'auto', margin: '0', padding: '0', borderLeft: '1px solid silver', borderRight: '1px solid silver'}}
                  height="90vh"
                >
                  {subscribe}
                  <h3 style={{margin: '0', padding: '15px 0 0 15px'}}>Highlights</h3>
                  {stories}
                  <h3 style={{margin: '0', padding: '15px 0 0 15px'}}>Posts</h3>
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
                        width: '75%',
                        height: '25%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{marginLeft: '5%'}}>
                            <h4 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 1] Deposit UST to Subscribe</h4>
                            <h6 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Mininum Deposit: 50 UST</h6>
                            <h6 style={{margin: '0', padding: '0', color: 'grey'}}>Your Current Deposit: 0 UST [rank: Ghost]</h6>
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
                        width: '75%',
                        height: '25%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{margin: '10% 0 0 5%'}}>
                            <h3 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 2] Stake NOVA for a chance to win weekly NFT picture/video drops</h3>
                            <h5 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Next drop in: 3 days</h5>
                        </div>
                        <button style={{width: '80%'}}>Coming Soon!</button>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'left',
                        width: '75%',
                        height: '25%',
                        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                        borderRadius: '15px'
                    }}>
                        <div style={{margin: '10% 0 0 5%'}}>
                            <h3 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 3] Sign up for the opportunity to buy the creator's most exclusive content with LUNA</h3>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
      }
}