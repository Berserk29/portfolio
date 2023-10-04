import { useState } from 'react'

import {FlexContainer, TextContainer, TitleContainer, TitleCss, TextCss} from './physicsCanvas.styled'
import { titleArr } from './physicsCanvas.data'
import Typo, {TypoType} from '../../component/typo/typo.component'
import Canvas from '../canvas/canvas.component'

const PhysicsCanvas = ({inView}) => {
    const [hoverNum, setHoverNum] = useState(-1);

    const setHandler = (id) => setHoverNum(id)

    return (
        <FlexContainer>
            <TitleContainer>
                {titleArr.map((el,i) => {
                    return (
                        <TextContainer key={el.id} onMouseEnter={() => setHandler(el.id)} onMouseLeave={() => setHandler(-1)}>
                            <TitleCss><Typo type={TypoType.Headline3} color={i === hoverNum ? el.color : 'var(--color-primary)'} >{el.title}</Typo></TitleCss>
                            <TextCss><Typo type={TypoType.Text6}>{el.text}</Typo></TextCss>
                        </TextContainer>
                    )
                })}
            </TitleContainer>
            <div>{ inView && <Canvas hoverNum={hoverNum}/>}</div>
        </FlexContainer>
    )
}

export default PhysicsCanvas


