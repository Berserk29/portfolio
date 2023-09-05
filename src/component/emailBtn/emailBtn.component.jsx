import Typo, { TypoType } from "../typo/typo.component";
import { BtnContainer } from "./emailBtn.styled";

const EmailBtn = ({children, isPrimaryColor}) => {
    const clickHandler = () => window.location.href = 'mailto:oliviertrudeau777@gmail.com'

    return(
        <BtnContainer isPrimaryColor={isPrimaryColor} onClick={clickHandler}>
            <Typo type={TypoType.Text4} color={isPrimaryColor ? 'var(--color-cream)' : 'var(--color-primary)' }>{children}</Typo>
        </BtnContainer>
    )
}

export default EmailBtn;