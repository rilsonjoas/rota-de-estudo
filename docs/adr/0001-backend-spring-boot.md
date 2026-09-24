# ADR-0001: Backend em Spring Boot (Java)

- **Status:** accepted (2026-09-23)

## Contexto

O autor quer dominar Java/Spring porque o mercado enterprise/bancos pede muito — Java é a 2ª língua já documentada no plano de carreira, e **web/Spring Boot** é uma lacuna de portfólio identificada. Laravel foi descartada porque já é dominada no projeto Assídua (Laravel 13 + Sanctum em produção, 211 testes) — um segundo app Laravel seria planalto, não aprendizado.

## Decisão

**Spring Boot** (Java 21, REST, Spring Security, JPA + Flyway) + PostgreSQL, em vez do padrão default do autor (Fastify/Drizzle/Zod, da Filosofia e Padrões de Engenharia).

## Consequências

- Vira o **caso real de portfólio Java-web** e o exercício de dominar a stack Spring.
- Custa velocidade de iteração no início (dupla precisa dominar a stack).
- O contrato de API precisa ser desenhado **antes** do código para a dupla não travar — é a fronteira natural entre os dois (Fase 0).