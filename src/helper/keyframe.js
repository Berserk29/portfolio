import { keyframes } from "styled-components";
import mediaQuery from "./mediaQuery";

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

export const circleAniMobile = keyframes`
    0% {
        opacity: 0;
        box-shadow: var(--box-shadow-start-mobile);
        transform: scale(1);
    }
    35%, 70% {
        box-shadow: var(--box-shadow-full-mobile);
        opacity: 1;
        transform: scale(.75);
    }
    100% {
        box-shadow: var(--box-shadow-full-mobile);
        opacity: 1;
        transform: scale(3);
    }
`

export const nameContainerAni = (scale = 1.4) => keyframes`
    0% {
        transform: translate(-50%, 42vh) scale(scale);
    }
    100% {
        transform: translate(-50%, 0) scale(1);
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

export const starAni = keyframes`
    0%, 10% { opacity: 1}
    15% { opacity: 0.5 }
    25%,40% { opacity: 1 }
    45% { opacity: 0.3 }
    55%,80% { opacity: 1 }
    85% { opacity: 0.2 }
    90%,100% {opacity: 1}
`

export const infiniteAniBackward = keyframes`
    from {transform: translateX(0)}
    to {transform: translateX(-100%)}
`

export const infiniteAniForward = keyframes`
    from {transform: translateX(0)}
    to {transform: translateX(100%)}
`