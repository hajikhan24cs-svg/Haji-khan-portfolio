import React, { useState } from 'react';
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { usePublicData } from '../context/PortfolioContext';
import { SocialIcon } from '../components/ui/SocialIcon';
import { PageHeader } from '../components/ui/PageHeader';

export const ContactPage: React.FC = () => {
  const { profile } = usePublicData();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/public/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message.');
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const details = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    profile.phone && { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: profile.location },
  ].filter(Boolean) as Array<{ icon: typeof Mail; label: string; value: string; href?: string }>;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk"
        description="Have an opportunity, a project or just a question? Send a message and I'll get back to you."
      />

      <div className="container-page grid gap-10 py-12 lg:grid-cols-12">
        <div className="space-y-4 lg:col-span-5">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-brand text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-sm text-faint">{label}</p>
                {href ? (
                  <a href={href} className="block truncate font-medium text-ink hover:text-brand">{value}</a>
                ) : (
                  <p className="font-medium text-ink">{value}</p>
                )}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <p className="text-sm font-semibold text-ink">Find me online</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.socialLinks.map((l) => (
                <a key={l.platform} href={l.url} target="_blank" rel="noopener noreferrer" className="btn-secondary !py-2">
                  <SocialIcon platform={l.platform} /> {l.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="card p-6 shadow-lift sm:p-8 lg:col-span-7">
          {submitted ? (
            <div className="space-y-4 py-14 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-success" />
              <h2 className="text-2xl">Message sent</h2>
              <p className="mx-auto max-w-sm text-muted">Thanks for reaching out. I'll reply as soon as I can.</p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary mt-2">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="field-label">Name</label>
                  <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="field" />
                </div>
                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" className="field" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="field-label">Subject <span className="font-normal text-faint">(optional)</span></label>
                <input id="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} placeholder="What's this about?" className="field" />
              </div>
              <div>
                <label htmlFor="message" className="field-label">Message</label>
                <textarea id="message" required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your project or role…" className="field resize-none" />
              </div>

              {error && (
                <p role="alert" className="rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger">{error}</p>
              )}

              <button type="submit" disabled={loading} className="btn-primary">
                {loading ? 'Sending…' : <>Send message <Send className="h-4 w-4" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
