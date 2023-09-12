import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const ProjectContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8.6rem;
    padding: 14.5rem 0 16rem 0;
    background-color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
        padding: 12rem 0;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 0;
        gap: 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6rem 0;
    }
`

export const CardContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12rem;
    @media ${mediaQuery.styledMobile} {
        gap: 8rem;
    }
`