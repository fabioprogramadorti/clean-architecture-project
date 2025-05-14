<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">Clean Architecture - Order API</h1>

<p align="center">
  API construída com NestJS seguindo os princípios da Clean Architecture, com foco em organização, escalabilidade e manutenibilidade.
</p>

<p align="center">
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" />
  </a>
  <a href="https://www.npmjs.com/~nestjscore" target="_blank">
    <img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" />
  </a>
  <a href="https://circleci.com/gh/nestjs/nest" target="_blank">
    <img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" />
  </a>
  <a href="https://discord.gg/G7Qnnhy" target="_blank">
    <img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord" />
  </a>
</p>

## 🧱 Descrição

Este projeto é uma API para gerenciamento de pedidos (`orders`) construída com NestJS. Ele adota os princípios da Clean Architecture, promovendo uma separação clara de responsabilidades entre as camadas da aplicação: domínio, aplicação, infraestrutura e interfaces. Essa arquitetura torna o sistema altamente testável, desacoplado e sustentável a longo prazo.

## 🗂️ Estrutura do Projeto

```
src/
├── application/         # Casos de uso (regras de aplicação)
├── domain/              # Entidades e contratos (regras de negócio puras)
├── infrastructure/      # Implementações de interfaces e adaptadores (ex: repositórios)
├── interfaces/          # Camada de entrada (controllers, DTOs, etc)
├── main.ts              # Ponto de entrada do NestJS
```

## ⚙️ Configuração do Projeto

```bash
npm install
```

## ▶️ Como executar

```bash
# Em ambiente de desenvolvimento
npm run start:dev

# Em ambiente de produção
npm run start:prod
```

## 🧪 Como executar os testes

```bash
# Testes unitários
npm run test

# Testes de integração (End-to-End)
npm run test:e2e

# Cobertura dos testes
npm run test:cov
```

## 🚀 Deployment

Para implantar seu projeto NestJS em produção de forma otimizada, você pode usar o [guia oficial de deployment](https://docs.nestjs.com/deployment).

Ou utilize o [NestJS Mau](https://mau.nestjs.com) — uma plataforma de deployment oficial baseada em AWS:

```bash
npm install -g @nestjs/mau
mau deploy
```

## 📚 Recursos úteis

- [Documentação oficial do NestJS](https://docs.nestjs.com)
- [Canal no Discord da comunidade](https://discord.gg/G7Qnnhy)
- [Cursos oficiais](https://courses.nestjs.com)
- [NestJS Devtools](https://devtools.nestjs.com)
- [Plataforma de Deploy NestJS Mau](https://mau.nestjs.com)
- [Suporte corporativo](https://enterprise.nestjs.com)
- [Vagas e oportunidades](https://jobs.nestjs.com)

## 💡 Suporte

Este projeto é de código aberto e licenciado sob MIT. Você pode apoiar o projeto como patrocinador ou contribuinte. Saiba mais [aqui](https://docs.nestjs.com/support).

## 👤 Autor

- **Kamil Myśliwiec** - [Twitter](https://twitter.com/kammysliwiec)
- **Website oficial** - [https://nestjs.com](https://nestjs.com/)
- **Twitter do projeto** - [@nestframework](https://twitter.com/nestframework)

## 📝 Licença

Este projeto está licenciado sob os termos da [MIT License](https://github.com/nestjs/nest/blob/master/LICENSE).