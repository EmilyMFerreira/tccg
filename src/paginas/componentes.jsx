import { Link } from 'react-router-dom'
import "./css/comp.css"

import componentes from "../imagens/componentes.png"


function Componentes() {
    return (
      <>


<div className="titulo">
   <h1> Componentes</h1>
</div>

<br />
<div className="compimg">
    <img src={componentes} alt="" />
</div>

    <br />

<div className="comp">
 <p>
    <ul>
       <strong> <li>Kit Arduino Robótica R$ 259,90 </li></strong>
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

<br />


<div className="sensor">
    <h2>Sensor reflexivo infravermelho</h2>
     </div>

        <br />

<div className="contsensor">
    <p>
    Um sensor de obstáculo reflexivo infravermelho é um dispositivo eletrônico que é usado para detectar a presença de objetos ou obstáculos com base na reflexão de luz infravermelha. Esses sensores são frequentemente utilizados em projetos de robótica, automação e sistemas de controle para evitar colisões ou para rastrear objetos.
    </p>
    <br />
    </div>
   
    

        </>
     )
    }
    
    export default Componentes