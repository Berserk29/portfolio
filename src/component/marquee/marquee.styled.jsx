import styled from "styled-components";

export const OverflowContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100vw;
    height: auto;
    transform: rotate(-10deg) translateY(-50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
`