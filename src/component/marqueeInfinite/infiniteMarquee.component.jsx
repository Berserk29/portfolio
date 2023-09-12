import { OverflowContainer, Circle, CircleT, FlexContainer, TextContainer } from "./infiniteMarquee.styled";
import { infiniteMarqueeArr } from '../../component/marquee/marquee.data'
import Typo, {TypoType} from "../typo/typo.component";

const InfiniteMarquee = () => {

    const typeLogic = (boolean) => boolean ? TypoType.Headline1B : TypoType.Headline1T;
    const circleLogic = (boolean) => boolean ? <Circle/> : <CircleT/> 
    
    const typoLine = (colorArr, textArr) => {
        return (
            <>
                { circleLogic(colorArr?.[0]) }
                <Typo type={typeLogic(colorArr?.[0])}>&nbsp;{textArr?.[0]}&nbsp;</Typo> 
                { circleLogic(colorArr?.[1]) }
                <Typo type={typeLogic(colorArr?.[1])}>&nbsp;{textArr?.[1]}&nbsp;</Typo>
                { circleLogic(colorArr?.[2]) }
                <Typo type={typeLogic(colorArr?.[2])}>&nbsp;{textArr?.[2]}&nbsp;</Typo>
                { circleLogic(colorArr?.[1]) }
                <Typo type={typeLogic(colorArr?.[1])}>&nbsp;{textArr?.[1]}&nbsp;</Typo>
            </>
        )
    }

    return (
        <OverflowContainer>
            {infiniteMarqueeArr.map((el,i) => {
                const {colorArr, isForward, textArr} = el
                return (
                <FlexContainer key={i} isForward={isForward}>
                    <TextContainer isForward={isForward}>
                        {typoLine(colorArr, textArr)}
                    </TextContainer>
                    <TextContainer isForward={isForward}>
                        {typoLine(colorArr, textArr)}
                    </TextContainer>
                </FlexContainer>
                )
            })}
        </OverflowContainer>
    )
}

export default InfiniteMarquee;