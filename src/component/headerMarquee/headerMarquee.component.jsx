import { OverflowContainer, Circle, CircleT, FlexContainer, TextContainer, Headline1B, Headline1T } from "./headerMarquee.styled";
import { marqueeArr } from '../marquee/marquee.data'

const HeaderMarquee = () => {
    const doubleArr = [ 1, 2 ];
    const TypeLogic = ({isBlue, children}) => isBlue ? <Headline1B>{children}</Headline1B> : <Headline1T>{children}</Headline1T>;
    const CircleLogic = ({isBlue}) => isBlue ? <Circle/> : <CircleT/> 
    
    const TypoLine = ({isBlue, children}) => (
        <>
            <CircleLogic isBlue={isBlue} />
            <TypeLogic isBlue={isBlue}>&nbsp;{children}&nbsp;</TypeLogic> 
        </>
    )

    return (
        <OverflowContainer>
            {marqueeArr.map((el,i) => {
                const {isBlueArr, isForward, textArr} = el
                return (
                <FlexContainer key={i} isForward={isForward}>
                    {   doubleArr.map(el => (
                        <TextContainer isForward={isForward} key={el}>
                            {isBlueArr.map((el,i) => <TypoLine key={i} isBlue={el} >{textArr?.[i]}</TypoLine> )}
                        </TextContainer>
                    ))}
                </FlexContainer>
                )
            })}
        </OverflowContainer>
    )
}

export default HeaderMarquee;