import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { 
    Container,
    HeaderImg,
    AnimationContainer,
    ContainerBelow,
} from "./loadingPage.styled";
import { loadingImg } from "./loadingPage.data";

import LoadingName from "../../component/loadingName/loadingName.component";
import Marquee from "../../component/marquee/marquee.component";

const LoadingPage = () => {
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
            { !endAnimation &&
                <Container>
                    <AnimationContainer/>
                </Container>
            }
            <ContainerBelow changeColor={animationOn} ref={ref}>
                <LoadingName />
                <HeaderImg src={loadingImg} endAni={endAnimation}/>
                { inView && <Marquee endAni={endAnimation}/>}
            </ContainerBelow>
        </>
    )
}

export default LoadingPage;