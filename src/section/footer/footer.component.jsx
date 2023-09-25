import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import mediaQuery from "../../helper/mediaQuery";

import CircleLink from "../../component/circleLink/circleLink.component";
import Typo, { TypoType } from "../../component/typo/typo.component";

import { FooterContainer, LinkContainer, FlexContainer, ResumeLink } from "./footer.styled";
import { circleArr, linkArr } from "./footer.data";
import resumePath from '../../assets/resume/Olivier_Trudeau_resume.pdf'

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
            {   !isTablet &&
                <FlexContainer justify='flex-start'>
                    <Typo type={TypoType.Headline5}>Olivier Trudeau</Typo>
                </FlexContainer> 
            } 
            <LinkContainer>
                    {linkArr.map((el,i) => (
                        el.text === 'resume' ? (
                            <ResumeLink key={i} href={resumePath} download>
                                <Typo type={TypoType.Text5} color="var(--color-grey)" >{t(el.text)}</Typo>
                            </ResumeLink>
                        ) : (
                            <div key={i} onClick={() => scrollToHandler(ref[el.link])}>
                                <Typo  type={TypoType.Text5} color="var(--color-grey)">{t(el.text)}</Typo>
                            </div>    
                        )
                    ))} 
            </LinkContainer>
            <FlexContainer justify='flex-end'>
                { circleArr.map((el,i) => <CircleLink key={i} props={el}/> ) }
            </FlexContainer>
        </FooterContainer>
    )
})

export default Footer;