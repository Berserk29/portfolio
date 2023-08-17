import styled, {keyframes} from "styled-components";
import { movingDownText, movingUpText } from "../../helper/keyframe";

export const OverflowContainer = styled.div`
    position: absolute;
    width: 120%;
    height: auto;
    overflow: hidden;
    transform: rotate(-10deg);
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 0;
`

export const Text = styled.p`
    display: inline-block;
    white-space: nowrap;
    font-size: 16rem;
    animation: ${props => props.moveUp ? movingUpText : movingDownText}  25s linear infinite;
`

export const FlexCss = styled.div`
    display: flex;
    flex-direction: ${props => props.moveUp ? 'row-reverse' : 'row'};
    white-space: nowrap;
`