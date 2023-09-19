import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: ${props => props.justify};
    align-items: center;
    width: 100%;
`

export const Container = styled.div`
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    z-index: 2;
`

export const CardContainer = styled.div`
    transform-style: preserve-3d;
    width: 104.8rem;
    height: 60rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardImg = styled.div`
    width: 76rem;
    height: 49.8rem;
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
    width: 76rem;
    justify-content: space-between;
    align-items: flex-end;
    padding: 3.2rem 0rem 2.6rem 0rem;
    margin: 0 14.4rem;
    border-top: 1px solid var(--color-cream);
    border-bottom: 1px solid var(--color-cream);
`

export const FirstText = styled.div`
    display: flex;
    gap: 1.4rem;
    align-items: flex-end;
`

export const ArrowImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    transition: filter .6s ease-out;
`

export const BtnContainer = styled.a`
    transition: opacity .3s ease-out, background-color .6s ease-out;
    opacity: 0;
    background-color: var(--color-primary);
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: var(--color-cream);

        ${ArrowImg}{
            filter: var(--filter-primary)
        }
    }
`