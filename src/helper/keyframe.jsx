import { keyframes } from "styled-components";

export const movingUpText = keyframes`
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(100%,0);
    }
`

export const movingDownText = keyframes`
    from{
        transform: translate(0,0);
    }
    to{
        transform: translate(-100%,0);
    }
`

export const pictureAni = keyframes`
    0% {
        opacity: 0;
        transform: scale(1);
    }
    60%, 70% {
        opacity: 1;
        transform: scale(.6);
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
    60%, 70% {
        box-shadow: var(--box-shadow-full);
        opacity: 1;
        transform: scale(.6);
    }
    100% {
        box-shadow: var(--box-shadow-full);
        opacity: 1;
        transform: scale(3);
    }
`