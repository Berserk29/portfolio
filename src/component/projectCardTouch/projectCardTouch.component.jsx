import { CardImg, TextContainer, FirstText, Container } from "./projectCardTouch.styled";
import Typo, {TypoType} from "../typo/typo.component";

const ProjectCardTouch = ({props, justify}) => {
    const { image, projectName, description, time, textMarqueeArr, isMarqueeForward, link} = props;


    return (
        <Container justify={justify}>
            <CardImg image={image}></CardImg>
            <TextContainer >
                <FirstText>
                    <Typo type={TypoType.Headline4P} color="var(--color-cream)">{projectName}</Typo>
                    <Typo type={TypoType.Text3} color="var(--color-cream)">{description}</Typo>
                </FirstText>
                <Typo type={TypoType.Text3} color="var(--color-cream)">{time}</Typo>
            </TextContainer>
        </Container>
    )
}

export default ProjectCardTouch;