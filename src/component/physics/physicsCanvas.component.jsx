import { useState } from 'react'

import {FlexContainer, TextContainer, TitleContainer, TitleCss, TextCss, BallContainer} from './physicsCanvas.styled'
import { titleArr, ballArr } from './physicsCanvas.data'
import Typo, {TypoType} from '../../component/typo/typo.component'
import Canvas from '../cavas/cavas.component'

const PhysicsCanvas = () => {
    const [hoverNum, setHoverNum] = useState(-1)

    const setHandler = (id) => setHoverNum(id)

    return (
        <FlexContainer>
            <TitleContainer>
                {titleArr.map((el) => {
                    return (
                        <TextContainer key={el.id} onMouseEnter={() => setHandler(el.id)} onMouseLeave={() => setHandler(-1)}>
                            <TitleCss><Typo type={TypoType.Headline3}>{el.title}</Typo></TitleCss>
                            <TextCss><Typo type={TypoType.Text6}>{el.text} / {hoverNum}</Typo></TextCss>
                        </TextContainer>
                    )
                })}
            </TitleContainer>
            <Canvas hoverNum={hoverNum}/>
        </FlexContainer>
    )
}

export default PhysicsCanvas


