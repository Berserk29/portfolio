import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useAnimation, motion  } from "framer-motion"

import { TextContainer } from "./movingText.styled"

import Typo from "../typo/typo.component"

const MovingText = ({props}) => {
    const {type, text, duration, isBorderTop, isBorderBottom, threshold} = props
    const control = useAnimation()
    const [ref, inView] = useInView({threshold: threshold})
    
    const variantUp = {
        visible: {opacity: 1, y: 0, transition: {duration: duration}},
        hidden: {opacity: 0, y: '30px'}
    }

    useEffect(() => {
        if(inView) control.start('visible')
    }, [control, inView])


    return (
        <TextContainer 
            ref={ref} 
            variants={variantUp} 
            initial='hidden'
            animate={control}
            isBorderTop={isBorderTop}
            isBorderBottom={isBorderBottom}
        >
            <Typo type={type}>{text}</Typo>
        </TextContainer>
    )
}

export default MovingText;