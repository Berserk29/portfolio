import { SkillContainer } from "./skillSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component"
import Physics from "../../component/physics/physics.component";


const SkillSection = () => {
    return (
        <SkillContainer>
            <Typo type={TypoType.Headline2}>Skills</Typo>
            {/* TESTING */}
            {/* <Physics /> */}
        </SkillContainer>
    )
}

export default SkillSection;