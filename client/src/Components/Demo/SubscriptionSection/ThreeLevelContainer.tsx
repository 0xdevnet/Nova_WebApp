import USTSubscribe from './USTSubscribe/USTSubscribe';
import NFTDropStaking from './NFTDropStaking/NFTDropStaking';
import BidLunaExclusive from './BidLUNAExclusive/BidLunaExclusive';
import { subscription_container } from '../Styles';

const ThreeLevelContainer = () => {

    return (
        <div style={subscription_container}>
            <USTSubscribe/>
            <NFTDropStaking/>
            <BidLunaExclusive/>
        </div>
    )
}

export default ThreeLevelContainer