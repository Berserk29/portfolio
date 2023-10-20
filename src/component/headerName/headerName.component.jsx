import { NameContainer, RelativeSection, LetterSpan, LetterSpanAfter} from "./headerName.styled";
import { nameArr } from "./headerName.data";

const HeaderName = ({startAnimation}) => {
    return(
        <NameContainer startAnimation={startAnimation}>
            <RelativeSection>
                {nameArr.map((el,i) => (
                    nameArr.length !== i + 1 ?
                    <LetterSpan key={i} startAnimation={startAnimation} cubic={el.cubic}>{el.letter}</LetterSpan>
                    :
                    <LetterSpanAfter key={i} startAnimation={startAnimation} cubic={el.cubic}>{el.letter}</LetterSpanAfter>
                ))}
            </RelativeSection>
        </NameContainer> 
    )
}

export default HeaderName;