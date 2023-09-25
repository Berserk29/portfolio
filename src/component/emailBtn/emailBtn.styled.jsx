import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";
import { teko } from "../typo/typo.styled";

export const BtnContainer = styled.div`
    ${teko}
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.3rem;
    padding: 2.8rem 4.8rem 2.4rem; 
    border-radius: 108px;
    background-color: var(--color-primary);
    border: 1px solid var(--color-cream);
    color: var(--color-cream);
    transition: background-color .4s, border .4s, color .4s;
    cursor: pointer;
    font-weight: 500;
    font-size: 2.8rem;
    text-transform: uppercase;
    line-height: .84;
    :hover{
        background-color: var(--color-cream);
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
    }
    @media ${mediaQuery.styledTablet} {
        margin-top: 1.1rem;
        font-size: 2.4rem;
        padding: 2.6rem 4.4rem 2.2rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        margin-top: .95rem;
        font-size: 2.2rem;
        padding: 2.2rem 4.0rem 1.8rem;
    }
    @media ${mediaQuery.styledMobile} {
        margin-top: .75rem;
        font-size: 2rem;
        padding: 2rem 3.6rem 1.6rem;
    }
`
