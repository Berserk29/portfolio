import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    width: 100%;
    max-width: 53.5rem;
    padding: 2.8rem 0;
    background-color: ${props => props.isPrimaryColor ? 'var(--color-primary)' : 'var(--color-cream)'};
    border: 1px solid ${props => props.isPrimaryColor ? 'var(--color-cream)' : 'var(--color-primary)'};
    transition: background-color .3s, border .3s;
    cursor: pointer;
    :hover{
        background-color: ${ props => props.isPrimaryColor ? 'var(--color-primary-hover)' : 'var(--color-primary)'};
        border: 1px solid var(--color-cream);
    }
    @media ${mediaQuery.styledSmTablet} {
        margin-top: 3rem;
        max-width: 40rem;
    }
    @media ${mediaQuery.styledMobile} {
        margin-top: 1rem;
    }
`
