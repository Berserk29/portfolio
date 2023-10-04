import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import { SkillContainer } from "./skillSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component"
import PhysicsCanvas from "../../component/physics/physicsCanvas.component";


const SkillSection = () => {
    const {t} = useTranslation()
    const {ref , inView} = useInView()
    return (
        <SkillContainer ref={ref}>
            <Typo type={TypoType.Headline2}>{t('skills')}</Typo>
            <PhysicsCanvas inView={inView}/>
        </SkillContainer>
    )
}

export default SkillSection;