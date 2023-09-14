import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const SkillContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14.5rem 2.5rem 0 2.5rem;
    background-color: var(--color-cream);
    width: 100%;
    height: auto;
    @media ${mediaQuery.styledTablet} {
        padding: 12rem 0 0 0;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 3rem 0 3rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6rem 2rem 0 2rem;
    }
`