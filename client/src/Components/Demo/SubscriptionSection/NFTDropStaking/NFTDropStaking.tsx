import { subscribe_container, subscribe_button_container, subscribe_button_style } from "../../Styles"

const NFTDropStaking = () => {

    return (
        <div style={subscribe_container}>
            <div style={{margin: '0', padding: '0 10%'}}>
                <h4 style={{margin: '0 0 5px 0', padding: '0'}}>[Lvl 2] Stake NOVA for a chance to win NFT drops</h4>
                <h6 style={{margin: '0 0 15px 0', padding: '0', color: 'grey'}}>Next drop in: 3 days</h6>
            </div>
            <div style={subscribe_button_container}>

                <button style={{
                  ...subscribe_button_style, background: '#Ff6961', color: 'white', width: '80%'
                }}>Coming Soon</button>

            </div>
        </div>
    )
}

export default NFTDropStaking