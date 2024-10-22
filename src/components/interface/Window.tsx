"use client";

import { appsList } from "@/constants";
import useDraggable from "@/lib/hooks/useDraggable";
import {
  AppProps,
  GithubRepoType,
  GithubUserType,
  SidebarElementProps,
} from "@/types";
import { useParams } from "next/navigation";
import { useRef } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Window = ({
  userRepos,
  userData,
}: {
  userRepos: GithubRepoType[];
  userData: GithubUserType;
}) => {
  const { locale, app: appHref } = useParams() as {
    locale: "en" | "pl";
    app: AppProps;
  };
  const windowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { position, handleMouseDown } = useDraggable(
    25,
    100,
    windowRef,
    navRef
  );

  let app = appsList.find((appName) => appName.href === appHref);

  if (!app) app = appsList[0];

  const { name, page: Page, sidebarElements, customAspect } = app;

  const hasSidebar = sidebarElements;

  return (
    <div
      ref={windowRef}
      onMouseDown={handleMouseDown}
      style={{ top: position.top, left: position.left }}
      className={cn(
        "absolute flex rounded-lg overflow-hidden",
        !customAspect && "aspect-video w-[800px] xl:w-[1024px]",
        customAspect && "aspect-auto"
      )}
    >
      {hasSidebar && (
        <Sidebar
          sidebarElements={sidebarElements}
          locale={locale}
          name={name}
        />
      )}
      <div className="flex flex-col h-full w-full">
        <nav
          ref={navRef}
          className="relative flex bg-gray-100 w-full p-3 gap-4"
        >
          <div className="flex items-center gap-5 text-gray-500">
            {!hasSidebar && <WindowControls />}
          </div>
          <p
            className={cn(
              "font-semibold ml-4",
              !hasSidebar &&
                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            )}
          >
            {app?.name[locale].capitalize()}
          </p>
        </nav>
        <main className="h-full bg-white min-w-72 min-h-96">
          <Page userRepos={userRepos} userData={userData} />
        </main>
      </div>
    </div>
  );
};

export default Window;

function Sidebar({
  sidebarElements,
  locale,
  name,
}: {
  sidebarElements: SidebarElementProps[];
  locale: "en" | "pl";
  name: { en: string; pl: string };
}) {
  return (
    <aside className="w-52 flex flex-col items-start pl-3 bg-white/80 backdrop-blur-lg border-r-2 border-gray-400/50">
      <div className="h-6 w-full flex items-center my-3">
        <WindowControls />
      </div>
      <div className="w-full h-full overflow-y-auto text-black/50">
        <div className="w-full text-black mt-2 flex flex-col gap-1">
          {sidebarElements.map((element) => (
            <div
              key={element.name[locale]}
              className={cn(
                "w-11/12 flex items-center gap-2 p-1 rounded-md",
                element.name["en"] === name["en"] && "bg-black/10"
              )}
            >
              {element.icon && (
                <Image
                  src={element.icon}
                  alt={element.name[locale]}
                  height={20}
                  width={20}
                />
              )}
              {element.name[locale].capitalize()}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function WindowControls() {
  return (
    <div className="group flex gap-2">
      <Link
        href="/home"
        className="flex items-center justify-center w-4 h-4 bg-close text-transparent group-hover:text-black rounded-full transition-all duration-150"
      >
        <p className="mb-1">x</p>
      </Link>
      <div className="flex items-center justify-center w-4 h-4 bg-minimize text-transparent group-hover:text-black rounded-full transition-all duration-150">
        <p className="mb-1">-</p>
      </div>
      <div className="flex items-center justify-center w-4 h-4 bg-maximize text-transparent group-hover:text-black rounded-full transition-all duration-150">
        <p className="mb-1">+</p>
      </div>
    </div>
  );
}
