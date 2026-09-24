# Pauta — Reunião 01 (Rota de Estudo / StudyPath)

- **Quando:** próxima reunião da dupla (Rilson + Luís)
- **Objetivo:** destravar as pendências que travaram o início do projeto — divisão de trabalho e contrato de API — e alinhar decisões já fechadas.

---

## 1. Divisão de trabalho (bloqueante — decidir AQUI)

**Decisão que destrava tudo o resto. Sem ela, ninguém sabe o que montar.**

- [ ] Quem assume o **frontend** (`front/`: Vite + React + TypeScript + shadcn/ui)?
- [ ] Quem assume a **API** (`api/`: Spring Boot + Java)?
- [ ] Critério: nível real de cada um em **Java/Spring** vs **React/TS** — ser honesto, não é hierarquia, é divisão de aprendizado.
- [ ] **Review do outro:** revisa toda PR/merge ou por fase? Regra simples acordada vale mais que pipeline formal.
- [ ] **E-mail do Luís** para convite como collaborator no repo `rilsonjoas/rota-de-estudo`.

> Plano de carreira do Rilson: dominar Java/Spring é o objetivo central deste projeto (2ª língua de mercado). Nada de "quem é melhor" — se os dois quiserem Java, resolve-se na divisão das telas.

## 2. Contrato de API (`docs/api.md`) — fronteira da dupla

- [ ] Quem escreve a primeira versão? (sugestão: o dono da `api/` desenha; o dono do `front/` valida)
- [ ] Formato de acerto: **OpenAPI** (springdoc) ou markdown simples primeiro? Decidir um.
- [ ] Cobertura mínima da Fase 0: `usuario`/auth + `periodo` + `disciplina` + `tarefa` + `prova` + `horario` + `cancelamento`.
- [ ] Padrões: paginação, erros, timezone — definir no próprio contrato.

## 3. Validação das decisões de arquitetura (já fechadas)

> Arquitetura **não está em discussão** nesta reunião — são ADRs registradas no repo. Aqui só valida-se que o Luís está confortável e alinhado.

- [ ] **Backend Spring Boot** (ADR-0001) e **front Vite+React** (ADR-0002) — ok? Alguma preocupação real?
- [ ] **Sem CI/CD neste projeto** (decisão do autor, 2026-09-24): testes rodam **local** (Vitest/Playwright no front, JUnit/Mockito no api), deploy **manual** via Traefik na VPS. Importante o Luís saber pra não esperar pipeline de PR.
- [ ] **Nome** Rota de Estudo / StudyPath + **i18n** PT→EN desde o V1 (ADR-0003): zero texto hardcoded — custo extra pequeno desde o primeiro commit.
- [ ] **Deploy:** self-host VPS Hetzner (Traefik + Docker) — domínio sugerido `rota-de-estudo.narniano.com`. Quem administra? (hoje: Rilson).

## 4. Gamificação (v0 — números ajustáveis)

- [ ] Confirmar a tabela v0 de **XP** (números não são pedra):
  - Tarefa concluída: `10 × prioridade` (baixa=10, média=20, alta=30)
  - Trabalho concluído (tipo TRABALHO): `50`
  - Nota registrada em prova: `20` (1× por prova)
  - **Nível:** patamar por XP acumulado; **streak** por dias com tarefa concluída.
- [ ] Conquistas v0: primeiras ações (onboarding), 5 tarefas no prazo na semana, prova ≥ 7, primeira semana completa.
- [ ] **Forma:** módulo desacoplado `gamificacao/` (eventos de domínio → XP/conquistas) — não engessa o CRUD.
- [ ] **Punição:** fora do V1; só recompensa. Fica como **ponto de extensão** do mesmo módulo (porte aberto para o futuro).

## 5. Escopo V1 (o que entra e o que FICA FORA)

**Entra:**
- Conta 100% individual + auth (Google OAuth + e-mail/senha, cookie httpOnly, refresh rotativo, rate limit 5/min, fuso por usuário)
- `periodo` (semestre aberto/arquivado **manualmente** pelo aluno — faculdade é caótica)
- `disciplina` + `tarefa` (tipo TAREFA/TRABALHO, prioridade, tags) + `prova` (nota opcional)
- Grade-tipo semanal (horários fixos) + `cancelamento` por instância (some do dia e silencia lembrete)
- Telas **Hoje / Semana / Mês** — mobile-first, toque, colisões destacadas, semana começa segunda
- Web push: tarefa 24h antes; prova cascata 7-3-1; job cron no Spring

**Fica FORA do V1 (registrar como "não": evita retrabalho):**
- Mobile nativo (Expo) — só PWA por enquanto
- Drag-and-drop no calendário
- Edição offline com fila de sync (vai ter só cache de assets)
- Motor de recorrência (RRULE) — cancelamento por exceção cobre o caso real
- Troca de horário / "aula extra"
- Punição na gamificação
- Compartilhamento/multi-usuário nos dados

## 6. Operação pós-reunião

- [ ] Quem monta o **scaffold inicial** de cada módulo (`front/`, `api/`) e quando?
- [ ] **Prazo** da primeira entrega jogável (uma tela + um endpoint mínimo?)
- [ ] **Cadência de encontro** — semanal? bi-semanal?
- [ ] Onde vive o **kanban**: vault (Obsidian) vs GitHub Issues vs outro. Decidir 1.
- [ ] Próxima reunião agendada (data/hora).

---

## Resultado esperado da reunião

Escrito no final (preencher):
- [ ] Divisão de trabalho decidida
- [ ] Dono/escrita do contrato de API definido
- [ ] ADR-0001/0002/0003 validadas (ou nova ADR se o Luís trouxer algo real)
- [ ] XP v0 confirmada (ou números ajustados)
- [ ] Kanban + cadência + prazo da primeira entrega fechados