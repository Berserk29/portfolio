import styled from "styled-components";
import { movingDownText, movingUpText } from "../../helper/keyframe";

export const OverflowContainer = styled.div`
    position: absolute;
    width: 110vw;
    height: auto;
    transform: rotate(-10deg);
    z-index: 1;
    display: flex;
    flex-direction: column;
`

export const Text = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    animation: ${props => props.moveUp ? movingUpText : movingDownText}  60s linear infinite;
    user-select: none;
`

export const FlexCss = styled.div`
    display: flex;
    flex-direction: ${props => props.moveUp ? 'row-reverse' : 'row'};
    white-space: nowrap;
    gap: 0;
`

export const Circle = styled.div`
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    background-color: var(--color-primary);
`

export const CircleT = styled(Circle)`
    background-color: transparent;
    border: 1px solid var(--color-primary);
`