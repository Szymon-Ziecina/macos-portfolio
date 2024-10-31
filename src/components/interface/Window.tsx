"use client";

import useDraggable from "@/lib/hooks/useDraggable";
import { ReactNode, useRef } from "react";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Window = ({
  locale,
  name,
  sidebar,
  customAspect,
  children,
}: {
  locale: "en" | "pl";
  name: { en: string; pl: string };
  sidebar?: ReactNode;
  customAspect?: boolean;
  children: ReactNode;
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const { position, handleMouseDown } = useDraggable(
    25,
    100,
    windowRef,
    navRef
  );

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
      {sidebar && <Sidebar sidebar={sidebar} />}
      <div
        className={cn(
          "flex flex-col h-full ",
          customAspect ? "w-auto" : "w-full"
        )}
      >
        <nav
          ref={navRef}
          className="relative flex bg-[#f2eeef] w-full p-3 gap-4"
        >
          <div className="flex items-center gap-5 text-gray-500">
            {sidebar ? (
              <>
                <FaChevronLeft />
                <FaChevronRight />
              </>
            ) : (
              <WindowControls />
            )}
          </div>
          <p
            className={cn(
              "font-semibold ml-4",
              !sidebar &&
                "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
            )}
          >
            {name[locale].capitalize()}
          </p>
        </nav>
        <main className="h-full bg-[#f2eeef] min-w-72 min-h-96">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Window;

function Sidebar({ sidebar }: { sidebar: ReactNode }) {
  return (
    <aside className="w-52 flex flex-col items-start pl-3 bg-white/80 backdrop-blur-lg border-r-2 border-gray-400/50">
      <div className="h-6 w-full flex items-center my-3">
        <WindowControls />
      </div>
      <div className="w-full h-full overflow-y-auto text-black/50">
        <div className="w-full text-black mt-2 flex flex-col gap-1">
          {sidebar}
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
