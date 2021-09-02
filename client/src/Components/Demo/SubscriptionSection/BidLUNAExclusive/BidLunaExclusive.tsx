import { 
    subscribe_button_container, 
    subscribe_button_style, 
    subscribe_container 
} from "../../Styles"


const BidLunaExclusive = () => {

    return (
        <div style={subscribe_container}>
            <div style={{margin: '0', padding: '0 10%'}}>
                <h4 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 3] Buy Jane's most exclusive content with LUNA</h4>
            </div>
            <div style={subscribe_button_container}>

                <button style={{
                  ...subscribe_button_style, background: '#FBDB48', color: 'white', width: '80%'
                }}>Latest Bids</button>

            </div>
        </div>
    )
}

export default BidLunaExclusive