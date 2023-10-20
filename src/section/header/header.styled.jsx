import styled, {css} from "styled-components";
import { pictureAni, circleAni, circleAniMobile, purpleAni, opaAni } from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

// CSS
const sameCss = css`
    border-radius: 300px;
    height: 52rem;
    max-height: 65vh;
    aspect-ratio: 1.58 / 1;
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
    animation: ${props => props.startAnimation ? css`${circleAni} 2s .75s forwards` : 'none' };
    @media ${mediaQuery.styledMobile} {
        box-shadow: var(--box-shadow-start-mobile);
        animation: ${props => props.startAnimation ? css`${circleAniMobile} 2s .75s forwards` : 'none' };
    }
`

export const ContainerBelow = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    animation: ${props => props.startAnimation ? css`${purpleAni} .1s 1.3s forwards` : 'none' };
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const HeaderImg = styled.img`
    ${sameCss}
    opacity: 0;
    animation: ${props => props.startAnimation ? css`${pictureAni} 2s .75s forwards, ${opaAni} .1s .75s forwards` : 'none' };
    z-index: 2;
    cursor: pointer;
    object-fit: cover;
    object-position: center;
`



