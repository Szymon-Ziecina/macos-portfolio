export enum WallpaperTypes {
  SEQUOIA_LIGHT = "/wallpapers/Sequoia_light.jpg",
  SEQUOIA_DARK = "/wallpapers/Sequoia_dark.jpg",
}

export interface NavbarProps {
  locale: "en" | "pl";
}

export interface ClockProps {
  variant: "big" | "small";
  locale?: "en" | "pl";
}

export interface timeProps {
  day: string;
  month: string;
  date: number;
  hour: number;
  minute: number;
}

export interface LoginPageProps {
  name: string | undefined;
  avatar: string | undefined;
  locale: "en" | "pl";
}

export type GithubUserType = {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

export interface GithubRepoType {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export interface AppIconProps {
  name: { en: string; pl: string };
  src?: string;
  type?: "dock" | "desktop";
  href?: string;
  index?: number;
  locale?: "en" | "pl";
  isOpen?: boolean;
}

export type AppProps = string | undefined;

export interface App {
  name: { en: string; pl: string };
  src: string;
  href: string;
  page:
    | React.FC
    | ((props: {
        userRepos: GithubRepoType[];
        userData: GithubUserType;
      }) => JSX.Element);

  sidebarElements?: {
    name: { en: string; pl: string };
    icon?: React.ReactNode;
  }[];
  customAspect?: boolean;
}

export interface SidebarElementProps {
  name: {
    en: string;
    pl: string;
  };
  icon?: string;
}

export interface Command {
  input: string;
  output: string;
}
