# 📝 To-Do List – Exercício de Aprendizado

Este repositório contém o código-fonte de uma aplicação **To-Do List**, desenvolvida com um **backend** em TypeScript + TypeORM para MongoDB e um **frontend** em ReactJS. A aplicação permite criar, visualizar, atualizar e excluir tarefas (CRUD).

---

## 🚀 Tecnologias Utilizadas

### Backend:
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (opcional para rodar o MongoDB)
- [Swagger](https://swagger.io/) (documentação da API)

### Frontend:
- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest/)
- [React Hook Form](https://react-hook-form.com/)

---

## 📂 Estrutura do Repositório

```plaintext
📦 todo-list-app
├── 📁 backend     # Aplicação backend (NestJS + TypeORM + MongoDB)
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   ├── docker-compose.yml
│   ├── ormconfig.ts
│   └── README.md
├── 📁 frontend    # Aplicação frontend (ReactJS + Vite)
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   └── README.md
└── README.md      # Documentação principal do projeto
```

---

## 🔧 Configuração e Execução

### 📌 1. Clonar o Repositório

```sh
git clone https://github.com/khenriq/ToDo-List.git
cd ToDo-List
```

---

### 🛠 2. Configurar e Executar o Backend

1. Acesse a pasta do backend:

    ```sh
    cd backend
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure as variáveis de ambiente (`.env`):

    ```sh
    cp .env.example .env
    ```

4. Suba o MongoDB com Docker (opcional):

    ```sh
    docker-compose up -d
    ```

5. Inicie o servidor:

    ```sh
    npm run start:dev
    ```

> O backend estará disponível em **http://localhost:3000**  
> A documentação da API via Swagger estará em **http://localhost:3000/api**

---

### 🎨 3. Configurar e Executar o Frontend

1. Acesse a pasta do frontend:

    ```sh
    cd frontend
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```sh
    npm run dev
    ```

> O frontend estará acessível em **http://localhost:5173**

---

## 🔄 API Endpoints

A aplicação backend expõe os seguintes endpoints:

### 📝 **Tasks (CRUD)**

| Método | Endpoint       | Descrição                  |
|--------|--------------|------------------------------|
| GET    | `/tasks`     | Lista todas as tarefas       |
| GET    | `/tasks/:id` | Obtém uma tarefa pelo ID     |
| POST   | `/tasks`     | Cria uma nova tarefa         |
| PUT    | `/tasks/:id` | Atualiza uma tarefa          |
| DELETE | `/tasks/:id` | Exclui uma tarefa            |

> Para mais detalhes, consulte a documentação da API via **Swagger** em `http://localhost:3000/api`.

---

## 🎯 Funcionalidades

✅ Criar tarefas  
✅ Listar todas as tarefas  
✅ Editar tarefas  
✅ Excluir tarefas  

---

## 🏗️ Melhorias Futuras

- [ ] Implementação de autenticação (JWT)
- [ ] Melhorias na interface do usuário (UI)
- [ ] Testes unitários no backend e frontend
- [ ] Integração com notificações push

---

## 📦 Docker (opcional)

Caso prefira rodar o projeto com **Docker**, você pode utilizar o `docker-compose.yml` fornecido na pasta do backend para levantar um container MongoDB.

1. Para iniciar o MongoDB via Docker:

    ```sh
    docker-compose up -d
    ```

2. Para parar os serviços:

    ```sh
    docker-compose down
    ```

---

## 🧑‍💻 Contribuindo

Fique à vontade para contribuir com este projeto! Para isso:

1. **Fork** o repositório
2. Crie uma **branch** (`git checkout -b feature/sua-feature`)
3. Faça o **commit** das alterações (`git commit -m "Minha contribuição"`)
4. Envie um **push** para a branch (`git push origin feature/sua-feature`)
5. Abra um **Pull Request**

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
