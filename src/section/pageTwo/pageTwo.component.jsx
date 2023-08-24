import { useState } from "react";
import { Container, NumberContainer, FlexContainer } from "./pageTwo.styled";
import Typo, {TypoType} from '../../component/typo/typo.component'

const PageTwo = () => {
    const [startAnimation, setStartAnimation] = useState(false)

    // TESTING 
    const handleClick = () => setStartAnimation(!startAnimation)

    return (
        <Container onClick={handleClick}>
            <FlexContainer>
                <NumberContainer justify='start' isFilter={startAnimation}>
                    <Typo type={TypoType.GiantHeadline}>2019</Typo>
                </NumberContainer>
                <NumberContainer justify='end' isTransform={true} isFilter={startAnimation}>
                    <Typo type={TypoType.GiantHeadline}>2022</Typo>
                </NumberContainer>
            </FlexContainer>
        </Container>
    )
}

export default PageTwo;