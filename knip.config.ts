import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    'src/components/ui/**',
    'src/components/magicui/**',
    'src/app/[lang]/_components/projects-section.tsx',
    'src/components/project-card.tsx',
  ],
  ignoreDependencies: [
    'tailwindcss',
    'tw-animate-css',
    'prettier',
    'postcss-load-config',
    'eslint-config-next',
    'eslint-plugin-next',
    'prettier-plugin-tailwindcss',
  ],
  rules: {
    dependencies: 'error',
    duplicates: 'error',
    exports: 'error',
    files: 'error',
    types: 'error',
  },
};

export default config;
