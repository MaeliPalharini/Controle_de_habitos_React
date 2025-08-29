interface TarefaProps {
    meta: number;
    count: number;
    onSetCount: (n: number) => void;
    onClose: () => void;
}

export default function Tarefa({ meta, count, onSetCount, onClose }: TarefaProps) {
    const concluirUm = () => onSetCount(Math.min(count + 1, meta));
    const desfazerUm = () => onSetCount(Math.max(count - 1, 0));

    function toggleBola(index: number) {
        if (index < count) onSetCount(index);
        else onSetCount(index + 1);
    }

    return (
        <div>
            <h2>Tarefa do Dia</h2>

            <div style={{ display: "flex", gap: "12px", justifyContent: "center", margin: "16px 0", flexWrap: "wrap" }}>
                {Array.from({ length: meta }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => toggleBola(i)}
                        style={{
                            width: "28px",
                            height: "28px",
                            padding: 0,
                            boxSizing: "border-box",
                            borderRadius: "50%",
                            border: "2px solid #00ffff",
                            background: i < count ? "orange" : "black",
                            cursor: "pointer",
                            transition: "0.2s",
                        }}
                    />
                ))}
            </div>

            <p>{count}/{meta} concluído(s)</p>

            <div className="tarefa-acoes">
                <button onClick={concluirUm} disabled={count >= meta}>Marcar</button>
                <button onClick={desfazerUm} disabled={count === 0}>Desfazer</button>
            </div>

            <button className="btn" onClick={onClose}>Voltar para a lista</button>
        </div>
    );
}
