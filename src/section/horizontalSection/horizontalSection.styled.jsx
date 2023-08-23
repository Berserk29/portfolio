import styled from "styled-components";

export const Container = styled.section`
    height: 105vh;
    width: 100vw;
    /* width: 100rem; */

    background-color: ${props => props.color};
    font-size: 10rem;
    padding: 15rem;
`

export const StickyParent = styled.div`
    height: 400vh;
    /* height: 400rem; */
`

export const Sticky = styled.div`
    overflow: hidden;
    position: sticky;
    top: 0;
    height: 105vh;
`

export const ScrollSection = styled.section`
    position: absolute;
    top: 0;
    height: 100%;

    width: 400vw;
    /* width: 400rem; */

    will-change: transform;
    display: flex;
    justify-content: space-between;
`

export const TestImg = styled.img`
    width: 400px;
    height: 80%;
    object-fit: cover;
    object-position: center;
`