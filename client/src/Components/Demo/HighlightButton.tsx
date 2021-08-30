import { highlights_button_style } from "./Styles"

const HighlightButton = (props: { url: string; type: string; }) => (
    
    <button style={highlights_button_style(props.url)}> 
        {props.type} 
    </button>
)

export default HighlightButton