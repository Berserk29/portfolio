import styled, {css} from "styled-components";
import { opacityAni } from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

const cssButton = css`
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 10px;
    font-size: 2rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-transform: uppercase;
    @media ${mediaQuery.styledTablet} {
        width: 4rem;
        height: 4rem;
        font-size: 1.8rem;
        border-radius: 7px;
    }
    @media ${mediaQuery.styledMobile} {
        width: 3.2rem;
        height: 3.2rem;
        font-size: 1.6rem;
    }
`

export const ButtonContainer = styled.div`
    z-index: 10;
    position: absolute;
    top: 5vh;
    right: 5vw;
    display: flex;
    flex-direction: column;
    opacity: 0; 
    animation: ${opacityAni} .8s ease 3.4s forwards;
    @media ${mediaQuery.styledTablet} {
        top: 6vh;
    }
`

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition: all .3s;
    margin-top: 1rem;
`

export const ButtonCss = styled.button`
    ${cssButton}
    background-color: var(--color-primary);
    border: 1.5px solid var(--color-cream);
    color: var(--color-cream);
    transition: background-color .3s;
    :hover {
        background-color: var(--color-primary-hover);
    }
    @media ${mediaQuery.styledTablet} {
        border: 1.5px solid var(--color-primary);
    }
`

export const ButtonCssActive = styled.button`
    ${cssButton}
    background-color: var(--color-cream);
    border: 1.5px solid var(--color-primary);
    color: var(--color-primary);
`