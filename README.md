# My Storybook Project

Este projeto é uma aplicação React configurada com Vite e Storybook. Ele contém componentes reutilizáveis organizados em uma estrutura modular.

## Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (geralmente incluído com o Node.js)

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/my-storybook-project.git
   cd my-storybook-project
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts Disponíveis

### `npm run dev`

Inicia o servidor de desenvolvimento com Vite.

- Acesse o projeto em [http://localhost:5173](http://localhost:5173).

### `npm run build`

Gera o build de produção do projeto.

- Os arquivos serão gerados na pasta `dist/`.

### `npm run storybook`

Inicia o Storybook para visualizar e testar os componentes.

- Acesse o Storybook em [http://localhost:6006](http://localhost:6006).

### `npm run build-storybook`

Gera o build estático do Storybook.

- Os arquivos serão gerados na pasta `storybook-static/`.

### `npm run lint`

Executa o ESLint para identificar problemas no código.

## Estrutura de Diretórios

```
src/
├── components/       # Componentes reutilizáveis
│   ├── index.ts      # Exporta todos os componentes
│   └── Alert/        # Componente Alert
│       ├── Alert.tsx
│       ├── Alert.css
│       ├── Alert.stories.tsx
├── App.tsx           # Componente principal da aplicação
├── main.tsx          # Ponto de entrada do aplicativo
└── assets/           # Recursos estáticos (imagens, etc.)
```

## Observações

- Certifique-se de ajustar os caminhos absolutos no `tsconfig.json` se alterar a estrutura do projeto.
- Para dúvidas ou problemas, abra uma [issue](https://github.com/seu-usuario/my-storybook-project/issues) no repositório.
