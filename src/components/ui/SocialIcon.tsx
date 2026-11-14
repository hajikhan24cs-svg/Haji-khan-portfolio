import React, { useState } from 'react';
import { Mail, Globe, Linkedin } from 'lucide-react';

const slugs: Record<string, string> = {
  github: 'github', twitter: 'x', x: 'x', instagram: 'instagram', youtube: 'youtube',
  facebook: 'facebook', medium: 'medium', leetcode: 'leetcode', kaggle: 'kaggle',
};

export const SocialIcon: React.FC<{ platform: string; className?: string }> = ({ platform, className = 'h-4 w-4' }) => {
  const [attempt, setAttempt] = useState(0);
  const key = platform.toLowerCase();

  if (key === 'email' || key === 'mail') return <Mail className={className} />;
  if (key === 'linkedin') return <Linkedin className={`${className} text-[#0a66c2]`} />;

  const slug = slugs[key];
  const urls = slug
    ? [`https://cdn.simpleicons.org/${slug}`, `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`]
    : [];
  if (attempt >= urls.length) return <Globe className={className} />;
  return <img key={attempt} src={urls[attempt]} alt="" onError={() => setAttempt((a) => a + 1)} className={className} />;
};
