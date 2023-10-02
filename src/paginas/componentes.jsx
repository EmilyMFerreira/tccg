import { Link } from 'react-router-dom'
import "./css/comp.css"


function Componentes() {
    return (
      <>

<header>
    <h1>Nosso Produto:</h1>
</header>


<div id="comp">
    <h1>Materiais/Componentes</h1>

<ul>
<li>Kit de carrinho arduino</li>
<li>1x arduino Uno + cabo USB</li>
<li>2x Sensores de obstáculos infravermelho</li>
</ul>

</div>

<div className="sensor">
    <p>
    Ele funciona através de um sistema de reflexão que será aceso 
    na placa indicando presença de um obstáculo ou objeto.
    </p>
    </div>
                         <li>
                            <Link to={'/'}>Home</Link>
                        </li>

                         <li>
                            <Link to={'/funcionamento'}>Funcionamento</Link>
                        </li>
                        <li>
                            <Link to={'/objetivo'}>Objetivo</Link>
                        </li>
                        <li>
                            <Link to={'/bibliografia'}>Bibliografia</Link>
                        </li>

        </>
     )
    }
    
    export default Componentes