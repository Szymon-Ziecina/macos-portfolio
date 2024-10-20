import React from "react";
import LoginPage from "@/components/LoginPage";
import { fetchGithubUser } from "@/lib/actions/user.action";

const LockScreen = async ({
  params: { locale },
}: {
  params: { locale: "en" | "pl" };
}) => {
  const user = await fetchGithubUser("Szymon-Ziecina");
  return (
    <LoginPage avatar={user?.avatar_url} name={user?.name} locale={locale} />
  );
};

export default LockScreen;
