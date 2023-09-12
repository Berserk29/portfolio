import styled from "styled-components";
import { infiniteAniBackward, infiniteAniForward } from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";
import { khandBold } from "../typo/typo.styled";

export const OverflowContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100vw;
    height: auto;
    transform: rotate(-10deg) translateY(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
`

export const FlexContainer = styled.div`
    white-space: nowrap;
    height: auto;
    width: 120%;
    user-select: none;
    display: flex;
    flex-direction: ${ props => props.isForward ? 'row-reverse' : 'row'};
    overflow: hidden;
`

export const TextContainer = styled.div`
    display: flex;
    white-space: nowrap;
    align-items: center;
    animation: ${props => props.isForward ? infiniteAniForward : infiniteAniBackward} 80s linear infinite; 
`

export const Circle = styled.div`
    width: 4.6rem;
    aspect-ratio: 1 / 1;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    background-color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
       width: 4rem;
    }
    @media ${mediaQuery.styledSmTablet} {
       width: 3.25rem;
    }
    @media ${mediaQuery.styledMobile} {
       width: 2.3rem;
    }
`

export const CircleT = styled(Circle)`
    background-color: transparent;
    border: 1px solid var(--color-primary);
`

export const Headline1B = styled.h1`
    ${khandBold}
    font-size: 14rem;
    color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
        font-size: 12rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 10rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 7rem;
    }
`

export const Headline1T = styled(Headline1B)`
    ${khandBold}
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-primary);
`