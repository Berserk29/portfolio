import styled from "styled-components";
import { infiniteAniBackward, infiniteAniForward } from "../../helper/keyframe";
import { khandBold } from "../typo/typo.styled";

export const FlexContainer = styled.div`
    position: absolute;
    white-space: nowrap;
    height: auto;
    width: 100%;
    user-select: none;
    display: flex;
    flex-direction: ${ props => props.isForward ? 'row-reverse' : 'row'};
    overflow: hidden;
`

export const TextContainer = styled.div`
    display: flex;
    white-space: nowrap;
    align-items: center;
    animation: ${props => props.isForward ? infiniteAniForward : infiniteAniBackward} 35s linear infinite; 
`

export const Circle = styled.div`
    width: 4.6rem;
    height: 4.6rem;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid ${props => props.color || 'var(--color-cream)'};
`

export const GiantHeadline = styled.span`
    ${khandBold}
    font-size: 24.8rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.borderColor || 'var(--color-cream)'};
`