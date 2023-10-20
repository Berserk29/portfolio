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
import headingImg from "../../assets/image/header-img.jpg"
import headingImgMedium from "../../assets/image/header-img-1200.jpg"
import headingImgSmall from "../../assets/image/header-img-800.jpg"
import headingImgSmallest from "../../assets/image/header-img-800.jpg"


const Header = () => {
    const [imageLoad, setImageLoad] = useState(false)
    const [displayOff, setDisplayOff] = useState(false)
    
    const wait = (second, setState) => setTimeout(() => setState(true), second * 1000)

    useEffect(() => {
        let timeout;
        const image = new Image()
        image.src = headingImg;
        image.onload = () => setImageLoad(true)


        // after the image is fully loaded --> timer to stop display the top container
        if(imageLoad) {
          timeout = wait(3, setDisplayOff)
        }

        return () => {
            if(timeout) clearTimeout(timeout)
        }

    }, [imageLoad])

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
            <Container style={{display: displayOff && 'none'}}><AnimationContainer startAnimation={imageLoad}/></Container>
            <ContainerBelow startAnimation={imageLoad}>
                <ButtonLng  startAnimation={imageLoad}/>
                <HeaderName startAnimation={imageLoad}/>
                <HeaderImg 
                    startAnimation={imageLoad} 
                    src={headingImg} 
                    srcSet={`${headingImgSmallest} 600w ,${headingImgSmall} 800w ,${headingImgMedium} 1200w ,${headingImg} 1600w`}
                />
                <HeaderMarquee />
            </ContainerBelow>
        </>
    )
}

export default Header;