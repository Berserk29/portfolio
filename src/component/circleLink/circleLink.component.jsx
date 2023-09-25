import { CircleContainer, IconCss } from "./circleLink.styled";

const CircleLink = ({props}) => {
    const {image, link} = props;

    return ( 
        <CircleContainer href={link} target="_blank">
            <IconCss src={image} alt="logo"/>
        </CircleContainer> 
    )
}

export default CircleLink;