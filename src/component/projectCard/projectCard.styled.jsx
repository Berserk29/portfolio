import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    width: 100%;
    overflow: hidden;
`

export const Container = styled.div`
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    z-index: 2;
`


export const CardContainer = styled.div`
    transform-style: preserve-3d;
    width: 100rem;
    height: 66rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImg = styled.div`
    width: 83.2rem;
    height: 54.5rem;
    cursor: pointer;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    transition: transform .4s ease-out;
    width: 83.2rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3.2rem 0rem 2.6rem 0rem;
    margin: 0 8.3rem;
    border-top: 1px solid var(--color-cream);
    border-bottom: 1px solid var(--color-cream);
`

export const FirstText = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: flex-end;
    transform: translateZ(100px);
`

// TESTING

export const BtnContainer = styled.div`
    position: absolute;
    transition: transform .4s ease, opacity .2s ease-out, background-color .8s ease-out;
    transform: translate(-50%, -50%);
    opacity: 0;
    top: 50%;
    left: 50%;
    background-color: var(--color-primary);
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: azure;
    }
`