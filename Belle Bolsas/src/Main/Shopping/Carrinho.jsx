import Login from "../Login/Login"
import Home from "../Home/Home"

export default function Carrinho(){
    
    function ShowHome(){
        var Login = window.document.querySelector("div#Login").style.display = "none"
        var Home = window.document.querySelector("div#Home").style.display = "block"
        var Carrinho = window.document.querySelector("div#Carrinho").style.display = "none"
    }

    return(
        <div id="Carrinho">
            <div className="CarrinhoVazio">
                <p>Seu carrinho de compras ainda está vazio!</p>
                <input onClick={ShowHome} type="button" value="Voltar a página Inicial" />
            </div>
        </div>
    )
}