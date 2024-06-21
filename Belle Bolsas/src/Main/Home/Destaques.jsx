import Swal from 'sweetalert2';
import BolsaDestaques1 from "../../img/BolsaDestaques1.png";
import BolsaDestaques2 from "../../img/BolsaDestaques2.png";
import BolsaDestaques3 from "../../img/BolsaDestaques3.png";
import BolsaDestaques4 from "../../img/BolsaDestaques4.png";
import BolsaDestaques5 from "../../img/BolsaDestaques5.png";
import BolsaDestaques6 from "../../img/BolsaDestaques6.png";
import BolsaN1 from "../../img/BolsaN1.png";
import BolsaN2 from "../../img/BolsaN2.png";
import BolsaN3 from "../../img/BolsaN3.png";
import BolsaN4 from "../../img/BolsaN4.png";
import BolsaN5 from "../../img/BolsaN5.png";
import BolsaN6 from "../../img/BolsaN6.png";

export default function Destaques(){


    const CompraFeitaProduto = (param) => {

        Swal.fire({
            icon: 'success',
            title: 'Bolsa adicionada ao carrinho!',
            showConfirmButton: false,
            timer: 1500,
        });


        window.document.querySelector("div#Carrinho").style.height = "100%"

        if (param == 1) {
            window.document.querySelector("div.produto1").style.display = "flex"
        }else if(param == 2){
            window.document.querySelector("div.produto2").style.display = "flex"
        }else if(param == 3){
            window.document.querySelector("div.produto3").style.display = "flex"
        }else if(param == 4){
            window.document.querySelector("div.produto4").style.display = "flex"
        }else if(param == 5){
            window.document.querySelector("div.produto5").style.display = "flex"
        }else if(param == 6){
            window.document.querySelector("div.produto6").style.display = "flex"
        }
      };

    return(
        <div id="Destaques">
            <h1>DESTAQUES</h1>
            <div className="DivGeralDestaques">

                <div>
                   <div className='DivImagens'>
                       <img src={BolsaN1} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques1}/>
                    </div>
                    <p>BolsaFashion</p>
                    <p>R$ 189,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(1)} value="Comprar" />
                </div>

                <div>
                    <div className='DivImagens'>
                       <img src={BolsaN2} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques2}/>
                    </div>
                    <p>Bolsa Versátil</p>
                    <p>R$ 148,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(2)} value="Comprar" />
                </div>

                <div>
                    <div className='DivImagens'>
                       <img src={BolsaN3} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques3}/>
                    </div>
                    <p>Bolsa Transverssal</p>
                    <p>R$ 109,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(3)} value="Comprar" />
                </div>

                <div>
                   <div className='DivImagens'>
                       <img src={BolsaN4} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques4}/>
                    </div>
                    <p>Bolsa Deluxe</p>
                    <p>R$ 99,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(4)} value="Comprar" />
                </div>

                <div>
                    <div className='DivImagens'>
                       <img src={BolsaN5} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques5}/>
                    </div>
                    <p>Bolsa Verão</p>
                    <p>R$ 67,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(5)} value="Comprar" />
                </div>

                <div>
                    <div className='DivImagens'>
                       <img src={BolsaN6} className='imagem2'/>
                       <img className='imagem1' src={BolsaDestaques6}/>
                    </div>
                    <p>Bolsa Stillus</p>
                    <p>R$ 126,99</p>
                    <input type="button" onClick={() => CompraFeitaProduto(6)} value="Comprar" />
                </div>
                
            </div>
        </div>
    )
}