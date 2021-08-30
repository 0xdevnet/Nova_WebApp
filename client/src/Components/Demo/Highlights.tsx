import HighlightButton from "./HighlightButton"
import { highlights_container_style } from "./Styles"

const button_url_one: string = "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
const button_url_two: string = "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
const button_url_thr: string = "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

const Highlights = () => {

    return (
        <div style={highlights_container_style}>
          <HighlightButton url={button_url_one} type="Story"/>
          <HighlightButton url={button_url_two} type="Portraits"/>
          <HighlightButton url={button_url_thr} type="Food"/>
        </div>
    )
}

export default Highlights