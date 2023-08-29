import * as Styled from './typo.styled'

export const TypoType = {
    GiantHeadline: 'GiantHeadline',
    Headline1B: 'Headline1B',
    Headline1T: 'Headline1T',
    Headline2: 'Headline2',
    Headline3: 'Headline3',
    Headline4: 'Headline4',
    Headline4P: 'Headline4P',
    Text1: 'Text1',
    Text2: 'Text2',
    Text3: 'Text3',
}

const Typo = ({children, type, color = 'var(--color-primary)'}) => {
    const StyledComponent = Styled[TypoType[type]];

    return (
        <StyledComponent color={color}>{children}</StyledComponent>
    )
}

export default Typo