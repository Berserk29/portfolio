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

export const nameAnimation = (translate = '42vh' , scale = 1.3) => keyframes`
    0% { 
        transform: translate(-50%, translate) scale(scale);
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
    62.5%, 73%{
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

export const infiniteAniBackward = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(-100%);}
`

export const infiniteAniForward = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(100%);}
`

export const opacityAni = keyframes`
    from {opacity: 0;}
    to {opacity: 1;}
`

export const purpleAni = keyframes`
    100% { background-color: var(--color-cream);}
`

export const opaAni = keyframes`
    100% { opacity: 1 }
`

