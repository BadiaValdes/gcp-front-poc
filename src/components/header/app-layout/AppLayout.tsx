import { Outlet } from "react-router-dom"
import { Header } from "../Header"

import { Container } from "@chakra-ui/react"


export const AppLayout = () => {
  return (
    <>
        <Header/>
        
        <Container py={6} maxW='container.lg' color={'white'}>
            <Outlet/>
        </Container>
    </>
  )
}
