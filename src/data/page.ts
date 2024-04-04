import ImageSocial from "../../public/social.png";

export const Seo = {
  image: ImageSocial,
  site: "@atomicojs",
  title: "Atomico webcomponents",
  description:
    "OSS project to create interfaces using webcomponents with simple code, fast and light.",
};

export const Socials = {
  twitter: "https://twitter.com/atomicojs",
  documentation: "https://atomico.gitbook.io/doc/",
  youtube: "https://www.youtube.com/channel/UCDuCiVASTng8r4jN6BkuNVg",
  github: "https://github.com/atomicojs/atomico/",
  koFi: "https://ko-fi.com/atomicojs",
  discord: "https://discord.gg/rZJr5hpps4",
};

export const MenuHeader = [
  {
    title: "Github",
    href: Socials.github,
  },
  {
    title: "Documentation",
    href: Socials.documentation,
  },
  {
    title: "Why Atomico?",
    href: "/why",
  },
];

export const MenuModal = [
  {
    title: "SOCIAL",
    items: [
      {
        title: "Github",
        href: Socials.github,
      },
      {
        title: "Twitter",
        href: Socials.twitter,
      },
      {
        title: "Discord",
        href: Socials.discord,
      },
      {
        title: "ko-fi",
        href: Socials.koFi,
      },
      {
        title: "Youtube",
        href: Socials.youtube,
      },
    ],
  },
  {
    title: "STARTED",
    items: [
      {
        title: "Why Atomico?",
        href: "/why",
      },
      {
        title: "Getting started",
        href: "https://atomico.gitbook.io/doc/getting-started-with-atomico",
      },
      {
        title: "Template",
        href: "https://atomico.gitbook.io/doc/api/virtualdom",
      },
      { title: "Props", href: "https://atomico.gitbook.io/doc/api/props" },
      { title: "Hooks", href: "https://atomico.gitbook.io/doc/api/hooks" },
    ],
  },
  {
    title: "UTILITIES",
    items: [
      {
        title: "@atomico/exports",
        href: "https://atomico.gitbook.io/doc/atomico/introduction",
      },
      {
        title: "@atomico/hooks",
        href: "https://atomico.gitbook.io/doc/atomico/atomico-hooks",
      },
      {
        title: "@atomico/react",
        href: "https://atomico.gitbook.io/doc/atomico/atomico-react",
      },
      { title: "More", href: "https://atomico.gitbook.io/doc/" },
    ],
  },
];
