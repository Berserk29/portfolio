import { forwardRef } from "react";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { ProjectContainer, CardContainer } from "./projectSection.styled";
import Typo, { TypoType } from "../../component/typo/typo.component";
import ProjectCard from "../../component/projectCard/projectCard.component";
import { projectCardArr } from "./projectSection.data";
import ProjectCardTouch from "../../component/projectCardTouch/projectCardTouch.component";

const ProjectSection = forwardRef(({props},ref) => {
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const hasTouchscreen = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    return (
        <ProjectContainer ref={ref}>
            <Typo type={TypoType.Headline2} color="var(--color-cream)">Project</Typo>
            <CardContainer>
                {projectCardArr.map((el,i) => (
                    isTablet || hasTouchscreen ?
                    <ProjectCardTouch key={i} justify={ i % 2 === 0 ? 'flex-start' : 'flex-end'} props={el}/>
                    :
                    <ProjectCard key={i} justify={ i % 2 === 0 ? 'flex-start' : 'flex-end'} props={el}/>
                ))}
            </CardContainer>
        </ProjectContainer>
    )
})

export default ProjectSection;
