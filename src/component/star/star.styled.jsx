import styled from "styled-components"
import { starAni } from "../../helper/keyframe"

export const StarCss = styled.img`
    position: absolute;
    top: ${props => props.top || 'none'};
    bottom: ${props => props.bottom || 'none'};
    right: ${props => props.right || 'none'};
    left: ${props => props.left || 'none'};
    width: ${props => props.width};
    height: auto;
    opacity: 1;
    animation: ${starAni} 6s infinite;
    animation-delay: ${props => props.delay}s;
`