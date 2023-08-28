import Typo, { TypoType } from "../../component/typo/typo.component";
import { ProjectContainer } from "./projectSection.styled";

const ProjectSection = () => {
    return (
        <ProjectContainer>
            <Typo type={TypoType.Headline2} color="var(--color-cream)">Project</Typo>
        </ProjectContainer>
    )
}

export default ProjectSection;
