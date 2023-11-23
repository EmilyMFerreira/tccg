import { useState } from "react"
import "./index.css"

import { List, X } from "@phosphor-icons/react"
import index from "../imagens/GUIDO 1.png"
import { Link } from "react-router-dom"

function Header() {
    const [abrirFechar, setAbrirFechar] = useState(false)

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                <Link to="/">Home</Link>
             <Link to="/objetivo">Objetivo</Link>
             <Link to="/funcionamento">Funcionamento</Link>
             <Link to="/componentes">Componentes</Link>
             <Link to="/bibliografia">Bibliografia</Link>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <img src= {index} alt="guido" />

            <nav>
            <Link to="/">Home</Link>
             <Link to="/objetivo">Objetivo</Link>
             <Link to="/funcionamento">Funcionamento</Link>
             <Link to="/componentes">Componentes</Link>
             <Link to="/bibliografia">Bibliografia</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header