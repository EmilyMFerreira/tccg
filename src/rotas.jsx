import { Routes, Route } from 'react-router-dom'
import Home from './paginas/home'
import Funcionamento from './paginas/funcionamento'
import Componentes from './paginas/componentes'
import Objetivo from './paginas/objetivo'
import Bibliografia from './paginas/bibliografia'


function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/funcionamento" element={<Funcionamento />}/>
            <Route path="/componentes" element={<Componentes />}/>
            <Route path="/objetivo" element={<Objetivo />}/>
            <Route path="/bibliografia" element={<Bibliografia />}/>
        </Routes>
    )
}

export default Rotas