import styled, {css} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// INFO CSS
export const teko = css`
    font-family: 'Teko';
    color: ${props => props.color};
    text-transform: uppercase;
    display: inline-block;
    transition: color .3s;
`

export const khandBold = css`
    font-family: 'Khand';
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    line-height: 100%;
`

const heebo = css`
    font-family: 'Heebo';
    color: ${props => props.color};
    transition: color .3s;
`

const bebasNeue = css`
    font-family: 'Bebas Neue';
    color: ${props => props.color};
    transition: color .3s;
`

// INFO STYLED COMPONENT

// line-height and margin-top --> to make the font upper and lower blank space equal
export const Headline2 = styled.h2`
    ${teko}
    line-height: .82;
    margin-top: 13px;
    font-weight: 600;
    font-size: 8rem;
    @media ${mediaQuery.styledTablet} {
        margin-top: 11px;
        font-size: 6.5rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        margin-top: 9.5px;
        font-size: 5.6rem;
    }
    @media ${mediaQuery.styledMobile} {
        margin-top: 7.5px;
        font-size: 4.5rem;
    }
`

export const Headline3 = styled.h3`
    ${teko}
    font-weight: 600;
    font-size: 5.6rem;
    @media ${mediaQuery.styledTablet} {
        font-size: 4.8rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 4.2rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 3.4rem;
    }
`

export const Headline4 = styled.h3`
    ${teko}
    font-weight: 500;
    font-size: 5.6rem;
    line-height: 130%;
    white-space: pre-line;

    @media ${mediaQuery.styledTablet} {
        font-size: 4.2rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 3.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.6rem;
    }
`

export const Headline4P = styled.h4`
    ${teko}
    font-weight: 500;
    font-size: 4.8rem;
    line-height: 3.5rem;
    @media ${mediaQuery.styledTablet} {
        font-size: 4.2rem;
        line-height: 3rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 3.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.6rem;
        line-height: 2.3rem;
    }
`

export const Headline5 = styled.h4`
    ${bebasNeue}
    font-size: 4rem;
    text-transform: uppercase;
    @media ${mediaQuery.styledSmTablet} {
        font-size: 3.6rem;
    }
`

export const Text1 = styled.p`
   ${heebo}
   font-weight: 400;
   font-size: 2rem;
   line-height: 200%;
   white-space: pre-line;
   @media ${mediaQuery.styledTablet} {
    font-size: 1.8rem ;
   }
   @media ${mediaQuery.styledSmTablet} {
    font-size: 1.6rem ;
   }
`

export const Text2 = styled.p`
   ${heebo}
   font-weight: 400;
   font-size: 2.6rem;
   line-height: 160%;
   white-space: pre-line;
   @media ${mediaQuery.styledTablet} {
    font-size: 2.2rem ;
   }
   @media ${mediaQuery.styledSmTablet} {
    font-size: 2rem ;
   }
   @media ${mediaQuery.styledMobile} {
    font-size: 1.7rem ;
   }
`

export const Text3 = styled.p`
   ${teko}
   font-weight: 300;
   font-size: 2.4rem;
   line-height: 100%;
   white-space: pre-line;
   text-transform: none;
   @media ${mediaQuery.styledTablet} {
        font-size: 2rem;
   }
   @media ${mediaQuery.styledMobile} {
        font-size: 1.6rem;
   }
`

export const Text5 = styled.p`
    ${bebasNeue} 
    font-weight: 400;
    font-size: 2.4rem;
    line-height: 100%;
    text-transform: uppercase;
    cursor: pointer;
    transition: opacity .3s;
    :hover {
        opacity: .7;
    }
`

export const Text6 = styled.p`
   ${heebo}
   font-weight: 300;
   font-size: 2.2rem;
   line-height: 100%;
   @media ${mediaQuery.styledTablet} {
        font-size: 2rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 1.6rem;
    }
`