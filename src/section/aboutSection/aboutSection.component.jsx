import { forwardRef } from "react";

import Typo, { TypoType } from "../../component/typo/typo.component";
import { AboutContainer, TextContainer } from "./aboutSection.styled";

import TitleStars from "../../component/titleStars/titleStars.component";
import { useTranslation } from "react-i18next";

const AboutSection = forwardRef(({props}, ref) => {
    const {t} = useTranslation();

    return (
        <AboutContainer ref={ref}>
            <TitleStars title={t('titleAboutMe')}/>
            <TextContainer>
                <Typo type={TypoType.Headline4} color='var(--color-grey)'>{t('introUp')}</Typo>
                <Typo type={TypoType.Text1} color='var(--color-grey)'>{t('introDown')}</Typo>
            </TextContainer>
        </AboutContainer>
    )
})

export default AboutSection;