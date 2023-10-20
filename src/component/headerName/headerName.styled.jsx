import styled, {css} from "styled-components";
import { letterAni, nameAnimation, letterCircleAni} from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

const animationCss = (translate, size) => css`
    animation: ${props => props.startAnimation ? css`${nameAnimation(translate, size)} 0.5s 2.1s forwards` : 'none'};
`;

export const NameContainer = styled.div`
    position: absolute;
    width: 18.9rem;
    top: var(--top-pc);
    left: 50%;
    z-index: 10;
    transform: translate(-50%, 42vh) scale(1.3); 
    animation: ${props => props.startAnimation ? css`${nameAnimation} 0.5s 2.1s forwards` : 'none'};
    @media ${mediaQuery.styledTablet} {
        top: var(--top-tablet);
        width: 15.7rem;
        transform: translate(-50%, 40vh) scale(1.2);
        ${animationCss('40vh', 1.2)}
    }
    @media ${mediaQuery.styledSmTablet} {
        top: var(--top-smTablet);
        transform: translate(-50%, 38vh) scale(0.8);
        ${animationCss('38vh', 0.8)}
    }
    @media ${mediaQuery.styledMobile} {
        top: var(--top-mobile);
        transform: translate(-50%, 36vh) scale(0.8);
        ${animationCss('36vh', 0.8)}
    }
`

export const RelativeSection = styled.div`
    display: flex;
    overflow: hidden;
`

export const LetterSpan = styled.span`
    font-family: 'Teko', sans-serif;
    font-weight: 700;
    font-size: 6.2rem;
    line-height: 110%;
    color: white;
    text-transform: uppercase;
    transform: translateY(100%);
    animation: ${ props => props.startAnimation ? css`${letterAni} 1.6s .9s forwards ${props => props.cubic}` : 'none' };
    :first-child{
        padding-left: .8rem;
    }
    @media ${mediaQuery.styledTablet} {
        font-size: 5rem;
    }
`

export const LetterSpanAfter = styled(LetterSpan)`
    position: relative;
    padding-right: 1.6rem;
    &::after {
        content: "";
        top: 8px;
        right: 0px;
        position: absolute;
        width: 1.42rem;
        height: 1.42rem;
        border-radius: 50%;
        background-color: white;
        animation: ${ props => props.startAnimation ? css`${letterCircleAni} .4s 2.2s forwards` : 'none' };
    }
`
