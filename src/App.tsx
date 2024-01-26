import { Header } from "./components/header/Header";
import { Home } from "./components/Home/Home";
import { Container } from "@chakra-ui/react"

function App() {

  return (
    <>
      <Header/>
      
      <Container h={'100vh'} bg={'vtm_darkblue'}  maxW='100%'>
        <Container py={6} maxW='container.lg'>
          <Home/>
        </Container>
      </Container>      
    </>
  )
}

export default App
