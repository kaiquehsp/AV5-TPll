# 🏨 Atlantis — Sistema de Gestão Hoteleira

Sistema web completo para gestão de hóspedes, acomodações e hospedagens de hotéis, pousadas e resorts.  
Desenvolvido como evolução do sistema CLI (AV3 → AV4 → AV5), agora com interface SPA e banco de dados persistente.

---

## 🛠️ Stack Tecnológica

| Componente    | Tecnologia                        |
|---------------|-----------------------------------|
| Linguagem     | TypeScript                        |
| Frontend      | React + Vite + Material UI        |
| Backend       | Node.js + Express                 |
| ORM           | Prisma 7                          |
| Banco de Dados| SQLite (`dev.db`)                 |
| Padrão de Projeto | Builder (acomodações)         |

---

## 📁 Estrutura do Projeto

```
AV4-TPll/
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma       # Modelagem do banco
│   │   ├── migrations/         # Histórico de migrações
│   │   └── dev.db              # Banco SQLite (gerado automaticamente)
│   ├── src/
│   │   ├── controllers/        # ClienteController, AcomodacaoController, HospedagemController
│   │   ├── diretores/          # Padrão Builder — 6 tipos de acomodação
│   │   ├── lib/
│   │   │   └── prisma.ts       # Instância do PrismaClient
│   │   └── server.ts           # Ponto de entrada da API
│   ├── prisma.config.ts
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── contexts/
    │   │   └── ArmazemContext.tsx  # Estado global da aplicação
    │   ├── models/
    │   │   └── types.ts            # Tipagens TypeScript
    │   ├── pages/
    │   │   ├── Login.tsx
    │   │   ├── Dashboard.tsx
    │   │   ├── Clientes.tsx
    │   │   ├── Acomodacoes.tsx
    │   │   └── Hospedagens.tsx
    │   ├── services/               # Comunicação com a API
    │   │   ├── index.ts
    │   │   ├── cliente.ts
    │   │   ├── acomodacao.ts
    │   │   └── hospedagem.ts
    │   └── main.tsx
    └── package.json
```

---

## ▶️ Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- npm instalado

---

### 1. Configurar e iniciar o Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Crie o banco de dados e rode as migrações
npx prisma migrate dev --name init

# Gere o Prisma Client
npx prisma generate

# Inicie o servidor
npm run dev
```

O servidor estará rodando em: `http://localhost:3000`

> ✅ As acomodações são geradas automaticamente no primeiro start usando o padrão Builder.

---

### 2. Configurar e iniciar o Frontend

Abra um **novo terminal**:

```bash
# Entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

---


## 🗄️ Visualizar o Banco de Dados

### Opção 1 — Prisma Studio (interface visual no navegador)
```bash
cd backend
npx prisma studio
```
Acesse: `http://localhost:5555`

### Opção 2 — DB Browser for SQLite
Baixe em: https://sqlitebrowser.org  
Abra o arquivo: `backend/prisma/dev.db`

---

## 🔄 Resetar o Banco de Dados

Caso precise limpar todos os dados e recriar do zero:

```bash
cd backend

# Windows
del prisma\dev.db

# Linux/Mac
rm prisma/dev.db

# Recriar
npx prisma migrate dev --name init
npm run dev
```

---


## ✅ Funcionalidades

- **Dashboard** — painel com contadores de hóspedes, acomodações e hospedagens ativas
- **Clientes** — CRUD completo com documentos, endereço e telefone
- **Acomodações** — CRUD completo com 6 tipos gerados via Builder + criação personalizada
- **Hospedagens** — check-in, check-out, edição e visualização
- **Validações** — data de nascimento futura bloqueada, exclusão de cliente/acomodação com hospedagem ativa bloqueada