import { useEffect } from "react"

import HorizontalSection from "./component/horizontalSection/horizontalSection.component"
import { Container } from "./App.style"
import LoadingPage from "./component/loadingPage/loadingPage.component"
import PageOne from "./component/pageOne/pageOne.component"

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
