import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { techIconUrls } from '../../lib/techIcons';

export const TechIcon: React.FC<{ name: string; className?: string }> = ({ name, className = 'h-5 w-5' }) => {
  const [attempt, setAttempt] = useState(0);
  const urls = techIconUrls(name);
  if (attempt >= urls.length) return <Code2 className={`${className} text-brand`} />;
  return (
    <img
      key={attempt}
      src={urls[attempt]}
      alt=""
      onError={() => setAttempt((a) => a + 1)}
      className={className}
    />
  );
};
