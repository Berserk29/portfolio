import styled, {css} from "styled-components";

// INFO CSS

const NewYorkBlack = css`
    font-family: 'New York';
    font-weight: 900;
`
const NewYorkBold = css`
    font-family: 'New York';
    font-weight: 700;
`
const NewYorkMedium = css`
    font-family: 'New York';
    font-weight: 500;
`
const NewYorkRegular = css`
    font-family: 'New York';
    font-weight: 400;
`

// INFO STYLED COMPONENT

// TODO WHEN THE FONT-FAMILY WILL CHANGE PROBABLY NEED TO CHANGE FEW STUFF LIKE LINE-HEIGHT
export const GiantHeadline = styled.span`
    ${NewYorkMedium}
    display: inline-block;
    font-size: 45rem;
    line-height: 35rem;
`

export const Headline1B = styled.h1`
    ${NewYorkBlack}
    line-height: 110%;
    display: inline-block;
    font-size: 16rem;
    color: var(--color-primary);
    text-transform: uppercase;
`

export const Headline1T = styled(Headline1B)`
    ${NewYorkBlack}
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-primary);
`

export const Headline2W = styled.h2`
    ${NewYorkRegular}
    font-size: 9.6rem;
    color: var(--color-cream);
    line-height: 130%;
`

export const Headline3W = styled.h3`
    ${NewYorkRegular}
    font-size: 6.4rem;
    color: var(--color-cream);
    line-height: 130%;
`

export const Headline3B = styled.h3`
    ${NewYorkBold}
    font-size: 6.2rem;
    color: var(--color-primary);
    text-transform: uppercase;
`