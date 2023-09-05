import styled from "styled-components";

export const CircleCss = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    background-color: ${props => props.color};
    border-radius: 50%;
`