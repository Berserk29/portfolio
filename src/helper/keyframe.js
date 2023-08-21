import { keyframes } from "styled-components";

export const movingUpText = keyframes`
    from{ transform: translate(0,0); }
    to{ transform: translate(100%,0); }
`

export const movingDownText = keyframes`
    from{ transform: translate(0,0); }
    to{ transform: translate(-100%,0); }
`

export const pictureAni = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    35%, 70% {
        opacity: 1;
        transform: scale(.75);
    }
    100% { 
        opacity: 1;
        transform: scale(1);
    }
`

export const circleAni = keyframes`
    0% {
        opacity: 0;
        box-shadow: var(--box-shadow-start);
        transform: scale(1);
    }
    35%, 70% {
        box-shadow: var(--box-shadow-full);
        opacity: 1;
        transform: scale(.75);
    }
    100% {
        box-shadow: var(--box-shadow-full);
        opacity: 1;
        transform: scale(3);
    }
`
export const nameContainerAni = keyframes`
    0% {
        transform: translateY(42vh) translateX(-50%) scale(1.5);
    }
    100% {
        transform: translateY(0) translate(-50%) scale(1);
    }
`

export const letterAni = keyframes`
    0% {
        color: white;
        transform: translateY(100%)
    }
    62.5%, 68.75%{
        color: white;
        transform: translateY(0);
    }
    90%, 100% {
        color: var(--color-primary);
        transform: translateY(0);
    }
`

export const letterCircleAni = keyframes`
    from { background-color: white; }
    to { background-color: var(--color-primary); }
`