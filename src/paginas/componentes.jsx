import { Link } from 'react-router-dom'
import "./css/comp.css"


function Componentes() {
    return (
      <>


<header>
    <h1>Nosso Produto:</h1>
</header>


<div className="compimg">
    <img src="./src/imagens/funcionamento1-11.png" alt="" />
</div>



<div id="componentes">
    <h1>Materiais/Componentes</h1>

<p>
<ul>
<li>Kit de carrinho arduino</li>
<li>1x arduino Uno + cabo USB</li>
<li>2x Sensores de obstáculos infravermelho</li>
</ul>
</p>

</div>

<div className="sensor">
    <h2>Sensor Ultrassônico</h2>

    <p>
    Ele funciona através de um sistema de reflexão que será aceso 
    na placa indicando presença de um obstáculo ou objeto.
    Os sensores ultrassônicos detectam qualquer cor, com a mesma distância. Mais vantajoso em relação aos sensores fotoelétricos por difusão que não são imunes as cores dos objetos detectados.
    </p>

    </div>
    

        </>
     )
    }
    
    export default Componentes