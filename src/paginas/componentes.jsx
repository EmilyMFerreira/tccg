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



<div id="material">
    <h1>Materiais/Componentes:</h1>
    <p>Para o desenvolvimento deste projeto utilizamos:</p>
    <img src="src/imagens/componentes.png" alt="comps" />
    </div>



<div className="kit">
    <p>Kit de carrinho arduino</p>
</div>

<div className="comp">
 <p>
    <ul>
        <li>R$56,90</li>
        <li>1x chassi de acrílico</li>
        <li>2x motores com roda</li>
        <li>1x adaptador de pilha</li>
        <li>1x arduino + cabo usb</li>
        <li>1x protoboard</li>
        <li>1x ponte H dupla</li>
        <li>20x jumper</li>
    </ul>
 </p>
 </div>



<div className="sensor">
    <h2>Sensor de obstáculo reflexivo infravermelho</h2>
     </div>


<div className="contsensor">
    <p>
    Um sensor de obstáculo reflexivo infravermelho é um dispositivo eletrônico que é usado para detectar a presença de objetos ou obstáculos com base na reflexão de luz infravermelha. Esses sensores são frequentemente utilizados em projetos de robótica, automação e sistemas de controle para evitar colisões ou para rastrear objetos.
    </p>
    </div>
   
    

        </>
     )
    }
    
    export default Componentes