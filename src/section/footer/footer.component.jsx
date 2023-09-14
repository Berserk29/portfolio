import Circle from "../../component/circle/circle.component";
import Typo, { TypoType } from "../../component/typo/typo.component";
import { FooterContainer, LinkContainer, FlexContainer, ResumeLink } from "./footer.styled";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import { circleArr, linkArr } from "./footer.data";
import { forwardRef } from "react";

import resumePath from '../../assets/resume/Olivier_Trudeau_resume.pdf'
import { useTranslation } from "react-i18next";

const Footer = forwardRef(({props},ref) => {
    const {t} = useTranslation()
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
                        el.text === 'resume' ? (
                            <ResumeLink key={i} href={resumePath} download>
                                <Typo type={TypoType.Text5} color="var(--color-black)" >{t(el.text)}</Typo>
                            </ResumeLink>
                        ) : (
                            <div key={i} onClick={() => scrollToHandler(ref[el.link])}>
                                <Typo  type={TypoType.Text5} color="var(--color-black)">{t(el.text)}</Typo>
                            </div>    
                        )
                    ))} 
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