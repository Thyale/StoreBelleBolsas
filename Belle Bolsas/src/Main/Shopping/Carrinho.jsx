import React, { useEffect } from 'react';
import { useState } from "react";
import Login from "../Login/Login"
import Home from "../Home/Home"

import BolsaDestaques1 from "../../img/BolsaDestaques1.png";
import BolsaDestaques2 from "../../img/BolsaDestaques2.png";
import BolsaDestaques3 from "../../img/BolsaDestaques3.png";
import BolsaDestaques4 from "../../img/BolsaDestaques4.png";
import BolsaDestaques5 from "../../img/BolsaDestaques5.png";
import BolsaDestaques6 from "../../img/BolsaDestaques6.png";

export default function Carrinho(){
    
    function ShowHome(){
        var Login = window.document.querySelector("div#Login").style.display = "none"
        var Home = window.document.querySelector("div#Home").style.display = "block"
        var Carrinho = window.document.querySelector("div#Carrinho").style.display = "none"
    }

    const RemoverProduto = (num) => {
        if (num === 1) {
            document.querySelector("div.produto1").style.display = "none";
            setQuantidade1(1)
        } else if (num === 2) {
            document.querySelector("div.produto2").style.display = "none";
            setQuantidade2(1)
        } else if (num === 3) {
            document.querySelector("div.produto3").style.display = "none";
            setQuantidade3(1)
        } else if (num === 4) {
            document.querySelector("div.produto4").style.display = "none";
            setQuantidade4(1)
        } else if (num === 5) {
            document.querySelector("div.produto5").style.display = "none";
            setQuantidade5(1)
        } else if (num === 6) {
            document.querySelector("div.produto6").style.display = "none";
            setQuantidade6(1)
        }
    };

    const [quantidade1,setQuantidade1] = useState(1)
    const [quantidade2,setQuantidade2] = useState(1)
    const [quantidade3,setQuantidade3] = useState(1)
    const [quantidade4,setQuantidade4] = useState(1)
    const [quantidade5,setQuantidade5] = useState(1)
    const [quantidade6,setQuantidade6] = useState(1)
    

    const AdionarMais = (quant) =>{
        if(quant == 1){
            setQuantidade1(quantidade1 + 1)
        }else if(quant == 2){
            setQuantidade2(quantidade2 + 1)
        }else if(quant == 3){
            setQuantidade3(quantidade3 + 1)
        }else if(quant == 4){
            setQuantidade4(quantidade4 + 1)
        }else if(quant == 5){
            setQuantidade5(quantidade5 + 1)
        }else if(quant == 6){
            setQuantidade6(quantidade6 + 1)
        }
    }

    const Remover = (remov) =>{
        if(remov == 1){
            setQuantidade1(quantidade1 - 1)
        }else if(remov == 2){
            setQuantidade2(quantidade2 - 1)
        }else if(remov == 3){
            setQuantidade3(quantidade3 - 1)
        }else if(remov == 4){
            setQuantidade4(quantidade4 - 1)
        }else if(remov == 5){
            setQuantidade5(quantidade5 - 1)
        }else if(remov == 6){
            setQuantidade6(quantidade6 - 1)
        }
    }


    return(
        <div id="Carrinho">

            <div className="CarrinhoProdutos">

                <div className="produto1" id="Produtos">
                    <div>
                       <img src={BolsaDestaques1}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Fashion</p>
                           <p>R$ 189,99</p> 
                           <div className='QuantidadeProduto'>
                              <p>{quantidade1}</p>
                              <p onClick={() => Remover(1)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(1)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(1)} id="removerItem">Remover</p>
                </div>

                <div className="produto2" id="Produtos">
                    <div>
                       <img src={BolsaDestaques2}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Versátil</p>
                           <p>R$ 148,99</p>
                           <div className='QuantidadeProduto'>
                              <p>{quantidade2}</p>
                              <p onClick={() => Remover(2)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(2)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(2)} id="removerItem">Remover</p>
                </div>

                <div className="produto3" id="Produtos">
                    <div>
                       <img src={BolsaDestaques3}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Transverssal</p>
                           <p>R$ 109,99</p>
                           <div className='QuantidadeProduto'>
                              <p>{quantidade3}</p>
                              <p onClick={() => Remover(3)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(3)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(3)} id="removerItem">Remover</p>
                </div>

                <div className="produto4" id="Produtos">
                    <div>
                       <img src={BolsaDestaques4}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Deluxe</p>
                           <p>R$ 99,99</p>
                           <div className='QuantidadeProduto'>
                              <p>{quantidade4}</p>
                              <p onClick={() => Remover(4)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(4)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(4)} id="removerItem">Remover</p>
                </div>

                <div className="produto5" id="Produtos">
                    <div>
                       <img src={BolsaDestaques5}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Verão</p>
                           <p>R$ 67,99</p>
                           <div className='QuantidadeProduto'>
                              <p>{quantidade5}</p>
                              <p onClick={() => Remover(5)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(5)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(5)} id="removerItem">Remover</p>
                </div>

                <div className="produto6" id="Produtos">
                    <div>
                       <img src={BolsaDestaques6}/>
                       <div>
                           <p className="tituloBolsa">Bolsa Stillus</p>
                           <p>R$ 126,99</p>
                           <div className='QuantidadeProduto'>
                              <p>{quantidade6}</p>
                              <p onClick={() => Remover(6)} className='QuantidadeProdutoRemover'>-</p>
                              <p onClick={() => AdionarMais(6)} className='QuantidadeProdutoAdicionar'>+</p>
                           </div>
                       </div>
                    </div>
                    <p onClick={() => RemoverProduto(6)} id="removerItem">Remover</p>
                </div>

            </div>

            <div className="CarrinhoFinalizacao">
                <p className='CarrinhoValor'>Valor total: <strong>R$00,00</strong></p>
                <p className='endercoentrega'>Endereço de entrega:</p>
                <input className='btnendereco' type="text" name="enderecco" id="enderecco" placeholder='Endereço Completo' autoComplete='off'/>
                <p className='obs'>Obs: Adicione produtos antes de acessar essa área.</p>
                <input className='btnfinalizar' type="button" value="Finalizar compra" />
            </div>

            <input onClick={ShowHome} className='btnComprar' type="button" value="Continuar comprando!" />
        </div>
    )
}