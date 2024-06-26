export const charts = [
  {
    title: 'Notes',
    icon: 'i-lucide-terminal-square',
    subTitle: 'This chart is dummy',
    total: 100000,
  },
  {
    title: 'Storage Used',
    icon: 'i-lucide-terminal-square',
    subTitle: 'This chart is dummy',
    total: 20000,
  },
  {
    title: 'Used Quota',
    icon: 'i-lucide-terminal-square',
    subTitle: 'This chart is dummy',
    total: 40000,
  },
  {
    title: 'Credibility',
    icon: 'i-lucide-terminal-square',
    subTitle: 'This chart is dummy',
    total: 80000,
  },
]

export const library = [
  {
    title: 'nuxt/ui',
    description: 'Fully styled and customizable components for Nuxt. ✨',
    isDone: true,
  },
  {
    title: 'nuxt/icon',
    description: 'Add 100,000+ ready to use icons by iconify',
    isDone: true,
  },
  {
    title: 'nuxtjs/color-mode',
    description:
      'Dark and Light mode with auto detection made easy with Nuxt 🌗',
    isDone: true,
  },
  {
    title: 'vueuse/nuxt',
    description:
      'Provides better Nuxt integration for VueUse auto-import capabilities.',
    isDone: true,
  },
  {
    title: 'nuxtjs/supabase',
    description: 'Wrapper around supabase-js to enable integration with Nuxt.',
    isDone: true,
  },
  {
    title: 'vue-chart-js',
    description: '⚡ Easy and beautiful charts with Chart.js and Vue.js',
    isDone: true,
  },
  {
    title: 'yup',
    description: 'Dead simple Object schema validation.',
    isDone: true,
  },
  {
    title: 'monaco-editor',
    description:
      'The Monaco Editor is the fully featured code editor from VS Code. ',
    isDone: true,
  },
  {
    title: 'date-fns',
    description:
      'Simple and consistent toolset for manipulating JavaScript dates',
    isDone: true,
  },
  {
    title: 'nuxtjs/i18n (WIP)',
    description:
      'Overrides Nuxt default routes to add locale prefixes to every URL',
    isDone: false,
  },
  {
    title: 'pinia/nuxt (WIP)',
    description:
      'Pinia is a store library for Vue, share a state across components/pages.',
    isDone: false,
  },
  {
    title: 'nuxtjs/content (WIP)',
    description: 'Vue components in Markdown with the MDC syntax.',
    isDone: false,
  },
  {
    title: 'Unit Test (WIP)',
    description: 'Unit testing using Vitest.',
    isDone: false,
  },
  {
    title: 'E2E Test (WIP)',
    description: 'E2E test using Cypress.',
    isDone: false,
  },
]

export const feature = [
  {
    title: 'Authentication',
    isDone: true,
    children: [
      {
        title: 'Password Auth',
        isDone: true,
      },
      {
        title: 'Oauth with Github',
        isDone: true,
      },
    ],
  },
  {
    title: 'Realtime Code Editor',
    isDone: true,
    children: [
      {
        title: 'CRUD',
        isDone: true,
      },
      {
        title: 'Share to Public',
        isDone: true,
      },
      {
        title: 'Realtime code viewer',
        isDone: true,
      },
    ],
  },
  {
    title: 'Storage',
    isDone: true,
    children: [
      {
        title: 'Upload',
        isDone: true,
      },
      {
        title: 'Delete File',
        isDone: true,
      },
    ],
  },
  {
    title: 'Supabase',
    isDone: true,
    children: [
      {
        title: 'Migration',
        isDone: true,
      },
      {
        title: 'Row-Level Security Database',
        isDone: true,
      },
      {
        title: 'Row-Level Security Storage',
        isDone: true,
      },
    ],
  },
]
