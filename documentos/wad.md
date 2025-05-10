
# Web Application Document - Projeto Individual - Módulo 2 - Inteli

## Gerenciador de Tarefas

#### Leonardo Ramos Vieira

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução 

Em um mundo cada vez mais dinâmico e repleto de demandas, a capacidade de se organizar e manter a produtividade tornou-se essencial tanto no âmbito pessoal quanto profissional. Pensando nisso, este projeto propõe o desenvolvimento de um gerenciador de tarefas que tem como principal objetivo oferecer uma solução simples, eficiente e intuitiva para auxiliar usuários na gestão de suas atividades diárias. A proposta é centralizar tarefas, permitir o acompanhamento do progresso e facilitar a priorização de compromissos, contribuindo diretamente para uma rotina mais estruturada e produtiva. Dessa forma, este sistema foi desenvolvido a fim armazenar informações e promover hábitos de organização que impactem positivamente o dia a dia do usuário.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados 

A modelagem de dados é uma etapa fundamental no desenvolvimento de sistemas, pois define como as informações serão organizadas, armazenadas e relacionadas dentro do banco de dados. Nesse sentido, uma estrutura bem planejada garante integridade, eficiência e escalabilidade ao projeto.

Dessa forma, apresenta-se a seguir a modelagem relacional, que tem como foco a identificação das entidades envolvidas no sistema (como usuários, tarefas e categorias), bem como a definição de seus atributos e dos relacionamentos entre elas, representados por meio de diagramas Entidade-Relacionamento. Ademais, é disponibilizada também a modelagem física, responsável por traduzir essa estrutura lógica em instruções SQL, especificando como as tabelas, campos, chaves e restrições serão efetivamente implementados no banco de dados real.

<div align="center">

<sub>Modelagem Relacional </sub>

<img src="../assets/modelo-banco.jpeg">

<sub>Modelagem Física </sub>

</div>

```
-- init.sql

-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL
);

-- Tabela de Tarefas
CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status VARCHAR(50) CHECK (status IN ('Pendente', 'Em Progresso', 'Concluída')) DEFAULT 'Pendente',
  due_date DATE,
  priority VARCHAR(50) CHECK (priority IN ('Baixa', 'Média', 'Alta')) DEFAULT 'Média',
  user_id UUID REFERENCES users(id) ON DELETE CASCADE
);

-- Tabela de Categorias
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  created_at DATE
);

-- Tabela de Relacionamento entre Tarefas e Categorias
CREATE TABLE IF NOT EXISTS task_categories (
  task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  PRIMARY KEY (task_id, category_id)
);
```



### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---
