import Carrinho from "./Shopping/Carrinho";
import Home from "./Home/Home";
import Login from "./Login/Login";

export default function Corpo(){
    return(
        <div>
            <Home />
            <Login />
            <Carrinho />
        </div>
    )
}