import HorizontalSection from "./component/horizontalSection/horizontalSection.component"

import { Container, LoadingImg } from "./App.style"
import LoadingPage from "./component/loadingPage/loadingPage.component"
import { loadingImg } from "./component/loadingPage/loadingPage.data"


function App() {

  return (
    <div >
        <LoadingPage/>
        {/* <Container color='var(--color-primary)'>
          <LoadingImg src={loadingImg}/>
        </Container> */}

        <Container color="turquoise"/>

        <HorizontalSection />

        <Container color="purple"/>
    </div>
  )
}
export default App
