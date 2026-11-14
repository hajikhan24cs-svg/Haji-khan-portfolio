import React from 'react';
import { motion } from 'motion/react';
import { Server, Layout, Database, Cloud, Blocks, Layers } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { PageHeader } from '../components/ui/PageHeader';
import { Reveal } from '../components/ui/Reveal';
import { TechIcon } from '../components/ui/TechIcon';

const levelLabel = ['', 'Beginner', 'Basic', 'Intermediate', 'Advanced', 'Expert'];
const categoryOrder = ['Backend', 'Frontend', 'Databases', 'Cloud & DevOps', 'Architecture'];
const categoryIcon: Record<string, React.ElementType> = {
  Backend: Server, Frontend: Layout, Databases: Database, 'Cloud & DevOps': Cloud, Architecture: Blocks,
};

export const SkillsPage: React.FC = () => {
  const { skills } = usePublicData();

  const groups = categoryOrder
    .map((category) => ({ category, items: skills.filter((s) => s.category === category) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Tools & technologies"
        description="The languages, frameworks and concepts I use, with an honest rating of my current level."
      />

      <div className="container-page grid gap-6 py-14 md:grid-cols-2">
        {groups.map(({ category, items }, gi) => {
          const Icon = categoryIcon[category] || Layers;
          return (
            <Reveal key={category} delay={(gi % 2) * 0.08}>
              <section className="card h-full p-7 transition duration-300 hover:shadow-lift">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-brand text-white shadow-md shadow-brand/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h2 className="text-xl">{category}</h2>
                    <p className="text-sm text-faint">{items.length} skills</p>
                  </div>
                </div>

                <ul className="mt-7 space-y-5">
                  {items.map((s, i) => (
                    <li key={s.id}>
                      <div className="flex items-center justify-between gap-3 text-sm">
                        <span className="flex items-center gap-2.5 font-medium text-ink">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-canvas ring-1 ring-line">
                            <TechIcon name={s.name} className="h-[18px] w-[18px]" />
                          </span>
                          {s.name}
                        </span>
                        <span className="rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                          {levelLabel[s.proficiency]}
                        </span>
                      </div>
                      <div
                        className="mt-2.5 h-2 overflow-hidden rounded-full bg-subtle"
                        role="meter"
                        aria-label={`${s.name} proficiency`}
                        aria-valuemin={1}
                        aria-valuemax={5}
                        aria-valuenow={s.proficiency}
                      >
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-teal-500 to-brand"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(s.proficiency / 5) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </>
  );
};
