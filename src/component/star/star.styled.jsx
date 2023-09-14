import styled from "styled-components"
import { starAni } from "../../helper/keyframe"
import mediaQuery from "../../helper/mediaQuery"

export const StarCss = styled.img`
    position: absolute;
    top: ${props => props.top || 'none'};
    bottom: ${props => props.bottom || 'none'};
    right: ${props => props.right || 'none'};
    left: ${props => props.left || 'none'};
    width: ${props => props.width}rem;
    height: auto;
    opacity: 1;
    animation: ${starAni} 6s infinite;
    animation-delay: ${props => props.delay}s;

    @media ${mediaQuery.styledTablet} {
        width: ${props => props.width * 0.78}rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        width: ${props => props.width * 0.62}rem;
    }
    @media ${mediaQuery.styledMobile} {
        width: ${props => props.width * 0.47}rem;
    }
`