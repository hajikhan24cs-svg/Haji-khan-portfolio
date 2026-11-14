import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Testimonial } from '../../types';

export const TestimonialCard: React.FC<{ item: Testimonial }> = ({ item }) => (
  <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-8 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
    <Quote className="absolute -right-3 -top-3 h-28 w-28 rotate-12 text-brand/[0.06] transition group-hover:text-brand/10" />
    <div className="relative">
      <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
        {Array.from({ length: item.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <blockquote className="mt-5 text-lg leading-relaxed text-ink">“{item.quote}”</blockquote>
    </div>
    <figcaption className="relative mt-8 flex items-center gap-4 border-t border-line pt-6">
      <img src={item.photoUrl} alt={item.name} className="h-12 w-12 rounded-full object-cover ring-2 ring-brand/20 ring-offset-2" />
      <div>
        <p className="font-semibold text-ink">{item.name}</p>
        <p className="text-sm text-muted">{item.role}, {item.company}</p>
      </div>
    </figcaption>
  </figure>
);
