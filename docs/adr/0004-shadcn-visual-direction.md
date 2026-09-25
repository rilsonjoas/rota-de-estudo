# ADR-0004: Base shadcn/ui e direção visual neutra

- **Status:** accepted (2026-09-25)

## Contexto

O shell do StudyPath precisava de uma camada de componentes antes das telas reais. O projeto usa Vite + React e a decisão de arquitetura já apontava shadcn/ui. O Design Narniano, porém, foi criado para o cluster de leitura e contemplação, não para ferramentas de dados.

## Decisão

Usar shadcn/ui como base de componentes, com tokens CSS e Tailwind. Não herdar molduras, ornamentos, dourado ou tipografia devocional do Design Narniano. A identidade visual será fechada com as telas da Fase 1, mantendo foco por teclado, contraste e mobile-first.

## Consequências

- A base de componentes fica pronta antes da UI de produto.
- Tokens precisam ser validados por contraste quando o tema claro entrar.
- Componentes novos devem ser adicionados conforme necessidade real, sem transformar a base em uma biblioteca premature.
- A decisão é diferente do padrão visual dos projetos do cluster A Biblioteca e fica registrada para evitar confusão futura.
