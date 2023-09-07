import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background-color: transparent;
`

export const TitleContainer = styled.div`
   border-radius: 300px;
   background-color: var(--color-primary);
   padding: 4.4rem 7.2rem 2.6rem 7.2rem;
   margin: 8.8rem 9.3rem 0 7.6rem;
   display: flex;
   align-items: center;
   justify-content: center;
   @media ${mediaQuery.styledSmTablet} {
        padding: 3rem 5rem 2rem 5rem;
        margin: 8rem 6rem 0 4.8rem;
   }
   @media ${mediaQuery.styledMobile} {
        padding: 2.5rem 4rem 1.5rem 4rem;
        margin: 6rem 3.2rem 0 3.2rem;
   }
`