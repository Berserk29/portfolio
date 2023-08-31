import styled from "styled-components";
import { pictureAni, circleAni } from "../../helper/keyframe";


export const Container = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
`

export const AnimationContainer = styled.div`
    border-radius: 300px;
    height: 65vh;
    aspect-ratio: 1.65 / 1;
    background-color: transparent;
    box-shadow: var(--box-shadow-start);
    opacity: 0;
    animation: ${circleAni} 2s;
    animation-delay: 1.5s;
    /* TODO CHANGE ASPECT-RATIO WHEN MEDIA */
`

export const ContainerBelow = styled.header`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.changeColor ? 'var(--color-cream)' : 'var(--color-primary)' };
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

export const HeaderImg = styled.img`
    height: 65vh;
    aspect-ratio: 1.65 / 1;
    opacity: ${props => props.endAni ? 1 : 0};
    animation: ${pictureAni} 2s forwards;
    animation-delay: 1.5s;
    z-index: 2;
    cursor: pointer;
    /* TODO CHANGE ASPECT-RATIO WHEN MEDIA */
`



