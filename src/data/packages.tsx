import { User, Users } from "./users";

interface Package {
  name: string;
  description: any;
  media?: string;
  category: Category.atomico | Category.community;
  user: User;
  href: string;
}

export enum Category {
  atomico = "Atomico",
  community = "Community",
}

export const Categories = {
  [Category.atomico]: { color: "#0088FF", label: Category.atomico },
  [Category.community]: { color: "#00ff90", label: Category.community },
} satisfies {
  [id: string]: {
    color: string;
    label: String;
  };
};

export const Packages: Package[] = [
  {
    name: "@atomico/exports",
    category: Category.atomico,
    description: (
      <>
        Automate the output of your files for NPM and create wrappers to provide
        additional support for React, Preact, and Vue.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/introduction",
  },
  {
    name: "@atomico/vite",
    category: Category.atomico,
    description: (
      <>
        Empower the development of libraries, applications, and more with a
        super-powered Atomico plugin for Vite.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-vite",
  },
  {
    name: "@atomico/storybook",
    category: Category.atomico,
    description: (
      <>
        Design systems with Atomico? Simple! @atomico/storybook facilitates the
        rendering and documentation of your web components in Storybook.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-storybook",
  },
  {
    name: "@atomico/store",
    category: Category.atomico,
    description: (
      <>
        Manage your application's state in a simple way and magically sync your
        web components with easily manageable states.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-store",
  },
  {
    name: "@atomico/router",
    category: Category.atomico,
    description: (
      <>
        A truly simple but futuristic router manager (asynchronous generators
        and more) for SPA applications.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-router",
  },
  {
    name: "@atomico/hooks",
    category: Category.atomico,
    description: (
      <>
        How about a library with more than 50 utilities in the form of hooks?
        That's @atomico/hooks, hundreds of hooks for your project.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-hooks",
  },
  {
    name: "@atomico/react",
    category: Category.atomico,
    description: (
      <>
        Your web components created with Atomico can function as if they were
        components created with React. Come on, dive in and create your
        interface with Atomico for React.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-react",
  },
  {
    name: "@atomico/astro",
    category: Category.atomico,
    description: (
      <>
        Create amazing sites using Atomico and Astro. With these plugins, you
        will achieve using SSG and SSR with Astro build for Atomico.
      </>
    ),
    user: Users.atomico,
    href: "https://atomico.gitbook.io/doc/packages/atomico-astro",
  },
  {
    name: "Milkdown",
    category: Category.community,
    description: (
      <>
        Milkdown aims to provide an open source solution for developers to make
        their editors more powerful and attractive
      </>
    ),
    user: Users.milkdown,
    href: "https://milkdown.dev/",
  },
  {
    name: "Cally",
    category: Category.community,
    description: (
      <>
        Open source calendar components for selecting single dates or date
        ranges. Framework-agnostic, themeable, localizable, accessible.
      </>
    ),
    user: Users.wickyNilliams,
    href: "https://wicky.nillia.ms/cally/",
  },
];
