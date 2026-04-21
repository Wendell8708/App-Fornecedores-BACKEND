# AutoPart Backend

Backend da aplicação **AutoPart**, responsável por gerenciar o cadastro de fornecedores de peças e serviços automotivos.

A API foi desenvolvida em **Node.js** com estrutura separada em **models, controllers e routes**, permitindo realizar operações de CRUD sobre os fornecedores cadastrados.

---

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- CORS
- dotenv

---

## Objetivo do projeto

Este backend foi desenvolvido para dar suporte ao frontend da aplicação **AutoPart**, permitindo:

- cadastrar fornecedores
- listar fornecedores cadastrados
- buscar fornecedor por ID
- editar fornecedor
- excluir fornecedor

A aplicação foi pensada para ser consumida por um frontend em formato **PWA (Progressive Web App)**.

---

## Estrutura do projeto

```bash
backend/
├── controllers/
├── models/
├── routes/
├── package-lock.json
├── package.json
└── server.js
Descrição das pastas
models/

Contém os modelos de dados da aplicação, definidos com Mongoose.

controllers/

Contém a lógica das operações da API, como criação, listagem, edição e exclusão dos fornecedores.

routes/

Define as rotas HTTP da aplicação e conecta essas rotas aos controllers.

server.js

Arquivo principal do backend, responsável por:

iniciar o servidor
configurar middlewares
conectar com o banco
registrar as rotas
Funcionalidades da API

A API oferece operações completas de CRUD para fornecedores.

Campos do fornecedor

Cada fornecedor possui os seguintes dados:

Empresa
CNPJ
email
descricao
Rotas da API
Listar todos os fornecedores
GET /api
Buscar fornecedor por ID
GET /api/:id
Criar novo fornecedor
POST /api
Exemplo de body:
{
  "Empresa": "Fornecedor Exemplo",
  "CNPJ": 12345678000199,
  "email": "contato@empresa.com",
  "descricao": "Fornecedor de peças automotivas"
}
Atualizar fornecedor
PUT /api/:id
Excluir fornecedor
DELETE /api/:id
Como executar o projeto localmente
1. Clonar o repositório
git clone <url-do-repositorio>
2. Entrar na pasta do projeto
cd nome-do-projeto
3. Instalar as dependências
npm i
4. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto.

Exemplo:

PORT=3000
MONGO_URI=sua_string_de_conexao_mongodb
5. Iniciar o servidor
Modo normal
npm start
Modo desenvolvimento
npm run dev
Exemplo de configuração do servidor

O backend normalmente ficará disponível em:

http://localhost:3000

Se a rota base estiver configurada como /api, então as requisições podem ser feitas em:

http://localhost:3000/api
Integração com o frontend

Este backend é consumido pelo frontend da aplicação AutoPart, que faz requisições para a API para:

carregar fornecedores
cadastrar novos registros
atualizar dados existentes
excluir fornecedores



 API_URL = https://app-fornecedores.onrender.com



O banco de dados hospedado no:

MongoDB Atlas


Projeto desenvolvido para fins acadêmicos e práticos como parte da aplicação AutoPart.
