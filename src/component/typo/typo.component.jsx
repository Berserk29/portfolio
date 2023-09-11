import React from 'react';
import * as Styled from './typo.styled'
import { useMemo } from 'react';

export const TypoType = {
    GiantHeadline: 'GiantHeadline',
    Headline1B: 'Headline1B',
    Headline1T: 'Headline1T',
    Headline2: 'Headline2',
    Headline3: 'Headline3',
    Headline4: 'Headline4',
    Headline4P: 'Headline4P',
    Headline5: 'Headline5',
    Text1: 'Text1',
    Text2: 'Text2',
    Text3: 'Text3',
    Text4: 'Text4',
    Text5: 'Text5',
    Text6: 'Text6',
}

// React.memo to memorized the component and not re render if the state change but the typo don't change

const Typo = React.memo(({children, type, color = 'var(--color-primary)', borderColor}) => {
    const StyledComponent = useMemo(() => Styled[TypoType[type]]);

    return (
        <StyledComponent color={color} borderColor={borderColor}>{children}</StyledComponent>
    )
})

export default Typo