import { forwardRef } from "react";

import { ProjectContainer, CardContainer } from "./projectSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component";
import ProjectCard from "../../component/projectCard/projectCard.component";
import { projectCardArr } from "./projectSection.data";

const ProjectSection = forwardRef(({props},ref) => {
    return (
        <ProjectContainer ref={ref}>
            <Typo type={TypoType.Headline2} color="var(--color-cream)">Project</Typo>
            <CardContainer>
                {projectCardArr.map((el,i) => <ProjectCard key={i} justify={ i % 2 === 0 ? 'flex-start' : 'flex-end'} props={el}/>)}
            </CardContainer>
        </ProjectContainer>
    )
})

export default ProjectSection;
