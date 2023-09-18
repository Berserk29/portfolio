import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: var(--color-cream);
    padding: 4rem 4rem 16rem 4rem;
    gap: 8rem;
    @media ${mediaQuery.styledTablet} {
        padding: 2rem 3rem 12rem 3rem;
        gap: 6rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 0rem 3rem 8rem 3rem;
        gap: 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 0 2rem 6rem 2rem;
        gap: 4rem;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media ${mediaQuery.styledTablet} {
        max-width: 70rem;
        gap: 3rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        gap: 2.5rem;
    }
`