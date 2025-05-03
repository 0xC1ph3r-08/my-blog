// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xC1PH3R\'s BlOG',
  tagline: 'Cybersecurity Enthusiast',
  favicon: 'img/logo-svg.svg',

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
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contact',
        path: 'contact',
        routeBasePath: 'contact',
        sidebarPath: require.resolve('./sidebarsContact.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: 'projects',
        routeBasePath: 'projects', // Changed from 'first' to 'projects'
        sidebarPath: require.resolve('./sidebarsProjects.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'timeline', // Ensure unique ID for timeline
        path: 'TimeLine', // Path to your Timeline folder
        routeBasePath: 'TimeLine', // Route for the Timeline pages
        sidebarPath: require.resolve('./sidebarTimeline.js'), // Ensure sidebar file is correct
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: "C1PH3R's-securr",
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'right',
          label: 'WriteUps',
        },
        {
          type: 'docSidebar',
          sidebarId: 'projectsSidebar', // Link to your new projects sidebar
          docsPluginId: 'projects', // Ensure it matches the plugin ID
          position: 'right',
          label: 'Projects',
        },
        
        { to: '/blog', label: 'Blogs', position: 'right' },
        {
          type: 'docSidebar',
          sidebarId: 'contactSidebar',
          docsPluginId: 'contact', // Required for second docs instance
          position: 'right',
          label: 'Contact',
        },
        {
          type: 'docSidebar',
          sidebarId: 'timelineSidebar', // Link to your new timeline sidebar
          docsPluginId: 'timeline', // Ensure it matches the plugin ID
          position: 'right',
          label: 'TimeLine',
        },
      ],
    },
  },
};

export default config;
