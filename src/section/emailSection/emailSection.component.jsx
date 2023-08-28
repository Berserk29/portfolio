import { EmailContainer } from './emailSection.styled';

import Typo, { TypoType } from '../../component/typo/typo.component'

const EmailSection = () => {
    return (
        <EmailContainer>
            <Typo type={TypoType.Headline2} color='var(--color-cream)'>Get in touch</Typo>
        </EmailContainer>
    )
}

export default EmailSection;