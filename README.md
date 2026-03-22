# 🌌 Rick and Morty | Desafio Workshop Front-End

Este projeto foi desenvolvido como parte do **Desafio Workshop Front-End**. Trata-se de uma aplicação web interativa que permite aos usuários explorar o universo da animação *Rick and Morty*, visualizando personagens, buscando por nomes, filtrando por status e salvando seus favoritos.

Desenvolvido por: **Carlos Alberto**

## 🎨 Design e Interface (UI/UX)

A aplicação apresenta um design moderno e imersivo, focado na temática da série:
* **Paleta de Cores:** O layout utiliza um tema escuro (Dark Mode) sofisticado, com fundos em tons profundos de azul-escuro/preto. O grande destaque visual fica por conta dos detalhes em **verde neon** (referência aos portais da série), aplicados nos botões principais, tipografia de destaque (como partes do logo) e linhas de separação.
* **Estilo Visual:** Interface limpa com cards de personagens bem definidos. Efeitos de *glow* (brilho) no logo principal dão um toque especial à página inicial.
* **Responsividade:** A aplicação é totalmente responsiva, contando com a adição de um **menu estilo hambúrguer** para garantir a melhor experiência em dispositivos móveis.

## 📡 API Integrada

Os dados exibidos na aplicação não são estáticos; eles são consumidos dinamicamente em tempo real a partir da API REST oficial do Rick and Morty.

* **Endpoint Base Utilizado:** `https://rickandmortyapi.com/api/character`
* A lógica de requisição (fetch) foi isolada na pasta de serviços (`src/services/rickandmorty.ts`), mantendo o código organizado e facilitando a manutenção das chamadas assíncronas.

## ✨ Funcionalidades

* **Página Inicial (Home):** Apresentação do projeto com links rápidos para os episódios e lista de personagens.
* **Exploração de Personagens:** Grid dinâmico populado diretamente com os dados da API externa.
* **Sistema de Busca e Filtros:** * Busca em tempo real digitando o nome do personagem.
  * Filtro por status do personagem (ex: Vivo, Morto, Desconhecido).
* **Sistema de Favoritos:** * Botão de "Salvar" individual em cada card de personagem.
  * Switch (Toggle) interativo para exibir "Somente favoritos".
* **Detalhes do Personagem:** Roteamento dinâmico para visualização detalhada de um personagem específico.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema React:

* **[Next.js](https://nextjs.org/) (v16.2.1):** Framework React utilizando a nova arquitetura *App Router*.
* **[React](https://react.dev/) (v19.2.4):** Biblioteca para construção da interface de usuário.
* **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para garantir um código mais seguro, tipando o retorno da API.
* **[Tailwind CSS](https://tailwindcss.com/) (v4):** Estilização utilitária para construção rápida e responsiva do layout.
* **Radix UI (`@radix-ui/react-switch`):** Componente acessível para o botão de toggle dos favoritos.
* **Utilitários de CSS:** `clsx` e `tailwind-merge` para manipulação dinâmica de classes condissionais.

## 📂 Estrutura do Projeto

A arquitetura do projeto foi organizada visando escalabilidade e separação de responsabilidades:

```text
src/
├── app/                  # Rotas da aplicação (App Router do Next.js)
│   ├── detalhes/[id]/    # Página dinâmica de detalhes do personagem
│   ├── imgs/             # Imagens estáticas
│   ├── globals.css       # Estilos globais e configurações do Tailwind
│   ├── layout.tsx        # Layout principal da aplicação
│   └── page.tsx          # Página Home
├── components/           # Componentes reutilizáveis
│   ├── ui/               # Componentes genéricos de UI (botões, inputs)
│   ├── CharacterCard.tsx # Card individual de personagem
│   ├── CharacterList.tsx # Grid de listagem
│   ├── Footer.tsx        # Rodapé da aplicação
│   └── Navbar.tsx        # Cabeçalho e navegação (inclui menu mobile)
├── lib/                  # Funções utilitárias (ex: utils.tsx)
├── services/             # Integração com APIs externas
│   └── rickandmorty.ts   # Funções de requisição para a API do Rick & Morty
└── types/                # Definições de tipos do TypeScript
    └── character.ts      # Interfaces e tipagem de retorno da API
⚙️ Como executar o projeto localmente
Siga os passos abaixo para rodar a aplicação na sua máquina:

1- Passo
Clone este repositório:
git clone <url-do-seu-repositorio>

2- Passo
Acesse a pasta do projeto: 
cd wsFrontend-Fabrica26.1

3- Passo
Instale as dependências:
npm install
# ou
yarn install

4- Passo
Inicie o servidor de desenvolvimento:
npm run dev
# ou
yarn dev

5- Passo
Abra o navegador e acesse http://localhost:3000