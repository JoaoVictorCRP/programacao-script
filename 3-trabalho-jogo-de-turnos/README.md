# Hero vs. Villain – Turn-Based RPG em React/Next.js

Um jogo simples de RPG de turno onde Trump e Xi Jinping se enfrentam, desenvolvido como trabalho da disciplina de Programação Script. 
O principal objetivo deste projeto foi explorar diferentes técnicas de **gerenciamento de estado** em React, incluindo estado local em hooks, 
gerenciamento global e estratégias para lidar com **prop drilling**.

---

## 📝 Descrição

Este repositório contém um protótipo de jogo de batalha por turnos, criado para:

1. **Aprender sobre gerenciamento de estados** em aplicações React.
2. Experimentar o uso de hooks customizados para lógica de jogo.
3. Explorar abordagens de **prop drilling** vs. gerenciamento global de estado.
4. Integrar notificações de batalha com **SweetAlert2** e **React-Toastify**.

---

## 🚀 Funcionalidades

- Fluxo de turnos alternados entre Trump e Xi Jinping
- Sprites com animações de ataque, dano e derrota
- Modal de “Game Over” com SweetAlert2
- Logs de batalha em toasts customizados (React-Toastify)
- Ataques especiais cômicos

---

## 🛠️ Tecnologias

- **Next.js** (App Router)
- **React** + **React Hooks** (`useState`, `useEffect`)
- **Tailwind CSS** (layout e estilos utilitários)
- **SweetAlert2** (modal de Game Over)
- **React-Toastify** (notificações de combate)
- **next/image** (renderização otimizada de sprites)

---

## 📂 Estrutura do Projeto

```yaml
/
├─ app/
│ ├─ components/
│ │  ├─ Character.jsx # Componente visual de personagem
│ │  └─ ActionTab.jsx # Botões de ação para o herói
│ │  └─ CustomizedToast.jsx # container de toasts
│ ├─ hooks/
│ │  └─ GameManager.jsx # Lógica de estado e turno do jogo
│ └─ page.jsx # Página principal “Hero vs. Villain”
├─ public/
│  ├─ hero/ # Sprites do herói (default, attack, hurt, defeated…)
│  └─ villain/ # Sprites do vilão (default, attack, hurt, defeated…)
└─ README.md # Documentação do projeto
```

---
## ⚙️ Instalação e Uso

1. **Clone o repositório**
   ```bash
   git https://github.com/JoaoVictorCRP/programacao-script.git
   cd 3-trabalho-jogo-de-turnos
   ```
2. **Instale as dependências**
    ```bash
    npm install
    ```
3. **Execute em modo de desenvolvimento**
    ```bash
    npm run dev
    ```