# ADR-0003: Internacionalização desde o V1

- **Status:** accepted (2026-09-23)

## Contexto

O produto terá internacionalização no futuro (mercado/audiência em inglês). Nome verificado em 2026-09-23: **"Rota de Estudo"** está livre na Play/App Store (não há app concorrente com esse nome; concorrentes são Estudez, MyStudyLife, StudyCore etc.); **"StudyFlow"** está saturado (≥ 4 apps) — evitado.

## Decisão

- Nome duplo: **Rota de Estudo** (pt-BR) / **StudyPath** (en).
- **Zero texto hardcoded** no código desde o V1: todas as strings em dicionário de chaves (i18n), pt-BR ativo, catálogo em inglês pronto para ligar.
- Configuração de idioma/fuso por usuário (fuso é obrigatório para notificação "X antes").

## Consequências

- Trocar o idioma no futuro é config, não refactor.
- Exige disciplina de chaves de tradução desde o primeiro commit.