import { forwardRef } from "react";

import Typo, { TypoType } from "../../component/typo/typo.component";
import { AboutContainer, TextContainer } from "./aboutSection.styled";

import CircleHeading from "../../component/circleHeading/circleHeading.component";
import { useTranslation } from "react-i18next";
import ButtonColor from "../../component/buttonColor/buttonColor.component";

const AboutSection = forwardRef(({props}, ref) => {
    const {t} = useTranslation();

    return (
        <AboutContainer ref={ref}>
            <CircleHeading title={t('titleAboutMe')}/>
            <TextContainer>
                <Typo type={TypoType.Headline4} color='var(--color-grey)'>{t('introUp')}</Typo>
                <Typo type={TypoType.Text1} color='var(--color-grey)'>{t('introDown')}</Typo>
            </TextContainer>
        </AboutContainer>
    )
})

export default AboutSection;