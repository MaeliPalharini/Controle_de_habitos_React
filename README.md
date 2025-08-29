# 🟢 Vida Saudável — Controle de Hábitos

App simples para acompanhar e concluir hábitos diários com interface em preto, ciano e laranja.
Você escolhe um hábito, marca o progresso por “bolinhas” ✅ e acompanha seu desempenho.

## 🚀 Tecnologias

⚛️ React + Vite (TypeScript)

🎨 CSS puro (tema ciano/preto/laranja)

## 📦 Como rodar
    1) Instalar dependências
       npm install

    2) Rodar em desenvolvimento
       npm run dev

    3) Build de produção
       npm run build

    4) Servir o build (opcional)
       npm run preview

## 🧩 Componentes
🔑 Login

Alterna entre tela de login e Home (isLogged).

Botão “Entrar” apenas simula login.

🏠 Home

Lista de hábitos (id, titulo, texto, img, meta).

Mostra status do progresso.

Abre Tarefa ao selecionar um hábito.

📝 Card

Exibe título, texto motivacional 🌟 (condicional por hábito), meta/status e imagem.

🎯 Tarefa

Mostra N bolinhas clicáveis.

Permite marcar/desmarcar progresso.

Exibe count/meta concluído(s) e botão “Voltar”.

## 📜 Licença

📖 Livre para uso educativo e pessoal. Recomendo MIT.