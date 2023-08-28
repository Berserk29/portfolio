import styled from "styled-components";

export const FlexContainer = styled.div`
    position: relative;
    white-space: nowrap;
    height: 13rem;
    width: 211rem;
    user-select: none;
`

export const TextContainer = styled.div`
    position: absolute;
    display: flex;
    white-space: nowrap;
    align-items: center;
`

export const Circle = styled.div`
    width: 4.6rem;
    height: 4.6rem;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    background-color: var(--color-primary);
`

export const CircleT = styled(Circle)`
    background-color: transparent;
    border: 1px solid var(--color-primary);
`