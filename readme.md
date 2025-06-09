# 📋 Gerenciador de Tarefas

Este projeto é um sistema completo de gerenciamento de tarefas desenvolvido com foco em organização pessoal e aumento da produtividade. A aplicação permite que os usuários cadastrem, classifiquem e acompanhem suas tarefas, definindo prazos, prioridades e categorias.

## ✨ Características Principais

- **Interface Web Moderna**: Dashboard intuitivo com estatísticas em tempo real
- **Gerenciamento Completo**: CRUD para tarefas, categorias e usuários
- **Arquitetura MVC**: Estrutura organizada e escalável
- **API RESTful**: Endpoints completos para integração
- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Banco de Dados Robusto**: PostgreSQL com relacionamentos bem definidos

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express.js
- **Frontend**: EJS + CSS3 + JavaScript (Fetch API)
- **Banco de Dados**: PostgreSQL + Sequelize ORM
- **Testes**: Jest + Supertest
- **Desenvolvimento**: Nodemon para hot reload

## 📋 Requisitos do Sistema

- **Node.js** (versão 22.13.1 ou superior)
- **PostgreSQL** (versão 15.8 ou superior)
- **npm** (gerenciador de pacotes)

## 🚀 Instalação e Configuração

### 1. **Clonar o Repositório**

```bash
git clone https://github.com/leormsvieira/Projeto_Individual_Programacao
cd Projeto_Individual_Programacao
```

### 2. **Instalar Dependências**

```bash
npm install
```

### 3. **Configurar Banco de Dados**

#### 3.1. Criar arquivo `.env`

Copie o arquivo de exemplo e configure suas variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Configurações do Banco de Dados
DB_HOST=localhost
DB_PORT=5432
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=gerenciador_tarefas
DB_SSL=false
DB_URL=postgresql://seu_usuario:sua_senha@localhost:5432/gerenciador_tarefas

