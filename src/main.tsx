import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { extendTheme } from '@chakra-ui/react'
import { ChakraBaseProvider } from '@chakra-ui/react'

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  vtm_darkblue: '#22505F',
  vtm_blue: '#008B95',
  vtm_lightblue: '#00B2A9',
  vtm_green: '#00AF3F',
  vtm_yellowgreen: '#77AB800',
  vtm_yellow: '#DFDF00',
}
const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraBaseProvider theme={theme}>
    <App />
  </ChakraBaseProvider>,
)