# Alinhamento com o padrão de engenharia

Este projeto usa como referência o `PADRAO-DE-ENGENHARIA.md` do repositório `hetzner-infra`. A referência é o checklist P0–P9; este documento registra o que a Fase 0 já cumpre e o que continua pendente.

## Princípio de ciclo

A Fase 0 é “fazer funcionar”: cria o esqueleto executável, o contrato, o banco local e a fronteira entre as frentes. O checklist completo de endurecimento entra antes de declarar o serviço pronto para produção, principalmente depois que a Fase 1 entregar valor real.

## Estado por prioridade

| Item | Estado | Registro |
|---|---|---|
| P0 Segurança | Parcial | `.env` fora do Git, CORS restrito e auditoria de dependências frontend automatizada no verify; auth, rate limit e cookies httpOnly são da Fase 1 |
| P1 Infra e deploy | Parcial | Compose local e esqueleto de produção no `hetzner-infra`; primeiro deploy ainda não ocorreu |
| P2 Saúde e resiliência | Parcial | Actuator, health check com dependência do banco, shutdown gracioso e health checks dos containers |
| P3 CI/CD | Exceção consciente | Decisão do autor: sem GitHub Actions; testes rodam localmente e o deploy é manual |
| P4 Testes | Base pronta | JUnit na API, Vitest/Testing Library e Playwright no frontend; Mockito fica reservado para os testes de serviço da Fase 1 |
| P5 Monitoramento e logs | Pendente de produção | Logging rotacionado no compose; Uptime Kuma, Sentry e alertas serão configurados no deploy |
| P6 Backups e recuperação | Planejado | `rota_de_estudo_db` e `.env` entram no backup do `hetzner-infra`; falta executar e testar no VPS |
| P7 UI/UX e acessibilidade | Base pronta | Shell mobile-first, foco visível, dicionário i18n e tokens shadcn; telas reais entram na Fase 1 |
| P8 Funcionalidades | Próxima fase | Auth, períodos, disciplinas, tarefas, provas e horários |
| P9 Documentação | Em andamento | Contrato, ADRs, runbook de produção e este registro |

## Decisões que não podem ser esquecidas

- O PostgreSQL de produção é o `postgres-shared` do Hetzner, com banco lógico e role isolados; o Compose local não é o banco de produção.
- Uma VPS única e um container Postgres não são alta disponibilidade. A disponibilidade operacional vem de `restart`, health checks, backup, monitoramento e, no limite, réplica/managed DB.
- shadcn/ui é a base de componentes; a Rota não herda o Design Narniano por ser uma ferramenta de dados, não um produto de contemplação.
- O contrato OpenAPI é a fronteira da dupla. Qualquer mudança incompatível precisa atualizar `docs/openapi.yaml`, regenerar tipos e ser comunicada antes da implementação.
- O fuso do usuário é parte do domínio; nada de “hoje” fixo em UTC no backend.

## Pendências de produção

- Provisionar `rota_de-estudo_db` e `rota_app` na VPS.
- Guardar o `.env` real no Bitwarden e colocá-lo em `ENV_FILES`.
- Publicar os dois subdomínios, configurar TLS e Uptime Kuma.
- Rodar a migration Flyway em ambiente limpo e testar rollback de aplicação.
- Fazer um backup e um restore test antes de habilitar o monitor como operação confiável.
- Revisar P0, P2, P5 e P6 antes do lançamento.

## Evidência de verificação

`bash scripts/verify.sh` executa o preflight, typecheck, lint, auditoria de dependências, testes unitários, build, E2E e testes Maven. O comando pressupõe Docker, Node e o navegador do Playwright instalados.
