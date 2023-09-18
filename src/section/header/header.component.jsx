import { useState, useEffect } from "react";

import {
    Container,
    HeaderImg,
    AnimationContainer,
    ContainerBelow,
} from "./header.styled";

import HeaderName from "../../component/headerName/headerName.component";
import HeaderMarquee from "../../component/headerMarquee/headerMarquee.component";
import ButtonLng from "../../component/buttonLng/buttonLng.component";
import headingImg from "../../assets/image/header_img.jpg"


const Header = () => {
    const [animationOn, setAnimationOn] = useState(false)
    const [endAnimation, setEndAnimation] = useState(false)
    
    const wait = (second, setState) => setTimeout(() => setState(true), second * 1000)

    useEffect(() => {
        wait(2.9, setAnimationOn)
        wait(3.5, setEndAnimation)
    }, [])

    useEffect(() => {
        const preventDefault = event => event.preventDefault();
        
        // Prevent the movement at the beginning of the animation
        window.addEventListener('wheel', preventDefault, {passive: false});
        window.addEventListener('touchmove', preventDefault, {passive: false})
        window.addEventListener('keydown', preventDefault)

        // Remove the event after the starting animation finish (2.9s)
        setTimeout(() => {
            window.removeEventListener('wheel', preventDefault);
            window.removeEventListener('touchmove', preventDefault)
            window.removeEventListener('keydown', preventDefault)
        }, 2900)
    },[])

    return (
        <> 
            { !endAnimation ? <Container><AnimationContainer/></Container> : null }
            <ContainerBelow changeColor={animationOn} >
                <ButtonLng />
                <HeaderName/>
                <HeaderImg src={headingImg} endAni={endAnimation}/>
                <HeaderMarquee />
            </ContainerBelow>
        </>
    )
}

export default Header;