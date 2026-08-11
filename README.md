# 🌌 Rick and Morty | Desafio Workshop Front-End

Aplicação web desenvolvida para explorar personagens da série Rick and Morty, com busca, filtros, favoritos e paginação.

Desenvolvido por: **Carlos Alberto**

## ✅ Atualizações e implementações realizadas

### 1. Carregamento completo da API
- A busca de personagens foi ajustada para consumir todos os dados da API do Rick and Morty, não apenas a primeira página.
- Isso permite listar uma quantidade muito maior de personagens sem perder registros importantes.

### 2. Paginação funcional
- Foi implementada paginação com **12 personagens por página**.
- A navegação passou a incluir **botões numéricos de página**.
- A janela de páginas acompanha a navegação e exibe até **5 números por vez**, mantendo a interface organizada.

### 3. Sistema de busca e filtros
- Busca por nome em tempo real.
- Filtro por status do personagem.
- Filtro para mostrar apenas favoritos.
- Quando qualquer filtro é alterado, a paginação volta para a primeira página para manter a experiência consistente.

### 4. Sistema de favoritos
- Cada card possui botão para salvar ou remover personagem dos favoritos.
- Os favoritos são armazenados no localStorage do navegador.
- O toggle de favoritos deixa a listagem mais dinâmica e personalizada.

### 5. Melhorias visuais e UX
- Cards com visual mais moderno e refinado.
- Bordas arredondadas nos campos de busca e filtros.
- Destaque visual para a imagem do personagem, deixando o card mais harmonioso.
- Ajustes de espaçamento, contraste e hover para uma interface mais elegante.

### 6. Página de detalhes
- Foi criada a página individual de personagem com informações detalhadas.
- A navegação para cada item é feita dinamicamente pelo ID do personagem.

## 🎨 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- Radix UI
- API pública do Rick and Morty

## ✨ Funcionalidades principais

- Listagem de personagens
- Busca por nome
- Filtro por status
- Favoritos persistentes
- Paginação com navegação por número de página
- Página de detalhes do personagem
- Layout responsivo

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Entre na pasta do projeto:
   ```bash
   cd wsFrontend-Fabrica26.1
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

5. Abra no navegador:
   ```bash
   http://localhost:3000
   ```

## 📌 Observações

Este projeto continua em evolução, com foco em melhorar a experiência visual e a organização da interface para uma navegação mais fluida e profissional.