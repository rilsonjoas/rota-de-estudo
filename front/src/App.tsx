import { useEffect, useState } from 'react';
import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { getHealth } from './lib/api';
import { messages, resolveLocale } from './i18n/messages';
import { PlaceholderPage } from './pages/PlaceholderPage';

type ConnectionState = 'checking' | 'online' | 'offline';

export default function App() {
  const copy = messages[resolveLocale(import.meta.env.VITE_LOCALE ?? 'pt-BR')];
  const [connection, setConnection] = useState<ConnectionState>('checking');

  useEffect(() => {
    const controller = new AbortController();

    getHealth(controller.signal)
      .then(() => setConnection('online'))
      .catch(() => {
        if (!controller.signal.aborted) {
          setConnection('offline');
        }
      });

    return () => controller.abort();
  }, []);

  const connectionLabel = {
    checking: copy.connectionChecking,
    online: copy.connectionOnline,
    offline: copy.connectionOffline,
  }[connection];

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">{copy.phase}</p>
          <h1>{copy.appName}</h1>
        </div>
        <span className={`connection connection-${connection}`} role="status">
          <span className="connection-dot" aria-hidden="true" />
          {connectionLabel}
        </span>
      </header>

      <nav className="app-nav" aria-label={copy.navigationLabel}>
        <NavLink to="/hoje">{copy.today}</NavLink>
        <NavLink to="/semana">{copy.week}</NavLink>
        <NavLink to="/mes">{copy.month}</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/hoje" replace />} />
          <Route
            path="/hoje"
            element={
              <PlaceholderPage
                title={copy.today}
                description={copy.todayDescription}
                actionLabel={copy.comingSoon}
              />
            }
          />
          <Route
            path="/semana"
            element={
              <PlaceholderPage
                title={copy.week}
                description={copy.weekDescription}
                actionLabel={copy.comingSoon}
              />
            }
          />
          <Route
            path="/mes"
            element={
              <PlaceholderPage
                title={copy.month}
                description={copy.monthDescription}
                actionLabel={copy.comingSoon}
              />
            }
          />
          <Route path="*" element={<Navigate to="/hoje" replace />} />
        </Routes>
        <p className="foundation-note">{copy.connectionHelp}</p>
      </main>
    </div>
  );
}
