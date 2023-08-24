import * as Styled from './typo.styled'

export const TypoType = {
    GiantHeadline: 'GiantHeadline',
    Headline1B: 'Headline1B',
    Headline1T: 'Headline1T',
    Headline2W: 'Headline2W',
    Headline3B: 'Headline3B',
    Headline3W: 'Headline3W',
}

const Typo = ({children, type}) => {
    const StyledComponent = Styled[TypoType[type]];

    return (
        <StyledComponent>{children}</StyledComponent>
    )
}

export default Typo