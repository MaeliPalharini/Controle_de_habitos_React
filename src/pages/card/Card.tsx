interface CardProps {
    titulo: string;
    texto: string;
    img: string;
}

function Card({ titulo, texto, img}: CardProps) {
    return (
        <div className="card">
            <h3>{titulo}</h3>

            {titulo === "Beber água" && (
                <p className="motivacional">Beber água é essencial para a saúde porque ela desempenha diversas funções
                    vitais no corpo, incluindo a manutenção do bom funcionamento dos órgãos!</p>
            )}

            {titulo === "Caminhada" && (
                <p className="motivacional caminhada">
                    Caminhar diariamente melhora a circulação, fortalece os músculos
                    e ajuda a manter a mente relaxada e equilibrada.
                </p>
            )}

            {titulo === "Estudar" && (
                <p className="motivacional estudar">
                    Estudar com foco e disciplina amplia seu conhecimento,
                    fortalece a memória e abre novas oportunidades para o futuro.
                </p>
            )}

            <p>{texto}</p>
            <img src={`${import.meta.env.BASE_URL}${img}`} width="500px" alt={titulo} />
        </div>
    );
}

export default Card;



