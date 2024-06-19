export default function Footer(){
    return(
        <div className="Footer">
            <i class="fab fa-instagram"></i>
            <div className="Footer_email">
               <input className="Footer_emailbtn" type="email" name="email" id="email" placeholder="Gostaria de receber promoções?" autoComplete="off" />
               <input className="Footer_emailEnvio" type="button" value="Enviar" />
            </div>
            <div className="BandeirasDeCartoes"></div>
            <p>Site desenvolvido por Thyale MD</p>
        </div>
    )
}