import styled from "styled-components";

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 6rem;
    padding: 3rem 16rem;
    background-color: ${props => props.isPrimaryColor ? 'var(--color-primary)' : 'var(--color-cream)'};
    border: 1px solid ${props => props.isPrimaryColor ? 'var(--color-cream)' : 'var(--color-primary)'};
    transition: background-color .3s, border .3s;
    cursor: pointer;
    :hover{
        background-color: ${ props => props.isPrimaryColor ? 'var(--color-primary-hover)' : 'var(--color-primary)'};
        border: 1px solid var(--color-cream);
    }
`
