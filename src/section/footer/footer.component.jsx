import Typo, { TypoType } from "../../component/typo/typo.component";
import { FooterContainer } from "./footer.styled";

const Footer = () => {
    return (
        <FooterContainer>
            <Typo type={TypoType.Headline3}>name</Typo>
            <Typo type={TypoType.Headline3}>link</Typo>
            <Typo type={TypoType.Headline3}>circle</Typo>
        </FooterContainer>
    )
}

export default Footer;