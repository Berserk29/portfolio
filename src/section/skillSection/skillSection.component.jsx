import { SkillContainer } from "./skillSection.styled";
import { useTranslation } from "react-i18next";
import Typo, { TypoType } from "../../component/typo/typo.component"
import PhysicsCanvas from "../../component/physics/physicsCanvas.component";


const SkillSection = () => {
    const {t} = useTranslation()
    return (
        <SkillContainer>
            <Typo type={TypoType.Headline2}>{t('skills')}</Typo>
            <PhysicsCanvas />
        </SkillContainer>
    )
}

export default SkillSection;