// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xc1ph3r',
  tagline: 'Cybersecurity Enthusiast',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: '0x-c1ph3r',
  projectName: 'your-repo-name',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ✅ Fix: Add unique ID to the pages plugin
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      
      {
        id: 'contact',
        path: 'contact',
        routeBasePath: 'contact',
        sidebarPath: require.resolve('./sidebarsContact.js'),

      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'projects',  // Unique identifier for the plugin
        path: 'projects',  // Path to your folder, 'projects' here
        routeBasePath: 'first',  // URL structure for the projects page
        sidebarPath: require.resolve('./sidebarsProjects.js'),  // Link to the sidebar configuration
      },
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '0xc1ph3r',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'WriteUps',
        },
        {
          type: 'docSidebar',
          sidebarId: 'contactSidebar',
          docsPluginId: 'contact', // 👈 Required for second docs instance
          position: 'right',
          label: 'Contact',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar',  // Link to your new projects sidebar
          docsPluginId: 'projects',  // Ensure it matches the plugin ID
          position: 'right',
          label: 'Projects',
        },
        { to: '/blog', label: 'Blogs', position: 'right' },
        // { to: '/contact/contact', label: 'Contact', position: 'right' }, // 👈 Contact page link
      ],
    },
  }),
};

export default config;
