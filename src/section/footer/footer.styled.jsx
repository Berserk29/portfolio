import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 6.2rem 14.5rem;
    color: var(--color-cream);
    @media ${mediaQuery.styledTablet} {
        padding: 5rem 8rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        justify-content: center;
        align-items: center;
        padding: 4rem;
    }
`

export const LinkContainer = styled.div`
    display: flex;
    gap: 4rem;
    margin-bottom: .8rem;
    @media ${mediaQuery.styledSmTablet} {
        width: 100%;
        max-width: 40rem;
        justify-content: space-between;
        margin-bottom: 0;
        margin-top: .8rem;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    gap: 2rem;
    width: 35.2rem;
    @media ${mediaQuery.styledSmTablet} {
        justify-content: center;
    }
`

export const ResumeLink = styled.a`
    text-decoration: none;
`