export const messages = {
  'pt-BR': {
    appName: 'Rota de Estudo',
    phase: 'Fase 0 · Base do produto',
    navigationLabel: 'Navegação principal',
    today: 'Hoje',
    week: 'Semana',
    month: 'Mês',
    connectionChecking: 'Conferindo a API…',
    connectionOnline: 'API conectada',
    connectionOffline: 'API indisponível',
    connectionHelp: 'A base está pronta; os recursos do semestre entram na Fase 1.',
    comingSoon: 'Disponível na Fase 1',
    todayDescription: 'O que exige atenção no dia atual.',
    weekDescription: 'A grade-tipo das aulas da semana.',
    monthDescription: 'Prazos e provas em uma visão mensal.',
  },
  en: {
    appName: 'StudyPath',
    phase: 'Phase 0 · Product foundation',
    navigationLabel: 'Main navigation',
    today: 'Today',
    week: 'Week',
    month: 'Month',
    connectionChecking: 'Checking the API…',
    connectionOnline: 'API connected',
    connectionOffline: 'API unavailable',
    connectionHelp: 'The foundation is ready; semester features arrive in Phase 1.',
    comingSoon: 'Available in Phase 1',
    todayDescription: 'What needs attention today.',
    weekDescription: 'The recurring weekly class schedule.',
    monthDescription: 'Deadlines and exams in a monthly view.',
  },
} as const;

export type Locale = keyof typeof messages;

export function resolveLocale(language: string): Locale {
  return language.toLowerCase().startsWith('en') ? 'en' : 'pt-BR';
}
