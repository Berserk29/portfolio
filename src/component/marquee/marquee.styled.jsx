import styled from "styled-components";

export const OverflowContainer = styled.section`
    position: absolute;
    width: 100vw;
    height: auto;
    /* transform: rotate(-10deg); */
    z-index: 1;
    display: flex;
    flex-direction: column;
`

export const FlexContainer = styled.div`
    /* display: flex; */
    /* align-items: center; */
    position: relative;
    white-space: nowrap;
`

export const TextContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
`


// To see
export const FlexCss = styled.div`
    display: flex;
    flex-direction: ${props => props.moveUp ? 'row-reverse' : 'row'};
    white-space: nowrap;
    gap: 0;
`

export const Circle = styled.div`
    width: 4.6rem;
    height: 4.6rem;
    border-radius: 50%;
    background-color: var(--color-primary);
`

export const CircleT = styled(Circle)`
    background-color: transparent;
    border: 1px solid var(--color-primary);
`