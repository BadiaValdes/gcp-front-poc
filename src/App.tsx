import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

//chacra-ui components
import { Container } from "@chakra-ui/react"
import { NotFound } from "./pages/NotFound/NotFound";
import { Register } from "./pages/Register/Register";
import { AppLayout } from "./components/header/app-layout/AppLayout";

import { firebaseConfig } from "./firebase/config";
import { initializeApp } from "firebase/app";

function App() {
  initializeApp(firebaseConfig);

  return (
    <Container h={'100vh'} px='0' bg={'vtm_darkblue'}  maxW='100%'>
      <Routes >
        <Route path="/" element={<AppLayout />} >
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="auth" >
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>  
                  
        <Route path="*" element={<NotFound />} />
      </Routes>    
    </Container>            
  )
}

export default App
