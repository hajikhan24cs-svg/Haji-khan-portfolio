import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'react-markdown';
import { ArrowLeft, Clock } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { NotFoundPage } from './NotFoundPage';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams();
  const { blogPosts } = usePublicData();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <NotFoundPage message="That article doesn't exist." backTo="/blog" backLabel="All articles" />;

  return (
    <article className="container-page max-w-3xl py-12 sm:py-16">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> All articles
      </Link>

      <div className="mt-8 flex items-center gap-4 text-sm text-faint">
        <span>{post.publishedAt}</span>
        <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
      </div>
      <h1 className="page-title mt-4">{post.title}</h1>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {post.tags.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      {post.coverImage && (
        <img src={post.coverImage} alt={post.title} className="mt-10 aspect-[16/9] w-full rounded-3xl border border-line object-cover" />
      )}

      <div className="markdown mt-10">
        <Markdown>{post.body}</Markdown>
      </div>

      <div className="mt-16 border-t border-line pt-8">
        <Link to="/blog" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>
      </div>
    </article>
  );
};
