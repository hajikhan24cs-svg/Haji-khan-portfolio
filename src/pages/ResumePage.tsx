import React from 'react';
import { Download, Printer } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { PageHeader } from '../components/ui/PageHeader';

export const ResumePage: React.FC = () => {
  const { profile, experience, education, skills } = usePublicData();

  const uploadedResume = profile.resumeUrl?.trim();

  const handleDownload = () => {
    const text = [
      `${profile.name.toUpperCase()} - RESUME`,
      `Title: ${profile.title}`,
      `Email: ${profile.email}`,
      `Location: ${profile.location}`,
      '',
      'EXPERIENCE:',
      ...experience.map((e) => `- ${e.role} at ${e.company} (${e.startDate} - ${e.endDate}): ${e.description}`),
      '',
      'EDUCATION:',
      ...education.map((e) => `- ${e.degree} in ${e.field}, ${e.institution} (${e.startDate} - ${e.endDate})`),
      '',
      'SKILLS:',
      ...skills.map((s) => `- ${s.name} (${s.category})`),
    ].join('\n');

    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    link.download = `${profile.name.replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  };

  return (
    <>
      <div className="no-print">
        <PageHeader eyebrow="Resume" title="My resume" description="A summary of my experience, education and skills.">
          <div className="flex flex-wrap gap-3">
            {uploadedResume && (
              <a
                href={uploadedResume}
                target="_blank"
                rel="noopener noreferrer"
                download={uploadedResume.split('/').pop()?.split('?')[0] || 'Resume.pdf'}
                className="btn-primary"
              >
                <Download className="h-4 w-4" /> Download my resume
              </a>
            )}
            <button onClick={() => window.print()} className={uploadedResume ? 'btn-secondary' : 'btn-primary'}>
              <Printer className="h-4 w-4" /> Print / Save as PDF
            </button>
            <button onClick={handleDownload} className="btn-secondary">
              <Download className="h-4 w-4" /> Download .txt
            </button>
          </div>
        </PageHeader>
      </div>

      <div className="container-page max-w-3xl py-12">
        <div className="card space-y-10 p-8 sm:p-12">
          <header className="border-b border-line pb-8">
            <h2 className="text-3xl">{profile.name}</h2>
            <p className="mt-1 font-medium text-brand">{profile.title}</p>
            <p className="mt-3 text-sm text-muted">
              {[profile.email, profile.phone, profile.location].filter(Boolean).join('  ·  ')}
            </p>
          </header>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">Experience</h3>
            <div className="mt-5 space-y-6">
              {experience.map((e) => (
                <div key={e.id}>
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <p className="font-semibold text-ink">{e.role} — {e.company}</p>
                    <p className="text-sm text-faint">{e.startDate} – {e.endDate}</p>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">Education</h3>
            <div className="mt-5 space-y-4">
              {education.map((e) => (
                <div key={e.id} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <div>
                    <p className="font-semibold text-ink">{e.degree} in {e.field}</p>
                    <p className="text-sm text-muted">{e.institution}</p>
                  </div>
                  <p className="text-sm text-faint">{e.startDate} – {e.endDate}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-faint">Skills</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => <span key={s.id} className="tag">{s.name}</span>)}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
