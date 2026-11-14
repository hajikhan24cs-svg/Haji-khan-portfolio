import React from 'react';
import { motion } from 'motion/react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ eyebrow, title, description, children }) => (
  <section className="relative overflow-hidden border-b border-line bg-surface">
    <div className="bg-hero-glow absolute inset-0" aria-hidden />
    <div className="bg-grid absolute inset-0" aria-hidden />
    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl" aria-hidden />

    <div className="container-page relative py-16 sm:py-24">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-sm font-semibold text-brand"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.6 }}
        className="page-title mt-5 max-w-3xl !text-5xl sm:!text-6xl"
      >
        {title}
      </motion.h1>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.6 }}
          className="lead mt-5 max-w-2xl"
        >
          {description}
        </motion.p>
      )}
      {children && (
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.6 }} className="mt-8">
          {children}
        </motion.div>
      )}
    </div>
  </section>
);
