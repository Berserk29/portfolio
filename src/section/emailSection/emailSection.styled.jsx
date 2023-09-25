import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const EmailContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5.8rem;
    padding: 14.7rem 8rem 16rem;
    background-color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
        padding: 12rem 3rem;
        gap: 5rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 4rem;
        gap: 3.5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6rem 3rem;
    }
`

export const TextContainer = styled.div`
    max-width: 56.5rem;
`