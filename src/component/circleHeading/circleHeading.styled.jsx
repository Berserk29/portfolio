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

     padding: 1.9rem 8rem;
   @media ${mediaQuery.styledTablet} {
        padding: 1.55rem 6.5rem
   }
   @media ${mediaQuery.styledSmTablet} {
        padding: 1.3rem 5.4rem;
   }
   @media ${mediaQuery.styledMobile} {
        padding: 1.05rem 4.5rem;
   }
`