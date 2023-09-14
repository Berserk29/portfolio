import { EmailContainer, TextContainer } from './emailSection.styled';
import { useTranslation } from 'react-i18next';

import Typo, { TypoType } from '../../component/typo/typo.component'
import EmailBtn from '../../component/emailBtn/emailBtn.component';

const EmailSection = () => {
    const {t} = useTranslation()
    return (
        <EmailContainer>
            <Typo type={TypoType.Headline2} color='var(--color-cream)'>{t('getInTouch')}</Typo>
            <TextContainer>
                <Typo type={TypoType.Text2} color='var(--color-cream)'>{t('emailText')}</Typo>
            </TextContainer>
            <EmailBtn isPrimaryColor={true} >{t('sendEmail')}</EmailBtn>
        </EmailContainer>
    )
}

export default EmailSection;