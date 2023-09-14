import styled, {css} from "styled-components";
import { pictureAni, circleAni, circleAniMobile } from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

// CSS
const sameCss = css`
    border-radius: 300px;
    height: 50rem;
    max-height: 65vh;
    aspect-ratio: 1.65 / 1;
    @media ${mediaQuery.styledTablet} {
        aspect-ratio: 1.25 / 1;
        height: 45rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        height: 38rem;
    }
    @media ${mediaQuery.styledMobile} {
        height: 28rem;
    }
` 

//  Styled component
export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const AnimationContainer = styled.div`
    ${sameCss}
    background-color: transparent;
    box-shadow: var(--box-shadow-start);
    opacity: 0;
    animation: ${circleAni} 2s 1.5s;
    @media ${mediaQuery.styledMobile} {
        box-shadow: var(--box-shadow-start-mobile);
        animation: ${circleAniMobile} 2s 1.5s;
    }
`

export const ContainerBelow = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.changeColor ? 'var(--color-cream)' : 'var(--color-primary)' };
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const HeaderImg = styled.img`
    ${sameCss}
    opacity: ${props => props.endAni ? 1 : 0};
    animation: ${pictureAni} 2s forwards;
    animation-delay: 1.5s;
    z-index: 2;
    cursor: pointer;
    object-fit: cover;
    object-position: center;
`



