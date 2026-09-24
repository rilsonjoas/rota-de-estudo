# api/

Backend **Spring Boot** (Java 21): REST + Spring Security + JPA + Flyway + PostgreSQL.

- **Fase 0:** contrato de API em `docs/api.md` (fronteira da dupla com o front).
- **Fase 1:** `usuario` + auth (Google OAuth + e-mail/senha, cookie httpOnly, refresh rotativo, rate limit), `periodo`, `disciplina`, `tarefa`/`prova`, `horario` + `cancelamento`.
- **Fase 2:** job cron de web push (tarefa 24h; prova 7-3-1).
- **Fase 3:** módulo `gamificacao` (eventos de domínio → XP/nível/streak/conquistas).

Testes: JUnit 5 + Mockito. Migrações: Flyway. Paginação/ordenação: convenção Spring Data.

Ver ADRs em `../docs/adr/` e glossário em `../CONTEXT.md`.