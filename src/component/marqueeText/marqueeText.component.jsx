import { useState, useEffect } from "react";
import { FlexContainer, TextContainer, Circle, CircleT } from "./marqueeText.styled";
import Typo, { TypoType } from "../typo/typo.component";


const MarqueeText = ({props, animationSpeed}) => {
    // INFO CHANGE THIS VALUE IF THE MARQUEE'S SIZE CHANGE
    const marqueeSize = 2110;

    const { isReverse, textArr, colorArr1, colorArr2 } = props;

    const [distance1, setDistance1] = useState(isReverse ? marqueeSize : 0);
    const [distance2, setDistance2] = useState(isReverse ? 0 : -marqueeSize);

    const reverseLogic = (element) => isReverse ? -element : element
    const calculLogic = (element) => isReverse ? element <= -marqueeSize : element >= marqueeSize

    const updateDistances = () => {
        setDistance1((prevDistance1) => {
          const newDistance = prevDistance1 + reverseLogic(animationSpeed);
          return calculLogic(newDistance) ? reverseLogic(-marqueeSize) : newDistance;
        });
    
        setDistance2((prevDistance2) => {
          const newDistance = prevDistance2 + reverseLogic(animationSpeed);
          return calculLogic(newDistance) ? reverseLogic(-marqueeSize) : newDistance;
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
    const circleLogic = (boolean) => boolean ? <Circle/> : <CircleT/> 

    const typoLine = (color) => (
        <>
            { circleLogic(color?.[0]) }
            <Typo type={typeLogic(color?.[0])}>&nbsp;{textArr?.[0]}&nbsp;</Typo> 
            { circleLogic(color?.[1]) }
            <Typo type={typeLogic(color?.[1])}>&nbsp;{textArr?.[1]}&nbsp;</Typo>
            { circleLogic(color?.[2]) }
            <Typo type={typeLogic(color?.[2])}>&nbsp;{textArr?.[2]}&nbsp;</Typo>
        </>
    )

    return (
        <FlexContainer>
            <TextContainer style={{transform: `translate3d(${distance1}px,0px,0px)`}}>
                {typoLine(colorArr1)}
            </TextContainer>
            <TextContainer style={{transform: `translate3d(${distance2}px,0px,0px)`}}>
                {typoLine(colorArr2)}
            </TextContainer>
        </FlexContainer>
    )
}

export default MarqueeText;