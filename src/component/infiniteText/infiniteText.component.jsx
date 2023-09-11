import { TextContainer, Circle, FlexContainer} from "./infiniteText.styled";
import Typo, { TypoType } from "../typo/typo.component";
import { Fragment } from "react";


const InfiniteText = ({textArr, isForward}) => {
    const textNumArr = [1, 2] 


    return (
        <FlexContainer isForward={isForward}>
            {   textNumArr.map((_,i) => {
                    return (
                        <TextContainer key={i} isForward={isForward}>
                            {  textArr.map((el,i) => (
                                <Fragment key={i}>
                                    <Circle />
                                    <Typo type={TypoType.GiantHeadline}>&nbsp;{el}&nbsp;</Typo>
                                </Fragment>
                            ))  
                            }
                        </TextContainer>
                    )
                })
            }
        </FlexContainer>
    )
}

export default InfiniteText;