import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const SkillContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    padding: 14.5rem 14rem 16rem 14rem;
    background-color: var(--color-cream);
    width: 100%;
    height: auto;
    @media ${mediaQuery.styledSmTablet} {
        padding: 8rem 0;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 6rem 0;
    }
`