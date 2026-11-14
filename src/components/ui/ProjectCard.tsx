import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { Project } from '../../types';
import { plainText } from '../../lib/text';
import { TechIcon } from './TechIcon';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link
    to={`/projects/${project.slug}`}
    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_20px_50px_-12px_rgb(15_118_110/0.25)]"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
      <img
        src={project.coverImage}
        alt={project.title}
        loading="lazy"
        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
      <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-brand backdrop-blur">
        {project.category}
      </span>
      <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-ink opacity-0 shadow-lift transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </div>

    <div className="flex flex-1 flex-col p-6">
      <p className="flex items-center gap-1.5 text-xs text-faint">
        <Calendar className="h-3.5 w-3.5" /> {project.startDate}
      </p>
      <h3 className="mt-2 text-xl transition group-hover:text-brand">{project.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{plainText(project.summary)}</p>
      <div className="mt-auto flex flex-wrap gap-2 pt-5">
        {project.techStack.slice(0, 4).map((t) => (
          <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-body">
            <TechIcon name={t} className="h-3.5 w-3.5" /> {t}
          </span>
        ))}
        {project.techStack.length > 4 && <span className="tag">+{project.techStack.length - 4}</span>}
      </div>
    </div>
  </Link>
);
