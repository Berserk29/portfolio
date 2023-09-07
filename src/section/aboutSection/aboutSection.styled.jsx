import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const AboutContainer = styled.section`
    display: flex;
    align-items: center;
    text-align: center;
    gap: 8rem;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: var(--color-cream);
    padding: 6rem 4rem 16rem 4rem;
    @media ${mediaQuery.styledSmTablet} {
        padding: 6rem 2rem 8rem 2rem;
        gap: 7rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 5rem;
        padding: 0 2rem 6rem 2rem;
    }
`

export const TextContainer = styled.div`
    width: 100%;
    max-width: 99.4rem;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    @media ${mediaQuery.styledMobile} {
        gap: 2.5rem;
    }
`