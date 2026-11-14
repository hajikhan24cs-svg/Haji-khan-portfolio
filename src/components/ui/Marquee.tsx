import React from 'react';

/** Infinite horizontal scroller (pauses on hover). Content is duplicated for a seamless loop. */
export const Marquee: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
    <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
      <div className="flex gap-4">{children}</div>
      <div className="flex gap-4" aria-hidden>{children}</div>
    </div>
  </div>
);
