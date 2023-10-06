import { BrowserRouter } from 'react-router-dom'
import Rotas  from "./rotas"
import "./App.css"

import Header from './Header'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Rotas />
      </BrowserRouter>
      
  )
}

export default App