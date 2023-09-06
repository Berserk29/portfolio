import { EmailContainer, TextContainer } from './emailSection.styled';

import Typo, { TypoType } from '../../component/typo/typo.component'
import EmailBtn from '../../component/emailBtn/emailBtn.component';

const EmailSection = () => {
    return (
        <EmailContainer>
            <Typo type={TypoType.Headline2} color='var(--color-cream)'>Get in touch</Typo>
            <TextContainer>
                <Typo type={TypoType.Text2} color='var(--color-cream)'>I am currently exploring new opportunities, and if my work aligns with your interests, I would love to schedule a Zoom meeting to discuss potential collaborations over a cup of tea.</Typo>
            </TextContainer>
            <EmailBtn isPrimaryColor={true} >Send me an email</EmailBtn>
        </EmailContainer>
    )
}

export default EmailSection;