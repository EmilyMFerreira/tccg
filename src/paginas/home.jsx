
import { Link } from 'react-router-dom'
import "./css/home.css"

function Home() {
    return (
    <>
        <header>
        <h1>Bem-Vindo(a)!!</h1>
        </header>

        <main>
        <div className="img1">
        <img src="src/imagens/home.png" alt="" />
        </div>

            <div className="cont1">
         <p>Seja bem-vindo ao emocionante mundo da inovação tecnológica sobre rodas! Apresentamos a você nosso Carrinho controlado por arduino, uma criação que une a magia da robótica com a versatilidade da programação para ajudar no seu ambiente de trabalho.</p>
            </div>

            <div className="cont2">
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