import dynamic from "next/dynamic";

export const wallpapersList = [
  {
    name: "Sequoia Light",
    src: "/wallpapers/Sequoia_light.jpg",
  },
  {
    name: "Sequoia Dark",
    src: "/wallpapers/Sequoia_dark.jpg",
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
  {
    name: { en: "2048", pl: "2048" },
    src: "/images/2048.png",
    href: "2048",
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
    name: { en: "mail", pl: "mail" },
    src: "/images/Mail.png",
    href: "mail",
    page: dynamic(() => import("@/components/apps/Mail"), {
      ssr: false,
    }),
    sidebarElements: [
      {
        name: { en: "favourites", pl: "ulubione" },
      },
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
        name: { en: "favourites", pl: "ulubione" },
      },
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
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
    customAspect: true,
  },
  {
    name: { en: "TicTacToe", pl: "TicTacToe" },
    src: "/images/TicTacToe.png",
    href: "tictactoe",
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
    customAspect: true,
  },
  {
    name: { en: "2048", pl: "2048" },
    src: "/images/2048.png",
    href: "2048",
    page: dynamic(() => import("@/components/apps/Safari"), {
      ssr: false,
    }),
    customAspect: true,
  },
];
