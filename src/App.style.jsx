import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.color};
    font-size: 10rem;
    padding: 15rem;
`

export const TestImg = styled.img`
    width: 400px;
    height: 80%;
    object-fit: cover;
    object-position: center;
`

export const StickyParent = styled.div`
    height: 400vh;
`

export const Sticky = styled.div`
    overflow: hidden;
    position: sticky;
    top: 0;
    height: 100vh;
`

export const ScrollSection = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 400vw;
    will-change: transform;
    display: flex;
    justify-content: space-between;
`