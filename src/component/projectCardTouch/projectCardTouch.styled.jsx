import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const Container = styled.div`
    perspective: 1000px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.justify};
    gap: 2rem;
    z-index: 2;
    padding: 0 4rem;
    @media ${mediaQuery.styledSmTablet} {
        padding: 0 2rem;
    }
`

export const CardImg = styled.div`
    width: 100%;
    max-width: 70rem;
    aspect-ratio: 1.52 / 1;
    cursor: pointer;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextContainer = styled.div`
    display: flex;
    transition: transform .4s ease-out;
    width: 100%;
    max-width: 70rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3.2rem 0 2.6rem 0;
    border-top: 1px solid var(--color-cream);
    border-bottom: 1px solid var(--color-cream);
    @media ${mediaQuery.styledMobile} {
        padding: 2.2rem 0 1.6rem 0;
    }
`

export const FirstText = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: flex-end;
`