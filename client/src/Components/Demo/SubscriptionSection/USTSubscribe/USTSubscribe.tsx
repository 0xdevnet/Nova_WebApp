import { subscribe_container } from '../../Styles';
import USTSubscribeButtons from './USTSubscribeButtons';
import USTSubscribeDescription from './USTSubscribeDescription';

const USTSubscribe = () => {

    return (
        <div style={subscribe_container}>
            <USTSubscribeDescription/>
            <USTSubscribeButtons/>
        </div>
    )
}

export default USTSubscribe