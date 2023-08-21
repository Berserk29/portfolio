import { useState, useEffect } from "react";

import { 
    Container,
    HeaderImg,
    AnimationContainer,
    ContainerBelow,
} from "./loadingPage.styled";
import { loadingImg } from "./loadingPage.data";

import InfiniteText from '../../component/infiniteText/infiniteText.component'
import Typo, { TypoType } from "../../component/typo/typo.component";
import LoadingName from "../../component/loadingName/loadingName.component";
import Marquee from "../../component/marquee/marquee.component";

const LoadingPage = () => {
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
            <ContainerBelow changeColor={animationOn}>
                <LoadingName />
                <HeaderImg src={loadingImg} endAni={endAnimation}/>
                <InfiniteText />
                {/* <Marquee /> */}
            </ContainerBelow>
        </>
    )
}

export default LoadingPage;