import { SkillContainer } from "./skillSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component"


const SkillSection = () => {
    return (
        <SkillContainer>
            <Typo type={TypoType.Headline2}>Skills</Typo>
        </SkillContainer>
    )
}

export default SkillSection;