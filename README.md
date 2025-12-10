# Link Tree

![React](https://img.shields.io/badge/React-19-61DAFB)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC)
![Biome](https://img.shields.io/badge/Linting-Biome-ffcf00)

Um aplicativo **“Link-in-Bio”** de alta performance e focado na experiência do desenvolvedor, construído com **Next.js 16**, **React 19** e **Prismic CMS**.

Este projeto utiliza uma **arquitetura Headless**, desacoplando o gerenciamento de conteúdo (Prismic) da camada visual (Next.js). Isso garante **controle total sobre o design**, **ótimos Core Web Vitals** e **atualizações de conteúdo sem necessidade de deploy**.

---

## 🚀 Tech Stack

### Framework

- Next.js 16 (App Router, React Server Components)
- Prismic CMS + Slice Machine
- Tailwind CSS v4
- Shadcn/ui
- Phosphor Icons
- Lucide
- React Icons
- Biome (linting & formatting)

---

## 🛠️ Guia de Instalação

### Pré-requisitos

- Node.js 20+
- Conta no Prismic CMS

---

## 1. Instalação

```bash
git clone https://github.com/beefreguglia/link-tree.git
cd link-tree
npm install
```

---

## 2. Configuração de Ambiente

Crie um arquivo **`.env.local`** na raiz do projeto:

```bash
#.env.local
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=your-repo-name
```

---

## 3. Inicialização do CMS

Este projeto utiliza o **Slice Machine** para modelagem de conteúdo local.

```bash
npm run slicemachine
```

Acesse:  
👉 http://localhost:9999

1. Faça login no Prismic.
2. **Push Changes** para enviar os slices locais (**LinkButton**, **SocialRow**).
3. No painel do Prismic, crie documentos usando os slices enviados.

---

## 4. Rodando o Ambiente de Desenvolvimento

```bash
npm run dev
```

- App: http://localhost:3000
- Slice Simulator: http://localhost:3000/slice-simulator

---

## 📜 Scripts

| Comando                | Descrição                            |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Inicia o servidor de desenvolvimento |
| `npm run build`        | Gera o build de produção             |
| `npm run start`        | Executa o build de produção          |
| `npm run lint`         | Verifica código via Biome            |
| `npm run format`       | Corrige formatação automaticamente   |
| `npm run slicemachine` | Inicia o Slice Machine               |

---

## 🤝 Contribuição

Este projeto utiliza **Biome** como padrão de código.  
Antes de abrir um PR, execute:

```bash
npm run format
```

---

## 📄 Licença

Distribuído sob a **MIT License**.
