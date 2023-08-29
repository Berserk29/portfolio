import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    width: 100%;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    width: auto;
    height: auto;
`

export const CardImg = styled.img`
    width: 83.2rem;
    height: 54.5rem;
    cursor: pointer;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    
`

export const TextContainer = styled.div`
    display: flex;
    width: 83.2rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3.2rem 0 2.6rem 0;
    border-top: 1px solid var(--color-cream);
    border-bottom: 1px solid var(--color-cream);
`

export const FirstText = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: flex-end;
`