export interface User {
  name: string;
  avatar: string;
  href?: string;
  socials: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const Users = {
  uppercod: {
    name: "UpperCod",
    avatar: "https://github.com/uppercod.png",
    href: "https://twitter.com/uppercod",
    socials: {
      github: "uppercod",
      twitter: "uppercod",
    },
  },
  atomico: {
    name: "AtomicoJs",
    avatar: "https://github.com/atomicojs.png?size=60",
    socials: {
      github: "atomicojs",
      twitter: "atomicojs",
      linkedin: "company/atomicojs",
    },
  },
  milkdown: {
    name: "Milkdown",
    avatar: "https://github.com/milkdown.png?size=60",
    socials: {
      github: "milkdown",
    },
  },
  wickyNilliams: {
    name: "WickyNilliams",
    avatar: "https://github.com/WickyNilliams.png?size=60",
    socials: {
      github: "WickyNilliams",
      twitter: "WickyNilliams",
    },
  },
} satisfies {
  [id: string]: User;
};
