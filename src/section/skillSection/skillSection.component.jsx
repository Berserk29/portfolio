import { SkillContainer } from "./skillSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component"
import PhysicsCanvas from "../../component/physics/physicsCanvas.component";


const SkillSection = () => {
    return (
        <SkillContainer>
            <Typo type={TypoType.Headline2}>Skills</Typo>
            <PhysicsCanvas />
        </SkillContainer>
    )
}

export default SkillSection;