import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { 
    CardImg,
    TextContainer,
    FirstText,
    Container,
    BackCard,
    CardContainer,
    BtnContainer,
    ArrowImg
} from "./projectCardTouch.styled";

import Typo, {TypoType} from "../typo/typo.component";
import InfiniteText from "../infiniteText/infiniteText.component";
import arrowImg from '../../assets/icon/arrow.png'


const ProjectCardTouch = ({props, justify}) => {
    const { image, projectName, description, time, textMarqueeArr, isMarqueeForward, link} = props;
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)
    const [isRotate , setIsRotate] = useState(false)

    const clickHandler = () => {
        if(isRotate) setIsRotate(false)
        else setIsRotate(true) 
    }

    const logicRotate = (isNotRotateNum, isRotateNum) => {
        return isRotate ? `rotateY(${isNotRotateNum}deg)` : `rotateY(${isRotateNum}deg)`
    }

    return (
        <Container justify={justify}>
            {!isSmTablet ? <InfiniteText textArr={textMarqueeArr} isForward={isMarqueeForward} /> : null}
            <CardContainer onClick={clickHandler}>
                <CardImg image={image} style={{transform: logicRotate(-180, 0)}}/>
                <BackCard style={{transform: logicRotate(0, 180)}} justify={justify}>
                    <Typo type={TypoType.Headline4} color={justify === 'flex-start' ? 'var(--color-primary)' : 'var(--color-cream)'} >Click to see my project</Typo>
                    <BtnContainer target="_blank" href={link} justify={justify}>
                        <ArrowImg src={arrowImg} alt="arrow icon" justify={justify}/>
                    </BtnContainer>
                </BackCard>
            </CardContainer>
            <TextContainer >
                <FirstText>
                    <Typo type={TypoType.Headline4P} color="var(--color-cream)">{projectName}</Typo>
                    <Typo type={TypoType.Text3} color="var(--color-cream)">{description}</Typo>
                </FirstText>
                <Typo type={TypoType.Text3} color="var(--color-cream)">{time}</Typo>
            </TextContainer>
        </Container>
    )
}

export default ProjectCardTouch;