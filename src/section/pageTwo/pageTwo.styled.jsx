import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: var(--color-primary);
    padding: 5rem 8rem 15rem 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
`

export const NumberContainer = styled.div`
    background: var(--bg-gradiant-1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 35rem;
    width: 100%;   
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify};
    transition: filter 1.5s;
    transform: ${ props => props.isTransform ? 'translateY(-100px)' : 'none'};
    filter: ${ props => props.isFilter ? 'blur(8px) brightness(70%)' : 'none'}; 
`