import { 
    content_bubble_container, 
    content_bubble_img, 
    description_style, 
    title_style 
} from "../Styles"

const ContentBubble = (props: { 
    title: string; desc: string; img: string; 
}) => (

    <div style={content_bubble_container}>
        <h2 style={title_style}>{props.title}</h2>
        <p style={description_style}>{props.desc}</p>
        {
            props.img === "/Videos/newyork.mp4"?
            <video width="100%" height="auto" 
            style={{borderRadius: '15px'}} controls >
                <source src={props.img} type="video/mp4"/>
            </video>:
            <img style={content_bubble_img} src={props.img} alt="img_bubble" />
        }
    </div>
)

export default ContentBubble