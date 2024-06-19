export default function Login(){
    return(
        <div id="Login">
            <h1>Iniciar Sessão</h1>
            <form>
                <div className="Login_inputs">
                   <label htmlFor="Email"><p>Email</p></label>
                   <input type="email" name="Email" id="Email" placeholder="ex.: seuemail@email.com.br" autoComplete="off" required/>
                   <label htmlFor="senha"><p>Senha</p></label>
                   <input type="password" name="senha" id="senha" placeholder="ex.: seusenha" autoComplete="off" required/>
                </div>
                <div className="Login_senha">
                    <a href="#">Esqueceu a senha?</a>
                </div>
                <div className="Login_Loginbtn">
                    <input type="button" value="iniciar sessão" />
                </div>
                <p className="Login_Esqueceu">Não possui uma conta ainda? <a href="#">Criar uma conta</a></p>
            </form>
        </div>
    )
}