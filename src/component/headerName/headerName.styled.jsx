import styled from "styled-components";
import { letterAni, nameAnimation, letterCircleAni} from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

export const NameContainer = styled.div`
    position: absolute;
    width: 18.9rem;
    top: 5%;
    left: 50%;
    z-index: 10;
    transform: translate(-50%, 42vh) scale(1.3); 
    animation: ${nameAnimation} .5s forwards 2.9s;
    @media ${mediaQuery.styledTablet} {
        width: 15.7rem;
        transform: translate(-50%, 42vh) scale(1.2);
        animation: ${nameAnimation(1.2)} .5s forwards 2.9s;
    }
    @media ${mediaQuery.styledSmTablet} {
        transform: translate(-50%, 42vh) scale(0.8);
        animation: ${nameAnimation(0.8)} .5s forwards 2.9s;
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
    animation: ${letterAni} 1.6s forwards ${props => props.cubic};
    animation-delay: 1.8s;
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
        animation: ${letterCircleAni} .4s forwards;
        animation-delay: 2.9s;
    }
`
