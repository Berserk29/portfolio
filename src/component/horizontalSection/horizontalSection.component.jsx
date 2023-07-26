import { useRef, useEffect, useState } from "react"

import { StickyParent, Sticky, ScrollSection, Container, TestImg } from "./horizontalSection.styled"

import img1 from '../../assets/test1.webp'
import img2 from '../../assets/test2.webp'
import img3 from '../../assets/test3.png'

const HorizontalSection = () => {
    const scrollParent = useRef(null)
    const scrollSection = useRef(null)
    const [childElNum, setChildElNum] = useState(0)
    
    const scrollHandler = () => {
      const section = scrollSection.current;
      const offsetTop = scrollParent.current.offsetTop;
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      // console.log(percentage)
      percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
      section.style.transform = `translate3d(${-(percentage)}vw, 0 , 0)`
    }
    
    useEffect(() => {
      const handleScrollEvent = () => scrollHandler();
  
      window.addEventListener('scroll', handleScrollEvent);
  
      return () => {
        window.removeEventListener('scroll', handleScrollEvent);
      };
    }, []);

    useEffect(() => {
      setChildElNum(scrollSection.current.childElementCount)
    }, [])
  

    return (
      <StickyParent ref={scrollParent}>
        <Sticky >
          <ScrollSection ref={scrollSection}>
              <Container color="blue"><TestImg src={img1}/></Container>
              <Container color="yellow"><TestImg src={img2}/></Container>
              <Container color="green"><TestImg src={img3}/></Container>
              <Container color="orange"><TestImg src={img1}/></Container>
          </ScrollSection>
        </Sticky>
      </StickyParent>
    )
}

export default HorizontalSection;