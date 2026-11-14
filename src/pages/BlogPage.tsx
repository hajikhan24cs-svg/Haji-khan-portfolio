import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { PostCard } from '../components/ui/PostCard';

export const BlogPage: React.FC = () => {
  const { blogPosts } = usePublicData();
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filtered = blogPosts.filter(
    (p) => !q || [p.title, p.excerpt, ...p.tags].some((s) => s.toLowerCase().includes(q)),
  );

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Writing & notes"
        description="Articles on backend development, system design and lessons from the projects I build."
      >
        <div className="relative max-w-sm">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles or tags…"
            aria-label="Search articles"
            className="field !pl-10"
          />
        </div>
      </PageHeader>

      <div className="container-page py-12">
        {filtered.length === 0 ? (
          <div className="card py-20 text-center text-muted">
            {blogPosts.length === 0 ? 'No articles published yet.' : 'No articles match your search.'}
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filtered.map((p, i) => <Reveal key={p.id} delay={(i % 2) * 0.08}><PostCard post={p} /></Reveal>)}
          </div>
        )}
      </div>
    </>
  );
};
