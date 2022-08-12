import ImageSocial from "../public/social.png";

export const SEO = {
  image: ImageSocial,
  site: "@atomicojs",
  title: "Atomico webcomponents",
  description:
    "OSS project to create interfaces using webcomponents with simple code, fast and light.",
};

export const socials = {
  twitter: "https://twitter.com/atomicojs",
  documentation: "https://atomico.gitbook.io/doc/",
  youtube: "https://www.youtube.com/channel/UCDuCiVASTng8r4jN6BkuNVg",
  github: "https://github.com/atomicojs/atomico/",
  koFi: "https://ko-fi.com/atomicojs",
  discord: "https://t.co/tI70k1DhoN",
};

export const author = {
  href: "https://twitter.com/uppercod",
};

export const menuHeader = [
  {
    title: "Github",
    href: socials.github,
  },
  {
    title: "Documentation",
    href: socials.documentation,
  },
  {
    title: "Why Atomico?",
    href: "/why",
  },
];

export const menuModal = [
  {
    title: "SOCIAL",
    items: [
      {
        title: "Github",
        href: socials.github,
      },
      {
        title: "Twitter",
        href: socials.twitter,
      },
      {
        title: "Discord",
        href: socials.discord,
      },
      {
        title: "ko-fi",
        href: socials.koFi,
      },
      {
        title: "Youtube",
        href: socials.youtube,
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
      { title: "@atomico/ui(Formilk)", href: "https://formilk.netlify.app/" },
      { title: "More", href: "https://atomico.gitbook.io/doc/" },
    ],
  },
];
