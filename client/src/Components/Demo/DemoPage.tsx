import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import DemoTopBar from './DemoTopBar';
import Highlights from './Highlights';
import ArtistSection from './ArtistSection/ArtistSection';
import ThreeLevelContainer from './SubscriptionSection/ThreeLevelContainer';

import './DemoPage.css';

const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const demoContainerStyle = {
    display: 'grid', placeItems: 'center'
},
mainContentContainerStyle = {
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1.5fr 4fr 2.5fr'
}


const subscribe = (
  <div style={{width: '100%', height: '100px', display: 'grid', placeItems: 'center', margin: '0', padding: '0'}}>
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

const array: any = []

for(let i = 0; i < 20; i++) {
  array.push(content)
}

export default class DemoPage extends React.Component {
    state = {
        items: array
      };
    
      fetchMoreData = () => {
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(array)
          });
        }, 1500);
      };

      render() {
        return (
          <div style={demoContainerStyle}>
            {/* <DemoTopBar/> */}
            <div style={mainContentContainerStyle}>
                <ArtistSection/>
                <InfiniteScroll
                  dataLength={this.state.items.length}
                  next={this.fetchMoreData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                  style={{width: 'auto', margin: '5% 0 0 0', padding: '0', borderRadius: '30px 30px 0 0',
                  boxShadow: 'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'}}
                  height="95vh"
                >
                  {subscribe}
                  <h3 style={{margin: '0', padding: '15px 0 0 15px'}}>Highlights</h3>
                  <Highlights/>
                  <h3 style={{margin: '0', padding: '15px 0 0 15px'}}>Posts</h3>
                  {this.state.items.map((i: any, index: any) => (
                    <div style={style} key={index}>
                     {i}
                    </div>
                  ))}
                </InfiniteScroll>
                <ThreeLevelContainer/>
            </div>
          </div>
        );
      }
}