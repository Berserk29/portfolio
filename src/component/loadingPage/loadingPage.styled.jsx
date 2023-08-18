import styled from "styled-components";
import { pictureAni, circleAni } from "../../helper/keyframe";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const AnimationContainer = styled.div`
    border-radius: 300px;
    width: 95.8rem;
    height: 52.8rem;
    background-color: transparent;
    box-shadow: var(--box-shadow-start);
    opacity: 0;
    animation: ${circleAni} 2s;
    animation-delay: 1.5s;
`

export const ContainerBelow = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-color: ${props => props.changeColor ? 'var(--color-cream)' : 'var(--color-primary)' };
    font-size: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const HeaderImg = styled.img`
    width: 96rem;
    height: 53rem;
    opacity: ${props => props.endAni ? 1 : 0};
    animation: ${pictureAni} 2s forwards;
    animation-delay: 1.5s;
    z-index: 2;
`

export const NameContainer = styled.div`
    position: absolute;
    top: 5vh;
    left: 50%;
    transform: translate(-50%);
`