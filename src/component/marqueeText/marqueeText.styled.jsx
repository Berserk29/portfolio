import styled from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

export const FlexContainer = styled.div`
    position: relative;
    white-space: nowrap;
    width: 100%;
    user-select: none;
    height: 13rem;
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