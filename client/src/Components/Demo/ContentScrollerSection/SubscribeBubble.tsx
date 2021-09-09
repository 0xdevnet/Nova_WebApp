import { 
    subscribe_button_container, 
    subscribe_top 
} from "../Styles"

const SubscribeBubble = () => (
    <div style={{...subscribe_button_container, height: '15%'}}>
        <div style={subscribe_top}>Subscribe to see the contents</div>
    </div>
)

export default SubscribeBubble