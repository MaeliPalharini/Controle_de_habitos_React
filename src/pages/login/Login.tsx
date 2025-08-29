import { useState } from "react";
import Home from "../home/Home";

function Login() {
    const [isLogged, setIsLogged] = useState(false);

    return (
        <>
            {isLogged ? (
                <Home titulo="Controle de Hábitos" texto="Bem-vindo! Selecione um hábito para concluir hoje." />
            ) : (
                <div>
                    <img
                        src="/assets/logo.png"
                        alt="Logo Vida Saudável"
                        width="400"
                        style={{ marginBottom: "1rem" }}
                    />
                    <h1>Vida Saudável</h1>
                    <p>Faça seu login para acompanhar seus hábitos e mude de vida!</p>
                    <button onClick={() => setIsLogged(true)}>Entrar</button>
                </div>
            )}
        </>
    );
}

export default Login;

