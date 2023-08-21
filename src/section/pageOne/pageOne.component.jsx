import { Container } from "./pageOne.styled"
import { pageOneTextArr } from "./pageOne.data";
import MovingText from '../../component/movingText/movingText.component'

const PageOne = () => {
    return (
        <Container>
            {pageOneTextArr.map((el,i) => <MovingText key={i} props={el}/>)}
        </Container>
    )
}

export default PageOne;