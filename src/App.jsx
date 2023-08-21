import { useEffect } from "react"

import HorizontalSection from './section/horizontalSection/horizontalSection.component'
import { Container } from "./App.style"
import LoadingPage from "./section/loadingPage/loadingPage.component"
import PageOne from "./section/pageOne/pageOne.component"

function App() {
  // INFO MAKE THE REFRESH COMEBACK TO THE BEGINNING
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  },[])

  return (
    <div >
        <LoadingPage/>
        <PageOne/>
        <Container color="turquoise"/>

        <HorizontalSection />

        <Container color="purple"/>
    </div>
  )
}
export default App
