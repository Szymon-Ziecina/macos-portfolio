import { fetchGithubRepos, fetchGithubUser } from "@/lib/actions/user.action";
import Window from "@/components/interface/Window";
import { appsList } from "@/constants";
import { AppProps, SidebarElementProps } from "@/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

const app = async ({
  params: { locale, app: appHref },
}: {
  params: { locale: "en" | "pl"; app: AppProps };
}) => {
  const user = await fetchGithubUser("Szymon-Ziecina");
  let repos = await fetchGithubRepos("Szymon-Ziecina");
  let app = appsList.find((appName) => appName.href === appHref);

  if (!app) app = appsList[0];

  const windowProps = {
    locale: locale,
    name: app.name,
    customAspect: app.customAspect,
  };
  const Page = app.page;

  if (!repos) repos = [];

  return (
    <Window
      sidebar={
        <Sidebar
          sidebarElements={app.sidebarElements}
          locale={locale}
          name={app.name}
        />
      }
      {...windowProps}
    >
      <Page userRepos={repos} userData={user!} />
    </Window>
  );
};

const Sidebar = ({
  sidebarElements,
  locale,
  name,
}: SidebarElementProps & { locale: "en" | "pl" } & {
  name: { en: string; pl: string };
}) => {
  if (!sidebarElements) return null;
  return (
    <>
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
    </>
  );
};

export default app;
