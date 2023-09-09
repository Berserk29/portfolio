import { useState, useEffect} from "react";
import { useMemo } from "react";

import { FlexContainer, TextContainer, Circle, CircleT } from "./marqueeText.styled";
import Typo, { TypoType } from "../typo/typo.component";


const MarqueeText = ({props, animationSpeed}) => {
    const { isReverse, textArr, colorArr1, colorArr2 } = props;
    const marqueeSize = 1863;
    const [distance1, setDistance1] = useState(isReverse ? marqueeSize : 0);
    const [distance2, setDistance2] = useState(isReverse ? 0 : -marqueeSize);
    
    const reverseLogic = (element) => isReverse ? -element : element
    const calculLogic = (element) => isReverse ? element <= -marqueeSize : element >= marqueeSize
    
    
    useEffect(() => {
        let animationFrameId;

        const updateDistances = () => {
    
            const newDistanceFn = (prevDistance) => {
                const newDistance = prevDistance + reverseLogic(animationSpeed);
                return calculLogic(newDistance) ? reverseLogic(-marqueeSize) : newDistance;
            }
            
            setDistance1((prevDistance1) => newDistanceFn(prevDistance1))
            setDistance2((prevDistance2) => newDistanceFn(prevDistance2))
        };
        
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
    
    // useMemo -> To not render the typo component if colorArr do not change
    const memoTypo = (colorArr) => useMemo(() => typoLine(colorArr), [colorArr])
    
    return (
        <FlexContainer>
            <TextContainer style={{transform: `translate3d(${distance1}px,0px,0px)`}}>
                {memoTypo(colorArr1)}
            </TextContainer>
            <TextContainer style={{transform: `translate3d(${distance2}px,0px,0px)`}}>
                {memoTypo(colorArr2)}
            </TextContainer>
        </FlexContainer>

    )
}

export default MarqueeText;