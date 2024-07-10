# Sistema de Avaliação para Hackathon

## Funcionalidades

### Backend

- **Node.js com Express**: Servidor backend configurado com autenticação, rotas para avaliadores e equipes.
- **PostgreSQL**: Banco de dados utilizado para armazenar informações dos avaliadores e equipes.
- **Autenticação**: Middleware para autenticação de usuários.

### Frontend

- **Next.js com TypeScript**: Frontend desenvolvido com Next.js e tipado com TypeScript para uma melhor manutenção e escalabilidade.
- **Tailwind CSS**: Utilizado para estilização das páginas.

#### Páginas

- **Login**: Página de autenticação de usuários.
- **Cadastro de Avaliadores**: Formulário para cadastro de novos avaliadores.
- **Cadastro de Equipes**: Formulário para cadastro de novas equipes.
- **Atribuir Avaliador**: Funcionalidade para atribuir avaliadores às equipes.
- **Atribuir Notas**: Página para os avaliadores atribuirem notas às equipes.
- **Listar Avaliações**: Lista de avaliações realizadas.
- **Listar Avaliadores**: Lista de avaliadores cadastrados.
- **Listar Equipes**: Lista de equipes cadastradas.

## Configuração do Ambiente

### Pré-requisitos

- Node.js
- PostgreSQL
- npm ou yarn

### Backend

1. Navegue até a pasta backend:
    ```sh
    cd backend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o arquivo `.env` com as variáveis de ambiente necessárias:
    ```env
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASS=sua_senha
    DB_NAME=nome_do_banco
    ```

4. Execute o servidor:
    ```sh
    npm start
    ```

### Frontend

1. Navegue até a pasta frontend/my-app:
    ```sh
    cd frontend/my-app
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Execute o servidor de desenvolvimento:
    ```sh
    npm run dev
    ```

## Estrutura do Projeto

