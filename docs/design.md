# Base visual e decisão de design

## Decisão

O projeto usa **shadcn/ui** como camada de componentes acessíveis, com tokens CSS e Tailwind. A configuração fica em [`front/components.json`](../front/components.json), o tema em [`front/tailwind.config.ts`](../front/tailwind.config.ts) e os tokens em [`front/src/styles.css`](../front/src/styles.css).

shadcn/ui é a base de componentes, não a identidade visual. A identidade será fechada junto com os componentes reais da Fase 1, quando as telas Hoje/Semana/Mês dão forma concreta ao produto.

## Por que não aplicar o Design Narniano

O Design Narniano é aplicado ao cluster A Biblioteca, cujo usuário é de contemplação e leitura devocional. A Rota de Estudo é uma ferramenta de organização acadêmica: o usuário busca dado, prazo e ação rápida. Portanto, este projeto não herda molduras, dourado, ornamentos ou tipografia devocional.

A base atual é neutra, escura, semântica e mobile-first. Tokens novos devem preservar contraste WCAG AA, foco por teclado, áreas de toque adequadas e funcionamento sem hover.

## Componentes já disponíveis

- `Button` em [`front/src/components/ui/button.tsx`](../front/src/components/ui/button.tsx), com variantes `default`, `outline`, `ghost` e `link`.
- `cn` em [`front/src/lib/utils.ts`](../front/src/lib/utils.ts), para combinar classes sem conflitos do Tailwind.
- Dicionário pt-BR/en em [`front/src/i18n/messages.ts`](../front/src/i18n/messages.ts).

A Fase 1 deve adicionar componentes conforme a necessidade real das telas, usando a CLI do shadcn e registrando a decisão de cada componente que carregue comportamento ou acessibilidade.

## Checklist visual

- Usar tokens, não hex soltos nos componentes.
- Validar contraste de texto, bordas e foco em ambos os temas quando o tema claro entrar.
- Manter alvo de toque mínimo adequado e navegação por teclado.
- Não depender de cor, ícone ou hover para comunicar estado.
- Manter strings dentro do dicionário de tradução.

## Registro

- Decisão de não herança do Design Narniano: 2026-09-25.
- Base shadcn/ui adicionada durante a preparação da Fase 0, antes das telas de produto.
