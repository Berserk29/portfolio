import { useEffect, useRef } from "react"

import Header from "./section/header/header.component"
import AboutSection from "./section/aboutSection/aboutSection.component"
import ProjectSection from "./section/projectSection/projectSection.component"
import SkillSection from "./section/skillSection/skillSection.component"
import EmailSection from "./section/emailSection/emailSection.component"
import Footer from "./section/footer/footer.component"

function App() {
  const aboutRef = useRef()
  const projectRef = useRef()
  // INFO MAKE THE REFRESH COMEBACK TO THE BEGINNING
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.focus();
  },[])

  return (
    <>
      <Header/>
      <AboutSection ref={aboutRef}/>
      <ProjectSection ref={projectRef}/>
      <SkillSection />
      <EmailSection/>
      <Footer ref={[projectRef, aboutRef]}/>
    </>
  )
}
export default App
