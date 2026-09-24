# CONTEXT.md — Rota de Estudo (StudyPath)

Glossário acordado do domínio. Use esses termos com precisão no código, nos tickets e nas ADRs.

## Termos

| Termo | Definição | Regras/notas |
|---|---|---|
| `usuario` | Pessoa com conta no app. **Dono dos próprios dados** — contas são 100% individuais, sem compartilhamento multi-usuário. | Autorização por dono em toda rota (padrão Assídua). |
| `periodo` | O "semestre" do aluno: contêiner de topo que agrupa disciplinas, horários e provas. Tem nome + data início/fim **opcionais**. **Aberto e arquivado manualmente pelo aluno** (faculdades não seguem calendário único; nada de auto-detectar datas). | 1 período ativo; vários arquivados. Somente o ativo recebe novos itens. Proibido RRULE. |
| `disciplina` | Eixo central do estudo — toda `tarefa` e toda `prova` pertencem a exatamente uma disciplina. | |
| `tarefa` | Entrega com prazo. Tem `tipo` (TAREFA | TRABALHO | OUTRO), prioridade, prazo e tags livres. "Trabalho" é tarefa com peso maior (XP dobrado), não entidade separada. | |
| `prova` | Avaliação com data e peso. Tem **nota opcional** que o usuário registra — a gamificação reage a "bom resultado" (≥ 7 configurável). | |
| `horario` | Aula semanal fixa (dia da semana + hora): a **grade-tipo**. Não é um motor de recorrência genérico; é uma lista fixa de slots que se repete toda semana dentro do período. | |
| `cancelamento` | Exceção por instância: "aula de X cancelada em DD/MM". Some daquele dia no calendário **e silencia o lembrete daquele dia**. Sem "troca de horário" nem "aula extra" no V1. | |
| `config_notificacao` | Padrões de notificação por evento (janela/horário). | |
| `gamificacao` | Módulo isolado no Spring que consome **eventos de domínio** e produz XP/nível/streak/conquistas. V1: só recompensa. **Punição é ponto de extensão** no mesmo módulo. | Nunca acoplar ao CRUD. |
| `rota-de-estudo` / `study-path` | Nome do produto: Rota de Estudo (pt) / StudyPath (en). | Decisão de i18n — ver ADR-0003. |

## Indefinições a resolver (não bloquear)

- Papel do **Luiz** na dupla (nível em React/Java, divisão de trabalho, review) — aguardando reunião da dupla. O **contrato de API** é a fronteira natural entre os dois (ver Fase 0).
- Regras exatas de XP/conquistas (tabela v0 registrada no vault; números ajustáveis).