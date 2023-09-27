import styled from "styled-components";

export const CircleContainer = styled.a`
    width: 4rem;
    height: 4rem;
    background-color: var(--color-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color .3s;
    :hover {
        background-color: var(--color-primary-hover);
    }
`

export const IconCss = styled.img`
    width: 2rem;
    height: 2rem;
`