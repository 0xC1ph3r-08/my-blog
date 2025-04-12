// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '0xc1ph3r', // Updated title
  tagline: 'Cybersecurity Enthusiast', // Updated tagline
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com', // **REPLACE WITH YOUR URL**
  baseUrl: '/',

  organizationName: 'your-github-username', // **REPLACE WITH YOUR GITHUB USERNAME**
  projectName: 'your-repo-name', // **REPLACE WITH YOUR REPO NAME**

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/', // **REPLACE WITH YOUR REPO URL**
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/your-repo-name/edit/main/', // **REPLACE WITH YOUR REPO URL**
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', // **REPLACE WITH YOUR SOCIAL CARD IMAGE**
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
          { to: '/blog', label: 'Blogs', position: 'right' }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/your-github-username/your-repo-name', // **REPLACE WITH YOUR REPO URL**
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 0xc1ph3r. Built with Docusaurus.`, // Updated copyright
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;