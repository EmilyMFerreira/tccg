import { Link } from 'react-router-dom'
import './css/funcio.css'

function Funcionamento() {
    return (
    <>

    <header>
    <h1>Funcionamento</h1>
    </header>

        <div className="func1">
      <p>
    O Arduino é uma plataforma amplamente utilizada na prototipagem eletrônica graças à sua facilidade de programação e implantação. Hoje faremos uso dessas características para 
    desenvolver um robô seguidor de linha e entender na prática como essas máquinas amplamente utilizadas na indústria funcionam.
    </p>
    </div>

        <div className="func2">
    <p>
    E pensando no problema que vários escritórios tem em questão a movimentação de documentos e etc.
    Pensamos em uma forma de resolver esse problema.
    O Guido é um robô móvel guiado por linhas, tendo a função de transportar materiais de forma eficiente em ambientes 
    onde ele seja útil e possa ajudar na realização de atividades.
    </p>
    </div>

<li>
                            <Link to={'/'}>Home</Link>
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

    
    </>
     )
    }
    
    export default Funcionamento