# Rota de Estudo (StudyPath)

Agenda acadêmica **web-first** para organizar o semestre do estudante: horários de aula, prazos de entrega, datas de prova, calendário com colisões, notificações (web push) e uma gamificação leve de recompensas. Mobile via PWA no início; app nativo fica arquivado como expansão futura.

> **Dupla:** Rilson Joás + Luiz · **Nome internacional:** StudyPath (i18n PT→EN desde o V1 — ver ADR-0003)

## Stack

| Camada | Escolha | Por quê |
|---|---|---|
| **Frontend** | Vite + React + TypeScript + shadcn/ui + PWA | app autenticado (SEO irrelevante), push via service worker, sem conflito SSR/auth (ADR-0002) |
| **Backend** | Spring Boot (Java 21) + Spring Security + JPA + Flyway | 2ª língua de mercado do autor; caso real de Web/Java para portfólio (ADR-0001) |
| **Banco** | PostgreSQL | padrão consolidado do autor |
| **Infra** | Docker Compose · VPS Hetzner · Traefik · Sentry · Uptime Kuma | self-host, observabilidade |

## Roadmap

- [ ] **Fase 0 — Setup:** monorepo; Contrato de API desenhado; Postgres via Compose; testes locais (Vitest/Playwright no front, JUnit/Mockito no api).
- [ ] **Fase 1 — Core:** `usuario` + auth (Google OAuth + e-mail/senha, cookie httpOnly, refresh rotativo); `periodo` (aberto/arquivado pelo aluno); `disciplina`; CRUD `tarefa`/`prova`; grade-tipo semanal + cancelamento por instância; telas **Hoje / Semana / Mês** (mobile-first).
- [ ] **Fase 2 — Push:** VAPID web push; job cron no Spring (tarefa 24h antes; prova em cascata 7-3-1); preferências por evento; cancelamento silencia o lembrete.
- [ ] **Fase 3 — Gamificação:** módulo desacoplado (eventos de domínio → XP/nível/streak/conquistas); só recompensa no V1, punição como ponto de extensão.
- [ ] **Fase 4 — Profissionalizar:** checklist de engenharia (P0–P9), Sentry, acessibilidade, i18n EN, deploy Traefik, monitoramento e docs.

> A cada fase: testes primeiro, convenções do padrão de engenharia, validação com o parceiro.

## Decisões de arquitetura

Registradas como ADRs em [`docs/adr/`](docs/adr/):

| ADR | Decisão | Motivo central |
|---|---|---|
| [ADR-0001](docs/adr/0001-backend-spring-boot.md) | Backend em **Spring Boot** (não Fastify/TS nem Laravel) | dominar Java/mercado enterprise; Laravel já dominada no Assídua |
| [ADR-0002](docs/adr/0002-frontend-vite-react.md) | Frontend em **Vite + React** (não Next.js) | app autenticado, PWA + push; SEO fora de escopo |
| [ADR-0003](docs/adr/0003-internacionalizacao.md) | **i18n desde o V1**; nome duplo Rota de Estudo/StudyPath | porta do inglês aberta, zero texto hardcoded |

## Domínio (glossário)

Ver [`CONTEXT.md`](CONTEXT.md). Eixos: `usuario` (dono dos dados, contas 100% individuais) → `periodo` (topo, manual) → `disciplina` (central) → `tarefa` (com tipo TAREFA/TRABALHO) · `prova` (nota opcional) · `horario` (grade-tipo) · `cancelamento` (exceção por instância) · `config_notificacao` · módulo `gamificacao`.

## Estrutura

```
rota-de-estudo/
├── api/            # Spring Boot (REST + auth + jobs push)
├── front/          # Vite + React + shadcn/ui (PWA)
├── docs/adr/       # decisões de arquitetura
├── docs/api.md     # contrato de API (Fase 0)
├── CONTEXT.md      # glossário do domínio
└── docker-compose.yml
```

## Links

- Plano e histórico do grill: nota **[[Rota de Estudo]]** no vault (Obsidian).
- Padrões de engenharia e infra: repo `hetzner-infra` (`PADRAO-DE-ENGENHARIA.md`).