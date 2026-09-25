import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

export type PlaceholderPageProps = {
  title: string;
  description: string;
  actionLabel: string;
  children?: ReactNode;
};

export function PlaceholderPage({ title, description, actionLabel, children }: PlaceholderPageProps) {
  return (
    <section className="placeholder-page" aria-labelledby="page-title">
      <h2 id="page-title">{title}</h2>
      <p>{description}</p>
      <Button variant="outline" size="sm" disabled>
        {actionLabel}
      </Button>
      {children}
    </section>
  );
}
