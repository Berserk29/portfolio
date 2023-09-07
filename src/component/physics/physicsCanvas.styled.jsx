import styled from "styled-components";

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 12.5rem;
    align-items: center;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60rem;
    height: auto;
`

export const TitleCss = styled.div`
    transition: transform .5s;
`
export const TextCss = styled(TitleCss)`
`

export const TextContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--color-primary);
    padding-top: 7px;
    cursor: pointer;
    background-color: transparent;
    :last-child {
        border-bottom: 1px solid var(--color-primary);
    }
    &:hover ${TitleCss} {
        transform: translateX(6rem);
    }
    &:hover ${TextCss} {
        transform: translateX(-6rem);
    }
`