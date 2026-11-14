import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, Building, Calendar, ExternalLink, Github, TrendingUp, User } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { NotFoundPage } from './NotFoundPage';
import { plainText } from '../lib/text';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { projects } = usePublicData();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) return <NotFoundPage message="That project doesn't exist." backTo="/projects" backLabel="All projects" />;

  const next = projects[(index + 1) % projects.length];
  const meta = [
    { icon: User, label: 'Role', value: project.role },
    { icon: Calendar, label: 'Timeline', value: `${project.startDate} – ${project.endDate}` },
    { icon: Building, label: 'Client', value: project.client },
  ].filter((m) => m.value);

  return (
    <article>
      <header className="border-b border-line bg-surface">
        <div className="container-page py-12 sm:py-16">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="tag-brand">{project.category}</span>
          </div>
          <h1 className="page-title mt-4 max-w-3xl">{project.title}</h1>
          <p className="lead mt-5 line-clamp-3 max-w-2xl">{plainText(project.summary)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Live demo <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Github className="h-4 w-4" /> Source code
              </a>
            )}
          </div>
        </div>
      </header>

      <div className="container-page py-12">
        <img
          src={project.coverImage}
          alt={project.title}
          className="aspect-video w-full rounded-3xl border border-line bg-ink object-contain shadow-card"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {project.results && (
              <div className="mb-10 flex gap-4 rounded-2xl bg-success-soft p-6">
                <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-success" />
                <div>
                  <p className="text-sm font-semibold text-success">Outcome</p>
                  <p className="mt-1 text-ink">{project.results}</p>
                </div>
              </div>
            )}
            <div className="markdown">
              <Markdown>{project.description || project.summary}</Markdown>
            </div>

            {project.gallery.length > 1 && (
              <div className="mt-12 grid grid-cols-2 gap-4">
                {project.gallery.slice(1).map((img, i) => (
                  <img key={i} src={img} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="aspect-video w-full rounded-2xl border border-line object-cover" />
                ))}
              </div>
            )}
          </div>

          <aside className="lg:col-span-4">
            <div className="card sticky top-24 space-y-6 p-6">
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <p className="flex items-center gap-1.5 text-sm text-faint"><Icon className="h-4 w-4" /> {label}</p>
                  <p className="mt-1 font-medium text-ink">{value}</p>
                </div>
              ))}
              <div>
                <p className="text-sm text-faint">Tech stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {next && next.id !== project.id && (
          <Link to={`/projects/${next.slug}`} className="card card-hover mt-20 flex items-center justify-between gap-6 p-8">
            <div>
              <p className="text-sm text-faint">Next project</p>
              <p className="mt-1 text-2xl font-semibold text-ink">{next.title}</p>
            </div>
            <ArrowLeft className="h-6 w-6 rotate-180 text-brand" />
          </Link>
        )}
      </div>
    </article>
  );
};
