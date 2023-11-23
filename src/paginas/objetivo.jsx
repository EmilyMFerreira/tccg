import { Link } from 'react-router-dom'
import './css/objetivo.css'

import objetivo from "../imagens/objetivo.png"

function Objetivo() {
    return (
    <>

<header><h1>Objetivo</h1></header>

<div className="imgobj">
<img src= {objetivo} alt="" />
</div>
        

<div className="obj">
    <p>
    O nosso pensamento na criação do guido foi facilitar e deixar mas seguro o transporte desses documentos, que
    podem ser perdidos e até danificados,oque pode ser prejudicial.
    </p>

    </div>


        <br />

    <header><h1>Público Alvo</h1></header>
    
    <br />

<div className="conteudop">
   <p>
    O tipo de cliente que buscamos são escritórios que buscam econimizar tempo transportando documentos.
    Mas é nosso produto pode se adaptar aos interessados de outras áreas.
   </p>
   
   <br />
   </div>


</>
    )
}

export default Objetivo