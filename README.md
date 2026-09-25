# Rota de Estudo (StudyPath)

Agenda acadêmica **web-first** para organizar o semestre do estudante: horários de aula, prazos de entrega, datas de prova, calendário com colisões, notificações (web push) e uma gamificação leve de recompensas. Mobile via PWA no início; app nativo fica arquivado como expansão futura.

> **Dupla:** Rilson Joás + Luiz · **Nome internacional:** StudyPath (i18n PT→EN desde o V1 — ver ADR-0003)

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| **Frontend** | Vite + React + TypeScript + Tailwind + shadcn/ui + PWA | app autenticado (SEO irrelevante), push via service worker, sem conflito SSR/auth (ADR-0002) |
| **Backend** | Spring Boot (Java 21) + JPA + Flyway; Spring Security na Fase 1 | 2ª língua de mercado do autor; caso real de Web/Java para portfólio (ADR-0001) |
| **Banco** | PostgreSQL | padrão consolidado do autor |
| **Infra** | Docker Compose · VPS Hetzner · Traefik · Sentry · Uptime Kuma | self-host, observabilidade |

## Roadmap

- [x] **Fase 0 — Setup:** monorepo; Contrato de API desenhado; Postgres via Compose; testes locais (Vitest/Playwright no front, JUnit/Mockito no api).
- [ ] **Fase 1 — Core:** `usuario` + auth (Google OAuth + e-mail/senha, cookie httpOnly, refresh rotativo); `periodo` (aberto/arquivado pelo aluno); `disciplina`; CRUD `tarefa`/`prova`; grade-tipo semanal + cancelamento por instância; telas **Hoje / Semana / Mês** (mobile-first).
- [ ] **Fase 2 — Push:** VAPID web push; job cron no Spring (tarefa 24h antes; prova em cascata 7-3-1); preferências por evento; cancelamento silencia o lembrete.
- [ ] **Fase 3 — Gamificação:** módulo desacoplado (eventos de domínio → XP/nível/streak/conquistas); só recompensa no V1, punição como ponto de extensão.
- [ ] **Fase 4 — Profissionalizar:** checklist de engenharia (P0–P9), Sentry, acessibilidade, i18n EN, deploy Traefik, monitoramento e docs.

> A cada fase: testes primeiro, convenções do padrão de engenharia, validação com o parceiro.

## Estado da Fase 0

- Contrato de integração em [`docs/openapi.yaml`](docs/openapi.yaml), com as convenções resumidas em [`docs/api.md`](docs/api.md) e tipos gerados em `front/src/lib/api.generated.ts`.
- API Spring Boot 21 com Actuator, Flyway, JPA, PostgreSQL, migration inicial do domínio e health check em `GET /api/v1/health`.
- Front Vite + React + TypeScript com shell mobile-first, rotas Hoje/Semana/Mês, dicionário pt-BR/en, base shadcn/ui e conexão com a API.
- Docker Compose com `db`, `rota-estudo-api` e `rota-estudo-front`; Nginx faz o proxy de `/api` no serviço do frontend.
- Esqueleto de produção documentado no repositório `hetzner-infra`; o banco final será o `rota_de_estudo_db` no Postgres compartilhado da VPS.
- CRUD, autenticação, push, gamificação e PWA continuam nas fases seguintes.

## Desenvolvimento local

```bash
cp .env.example .env
cp front/.env.example front/.env.local
docker compose up --build
```

A API fica em `http://localhost:8080`, o frontend em `http://localhost:8081`, o Swagger em `http://localhost:8080/swagger-ui.html` e o PostgreSQL em `localhost:5432`. Se alguma porta já estiver ocupada, altere `API_PORT`, `FRONT_PORT` ou `DB_PORT` no `.env` antes de iniciar.

Para o frontend em modo iterativo:

```bash
cd front
npm install
npm run dev
```

Os testes da API e do frontend são executados localmente; o Playwright exige os navegadores do Playwright instalados no ambiente.

Para validar a base inteira:

```bash
bash scripts/preflight.sh
bash scripts/verify.sh
```

## Documentação e operação

- [`docs/engineering.md`](docs/engineering.md) — alinhamento com P0–P9 e lacunas de produção.
- [`docs/pre-meeting.md`](docs/pre-meeting.md) — o que já está pronto e o que a reunião precisa decidir.
- [`docs/reuniao-luiz.md`](docs/reuniao-luiz.md) — briefing curto para apresentar o projeto ao parceiro.
- [`docs/design.md`](docs/design.md) — shadcn/ui, tokens e decisão de não herança do Design Narniano.
- [`hetzner-infra/rota-de-estudo/README.md`](../hetzner-infra/rota-de-estudo/README.md) — topologia de produção, provisionamento e ordem de deploy.
- [`docs/adr/0005-shared-postgres.md`](docs/adr/0005-shared-postgres.md) — decisão do banco compartilhado e seus limites.

## Decisões de arquitetura

Registradas como ADRs em [`docs/adr/`](docs/adr/):

| ADR | Decisão | Motivo central |
|---|---|---|
| [ADR-0001](docs/adr/0001-backend-spring-boot.md) | Backend em **Spring Boot** (não Fastify/TS nem Laravel) | dominar Java/mercado enterprise; Laravel já dominada no Assídua |
| [ADR-0002](docs/adr/0002-frontend-vite-react.md) | Frontend em **Vite + React** (não Next.js) | app autenticado, PWA + push; SEO fora de escopo |
| [ADR-0003](docs/adr/0003-internacionalizacao.md) | **i18n desde o V1**; nome duplo Rota de Estudo/StudyPath | porta do inglês aberta, zero texto hardcoded |
| [ADR-0004](docs/adr/0004-shadcn-visual-direction.md) | shadcn/ui como base de componentes, sem herança do Design Narniano | ferramenta de dados precisa de clareza, não ornamento devocional |
| [ADR-0005](docs/adr/0005-shared-postgres.md) | PostgreSQL compartilhado na VPS Hetzner | economiza RAM; exige backup, monitoramento e limite explícito de disponibilidade |

## Domínio (glossário)

Ver [`CONTEXT.md`](CONTEXT.md). Eixos: `usuario` (dono dos dados, contas 100% individuais) → `periodo` (topo, manual) → `disciplina` (central) → `tarefa` (com tipo TAREFA/TRABALHO) · `prova` (nota opcional) · `horario` (grade-tipo) · `cancelamento` (exceção por instância) · `config_notificacao` · módulo `gamificacao`.

## Estrutura

```
rota-de-estudo/
├── api/            # Spring Boot (REST + auth + jobs push)
├── front/          # Vite + React + shadcn/ui (PWA)
├── docs/adr/       # decisões de arquitetura
├── docs/api.md     # contrato de API (Fase 0)
├── docs/engineering.md # alinhamento com P0–P9
├── docs/reuniao-luiz.md # briefing da reunião
├── scripts/        # preflight e verificação
├── CONTEXT.md      # glossário do domínio
└── docker-compose.yml
```

## Links

- Plano e histórico do grill: nota **[[Rota de Estudo]]** no vault (Obsidian).
- Padrões de engenharia e infra: repo `hetzner-infra` (`PADRAO-DE-ENGENHARIA.md`).