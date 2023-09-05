import { EmailContainer, TextContainer } from './emailSection.styled';

import Typo, { TypoType } from '../../component/typo/typo.component'
import EmailBtn from '../../component/emailBtn/emailBtn.component';

const EmailSection = () => {
    return (
        <EmailContainer>
            <Typo type={TypoType.Headline2} color='var(--color-cream)'>Get in touch</Typo>
            <TextContainer>
                <Typo type={TypoType.Text2} color='var(--color-cream)'>I’m looking for new opportunities at this moment. if you are interested in my work, i would love to find a time to chat over zoom with a cup of tea if you like!</Typo>
            </TextContainer>
            <EmailBtn isPrimaryColor={true} >Send me an email</EmailBtn>
        </EmailContainer>
    )
}

export default EmailSection;