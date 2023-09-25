import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 6.2rem 14.5rem;
    background-color: var(--color-cream);
    @media ${mediaQuery.styledTablet} {
        padding: 5rem 8rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 5rem;
    }
    @media ${mediaQuery.styledMobile} {
        align-items: center;
        gap: 3rem;
        flex-direction: column;
        padding: 4rem;
    }
`

export const LinkContainer = styled.div`
    display: flex;
    gap: 4rem;
    margin-bottom: .8rem;
    @media ${mediaQuery.styledMobile} {
        width: 100%;
        max-width: 40rem;
        justify-content: center;
        margin-bottom: 0;
        gap: 3.5rem;
    }
`

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    gap: 1.6rem;
    width: 35.2rem;
    @media ${mediaQuery.styledTablet} {
        width: 9.6rem;
    }
`

export const ResumeLink = styled.a`
    text-decoration: none;
`