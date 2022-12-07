// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MoLöwe - Mobile Lösungswerkstatt',
  tagline: 'Faculty of Sustainability - Leuphana University',
  url: 'https://moloewe-leuphana.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'moloewe-leuphana', // Usually your GitHub org/user name.
  projectName: 'moloewe-leuphana.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',      // Branch for deployment
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // Configure header and footer
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mobile Lösungswerkstatt - MoLöwe',
        logo: {
          alt: 'My Site Logo',
          src: 'img/leuphanaLogo.svg',
        },
        items: [
          {
            // Go to documentation, top-left
            type: 'doc',
            docId: 'welcome-moloewe',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            to: 'gallery',
            label: 'Gallery',
            position: 'left',
          },
          {
            to: 'contact',
            label: 'Contact',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'Documentation',
                to: '/docs/welcome-moloewe',
              },
              {
                label: 'FAQ',
                to: 'faq',
              },
              {
                label: 'Gallery',
                to: 'gallery',
              },
              {
                label: 'Contact',
                to: 'contact',
              },
            ],
          },
        ],
        logo: {
            alt: 'DBU Logo',
            src: 'img/dbuLogo.svg',
            href: 'https://www.dbu.de',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Mobile Solution Workshop.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
