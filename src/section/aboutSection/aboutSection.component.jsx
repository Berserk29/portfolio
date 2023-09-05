import { forwardRef } from "react";

import Typo, { TypoType } from "../../component/typo/typo.component";
import { AboutContainer, TextContainer } from "./aboutSection.styled";

import { aboutText } from "./aboutSection.data";
import TitleStars from "../../component/titleStars/titleStars.component";

const AboutSection = forwardRef(({props}, ref) => {
    const {introUp, introDown} = aboutText;
    return (
        <AboutContainer ref={ref}>
            <TitleStars title='About me'/>
            <TextContainer>
                <Typo type={TypoType.Headline4}>{introUp}</Typo>
                <Typo type={TypoType.Text1}>{introDown}</Typo> 
            </TextContainer>
        </AboutContainer>
    )
})

export default AboutSection;