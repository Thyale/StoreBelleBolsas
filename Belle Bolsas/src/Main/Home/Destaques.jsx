import Swal from 'sweetalert2';
import Header from '../../Header/Header';
import { useState } from 'react';
import BolsaDestaques1 from "../../img/BolsaDestaques1.png";
import BolsaDestaques2 from "../../img/BolsaDestaques2.png";
import BolsaDestaques3 from "../../img/BolsaDestaques3.png";
import BolsaDestaques4 from "../../img/BolsaDestaques4.png";
import BolsaDestaques5 from "../../img/BolsaDestaques5.png";
import BolsaDestaques6 from "../../img/BolsaDestaques6.png";

export default function Destaques(){

    const [carrinho, setCarrinho] = useState(false);

    function CompraFeita() {
        setCarrinho(true);

        Swal.fire({
            icon: 'success',
            title: 'Bolsa adicionada ao carrinho!',
            showConfirmButton: false,
            timer: 1500,
        });

        var carrinhoIcon = window.document.querySelector("span#CarrinhoIcon");
        if (carrinhoIcon) {
            carrinhoIcon.style.color = "green";
        }else{
            carrinhoIcon.style.color = "white";
        }
    }

    return(
        <div id="Destaques">
            <h1>DESTAQUES</h1>
            <div className="DivGeralDestaques">
                <div>
                    <img src={BolsaDestaques1}/>
                    <p>BolsaFashion</p>
                    <p>R$ 189,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
                <div>
                    <img src={BolsaDestaques2}/>
                    <p>Bolsa Versátil</p>
                    <p>R$ 148,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
                <div>
                    <img src={BolsaDestaques3}/>
                    <p>Bolsa Transverssal</p>
                    <p>R$ 109,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
                <div>
                    <img src={BolsaDestaques4}/>
                    <p>Bolsa Deluxe</p>
                    <p>R$ 99,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
                <div>
                    <img src={BolsaDestaques5}/>
                    <p>Bolsa Verão</p>
                    <p>R$ 67,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
                <div>
                    <img src={BolsaDestaques6}/>
                    <p>Bolsa Stillus</p>
                    <p>R$ 126,99</p>
                    <input type="button" onClick={CompraFeita} value="Comprar" />
                </div>
            </div>
        </div>
    )
}