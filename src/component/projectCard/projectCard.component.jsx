import { useRef, useEffect } from "react";

import { 
    FlexContainer, 
    Container, 
    CardImg, 
    TextContainer, 
    FirstText, 
    CardContainer, 
    BtnContainer, 
    ArrowImg
} from "./projectCard.styled";

import Typo, { TypoType } from '../typo/typo.component'
import InfiniteText from "../infiniteText/infiniteText.component";
import arrowImg from '../../assets/icon/arrow.png'

const ProjectCard = ({props, justify}) => {
    const { image, projectName, description, time, textMarqueeArr, isMarqueeForward, link} = props;
    const cardRef = useRef()
    const btnRef = useRef()
    let cardCur;
    let btnCur;
    
    // IF THE NUMBER IS LOW --> MORE MOVEMENT. IF THE NUMBER IS HIGH --> LESS MOVEMENT.
    const rotationPower = 20;

    useEffect(() => {
        cardCur = cardRef?.current;
        btnCur = btnRef?.current;
    },[cardRef, btnRef])
 

    const moveHandler = (e) => {
        if(!cardCur) return;
        const domRect = e.currentTarget.getBoundingClientRect();
        const visibleX = (cardCur?.clientWidth / 2 ) / rotationPower;
        const hiddenX = +((domRect.width / 2 ) / rotationPower - visibleX).toFixed(1);
        const visibleY = (cardCur?.clientHeight / 2 ) / rotationPower;
        const hiddenY = +((domRect.height / 2 ) / rotationPower - visibleY).toFixed(1);

        // MOUSE POSITION ON THE CARDCONTAINER --> THE MIDDLE PART WILL BE 0
        let xAxis = -(domRect.width / 2 - ( e.clientX - domRect.left)) / rotationPower;
        let yAxis = (domRect.height / 2 - ( e.clientY - domRect.top)) / rotationPower;

        // WHEN THE MOUSE IS OUTSIDE OF THE IMAGE BUT STILL ON THE CARDCONTAINER --> I WANT LESS ROTATION
        if(xAxis > visibleX || xAxis < -visibleX) {
            const valueLogic = (element) => xAxis > 0 ? element : -element
            const modXAxis = xAxis - valueLogic(visibleX);
            const hiddenNum = (hiddenX - valueLogic(modXAxis)) / hiddenX
           
            xAxis = xAxis * hiddenNum ;
        }

        if(yAxis > visibleY || yAxis < -visibleY) {
            const valueLogic = (element) => yAxis > 0 ? element : -element
            const modYAxis = yAxis - valueLogic(visibleY);
            const hiddenNum = (hiddenY - valueLogic(modYAxis)) / hiddenY
           
            yAxis = yAxis * hiddenNum ;
        }

        cardCur.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    }

    const enterHandler = () => {
        if(!cardCur || !btnCur ) return;
        cardCur.style.transition = 'all 0.1s ease';
        btnCur.style.opacity = 1;
    }

    const leaveHandler = () => {
        if(!cardCur || !btnCur ) return;
        cardCur.style.transition = 'all 0.4s ease'
        cardCur.style.transform = 'rotateY(0deg) rotateX(0deg)'
        btnCur.style.opacity = 0;
    }

    return (
        <FlexContainer justify={justify}>
            <InfiniteText textArr={textMarqueeArr} isForward={isMarqueeForward} />
            <Container>
                <CardContainer 
                    onMouseMove={(e) => moveHandler(e)} 
                    onMouseEnter={enterHandler}
                    onMouseLeave={leaveHandler}
                >
                    <CardImg image={image} ref={cardRef} >
                        <BtnContainer ref={btnRef} target="_blank" href={link}>
                            <ArrowImg src={arrowImg} alt="arrow icon"/>
                        </BtnContainer>
                    </CardImg>
                </CardContainer>
                <TextContainer >
                    <FirstText>
                        <Typo type={TypoType.Headline4P} color="var(--color-cream)">{projectName}</Typo>
                        <Typo type={TypoType.Text3} color="var(--color-cream)">{description}</Typo>
                    </FirstText>
                    <Typo type={TypoType.Text3} color="var(--color-cream)">{time}</Typo>
                </TextContainer>
            </Container>
        </FlexContainer>
    )
}

export default ProjectCard;