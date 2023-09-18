import Typo, { TypoType } from '../typo/typo.component'
import { Container, TitleContainer} from './circleHeading.styled';

const CircleHeading = ({title}) => {

    return (
        <Container>
            <TitleContainer>
                <Typo type={TypoType.Headline2} color='var(--color-cream)'>{title}</Typo>
            </TitleContainer>
        </Container>
    )
}

export default CircleHeading;