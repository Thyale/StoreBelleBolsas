import React, { useEffect } from 'react';
import { useState } from "react";
import Swal from 'sweetalert2';
import Login from "../Login/Login"
import Home from "../Home/Home"

import BolsaDestaques1 from "../../img/BolsaDestaques1.png";
import BolsaDestaques2 from "../../img/BolsaDestaques2.png";
import BolsaDestaques3 from "../../img/BolsaDestaques3.png";
import BolsaDestaques4 from "../../img/BolsaDestaques4.png";
import BolsaDestaques5 from "../../img/BolsaDestaques5.png";
import BolsaDestaques6 from "../../img/BolsaDestaques6.png";

export default function Carrinho(){
    
    {/* Voltando para o home e fechando o carrinho*/}
    function ShowHome(){
        var Login = window.document.querySelector("div#Login").style.display = "none"
        var Home = window.document.querySelector("div#Home").style.display = "block"
        var Carrinho = window.document.querySelector("div#Carrinho").style.display = "none"
    }

    {/* Quando clicamos em "remover" o produto será excluido do carrinho e sua quantidade volta para 1 quando adicionado novamente */}
    const RemoverProduto = (num) => {
        if (num === 1 ) {
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

    {/* constantes para controle de quantidade de cada item, inicia com 1 quando colocamos no carrinho */}
    const [quantidade1,setQuantidade1] = useState(1)
    const [quantidade2,setQuantidade2] = useState(1)
    const [quantidade3,setQuantidade3] = useState(1)
    const [quantidade4,setQuantidade4] = useState(1)
    const [quantidade5,setQuantidade5] = useState(1)
    const [quantidade6,setQuantidade6] = useState(1)
    

    {/* adicionando (+1)a quantidade que queremos de cada item */}
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

    {/* removendo (-1) da quantidade que queremos de cada item */}
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

    {/* Declarando que se a quantidade for menor que 1 o produto será automaticamente removido do carrinho e a quantidade do produto zerada para 1 novamente, sem ter que clicar em remover */}
    if(quantidade1< 1){
        document.querySelector("div.produto1").style.display = "none";
        setQuantidade1(1)
    }else if(quantidade2< 1){
        document.querySelector("div.produto2").style.display = "none";
        setQuantidade2(1)
    }else if(quantidade3 < 1){
        document.querySelector("div.produto3").style.display = "none";
        setQuantidade3(1)
    }else if(quantidade4 < 1){
        document.querySelector("div.produto4").style.display = "none";
        setQuantidade4(1)
    }else if(quantidade5< 1 ){
        document.querySelector("div.produto5").style.display = "none";
        setQuantidade5(1)
    }else if(quantidade6< 1 ){
        document.querySelector("div.produto6").style.display = "none";
        setQuantidade6(1)
    }

    {/* Função Verificar se o cliente colocou o endereço no campo */}
    const [endereco,setEndereco] = useState("")
    function Endereco(x){
        setEndereco(x.target.value)
    }

    {/* Função para finalizar a compra */}
    function FinalizarCompra(){
       if(endereco == ""){
        Swal.fire({
            icon: 'error',
            title: 'Informe seu endereço antes de finalizar a compra!',
            showConfirmButton: false,
            timer: 1500,
        });
       }else{
        Swal.fire({
            icon: 'success',
            title: 'Pedido realizado com sucesso!',
            showConfirmButton: false,
            timer: 1500,
        });
       }

    }



    return(
        <div id="Carrinho">
            {/* Aqui temos a div geral que estão todos os produtos que vai aparecer no carrinho */}
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

            {/* Aqui temos a aréa de finalização do carrinho */}
            <div className="CarrinhoFinalizacao">
                <p className='CarrinhoValor'>Valor total: <strong>R$00,00</strong></p>
                <p className='endercoentrega'>Endereço de entrega:</p>
                <input onChange={Endereco} className='btnendereco' type="text" name="enderecco" id="enderecco" placeholder='Endereço Completo' autoComplete='off'/>
                <p className='obs'>Obs: Adicione produtos antes de acessar essa área.</p>
                <input onClick={FinalizarCompra} className='btnfinalizar' type="button" value="Finalizar compra" />
            </div>

            {/* Aqui temos o botão que volta para o home */}
            <input onClick={ShowHome} className='btnComprar' type="button" value="Continuar comprando!" />
        </div>
    )
}