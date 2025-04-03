# Desafio Crawler

## 🌟 Visão Geral

Este projeto se trata de um crawler (web scraper) que coleta informações de laptops Lenovo de um site de e-commerce, disponibilizando os dados através de uma API REST simples.

## ✨ Funcionalidades

- **Scraping recursivo** de múltiplas páginas
- **Filtro automático** por laptops Lenovo
- **Ordenação por preço** (do mais barato para o mais caro)
- **API REST** com endpoint `/laptops`
- **Tipagem TypeScript** robusta

## 🛠 Tecnologias Utilizadas

| Tecnologia | Descrição                                  |
| ---------- | ------------------------------------------ |
| Node.js    | Ambiente de execução JavaScript (v20.11.1) |
| TypeScript | Tipagem estática (v^5.8.2)                 |
| Express    | Framework web para a API (v^5.1.0)         |
| Axios      | Cliente HTTP para requests (v^1.8.4)       |
| JSDOM      | Implementação DOM para Node.js (v^26.0.0)  |

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v18+)
- npm ou yarn

### Instalação

```bash
git clone https://github.com/PauloDaude/desafio-crawler.git
cd desafio-crawler
npm install
```

### Execução

```bash
npm start
```

A API estará disponível em: `http://localhost:3000/laptops`

## 📊 Estrutura do Projeto

```
desafio-crawler/
├── src/
│   ├── app.ts            # Configuração do servidor Express
│   ├── scraper.ts        # Lógica principal de scraping
│   └── scraper-utils.ts  # Funções auxiliares e tipagem
├── dist/                 # Arquivos compilados (gerado automaticamente)
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
```

## 📡 Endpoint da API

### `GET /laptops`

Retorna todos os laptops Lenovo ordenados por preço

**Exemplo de Response:**

```json
[
  {
    "title": "Lenovo IdeaPad 3",
    "price": "$599.99",
    "description": "15.6 FHD, Ryzen 5, 8GB RAM...",
    "imgUrl": "https://webscraper.io/images/lenovo.jpg",
    "rating": "6 reviews"
  },
  ...
]
```
