import { BtnContainer } from "./emailBtn.styled";

const EmailBtn = ({children}) => {
    const clickHandler = () => window.location.href = 'mailto:oliviertrudeau777@gmail.com'

    return(
        <BtnContainer onClick={clickHandler}>
           {children}
        </BtnContainer>
    )
}

export default EmailBtn;