import { Link } from 'react-router-dom'
import './css/Objetivo.css'

function Objetivo() {
    return (
    <>

    <div id="Objetivo">
    <h1>Objetivo</h1>

    <p>
    O nosso pensamento na criação do guido foi facilitar e deixar mas seguro o transporte desses documentos, que
    podem ser perdidos e até danificados,oque pode ser prejudicial.
    </p>

    <p>
    O tipo de cliente que buscamos são escritórios que buscam econimizar tempo transportando documentos.
    Mas é nosso produto pode se adaptar aos interessados de outras áreas.
</p>
</div>

                        <li>
                            <Link to={'/'}>Home</Link>
                        </li>

                         <li>
                            <Link to={'/funcionamento'}>Funcionamento</Link>
                        </li>
                        <li>
                            <Link to={'/componentes'}>Componentes</Link>
                        </li>
                        <li>
                            <Link to={'/bibliografia'}>Bibliografia</Link>
                        </li>

</>
    )
}

export default Objetivo