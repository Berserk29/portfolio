import styled, {css} from "styled-components";
import mediaQuery from "../../helper/mediaQuery";

// INFO CSS
const teko = css`
    font-family: 'Teko';
    color: ${props => props.color};
    text-transform: uppercase;
    display: inline-block;
`

const khandBold = css`
    font-family: 'Khand';
    font-weight: 700;
    text-transform: uppercase;
    display: inline-block;
    line-height: 100%;
`

const heebo = css`
    font-family: 'Heebo';
    color: ${props => props.color};
`

const bebasNeue = css`
    font-family: 'Bebas Neue';
    color: ${props => props.color};
`

// INFO STYLED COMPONENT

export const Headline1B = styled.h1`
    ${khandBold}
    font-size: 14rem;
    color: var(--color-primary);
    @media ${mediaQuery.styledTablet} {
        font-size: 12rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 10rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 7rem;
    }
`

export const Headline1T = styled(Headline1B)`
    ${khandBold}
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: var(--color-primary);
`

export const Headline2 = styled.h2`
    ${teko}
    line-height: 90%;
    font-weight: 600;
    font-size: 9.6rem;
    @media ${mediaQuery.styledTablet} {
        font-size: 7.5rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 6rem;
    }
    @media ${mediaQuery.styledMobile} {
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
    @media ${mediaQuery.styledTablet} {
        font-size: 4.2rem;
    }
    @media ${mediaQuery.styledSmTablet} {
        font-size: 3.4rem;
    }
    @media ${mediaQuery.styledMobile} {
        font-size: 2.8rem;
    }
`

export const Headline4P = styled(Headline4)`
    line-height: 4rem;
    @media ${mediaQuery.styledTablet} {
        line-height: 3rem;
    }
    @media ${mediaQuery.styledMobile} {
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

export const GiantHeadline = styled.span`
    ${khandBold}
    font-size: 24.8rem;
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${props => props.borderColor || 'var(--color-cream)'};
`

export const Text1 = styled.p`
   ${heebo}
   font-weight: 700;
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

export const Text4 = styled.p`
   ${heebo}
   font-weight: 400;
   font-size: 2.4rem;
   text-transform: uppercase;
   line-height: 100%;
   @media ${mediaQuery.styledTablet} {
        font-size: 2.2rem;
   }
   @media ${mediaQuery.styledSmTablet} {
        font-size: 2rem;
   }
   @media ${mediaQuery.styledMobile} {
        font-size: 1.7rem;
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