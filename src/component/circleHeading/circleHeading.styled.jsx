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
   display: flex;
   align-items: center;
   justify-content: center;

   padding: 3.8rem 8rem 2.1rem 8rem;
   @media ${mediaQuery.styledTablet} {
        padding: 2.75rem 6.5rem 1.7rem 6.5rem;
   }
   @media ${mediaQuery.styledSmTablet} {
        padding: 2.6rem 5.4rem 1.4rem 5.4rem;
   }
   @media ${mediaQuery.styledMobile} {
        padding: 2.1rem 4.5rem 1.2rem 4.5rem;
   }
`