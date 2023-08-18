import { useMediaQuery } from "react-responsive";
import mediaQuery from '../../helper/mediaQuery'

import Typo, { TypoType } from "../typo/typo.component";
import { FlexCss, OverflowContainer, Text, Circle, CircleT} from "./infiniteText.styled"

const textArr = [true, false, true];

const InfiniteText = () => {
    const isBigScreen = useMediaQuery(mediaQuery.useBigScreen)
    const typeLogic = (el) => el ? TypoType.Headline1T : TypoType.Headline1B;
    const circleLogic = (el) => el ? <Circle/> : <CircleT/>
    
    const typoLine = (el) => (
        <>
            { circleLogic(!el) }
            <Typo type={typeLogic(el)}>&nbsp;Developper&nbsp;</Typo> 
            { circleLogic(el) }
            <Typo type={typeLogic(!el)}>&nbsp;Front end&nbsp;</Typo>
        </>
    )

    const typoComponent = (el) => (
        // INFO (isBigScreen) -> HAVE ENOUGH TEXT FOR BIG SCREEN
        <Text moveUp={el}>
            { typoLine(el) }
            { isBigScreen && typoLine(el) }
        </Text> 
    )

    return (
        <OverflowContainer>
            {textArr.map((el,i) => {
                return (
                <FlexCss key={i} moveUp={el}>
                    {typoComponent(el)}
                    {typoComponent(el)}
                </FlexCss>
                )
            })}
        </OverflowContainer>
    )
}

export default InfiniteText;