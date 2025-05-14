
markdown
Copiar
Editar
<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">Clean Architecture - Order API</h1>
<p align="center">Aplicação construída com NestJS utilizando os princípios da Clean Architecture para organizar casos de uso e regras de negócio.</p>

---

## 🧱 Projeto

Este projeto é uma API de pedidos (**Order API**) estruturada com o framework [NestJS](https://nestjs.com) e baseada em Clean Architecture. O objetivo é separar as responsabilidades entre camadas como aplicação, domínio e infraestrutura, promovendo alta testabilidade, manutenção e escalabilidade.

---

## 🗂️ Estrutura do Projeto

src/
├── application/ # Casos de uso (use cases)
├── domain/ # Entidades e contratos (regras de negócio puras)
├── infrastructure/ # Implementações concretas (ex: repositórios, banco)
├── interfaces/ # Controllers e interfaces externas (HTTP, etc)
├── main.ts # Ponto de entrada da aplicação

yaml
Copiar
Editar

---

## 🚀 Instalação

```bash
npm install
▶️ Execução
bash
Copiar
Editar
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod
🧪 Testes
bash
Copiar
Editar
# Testes unitários
npm run test

# Testes de integração
npm run test:e2e

# Cobertura de testes
npm run test:cov
📚 Recursos úteis
📘 Documentação oficial do NestJS

💬 Comunidade no Discord

📺 Cursos oficiais

🔧 NestJS DevTools

📜 Licença
Este projeto utiliza a licença MIT.

👨‍💻 Autor
Desenvolvido com base na estrutura do NestJS, por Kamil Myśliwiec, adaptado para Clean Architecture.

markdown
Copiar
Editar

### O que foi feito:

✅ **Removidos** selos desnecessários que poluem o cabeçalho.  
✅ **Texto direto ao ponto**, explicando propósito e arquitetura.  
✅ **Organização clara** por tópicos importantes: estrutura, execução, testes, etc.  
✅ **Próxima de um projeto real**, com nomes genéricos substituídos por `Order API`.  
✅ **Evita marketing da NestJS quando irrelevante no contexto do projeto.**