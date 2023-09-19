import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;
    max-width: 1300px;
    padding: 10rem 0 16rem;
    @media ${mediaQuery.styledTablet} {
        flex-direction: column-reverse;
        padding: 8rem 0 12rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        padding: 7rem 0 8rem;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 5rem 0 6rem;
    }
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: auto;
    @media ${mediaQuery.styledTablet} {
        width: 70rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        width: 100%;
    }
`

export const TitleCss = styled.div`
    transition: transform .5s;
`
export const TextCss = styled(TitleCss)`
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--color-primary);
    padding-top: 7px;
    cursor: pointer;
    background-color: transparent;
    :last-child {
        border-bottom: 1px solid var(--color-primary);
    }
    &:hover ${TitleCss} {
        transform: translateX(3rem);
        @media ${mediaQuery.styledMobile} {
            transform: translateX(2rem);
        }
    }
    &:hover ${TextCss} {
        transform: translateX(-3rem);
        @media ${mediaQuery.styledMobile} {
            transform: translateX(-2rem);
        }
    }
`