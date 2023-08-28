import Typo, { TypoType } from "../../component/typo/typo.component";
import { AboutContainer, TextContainer } from "./aboutSection.styled";

import { aboutText } from "./aboutSection.data";

const AboutSection = () => {
    const {introUp, introDown} = aboutText;
    return (
        <AboutContainer>
            <div>{/* ABOUT ME */}</div>
            <TextContainer>
                <Typo type={TypoType.Headline4}>{introUp}</Typo>
                <Typo type={TypoType.Text1}>{introDown}</Typo> 
            </TextContainer>
        </AboutContainer>
    )
}

export default AboutSection;