import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { ProjectCard } from '../components/ui/ProjectCard';

export const ProjectsPage: React.FC = () => {
  const { projects } = usePublicData();
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((p) => p.category)))], [projects]);

  const filtered = projects.filter((p) => {
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      [p.title, p.summary, ...p.tags, ...p.techStack].some((s) => s.toLowerCase().includes(q));
    return (category === 'All' || p.category === category) && matchesQuery;
  });

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Things I've built"
        description="Case studies of the software I've designed and developed, with the tools and decisions behind each one."
      />

      <div className="container-page py-12">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  category === c ? 'bg-ink text-white' : 'bg-subtle text-body hover:text-ink'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech…"
              aria-label="Search projects"
              className="field !pl-10"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="card py-20 text-center">
            <p className="text-lg font-medium text-ink">No projects match your search</p>
            <button
              onClick={() => { setCategory('All'); setQuery(''); }}
              className="btn-secondary mt-5"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08}><ProjectCard project={p} /></Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
