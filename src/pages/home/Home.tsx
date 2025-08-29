import { useState } from "react";
import Card from "../card/Card";
import Tarefa from "../tarefa/Tarefa";

type Habito = {
    id: number;
    titulo: string;
    texto: string;
    img: string;
    meta: number;
};

interface HomeProps {
    titulo: string;
    texto: string;
}

function Home({ titulo, texto }: HomeProps) {
    const [habitos] = useState<Habito[]>([
        {
            id: 1,
            titulo: "Beber água",
            texto: "Diária: 8 copos",
            img: `${import.meta.env.BASE_URL}assets/agua.jpg`,
            meta: 8,
        },
        {
            id: 2,
            titulo: "Caminhada",
            texto: "30 min",
            img: `${import.meta.env.BASE_URL}assets/caminhada.jpg`,
            meta: 1,
        },
        {
            id: 3,
            titulo: "Estudar",
            texto: "1h de foco",
            img: `${import.meta.env.BASE_URL}assets/estudar.jpg`,
            meta: 1,
        },
    ]);



    const [progresso, setProgresso] = useState<Record<number, number>>({});
    const [habitoSelecionado, setHabitoSelecionado] = useState<Habito | null>(null);

    function setCount(id: number, count: number) {
        setProgresso((estadoAntigo) => ({ ...estadoAntigo, [id]: count }));
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <p>{texto}</p>

            {!habitoSelecionado ? (
                <div className="lista-habitos">
                    {habitos.map((habito) => {
                        const status = progresso[habito.id] || 0;
                        return (
                            <div key={habito.id} className="item-habito">
                                <Card
                                    titulo={habito.titulo}
                                    texto={`Meta: ${habito.texto} • Status: ${status}/${habito.meta}`}
                                    img={habito.img}
                                />
                                <button
                                    className="btn"
                                    onClick={() => setHabitoSelecionado(habito)}
                                >
                                    Marcar tarefa de hoje
                                </button>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div className="detalhe-habito">
                    <h3>Hábito: {habitoSelecionado.titulo}</h3>
                    <Tarefa
                        meta={habitoSelecionado.meta}
                        count={progresso[habitoSelecionado.id] || 0}
                        onSetCount={(c) => setCount(habitoSelecionado.id, c)}
                        onClose={() => setHabitoSelecionado(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default Home;
