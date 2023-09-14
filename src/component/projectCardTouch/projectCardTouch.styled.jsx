import styled, {css} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

const cardCss = css`
    width: 100%;
    max-width: 70rem;
    aspect-ratio: 1.52 / 1;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: transform 1s ease;
    -webkit-tap-highlight-color: transparent;
`

export const CardImg = styled.div`
    ${cardCss}
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
`

export const BackCard = styled.div`
    ${cardCss}
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    background-image: ${ props => props.justify === 'flex-start' ? 'var(--bg-gradiant-card-1)' : 'var(--bg-gradiant-card-2)'} ;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2), 0px 0px 50px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
`

export const CardContainer = styled.div`
    ${cardCss}
    cursor: pointer;
    position: relative;
    perspective: 200rem;
    transform-style: preserve-3d;
    margin: 0 5rem;
    @media ${mediaQuery.styledSmTablet} {
        margin: 0;
    }
`

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.justify};
    justify-content: center;
    gap: 2rem;
    z-index: 2;
    @media ${mediaQuery.styledSmTablet} {
        align-items: center;
        padding: 0 1.5rem;
    }
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
    margin: 0 5rem;
    @media ${mediaQuery.styledSmTablet} {
        margin: 0;
    }
    @media ${mediaQuery.styledMobile} {
        padding: 2.2rem 0 1.6rem 0;
    }
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
    filter: ${ props => props.justify === 'flex-start' ? 'var(--filter-primary)' : 'var(--filter-cream)'};
    @media ${mediaQuery.styledMobile} {
        width: 2rem;
        height: 2rem;
    }
`

export const BtnContainer = styled.a`
    background-color: ${ props => props.justify === 'flex-start' ? 'var(--color-cream)' : 'var(--color-primary)' };
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    transition: background-color .6s ease-out;
    :hover {
        background-color: ${ props => props.justify === 'flex-start' ? 'var(--color-primary)' : 'var(--color-cream)'};
        ${ArrowImg}{
            filter: ${ props => props.justify === 'flex-start' ?  'var(--filter-cream)' : 'var(--filter-primary)'};
        }
    }
    @media ${mediaQuery.styledMobile} {
        width: 6.5rem;
        height: 6.5rem;
    }
`