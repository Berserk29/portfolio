import HorizontalSection from "./component/horizontalSection/horizontalSection.component"

import { Container } from "./App.style"

function App() {

  return (
    <div >
        <Container color="red"/>
        <Container color="turquoise"/>

        <HorizontalSection />

        <Container color="purple"/>
    </div>
  )
}
export default App
