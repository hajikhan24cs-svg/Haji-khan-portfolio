/** Maps a skill / tech name to a Simple Icons slug (https://simpleicons.org). */
const rules: Array<[RegExp, string]> = [
  [/spring/i, 'springboot'],
  [/typescript/i, 'typescript'],
  [/javascript/i, 'javascript'],
  [/next/i, 'nextdotjs'],
  [/react/i, 'react'],
  [/vue/i, 'vuedotjs'],
  [/tailwind/i, 'tailwindcss'],
  [/bootstrap/i, 'bootstrap'],
  [/html/i, 'html5'],
  [/css/i, 'css3'],
  [/express/i, 'express'],
  [/node/i, 'nodedotjs'],
  [/golang|^go\b|go \(/i, 'go'],
  [/c\+\+|cpp/i, 'cplusplus'],
  [/qt/i, 'qt'],
  [/cmake/i, 'cmake'],
  [/maven/i, 'apachemaven'],
  [/java/i, 'openjdk'],
  [/postgre/i, 'postgresql'],
  [/mysql/i, 'mysql'],
  [/sqlite/i, 'sqlite'],
  [/supabase/i, 'supabase'],
  [/mongo/i, 'mongodb'],
  [/github/i, 'github'],
  [/git/i, 'git'],
  [/linux|ubuntu/i, 'linux'],
  [/docker/i, 'docker'],
  [/vercel/i, 'vercel'],
  [/vite/i, 'vite'],
  [/python/i, 'python'],
  [/rest|api/i, 'postman'],
];

/** Ordered list of icon sources to try (coloured CDN first, then jsDelivr's npm package). */
export function techIconUrls(name: string): string[] {
  const hit = rules.find(([re]) => re.test(name));
  if (!hit) return [];
  return [
    `https://cdn.simpleicons.org/${hit[1]}`,
    `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${hit[1]}.svg`,
  ];
}
