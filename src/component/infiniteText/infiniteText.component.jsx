import { TextContainer, Circle, FlexContainer} from "./infiniteText.styled";
import Typo, { TypoType } from "../typo/typo.component";
import { Fragment } from "react";


const InfiniteText = ({textArr, isForward, color = 'var(--color-cream)'}) => {
    const textNumArr = [1, 2] 


    return (
        <FlexContainer isForward={isForward}>
            {   textNumArr.map((_,i) => (
                <TextContainer key={i} isForward={isForward}>
                    {  textArr.map((el,i) => (
                        <Fragment key={i}>
                            <Circle color={color}/>
                            <Typo type={TypoType.GiantHeadline} borderColor={color}>&nbsp;{el}&nbsp;</Typo>
                        </Fragment>
                    ))}
                </TextContainer>
            ))}
        </FlexContainer>
    )
}

export default InfiniteText;