import { CircleCss } from "./circle.styled";

const Circle = ({props}) => {
    const {size, color} = props;

    return ( 
        <CircleCss size={size} color={color}/> 
    )
}

export default Circle;