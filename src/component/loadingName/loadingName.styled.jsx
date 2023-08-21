import styled from "styled-components";
import { letterAni, nameContainerAni, letterCircleAni } from "../../helper/keyframe";

export const NameContainer = styled.div`
    position: absolute;
    top: 5vh;
    left: 50%;
    z-index: 3;
    transform: translateY(42vh) translateX(-50%) scale(1.5);
    animation: ${nameContainerAni} .5s forwards;
    animation-delay: 2.9s;
`

export const RelativeSection = styled.div`
    display: flex;
    overflow: hidden;
`

export const LetterSpan = styled.span`
    font-family: 'New York';
    font-weight: 700;
    font-size: 6.2rem;
    color: white;
    text-transform: uppercase;
    transform: translateY(100%);
    animation: ${letterAni} 1.6s forwards ${props => props.cubic};
    animation-delay: 1.8s;
`

export const LetterSpanAfter = styled(LetterSpan)`
    position: relative;
    padding-right: 1.1rem;
    &::after {
        content: "";
        top: 7.5px;
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
