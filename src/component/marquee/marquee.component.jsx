import { useState, useEffect } from "react";
import { OverflowContainer, TextContainer, FlexContainer, Circle, CircleT } from "./marquee.styled"
import Typo, { TypoType } from "../typo/typo.component";
import { useInView } from "react-intersection-observer";

const Marquee = () => {
    const [ref, inView] = useInView({threshold: 0.1})
    const [distance1, setDistance1] = useState(0)
    const [distance2, setDistance2] = useState(-2505)
    const typeLogic = (el) => el ? TypoType.Headline1T : TypoType.Headline1B;
    const textLogic = (el) => el ? 'Developper' : 'Front end'
    const circleLogic = (el) => el ? <Circle/> : <CircleT/>

    useEffect(() => {
        console.log(inView)
    }, [inView])

    useEffect(() => {
        if(distance1 >= 2505) return setDistance1(-2505)
        if(distance2 >= 2505) return setDistance2(-2505)
        setTimeout(() => {
            setDistance1(distance1 + 1.5 )
            setDistance2(distance2 + 1.5 )
        }, 20)
    }, [distance1, distance2])

    const typoLine = (el, el2) => (
        <>
            { circleLogic(!el) }
            <Typo type={typeLogic(el)}>&nbsp;{textLogic(el2)}&nbsp;</Typo> 
            { circleLogic(el) }
            <Typo type={typeLogic(!el)}>&nbsp;{textLogic(!el2)}&nbsp;</Typo>
        </>
    )

    return (
        <OverflowContainer ref={ref}>
            <FlexContainer>
                <TextContainer style={{transform: `translate3d(${distance1}px,0px,0px)`}}>
                    {typoLine(true, true)}
                </TextContainer>
                <TextContainer style={{transform: `translate3d(${distance2}px,0px,0px)`}}>
                    {typoLine(true, true)}
                </TextContainer>
            </FlexContainer>
        </OverflowContainer>
    )
}

export default Marquee;