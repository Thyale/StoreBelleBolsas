import Login from "../Main/Login"
import Home from "../Main/Home/Home"
import Carrinho from "../Main/Shopping/Carrinho"
import IconBelle from "../img/IconBelle.jpeg"

function ShowLogin(){
    var Login = window.document.querySelector("div#Login").style.display = "block"
    var Home = window.document.querySelector("div#Home").style.display = "None"
    var Carrinho = window.document.querySelector("div#Carrinho").style.display = "none"
}

function ShowShop(){
    var Login = window.document.querySelector("div#Login").style.display = "none"
    var Home = window.document.querySelector("div#Home").style.display = "None"
    var Carrinho = window.document.querySelector("div#Carrinho").style.display = "block"
}

function ShowHome(){
    var Login = window.document.querySelector("div#Login").style.display = "none"
    var Home = window.document.querySelector("div#Home").style.display = "block"
    var Carrinho = window.document.querySelector("div#Carrinho").style.display = "none"
}

export default function Header(){
    return(
        <header>

            <div className="Header_Pesquisa">
                <span class="material-symbols-outlined">search</span>
            </div>

            <div className="Header_Logo">
                <img onClick={ShowHome} src={IconBelle} alt="ícone da Loja" />
            </div>

            <div className="Header_Nav">
                <span class="material-symbols-outlined" onClick={ShowLogin}>person</span>
                <span class="material-symbols-outlined" onClick={ShowShop}>shopping_cart</span>
            </div>

        </header>
    )
}