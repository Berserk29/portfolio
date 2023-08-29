import { FlexContainer, Container, CardImg, TextContainer, FirstText } from "./projectCard.styled";
import Typo, { TypoType } from '../typo/typo.component'

const ProjectCard = ({props, justify}) => {
    const { image, projectName, description, time} = props;

    return (
        <FlexContainer justify={justify}>
            <Container>
                <CardImg image={image}/>
                <TextContainer>
                    <FirstText>
                        <Typo type={TypoType.Headline4P} color="var(--color-cream)">{projectName}</Typo>
                        <Typo type={TypoType.Text3} color="var(--color-cream)">{description}</Typo>
                    </FirstText>
                    <Typo type={TypoType.Text3} color="var(--color-cream)">{time}</Typo>
                </TextContainer>
            </Container>
        </FlexContainer>
    )
}

export default ProjectCard;