# Configuração do Servidor
PORT=8080
```

#### 3.2. Criar Banco de Dados

```sql
-- No PostgreSQL, execute:
CREATE DATABASE gerenciador_tarefas;
```

#### 3.3. Executar Script de Inicialização

```bash
npm run init-db
```

Este comando criará todas as tabelas necessárias:

- **users**: Usuários do sistema
- **tasks**: Tarefas com status, prioridade e prazos
- **categories**: Categorias para organização
- **task_categories**: Relacionamento entre tarefas e categorias

### 4. **Executar a Aplicação**

#### Modo Desenvolvimento (com hot reload):

```bash
npm run dev
```

#### Modo Produção:

```bash
npm start
```

A aplicação estará disponível em: **http://localhost:8080**

## 🎯 Funcionalidades da Aplicação

### 📊 **Dashboard**

- Visão geral com estatísticas em tempo real
- Contadores de tarefas por status (Pendente, Em Andamento, Concluída)
- Lista das tarefas mais recentes
- Navegação rápida para outras seções

### 📝 **Gerenciamento de Tarefas**

- **Criar** novas tarefas com título, descrição, status e prazo
- **Editar** tarefas existentes
- **Excluir** tarefas desnecessárias
- **Filtrar** por status e categoria
- **Associar** tarefas a categorias
- Status disponíveis: Pendente, Em Andamento, Concluída

### 🏷️ **Gerenciamento de Categorias**

- **Criar** categorias personalizadas
- **Editar** nome e descrição das categorias
- **Excluir** categorias (com validação de uso)
- **Visualizar** quantas tarefas pertencem a cada categoria

### 👥 **Gerenciamento de Usuários**

- **Cadastrar** novos usuários
- **Editar** informações de usuários
- **Excluir** usuários do sistema
- **Visualizar** lista completa de usuários

### 🔧 **Características Técnicas**

- **Padrão MVC**: Estrutura organizada e escalável
- **API RESTful**: Endpoints completos para todas as operações
- **PostgreSQL**: Banco de dados robusto com relacionamentos
- **UUID**: Chaves primárias seguras em todas as tabelas
- **Sequelize ORM**: Abstração de banco de dados
- **Fetch API**: Integração frontend-backend moderna
- **Design Responsivo**: Interface adaptável a diferentes dispositivos
- **Testes Automatizados**: Cobertura de código com Jest

## 📜 Scripts Disponíveis

| Script                  | Descrição                                  |
| ----------------------- | ------------------------------------------ |
| `npm start`             | Inicia o servidor em modo produção         |
| `npm run dev`           | Inicia o servidor com nodemon (hot reload) |
| `npm test`              | Executa todos os testes automatizados      |
| `npm run test:coverage` | Executa testes com relatório de cobertura  |
| `npm run init-db`       | Inicializa o banco de dados com as tabelas |

## 🌐 Endpoints da API

### 👥 Usuários

- `GET /api/users` - Lista todos os usuários
- `GET /api/users/:id` - Busca usuário por ID
- `POST /api/users` - Cria novo usuário
- `PUT /api/users/:id` - Atualiza usuário
- `DELETE /api/users/:id` - Remove usuário

### 📝 Tarefas

- `GET /api/tasks` - Lista todas as tarefas
- `GET /api/tasks/:id` - Busca tarefa por ID
- `POST /api/tasks` - Cria nova tarefa
- `PUT /api/tasks/:id` - Atualiza tarefa
- `DELETE /api/tasks/:id` - Remove tarefa

### 🏷️ Categorias

- `GET /api/categories` - Lista todas as categorias
- `GET /api/categories/:id` - Busca categoria por ID
- `POST /api/categories` - Cria nova categoria
- `PUT /api/categories/:id` - Atualiza categoria
- `DELETE /api/categories/:id` - Remove categoria

### 🔗 Relacionamentos

- `GET /api/task-categories` - Lista relacionamentos tarefa-categoria
- `POST /api/task-categories` - Cria relacionamento
- `DELETE /api/task-categories/:id` - Remove relacionamento

## 📁 Estrutura de Diretórios

```
Projeto_Individual_Programacao/
├── src/
│   ├── config/
│   │   └── database.js          # Configuração do banco de dados
│   ├── controllers/             # Controladores (lógica de negócio)
│   │   ├── usersController.js
│   │   ├── tasksController.js
│   │   ├── categoriesController.js
│   │   └── taskCategoriesController.js
│   ├── models/                  # Modelos do banco de dados
│   │   ├── usersModel.js
│   │   ├── tasksModel.js
│   │   ├── categoriesModel.js
│   │   └── taskCategoriesModel.js
│   ├── routes/                  # Rotas da aplicação
│   │   ├── usersRoute.js
│   │   ├── tasksRoute.js
│   │   ├── categoriesRoute.js
│   │   ├── taskCategoriesRoute.js
│   │   └── frontendRoutes.js
│   ├── services/                # Camada de serviços
│   │   ├── usersService.js
│   │   ├── tasksService.js
│   │   ├── categoriesService.js
│   │   └── taskCategoriesService.js
│   ├── views/                   # Templates EJS
│   │   ├── components/
│   │   │   └── header.ejs
│   │   ├── layout/
│   │   │   └── main.ejs
│   │   └── pages/
│   │       ├── dashboard.ejs
│   │       ├── tasks.ejs
│   │       ├── categories.ejs
│   │       └── users.ejs
│   ├── public/                  # Arquivos estáticos
│   │   ├── css/
│   │   │   └── style.css
│   │   └── js/
│   │       └── script.js
│   ├── scripts/                 # Scripts utilitários
│   │   ├── init.sql
│   │   └── runSQLScript.js
│   └── tests/                   # Testes automatizados
│       ├── userController.test.js
│       ├── userModel.test.js
│       ├── userRoutes.test.js
│       └── userService.test.js
├── .env                         # Variáveis de ambiente
├── server.js                    # Arquivo principal do servidor
├── package.json                 # Dependências e scripts
└── README.md                    # Documentação do projeto
```

## 🧪 Executando Testes

```bash
# Executar todos os testes
npm test

# Executar testes com cobertura
npm run test:coverage

# Executar testes em modo watch
npm test -- --watch
```
