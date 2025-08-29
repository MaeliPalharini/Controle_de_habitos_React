import { useEffect, useState } from "react";

interface TarefaProps {
    nome?: string;
    meta?: number;
    onClose?: () => void;
}

export default function Tarefa({ nome = "Hábito", meta = 1, onClose }: TarefaProps) {
    const [count, setCount] = useState(0);
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        if (count >= meta) {
            setMensagem(`Parabéns! Você concluiu "${nome}" hoje!`);
        } else {
            setMensagem("");
        }
    }, [count, meta, nome]);

    const concluirUm = () => setCount((c) => Math.min(c + 1, meta));
    const desfazerUm = () => setCount((c) => Math.max(c - 1, 0));

    return (
        <>
            <h1>Tarefa do Dia</h1>
            {mensagem && <h3>{mensagem}</h3>}

            <div className="tarefa">
                <p className="tarefa-progresso">
                    Progresso: <strong>{count}/{meta}</strong>
                </p>

                <div className="tarefa-marcadores">
                    {Array.from({ length: meta }).map((_, i) => (
                        <span
                            key={i}
                            className={`tarefa-marcador ${i < count ? "tarefa-marcador--ativo" : ""}`}
                        />
                    ))}
                </div>

                <div className="tarefa-acoes">
                    <button onClick={concluirUm} disabled={count >= meta}>
                        Concluir
                    </button>
                    <button onClick={desfazerUm} disabled={count === 0}>
                        Desfazer
                    </button>
                </div>
            </div>


            {onClose && <button className="habito-voltar" onClick={onClose}>Voltar para a lista</button>}
        </>
    );
}
