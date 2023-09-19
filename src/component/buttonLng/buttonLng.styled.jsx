import styled, {css} from "styled-components";
import { opacityAni } from "../../helper/keyframe";
import mediaQuery from "../../helper/mediaQuery";

const cssButton = css`
    width: 7.6rem;
    height: 6rem;
    border-radius: 33px;
    font-size: 2.8rem;
    font-weight: 500;
    padding-top: 3px;
    margin-top: 4px;
    font-family: 'Teko';
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-transform: uppercase;
    @media ${mediaQuery.styledTablet} {
        width: 6rem;
        height: 4.8rem;
        font-size: 2.25rem;
    }
`

export const ButtonContainer = styled.div`
    z-index: 10;
    position: absolute;
    top: var(--top-pc);
    right: 5vw;
    display: flex;
    flex-direction: column;
    opacity: 0; 
    animation: ${opacityAni} .8s ease 3.4s forwards;
    @media ${mediaQuery.styledTablet} {
        top: var(--top-tablet);
    }
    @media ${mediaQuery.styledSmTablet} {
        top: var(--top-smTablet);
    }
    @media ${mediaQuery.styledMobile} {
        top: var(--top-mobile);
    }
`

export const LowerContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    transition: all .3s;
    margin-top: 1rem;
`

export const ButtonCssActive = styled.button`
    ${cssButton}
    background-color: var(--color-primary);
    border: 1.5px solid var(--color-cream);
    color: var(--color-cream);
`

export const ButtonCss = styled(ButtonCssActive)`
    ${cssButton}
    transition: background-color .3s;
    :hover {
        background-color: var(--color-primary-hover);
    }
    @media ${mediaQuery.styledTablet} {
        border: 1.5px solid var(--color-primary);
    }
`