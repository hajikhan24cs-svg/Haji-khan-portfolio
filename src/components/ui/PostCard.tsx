import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../../types';
import { plainText } from '../../lib/text';

export const PostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-[0_20px_50px_-12px_rgb(15_118_110/0.25)]"
  >
    {post.coverImage && (
      <div className="aspect-[16/9] overflow-hidden bg-ink">
        <img
          src={post.coverImage}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
    )}
    <div className="flex flex-1 flex-col p-6">
      <div className="flex items-center gap-4 text-xs text-faint">
        <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{post.publishedAt}</span>
        <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
      </div>
      <h3 className="mt-3 text-xl transition group-hover:text-brand">{post.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">{plainText(post.excerpt)}</p>
      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => <span key={t} className="tag-brand">#{t}</span>)}
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
      </div>
    </div>
  </Link>
);
