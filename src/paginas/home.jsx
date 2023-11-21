
import { Link } from 'react-router-dom'
import "./css/home.css"

import homeImg from "../imagens/home.png"

function Home() {
    return (
    <>
        <headerhome>
        <h1>Bem-Vindo(a)!!</h1>
        </headerhome>

        <main>
        <div className="img1">
        <img src={homeImg} alt="imagem home" />
        </div>

            <div className="home1">
         <p>Seja bem-vindo ao emocionante mundo da inovação tecnológica sobre rodas! Apresentamos a você nosso Carrinho controlado por arduino, uma criação que une a magia da robótica com a versatilidade da programação para ajudar no seu ambiente de trabalho.</p>
            </div>

            <div className="home2">
                <p>
                E pensando nisso projetamos um robô móvel ou um “carrinho”,que terá a função de fazer esse transporte de forma agilizada.
                Você conhecerá mais sobre navegando em nosso site e pensando nisso projetamos um robô móvel ou um   “carrinho”,que terá a função de fazer esse transporte de forma agilizada.
                 Você conhecerá mais sobre navegando em nosso site.
                </p>
            </div>


        </main>
        </>
    )
}

export default Home