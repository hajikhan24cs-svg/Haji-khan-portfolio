import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight, FileText, MapPin, Sparkles, Rocket, Layers, Code2, Server, Database, GitBranch, Mail,
} from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { PostCard } from '../components/ui/PostCard';
import { TestimonialCard } from '../components/ui/TestimonialCard';
import { Reveal, Stagger, RevealItem } from '../components/ui/Reveal';
import { CountUp } from '../components/ui/CountUp';
import { Marquee } from '../components/ui/Marquee';
import { TechIcon } from '../components/ui/TechIcon';
import { SocialIcon } from '../components/ui/SocialIcon';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
});

const focusAreas = [
  { icon: Server, title: 'Backend systems', text: 'REST APIs and services with Java, Spring Boot and Go.' },
  { icon: Layers, title: 'Full-stack apps', text: 'Responsive React front-ends wired to real data.' },
  { icon: Database, title: 'Data & storage', text: 'Relational schemas, queries and reliable persistence.' },
  { icon: GitBranch, title: 'Clean engineering', text: 'Version control, structure and readable code.' },
];

export const HomePage: React.FC = () => {
  const { profile, projects, skills, blogPosts, testimonials } = usePublicData();

  const techs = Array.from(new Set([...skills.map((s) => s.name), ...projects.flatMap((p) => p.techStack)]));
  const stats = [
    { value: projects.length, label: 'Projects built', icon: Rocket },
    { value: new Set(projects.flatMap((p) => p.techStack)).size, label: 'Technologies used', icon: Code2 },
    { value: skills.length, label: 'Skills tracked', icon: Sparkles },
  ];

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden border-b border-line bg-surface">
        <div className="bg-hero-glow absolute inset-0" aria-hidden />
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand/15 blur-3xl" aria-hidden />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" aria-hidden />

        <div className="container-page relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.span {...fadeUp(0)} className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success-soft px-4 py-1.5 text-sm font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {profile.availabilityStatus}
            </motion.span>

            <motion.h1 {...fadeUp(0.1)} className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-5 text-2xl font-semibold text-brand sm:text-3xl">
              {profile.title}
            </motion.p>

            <motion.p {...fadeUp(0.3)} className="lead mt-5 max-w-xl">{profile.tagline}</motion.p>

            <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary !px-6 !py-3 shadow-lg shadow-brand/20 hover:-translate-y-0.5">
                View my work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="btn-secondary !px-6 !py-3">
                <Mail className="h-4 w-4" /> Contact me
              </Link>
              <Link to="/resume" className="btn-ghost !py-3"><FileText className="h-4 w-4" /> Resume</Link>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="mt-9 flex items-center gap-3">
              <span className="text-sm text-faint">Find me on</span>
              {profile.socialLinks.map((l) => (
                <a
                  key={l.platform}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={l.platform}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface shadow-card transition hover:-translate-y-1 hover:border-brand hover:shadow-lift"
                >
                  <SocialIcon platform={l.platform} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:ml-auto">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-teal-400 to-brand opacity-90" aria-hidden />
              <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-brand-soft" aria-hidden />
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="relative aspect-[4/5] w-full rounded-3xl border-4 border-white object-cover shadow-lift"
              />


              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line bg-white px-4 py-2.5 text-sm shadow-lift">
                <MapPin className="h-4 w-4 text-brand" />
                <span className="font-medium text-ink">{profile.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────── Tech marquee ───────────── */}
      {techs.length > 0 && (
        <section className="border-b border-line bg-canvas py-8">
          <p className="mb-5 text-center text-sm font-medium text-faint">Technologies I work with</p>
          <Marquee>
            {techs.map((t) => (
              <span key={t} className="flex items-center gap-2.5 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium text-ink shadow-card">
                <TechIcon name={t} className="h-5 w-5" /> {t}
              </span>
            ))}
          </Marquee>
        </section>
      )}

      {/* ───────────── Stats ───────────── */}
      <section className="container-page pt-20">
        <Stagger className="grid gap-5 sm:grid-cols-3">
          {stats.map(({ value, label, icon: Icon }) => (
            <RevealItem key={label}>
              <div className="card flex items-center gap-5 p-6 transition hover:-translate-y-1 hover:shadow-lift">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-brand text-white shadow-lg shadow-brand/25">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-4xl font-bold text-ink"><CountUp to={value} suffix="+" /></p>
                  <p className="text-sm text-muted">{label}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </section>

      {/* ───────────── What I do ───────────── */}
      <section className="container-page pt-24">
        <SectionHeading eyebrow="What I do" title="Building software that works" description="The areas I focus on as I grow as an engineer." />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map(({ icon: Icon, title, text }) => (
            <RevealItem key={title}>
              <div className="group card h-full p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </section>

      {/* ───────────── Projects ───────────── */}
      {projects.length > 0 && (
        <section className="container-page pt-24">
          <SectionHeading eyebrow="Portfolio" title="Selected projects" description="A few things I've built recently." to="/projects" linkLabel="All projects" />
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <RevealItem key={p.id}><ProjectCard project={p} /></RevealItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* ───────────── Blog ───────────── */}
      {blogPosts.length > 0 && (
        <section className="container-page pt-24">
          <SectionHeading eyebrow="Blog" title="Latest writing" description="Notes on what I'm learning and building." to="/blog" linkLabel="All articles" />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {blogPosts.slice(0, 2).map((p) => (
              <RevealItem key={p.id}><PostCard post={p} /></RevealItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* ───────────── Testimonials ───────────── */}
      {testimonials.length > 0 && (
        <section className="container-page pt-24">
          <SectionHeading eyebrow="Testimonials" title="Kind words" to="/testimonials" linkLabel="Read more" />
          <Stagger className="grid gap-6 md:grid-cols-2">
            {testimonials.slice(0, 2).map((t) => (
              <RevealItem key={t.id}><TestimonialCard item={t} /></RevealItem>
            ))}
          </Stagger>
        </section>
      )}

      {/* ───────────── CTA ───────────── */}
      <section className="container-page pt-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-brand/50 blur-3xl" aria-hidden />
            <div className="absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-teal-400/30 blur-3xl" aria-hidden />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white sm:text-5xl">Let's build something great</h2>
              <p className="mx-auto mt-5 max-w-lg text-white/70">
                I'm open to internships and entry-level roles. If you have an opportunity or a project in mind, I'd love to hear about it.
              </p>
              <Link to="/contact" className="btn mt-9 bg-white !px-7 !py-3 text-ink hover:-translate-y-0.5 hover:bg-brand-soft">
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
};
