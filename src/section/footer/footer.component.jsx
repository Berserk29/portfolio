import Circle from "../../component/circle/circle.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import { FooterContainer, LinkContainer, FlexContainer, ResumeLink } from "./footer.styled";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { circleArr, linkArr } from "./footer.data";
import { forwardRef } from "react";
import resume from '../../assets/resume/OlivierTrudeau_resume.pdf'


const Footer = forwardRef(({props},ref) => {
    const isTablet = useMediaQuery(mediaQuery.useTablet)
    const isSmTablet = useMediaQuery(mediaQuery.useSmTablet)

    const scrollToHandler = (ref) => {
        if(ref && ref.current)
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
    }

    return (
        <FooterContainer>
            {   !isSmTablet &&
                <FlexContainer justify='flex-start'>
                    <Typo type={TypoType.Headline5}>Olivier Trudeau</Typo>
                </FlexContainer> 
            } 
            <LinkContainer>
                {linkArr.map((el,i) => (
                    <div key={i} onClick={() => scrollToHandler(ref?.[i])}>
                        <Typo  type={TypoType.Text5} color="var(--color-black)">{el}</Typo>
                    </div>    
                ))}    
                <ResumeLink href={resume} download={'Olivier_Trudeau_Resume'}>
                    <Typo type={TypoType.Text5} color="var(--color-black)" >resume</Typo>
                </ResumeLink>
            </LinkContainer>
            {   !isTablet &&
                <FlexContainer justify='flex-end'>
                    { circleArr.map((el,i) => <Circle key={i} props={el}/> ) }
                </FlexContainer>
            }
        </FooterContainer>
    )
})

export default Footer;