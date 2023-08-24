import { useState, useEffect, useRef } from "react";

import { OverflowContainer} from "./marquee.styled"
import MarqueeText from "../marqueeText/marqueeText.component";

import { marqueeArr } from "./marquee.data";
import { debounce, throttle } from "../../helper/helperFunction";

const Marquee = ({endAni}) => {
    const [animationSpeed, setAnimationSpeed] = useState(0.3)


    useEffect(() => {

        // INFO (debounce) if the difference betweeen scroll is greater than 150ms --> resetAnimation
        const resetAnimation = () => setAnimationSpeed(0.3)
        const debouncedAnimation = debounce(resetAnimation, 150);

        const handleScroll = () => {
            setAnimationSpeed(1.2)
            debouncedAnimation();
        }

        // INFO (throttle) call each handleScroll with a interval of 100ms --> limited the number of scroll envent 
        window.addEventListener('scroll', throttle(handleScroll, 100))
        return () => window.removeEventListener('scroll', handleScroll) 
    },[])

    
    useEffect(() => {
        !endAni ? setAnimationSpeed(15) : setAnimationSpeed(0.3)
    }, [endAni])

    return (
        <OverflowContainer>
            { marqueeArr.map((el,i) => (
                <MarqueeText 
                    key={i} 
                    props={el}
                    animationSpeed={animationSpeed} 
                />) 
            )}
        </OverflowContainer>
    )
}

export default Marquee;