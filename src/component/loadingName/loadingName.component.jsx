import { NameContainer, RelativeSection, LetterSpan, LetterSpanAfter} from "./loadingName.styled";
import { nameArr } from "./loadingName.data";

const LoadingName = () => {
    return(
        <NameContainer>
            <RelativeSection>
                {nameArr.map((el,i) => (
                    nameArr.length !== i + 1 ?
                    <LetterSpan key={i} cubic={el.cubic}>{el.letter}</LetterSpan>
                    :
                    <LetterSpanAfter key={i} cubic={el.cubic}>{el.letter}</LetterSpanAfter>
                ))}
            </RelativeSection>
        </NameContainer> 
    )
}

export default LoadingName;