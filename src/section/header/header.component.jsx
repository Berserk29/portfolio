import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import {
    Container,
    HeaderImg,
    AnimationContainer,
    ContainerBelow,
} from "./header.styled";

import HeadingName from "../../component/headerName/headerName.component";
import Marquee from "../../component/marquee/marquee.component";
import headingImg from "../../assets/image/header_img.png"


const Header = () => {
    const {ref, inView} = useInView()
    const [animationOn, setAnimationOn] = useState(false)
    const [endAnimation, setEndAnimation] = useState(false)
    
    const wait = (second, setState) => setTimeout(() => setState(true), second * 1000)

    useEffect(() => {
        wait(2.9, setAnimationOn)
        wait(3.5, setEndAnimation)
    }, [])

    return (
        <> 
            { !endAnimation && <Container><AnimationContainer/></Container> }
            <ContainerBelow changeColor={animationOn} ref={ref}>
                <HeadingName />
                <HeaderImg src={headingImg} endAni={endAnimation}/>
                { inView && <Marquee endAni={endAnimation}/>}
            </ContainerBelow>
        </>
    )
}

export default Header;