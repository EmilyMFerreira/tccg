import { useState } from "react"
import "./index.css"

import { List, X } from "@phosphor-icons/react"

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
                <p>Logo</p>
                <button onClick={handleAbrirFecharMenu}>{abrirFechar == true ? <X size={32} /> : <List size={32} />}</button>
            </div>

            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <nav>
                    <a href="/">Home</a>
                    <a href="objetivo">Objetivo</a>
                    <a href="funcionamento">Funcionamento</a>
                    <a href="componentes">Componentes</a>
                    <a href="bibliografia">Bibliografia</a>
                </nav>
            </div>
        </div>

        <div className="menu-desktop">
            <h1>Nossas Páginas</h1>

            <nav>
            <a href="/">Home</a>
             <a href="objetivo">Objetivo</a>
             <a href="funcionamento">Funcionamento</a>
             <a href="componentes">Componentes</a>
             <a href="bibliografia">Bibliografia</a>
            </nav>
        </div>
    </header>
  )
}

export default Header