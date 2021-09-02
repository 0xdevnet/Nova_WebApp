import ArtistSection from './ArtistSection/ArtistSection';
import ThreeLevelContainer from './SubscriptionSection/ThreeLevelContainer';
import ContentSection from './ContentScrollerSection/ContentSection';

import { 
  demo_container_style, 
  main_content_container_style 
} from './Styles';

import './DemoPage.css';

const DemoPage = () => {

    return (
      <div style={demo_container_style}>
        <div style={main_content_container_style}>
            <ArtistSection/>
            <ContentSection/>
            <ThreeLevelContainer/>
        </div>
      </div>
    )
}

export default DemoPage