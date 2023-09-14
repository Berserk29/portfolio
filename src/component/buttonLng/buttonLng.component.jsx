import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ButtonCss, ButtonContainer, ButtonCssActive, LowerContainer } from "./buttonLng.styled";
import { initialLng, lngArr } from "../../helper/i18next";


const ButtonLng = () => {
    const [activeLng, setActiveLng] = useState(initialLng)
    const [showBtn, setShowBtn] = useState(false)
    const {i18n} = useTranslation()
    let timeout;

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng)
        setActiveLng(lng)
        setShowBtn(false)
        localStorage.setItem('lng', lng);
    }

    const mouseEnterHandler = () => {
        clearTimeout(timeout)
        setShowBtn(true)
    }
    
    const mouseLeaveHandler = () => {
        timeout = setTimeout(() => {
            setShowBtn(false)
        }, 800)   
    } 

    return (
        <ButtonContainer>
            <ButtonCssActive 
                onMouseEnter={mouseEnterHandler} 
                onMouseLeave={mouseLeaveHandler}
            >{activeLng}</ButtonCssActive>
            <LowerContainer 
                style={{display: showBtn ? 'flex' : 'none'}} 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}    
            >
                { lngArr.map((el,i) => {
                    if(activeLng !== el) return (
                        <ButtonCss key={i} onClick={() => handleChangeLng(el)}>{el}</ButtonCss>
                    )   
                })}
            </LowerContainer>
        </ButtonContainer>
    )
}

export default ButtonLng;