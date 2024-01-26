import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { extendTheme } from '@chakra-ui/react'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  vtm_darkblue: '#244B5A',
  vtm_blue: '#008B97',
  vtm_lightblue: '#02B1B0',
  vtm_green: '#00AF3F',
  vtm_yellowgreen: '#8CC53E',
  vtm_yellow: '#DFDF00',
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </BrowserRouter>,
)