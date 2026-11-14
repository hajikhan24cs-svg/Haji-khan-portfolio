import React from 'react';
import { Link } from 'react-router-dom';
import { Profile } from '../types';
import { navLinks } from './Navbar';
import { SocialIcon } from './ui/SocialIcon';

export const Footer: React.FC<{ profile: Profile }> = ({ profile }) => (
  <footer className="mt-24 border-t border-line bg-surface">
    <div className="container-page grid gap-10 py-14 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="text-lg font-semibold text-ink">{profile.name}</p>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{profile.title}</p>
        <Link to="/contact" className="btn-primary mt-6 !py-2">
          Get in touch
        </Link>
      </div>

      <nav className="md:col-span-3" aria-label="Footer">
        <p className="text-sm font-semibold text-ink">Pages</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          {[...navLinks.slice(1), { label: 'Resume', to: '/resume' }, { label: 'Contact', to: '/contact' }].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-muted transition hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:col-span-4">
        <p className="text-sm font-semibold text-ink">Elsewhere</p>
        <ul className="mt-4 space-y-2.5 text-sm">
          {profile.socialLinks.map((s) => (
            <li key={s.platform}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-muted transition hover:text-brand"
              >
                <SocialIcon platform={s.platform} /> {s.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="border-t border-line">
      <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-sm text-faint sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>{profile.location}</p>
      </div>
    </div>
  </footer>
);
