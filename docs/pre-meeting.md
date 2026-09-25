# Preparação antes da reunião

A reunião com o parceiro precisa fechar divisão de trabalho, revisão, cadência e acesso à VPS. Ela não precisa esperar para a base técnica ser preparada. O documento de apresentação para o Luiz é [`reuniao-luiz.md`](reuniao-luiz.md).

## Já preparado

- [x] Contrato OpenAPI com autenticação, período, disciplina, tarefa, prova, horário e cancelamento.
- [x] Tipos TypeScript gerados a partir do contrato.
- [x] Migration Flyway inicial para o domínio do V1.
- [x] Base shadcn/ui, tokens e decisão de não herança do Design Narniano.
- [x] Compose local com API, frontend e PostgreSQL.
- [x] Esqueleto de produção no `hetzner-infra` com Traefik, `proxy-network`, restart, logs e health checks.
- [x] Documentação de engenharia, produção e recuperação.
- [x] Scripts de preflight e verificação.

## Pode ser feito sem a reunião

- Ler o OpenAPI e anotar dúvidas de contrato para a conversa.
- Rodar `bash scripts/verify.sh` e corrigir problemas locais.
- Provisionar o banco de teste e executar a migration em uma cópia limpa.
- Preparar o `.env.example` da API e do banco, sem segredos reais.
- Revisar acessibilidade do shell com teclado e tela pequena.
- Definir a primeira fatia vertical da Fase 1: usuário/sessão → período → uma tarefa.

## Só a reunião deve fechar

- Quem assume a API e quem assume o frontend.
- Quem é dono da primeira versão do contrato e como o outro valida.
- Como será o review de cada mudança.
- Dia, hora e canal da cadência.
- Regras de acesso ao servidor e ao domínio.
- Quais decisões do plano de engenharia entram antes do primeiro deploy real.

## Resultado esperado

Depois da reunião, atualizar este arquivo com responsáveis e prazos, e transformar a primeira fatia vertical em tickets pequenos. A base técnica não deve permanecer bloqueada por uma decisão que não altera o contrato já escrito.
