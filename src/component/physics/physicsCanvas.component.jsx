import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import {FlexContainer, TextContainer, TitleContainer, TitleCss, TextCss} from './physicsCanvas.styled'
import { titleArr } from './physicsCanvas.data'
import Typo, {TypoType} from '../../component/typo/typo.component'
import Canvas from '../cavas/cavas.component'

const PhysicsCanvas = () => {
    const [hoverNum, setHoverNum] = useState(-1);
    const {ref , inView} = useInView()

    const setHandler = (id) => setHoverNum(id)

    return (
        <FlexContainer ref={ref}>
            <TitleContainer>
                {titleArr.map((el) => {
                    return (
                        <TextContainer key={el.id} onMouseEnter={() => setHandler(el.id)} onMouseLeave={() => setHandler(-1)}>
                            <TitleCss><Typo type={TypoType.Headline3}>{el.title}</Typo></TitleCss>
                            <TextCss><Typo type={TypoType.Text6}>{el.text}</Typo></TextCss>
                        </TextContainer>
                    )
                })}
            </TitleContainer>
            { inView && <Canvas hoverNum={hoverNum}/>}
        </FlexContainer>
    )
}

export default PhysicsCanvas


