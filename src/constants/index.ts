import dynamic from "next/dynamic";

export const wallpapersList = [
  {
    name: "Sequoia",
    src: "/wallpapers/Sequoia_",
  },
  {
    name: "Rainbow",
    src: "/wallpapers/Rainbow_",
  },
  {
    name: "Macintosh Accent",
    src: "/wallpapers/Macintosh_accent_",
  },
  {
    name: "Macintosh Red",
    src: "/wallpapers/Macintosh_red_",
  },
  {
    name: "Macintosh Blue",
    src: "/wallpapers/Macintosh_blue_",
  },
  {
    name: "Macintosh Gray",
    src: "/wallpapers/Macintosh_gray_",
  },
  {
    name: "Macintosh Green",
    src: "/wallpapers/Macintosh_green_",
  },
  {
    name: "Macintosh Orange",
    src: "/wallpapers/Macintosh_orange_",
  },
  {
    name: "Macintosh Purple",
    src: "/wallpapers/Macintosh_purple_",
  },
  {
    name: "Sonoma",
    src: "/wallpapers/Sonoma_",
  },
  {
    name: "Ventura",
    src: "/wallpapers/Ventura_",
  },
  {
    name: "Monterey",
    src: "/wallpapers/Monterey_",
  },
  {
    name: "Big Sur",
    src: "/wallpapers/BigSur_",
  },
  {
    name: "Catalina",
    src: "/wallpapers/Catalina_",
  },
  {
    name: "Mojave",
    src: "/wallpapers/Mojave_",
  },
  {
    name: "High Sierra",
    src: "/wallpapers/HighSierra_",
  },
];

export const navItems = [
  { en: "File", pl: "Pliki" },
  { en: "Edit", pl: "Edytuj" },
  { en: "View", pl: "Widok" },
  { en: "Go", pl: "Przejdź" },
  { en: "Window", pl: "Okno" },
  { en: "Help", pl: "Pomoc" },
];

export const dockApps = [
  {
    name: { en: "finder", pl: "finder" },
    src: "/images/Finder.png",
    href: "finder",
  },
  {
    name: { en: "launchpad", pl: "launchpad" },
    src: "/images/Launchpad.png",
    href: "launchpad",
  },
  {
    name: { en: "safari", pl: "safari" },
    src: "/images/Safari.png",
    href: "safari",
  },
  {
    name: { en: "pages", pl: "pages" },
    src: "/images/Pages.png",
    href: "pages",
  },
  {
    name: { en: "mail", pl: "mail" },
    src: "/images/Mail.png",
    href: "mail",
  },
  {
    name: { en: "terminal", pl: "terminal" },
    src: "/images/Terminal.png",
    href: "terminal",
  },
  {
    name: { en: "settings", pl: "ustawienia" },
    src: "/images/Settings.png",
    href: "settings",
  },
];

export const DesktopApps = [
  {
    name: { en: "Projects", pl: "Projekty" },
    src: "/images/Folder.png",
    href: "finder",
  },
  {
    name: { en: "CV", pl: "CV" },
    src: "/images/Acrobat.png",
    href: "acrobat",
  },
  {
    name: { en: "Calculator", pl: "Kalkulator" },
    src: "/images/Calculator.png",
    href: "calculator",
  },
  {
    name: { en: "TicTacToe", pl: "TicTacToe" },
    src: "/images/TicTacToe.png",
    href: "tictactoe",
  },
];

export const appsList = [
  {
    name: { en: "store", pl: "sklep" },
    src: "/images/2048.png",
    href: "",
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
  },
  {
    name: { en: "safari", pl: "safari" },
    src: "/images/Safari.png",
    href: "safari",
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
  },
  {
    name: { en: "About me", pl: "O mnie" },
    src: "/images/Pages.png",
    href: "pages",
    page: dynamic(() => import("@/components/apps/Pages"), {
      ssr: false,
    }),
    customAspect: true,
  },
  {
    name: { en: "inbox", pl: "odebrane" },
    src: "/images/Mail.png",
    href: "mail",
    page: dynamic(() => import("@/components/apps/Mail"), {
      ssr: false,
    }),
    sidebarElements: [
      {
        name: { en: "inbox", pl: "odebrane" },
        icon: "/icons/Inbox.svg",
      },
      {
        name: { en: "drafts", pl: "wersje robocze" },
        icon: "/icons/Documents.svg",
      },
      {
        name: { en: "sent", pl: "wysłane" },
        icon: "/icons/Sent.svg",
      },

      {
        name: { en: "trash", pl: "usunięte" },
        icon: "/icons/Trash.svg",
      },
    ],
  },
  {
    name: { en: "terminal", pl: "terminal" },
    src: "/images/Terminal.png",
    href: "terminal",
    page: dynamic(() => import("@/components/apps/Terminal"), {
      ssr: false,
    }),
  },
  {
    name: { en: "projects", pl: "projekty" },
    src: "/images/Folder.png",
    href: "finder",
    page: dynamic(() => import("@/components/apps/Finder"), {
      ssr: false,
    }),
    sidebarElements: [
      {
        name: { en: "ariDrop", pl: "ariDrop" },
        icon: "/icons/AirDrop.svg",
      },
      {
        name: { en: "recents", pl: "ostatnie" },
        icon: "/icons/Recents.svg",
      },
      {
        name: { en: "projects", pl: "projekty" },
        icon: "/icons/Projects.svg",
      },
      {
        name: { en: "applications", pl: "aplikacje" },
        icon: "/icons/Applications.svg",
      },
      {
        name: { en: "desktop", pl: "pulpit" },
        icon: "/icons/Desktop.svg",
      },
      {
        name: { en: "downloads", pl: "pobrane" },
        icon: "/icons/Downloads.svg",
      },
      {
        name: { en: "documents", pl: "dokumenty" },
        icon: "/icons/Documents.svg",
      },
      {
        name: { en: "creative cloud", pl: "creative cloud" },
        icon: "/icons/CreativeCloud.svg",
      },
    ],
  },
  {
    name: { en: "CV", pl: "CV" },
    src: "/images/Acrobat.png",
    href: "acrobat",
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
    customAspect: true,
  },
  {
    name: { en: "Calculator", pl: "Kalkulator" },
    src: "/images/Calculator.png",
    href: "calculator",
    page: dynamic(() => import("@/components/apps/Calculator"), {
      ssr: false,
    }),
    customAspect: true,
  },
  {
    name: { en: "Tic Tac Toe", pl: "Tic Tac Toe" },
    src: "/images/TicTacToe.png",
    href: "tictactoe",
    page: dynamic(() => import("@/components/apps/TicTacToe"), {
      ssr: false,
    }),
    customAspect: true,
  },
];
