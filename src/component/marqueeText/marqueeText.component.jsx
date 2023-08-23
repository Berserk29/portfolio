import { useState, useEffect } from "react";
import { FlexContainer, TextContainer, Circle, CircleT } from "./marqueeText.styled";
import Typo, { TypoType } from "../typo/typo.component";


const MarqueeText = ({props, animationSpeed}) => {
    const { isReverse, isDevFirst, isBlackFirst } = props
    const [distance1, setDistance1] = useState(isReverse ? 2505 : 0);
    const [distance2, setDistance2] = useState(isReverse ? 0 : -2505);

    const reverseLogic = (element) => isReverse ? -element : element
    const calculLogic = (element) => isReverse ? element <= -2505 : element >= 2505

    const updateDistances = () => {
        setDistance1((prevDistance1) => {
          const newDistance = prevDistance1 + reverseLogic(animationSpeed);
          return calculLogic(newDistance) ? reverseLogic(-2505) : newDistance;
        });
    
        setDistance2((prevDistance2) => {
          const newDistance = prevDistance2 + reverseLogic(animationSpeed);
          return calculLogic(newDistance) ? reverseLogic(-2505) : newDistance;
        });
    };
    
    useEffect(() => {
        let animationFrameId;
    
        const animate = () => {
          updateDistances();
          animationFrameId = requestAnimationFrame(animate);
        };
    
        animationFrameId = requestAnimationFrame(animate);
    
        return () => {
          cancelAnimationFrame(animationFrameId);
        };
    }, [animationSpeed]);
    
    const typeLogic = (boolean) => boolean ? TypoType.Headline1B : TypoType.Headline1T;
    const textLogic = (boolean) => boolean ? 'Developper' : 'Front end'
    const circleLogic = (boolean) => boolean ? <Circle/> : <CircleT/> 

    const typoLine = () => (
        <>
            { circleLogic(isBlackFirst) }
            <Typo type={typeLogic(isBlackFirst)}>&nbsp;{textLogic(isDevFirst)}&nbsp;</Typo> 
            { circleLogic(!isBlackFirst) }
            <Typo type={typeLogic(!isBlackFirst)}>&nbsp;{textLogic(!isDevFirst)}&nbsp;</Typo>
        </>
    )

    return (
        <FlexContainer>
            <TextContainer style={{transform: `translate3d(${distance1}px,0px,0px)`}}>
                {typoLine()}
            </TextContainer>
            <TextContainer style={{transform: `translate3d(${distance2}px,0px,0px)`}}>
                {typoLine()}
            </TextContainer>
        </FlexContainer>
    )
}

export default MarqueeText;