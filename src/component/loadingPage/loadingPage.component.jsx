import { useState, useEffect } from "react";

import { Container, HeaderImg, AnimationContainer, ContainerBelow, NameContainer} from "./loadingPage.styled";
import { loadingImg } from "./loadingPage.data";

import InfiniteText from "../infiniteText/infiniteText.component";
import Typo, { TypoType } from "../typo/typo.component";

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
                <NameContainer><Typo type={TypoType.Headline3B}>Olivier</Typo></NameContainer>
                <HeaderImg src={loadingImg} endAni={endAnimation}/>
                <InfiniteText />
            </ContainerBelow>
        </>
    )
}

export default LoadingPage;