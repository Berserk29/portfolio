import { TextContainer, Circle, FlexContainer, GiantHeadline} from "./infiniteText.styled";
import { Fragment } from "react";


const InfiniteText = ({textArr, isForward, color}) => {
    const textNumArr = [1, 2] 


    return (
        <FlexContainer isForward={isForward}>
            {   textNumArr.map((_,i) => (
                <TextContainer key={i} isForward={isForward}>
                    {  textArr.map((el,i) => (
                        <Fragment key={i}>
                            <Circle color={color}/>
                            <GiantHeadline borderColor={color}>&nbsp;{el}&nbsp;</GiantHeadline>
                        </Fragment>
                    ))}
                </TextContainer>
            ))}
        </FlexContainer>
    )
}

export default InfiniteText;