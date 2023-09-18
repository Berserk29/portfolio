import Typo, { TypoType } from '../../component/typo/typo.component'
import { Container, TitleContainer} from './titleStars.styled';
import Star from '../star/star.component';
import { starsArr } from './titleStars.data';

const TitleStars = ({title}) => {

    return (
        <Container>
            {/* TESTING */}
            {/* {starsArr.map((el,i) => <Star key={i} props={el}/>)} */}
            <TitleContainer>
                <Typo type={TypoType.Headline2} color='var(--color-cream)'>{title}</Typo>
            </TitleContainer>
        </Container>
    )
}

export default TitleStars;