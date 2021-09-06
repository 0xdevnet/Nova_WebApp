import InfiniteScroll from 'react-infinite-scroll-component';
import Highlights from './Highlights';
import SubscribeBubble from './SubscribeBubble';
import ContentBubble from './ContentBubble';
import { content_section } from '../Styles';

const content_obj = [
  {
    title: "Busan on the Water",
    desc: "It's my first day in Busan! Long flight from NY but excited because I've been wanting to come here for a while. Also I heard that Terraform Labs is here... wen Busan?",
    img: "https://images.pexels.com/photos/5309285/pexels-photo-5309285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  },
  {
    title: "Last Night in Manhattan",
    desc: "All the memories I made in Manhattan, this was a truly a life-changing experience. I will miss you concrete jungle.",
    img: "/Videos/newyork.mp4"
  },
  {
    title: "Pacific Palisades",
    desc: "I toured my dream home a month ago, just wanted to share to yall",
    img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
  }
]

const content = (
    content_obj.map((each_content, index) => (
      <ContentBubble 
        key={index}
        title={each_content.title} 
        desc={each_content.desc}
        img={each_content.img}
      />
    ))
)

const doNothing = () => null

const ContentSection = () => {

    return (
        <InfiniteScroll
        dataLength={10}
        next={doNothing}
        hasMore={false}
        loader={null}
        style={content_section}
        height="95vh"
        >
            <SubscribeBubble/>
            <h3 style={{margin: '25px 0'}}>Highlights</h3>
            <Highlights/>
            <h3 style={{margin: '25px 0'}}>Posts</h3>
            {content}
        </InfiniteScroll>
    )
}

export default ContentSection