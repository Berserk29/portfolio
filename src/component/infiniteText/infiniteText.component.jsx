import { useMediaQuery } from "react-responsive";
import mediaQuery from '../../helper/mediaQuery'

import Typo, { TypoType } from "../typo/typo.component";
import { FlexCss, OverflowContainer, Text, Circle, CircleT} from "./infiniteText.styled"
import { textArr } from "./infiniteText.data";

const InfiniteText = () => {
    const isBigScreen = useMediaQuery(mediaQuery.useBigScreen)
    const typeLogic = (el) => el ? TypoType.Headline1T : TypoType.Headline1B;
    const textLogic = (el) => el ? 'Developper' : 'Front end'
    const circleLogic = (el) => el ? <Circle/> : <CircleT/>
    
    const typoLine = (el) => (
        <>
            { circleLogic(!el.moveUp) }
            <Typo type={typeLogic(el.moveUp)}>&nbsp;{textLogic(el.textReverse)}&nbsp;</Typo> 
            { circleLogic(el.moveUp) }
            <Typo type={typeLogic(!el.moveUp)}>&nbsp;{textLogic(!el.textReverse)}&nbsp;</Typo>
        </>
    )

    const typoComponent = (el) => (
        // INFO (isBigScreen) -> HAVE ENOUGH TEXT FOR BIG SCREEN
        <Text moveUp={el.moveUp}>
            { typoLine(el) }
            { isBigScreen && typoLine(el) }
        </Text> 
    )

    return (
        <OverflowContainer>
            {textArr.map((el,i) => {
                return (
                <FlexCss key={i} moveUp={el.moveUp}>
                    {typoComponent(el)}
                    {typoComponent(el)}
                </FlexCss>
                )
            })}
        </OverflowContainer>
    )
}

export default InfiniteText;