import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    overflow: auto;
    background-color: ${props => props.color};
    font-size: 10rem;
    padding: 15rem;
`