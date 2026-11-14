import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  to?: string;
  linkLabel?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, to, linkLabel }) => (
  <Reveal className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
    <div>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-xl text-muted">{description}</p>}
    </div>
    {to && (
      <Link to={to} className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line-strong bg-surface px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand hover:text-brand">
        {linkLabel || 'View all'} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    )}
  </Reveal>
);
