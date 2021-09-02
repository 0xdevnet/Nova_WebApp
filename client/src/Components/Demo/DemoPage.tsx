import React from 'react';

import DemoTopBar from './DemoTopBar';
import ArtistSection from './ArtistSection/ArtistSection';
import ThreeLevelContainer from './SubscriptionSection/ThreeLevelContainer';
import ContentSection from './ContentScrollerSection/ContentSection';

import './DemoPage.css';

const demoContainerStyle = {
    display: 'grid', placeItems: 'center'
},
mainContentContainerStyle = {
    width: '100vw',
    display: 'grid',
    gridTemplateColumns: '1.5fr 4fr 2.5fr'
}


const DemoPage = () => {

    return (
      <div style={demoContainerStyle}>
        {/* <DemoTopBar/> */}
        <div style={mainContentContainerStyle}>
            <ArtistSection/>
            <ContentSection/>
            <ThreeLevelContainer/>
        </div>
      </div>
    )
}

export default DemoPage