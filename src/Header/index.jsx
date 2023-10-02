import { useState } from "react"
import { Link } from "react-router-dom"
import { List, X } from "@phosphor-icons/react"


function Header() {
    const [abrirFechar, setAbrirFechar] = useState(true)
    

    function handleAbrirFecharMenu() {
        if(abrirFechar) {
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

    
  

  return (
    <header>
        <div className= 'styles.header'>

         <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}><List size={32} /></button>
            </div>
            <div className={`menu ${abrirFechar == true ? "" : "close"}`}>
                <div>
            
                    <button onClick={handleAbrirFecharMenu}>
                        <X size={32} />
                    </button>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={'/home'}>Home</Link>
                        </li>
                        <li>
                            <Link to={'/funcionamento'}>Funcionamento</Link>
                        </li>
                        <li>
                            <Link to={'/componentes'}>Componentes</Link>
                        </li>
                        <li>
                            <Link to={'/objetivo'}>Objetivo</Link>
                        </li>
                        <li>
                            <Link to={'/bibliografia'}>Bibliografia</Link>
                        </li>
                    </ul>
                </nav>
         </div>
        </div>
    </header>
  )
}

export default Header