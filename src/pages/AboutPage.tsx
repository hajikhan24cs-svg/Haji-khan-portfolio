import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, GraduationCap, MapPin, FileText } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { Reveal } from '../components/ui/Reveal';
import { PageHeader } from '../components/ui/PageHeader';

export const AboutPage: React.FC = () => {
  const { profile, experience, education } = usePublicData();

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A little about me"
        description={profile.title}
      />

      <div className="container-page grid gap-12 py-16 lg:grid-cols-12">
        <aside className="lg:col-span-4">
          <div className="card sticky top-24 overflow-hidden">
            <img src={profile.photoUrl} alt={profile.name} className="aspect-square w-full object-cover" />
            <div className="space-y-4 p-6">
              <div>
                <p className="text-lg font-semibold text-ink">{profile.name}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <MapPin className="h-4 w-4" /> {profile.location}
                </p>
              </div>
              <Link to="/resume" className="btn-primary w-full">
                <FileText className="h-4 w-4" /> View resume
              </Link>
            </div>
          </div>
        </aside>

        <div className="space-y-16 lg:col-span-8">
          <section>
            <h2 className="text-2xl">Bio</h2>
            <p className="mt-4 text-lg leading-relaxed text-body">{profile.bio}</p>
          </section>

          <section>
            <h2 className="flex items-center gap-2.5 text-2xl">
              <Briefcase className="h-5 w-5 text-brand" /> Experience
            </h2>
            <ol className="mt-8 space-y-8 border-l border-line pl-8">
              {experience.map((e) => (
                <li key={e.id} className="relative"><Reveal>
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-canvas bg-brand ring-2 ring-brand/30" />
                  <p className="text-sm text-faint">{e.startDate} — {e.endDate}</p>
                  <h3 className="mt-1 text-xl">{e.role}</h3>
                  <p className="mt-0.5 text-sm font-medium text-brand">{e.company} · {e.location}</p>
                  <p className="mt-3 leading-relaxed text-muted">{e.description}</p>
                </Reveal></li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="flex items-center gap-2.5 text-2xl">
              <GraduationCap className="h-5 w-5 text-brand" /> Education
            </h2>
            <ol className="mt-8 space-y-8 border-l border-line pl-8">
              {education.map((e) => (
                <li key={e.id} className="relative"><Reveal>
                  <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-4 border-canvas bg-brand ring-2 ring-brand/30" />
                  <p className="text-sm text-faint">{e.startDate} — {e.endDate}</p>
                  <h3 className="mt-1 text-xl">{e.degree} in {e.field}</h3>
                  <p className="mt-0.5 text-sm font-medium text-brand">{e.institution}</p>
                </Reveal></li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </>
  );
};
