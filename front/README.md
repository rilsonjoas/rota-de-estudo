# front/

Frontend **Vite + React + TypeScript + shadcn/ui** (PWA, service worker + web push).

- **Fase 0:** contrato de API em `docs/api.md`; shell da SPA + roteamento.
- **Fase 1:** telas **Hoje / Semana / Mês** (mobile-first, táctil, colisões destacadas, modais de criar/editar); login (Google OAuth priority, e-mail/senha fallback); CRUD de período/disciplina/tarefa/prova/horário + cancelamento.
- **Fase 2:** inscrição + recepção de web push (VAPID), preferências.
- **Fase 3:** XP/nível/streak/conquistas na UI.
- **Fase 4:** i18n EN (chaves já em uso desde o V1, ADR-0003).

Testes: Vitest + Testing Library; E2E: Playwright. Design system: shadcn/ui (estilo Narniano).

Ver ADRs em `../docs/adr/` e glossário em `../CONTEXT.md`.