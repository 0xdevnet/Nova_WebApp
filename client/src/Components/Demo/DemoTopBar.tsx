import { GiFreedomDove } from "react-icons/gi";
import { dtb_h1_style, dtb_span_style } from "./Styles";

const DemoTopBar = () => (
    <h1 style={dtb_h1_style}>
        <GiFreedomDove/>
        &nbsp;
        <span style={dtb_span_style}>
            Nova Demo
        </span>
    </h1>
)

export default DemoTopBar