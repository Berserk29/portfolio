import { StarCss } from "./star.styled";
import starImg from '../../assets/image/star.png'

const Star = ({props}) => {
    const {width, top, bottom ,left, right, delay} = props;

    return (
        <StarCss
            src={starImg} 
            width={width} 
            top={top} 
            bottom={bottom}
            left={left} 
            right={right}
            delay={delay}
            alt="star_icon" 
        />
    )
}

export default Star;