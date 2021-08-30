import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import DemoTopBar from './DemoTopBar';
import Highlights from './Highlights';
import ArtistSection from './ArtistSection/ArtistSection';
import ThreeLevelContainer from './SubscriptionSection/ThreeLevelContainer';

import './DemoPage.css';
import { flex_column } from './Styles';

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
    <div style={{width: '100%', height: '50%', backgroundColor: '#9bddff',
        display: 'grid', placeItems: 'center', borderRadius: '15px',
        color: 'white', letterSpacing: '1px'
        }}>Subscribe to see the contents</div>
  </div>
)

const content = (
  <>
  <div style={flex_column}>
    <h3 style={{width: '100%'}}>Busan on the water</h3>
    <p style={{width: '95%'}}>It's my first day in Busan! Long flight from NY but excited because I've been wanting to come here for a while. Also I heard that Terraform Labs is here... wen Busan?</p>
    <img 
    style={{width: '100%', height:'auto', borderRadius: '15px'}}
    src="https://images.pexels.com/photos/5309285/pexels-photo-5309285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="busan" />
  </div>
  <div>
    <h3>Last look at Times Square</h3>
    <h6 style={{width: '100%', textAlign: 'right'}}>14 hours ago</h6>
    <p>Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!</p>
    <video width="100%" height="auto" style={{borderRadius: '15px'}} controls >
      <source src="/Videos/newyork.mp4" type="video/mp4"/>
    </video>  
  </div>
  <div>
    <h3>Last look at Times Square</h3>
    <h6 style={{width: '100%', textAlign: 'right'}}>14 hours ago</h6>
    <p>Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!</p>
    <video width="100%" height="auto" style={{borderRadius: '15px'}} controls >
      <source src="/Videos/newyork.mp4" type="video/mp4"/>
    </video>  
  </div>
  <div>
    <h3>Last look at Times Square</h3>
    <h6 style={{width: '100%', textAlign: 'right'}}>14 hours ago</h6>
    <p>Lorem ipsum dolor, adipisicing elit. Dolorum dolor, consectetur sapiente exercitationem nam minima laborum ducimus ad saepe eveniet rem reiciendis possimus asperiores natus in praesentium odit, repellat nemo!</p>
    <video width="100%" height="auto" style={{borderRadius: '15px'}} controls >
      <source src="/Videos/newyork.mp4" type="video/mp4"/>
    </video>  
  </div>
  </> 
)


export default class DemoPage extends React.Component {

      doNothing = () => null

      render() {
        return (
          <div style={demoContainerStyle}>
            {/* <DemoTopBar/> */}
            <div style={mainContentContainerStyle}>
                <ArtistSection/>
                <InfiniteScroll
                  dataLength={10}
                  next={this.doNothing}
                  hasMore={false}
                  loader={null}
                  style={{width: 'auto', margin: '5% 0 0 0', padding: '0 5%', borderRadius: '30px 30px 0 0',
                  boxShadow: 'inset -9px -9px 13px #dededf, inset 9px 9px 13px #ffffff'}}
                  height="95vh"
                >
                  {subscribe}
                  <h3 style={{margin: '0', padding: '0'}}>Highlights</h3>
                  <Highlights/>
                  <h3 style={{margin: '0', padding: '0'}}>Posts</h3>
                  {content}
                </InfiniteScroll>
                <ThreeLevelContainer/>
            </div>
          </div>
        );
      }
}