import React from 'react';
import { Link } from 'react-router-dom';
import { usePublicData } from '../context/PortfolioContext';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { TestimonialCard } from '../components/ui/TestimonialCard';

export const TestimonialsPage: React.FC = () => {
  const { testimonials } = usePublicData();

  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What people say"
        description="Feedback from teammates, mentors and collaborators."
      />
      <div className="container-page py-12">
        {testimonials.length === 0 ? (
          <div className="card py-20 text-center text-muted">No testimonials yet.</div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => <Reveal key={t.id} delay={(i % 2) * 0.08}><TestimonialCard item={t} /></Reveal>)}
          </div>
        )}
        <div className="mt-16 text-center">
          <p className="text-muted">Want to work together?</p>
          <Link to="/contact" className="btn-primary mt-4">Get in touch</Link>
        </div>
      </div>
    </>
  );
};
