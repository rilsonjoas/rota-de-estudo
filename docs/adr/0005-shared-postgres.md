# ADR-0005: PostgreSQL compartilhado no Hetzner

- **Status:** accepted (2026-09-25)

## Contexto

A aplicação precisa de PostgreSQL persistente, e a infraestrutura pessoal já usa um container `postgres-shared` na VPS Hetzner, acessível apenas pela `proxy-network`. O Compose local do projeto serve para desenvolvimento e não é o destino do banco de produção.

## Decisão

Usar `rota_de_estudo_db` e a role isolada `rota_app` no Postgres compartilhado do Hetzner. O banco não terá `ports:` publicados. A API usará `DATABASE_URL` e secrets de ambiente; o compose de produção será servido pelo Traefik.

## Consequências

- Um container Postgres economiza RAM em uma VPS de 4 GB.
- Os bancos competem por memória e I/O; crescimento anormal pode exigir separação.
- `restart`, health check, backup, restore test, Uptime Kuma e logs rotacionados são obrigatórios para resiliência.
- Uma VPS única não é alta disponibilidade. Réplica ou banco gerenciado é uma decisão futura se o serviço exigir mais.
- A migration Flyway é a fonte versionada do schema; não editar o banco de produção manualmente.
