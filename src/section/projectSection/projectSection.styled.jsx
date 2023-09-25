import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.1rem;
    padding: 14.7rem 0 16rem 0;
    background-color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
        padding: 12rem 0;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 0;
        gap: 6rem;
    }
    @media ${mediaQuery.styledMobile} {
        gap: 4rem;
        padding: 6rem 0;
    }
`

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8.3rem;
    @media ${mediaQuery.styledMobile} {
        gap: 7rem;
    }
`