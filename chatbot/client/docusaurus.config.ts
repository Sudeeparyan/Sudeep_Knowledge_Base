import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Knowledge Base",
  staticDirectories: ["static"],
  tagline: "Welcome to the Sudeep Aryan's Knowledge Base",
  // favicon: "img/android-chrome-512x512.png",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Sudeep Aryan", // Usually your GitHub org/user name.
  projectName: "SudeepAryan_KnowledgeBase", // Usually your repo name.
  onBrokenLinks: "ignore", 
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        hashed: true,
        // Uncomment and configure the language if your docs use multiple languages
        // language: ["en", "zh"],
      },
    ],
  ],
  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Home Page",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
        srcDark: "img/Soliton-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "aiSidebar",
          position: "left",
          label: "AI 360",
        },
        {
          type: "docSidebar",
          sidebarId: "ragSidebar",
          position: "left",
          label: "RAG 360",
        },
        {
          type: "docSidebar",
          sidebarId: "azureSidebar",
          position: "left",
          label: "Azure 360",
        },
        {
          type: "docSidebar",
          sidebarId: "devOpsSidebar",
          position: "left",
          label: "DevOps",
        },
        {
          type: "docSidebar",
          sidebarId: "codingStandardsSidebar",
          position: "left",
          label: "Coding Standards",
        },
        {
          type: "docSidebar",
          sidebarId: "graphsidebar",
          position: "left",
          label: "Knowledge Graph",
        },
        {
          href: "https://sudeeparyan.github.io/",
          label: "Webiste",
          position: "right",
        },
        { to: "/blog", label: "Authors", position: "left" },
        
      ],
    },
    // footer: {
    //   style: "dark",
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Tutorial',
    //           to: '/docs/intro',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://www.solitontech.com/',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://www.solitontech.com/',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://www.solitontech.com/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: '/blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/solitontech',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} Sudeep Aryan, Inc.`,
    // },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
