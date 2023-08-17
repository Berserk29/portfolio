import styled, {keyframes} from "styled-components";

const loadingAnimation = keyframes`
    0%{
        opacity: 1;
        transform: scale(1);
    }
    40% , 60% {
        opacity: 1;
        transform: scale(.7);
    }
    80%  {
        opacity: 1;
        transform: scale(1); 
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
`

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: auto;
    background-color: ${props => props.color};
    font-size: 10rem;
    padding: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoadingImg = styled.img`
    opacity: 0;
    width: 96rem;
    height: auto;
    animation: ${loadingAnimation} 4s forwards;
    animation-delay: 1s;
    z-index: 1;
`