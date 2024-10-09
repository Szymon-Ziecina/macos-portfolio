import React from "react";
import Clock from "@/components/widgets/Clock";
import LoginForm from "@/components/forms/LoginForm";
import { fetchGithubUser } from "@/lib/actions/user.action";

const LoginPage = async ({
  params: { locale },
}: {
  params: { locale: "en" | "pl" };
}) => {
  const user = await fetchGithubUser("Szymon-Ziecina");
  return (
    <div className="h-full pb-20 pt-16 flex flex-col justify-between items-center">
      <Clock variant="big" locale={locale} />
      <LoginForm avatar={user?.avatar_url} name={user?.name} />
    </div>
  );
};

export default LoginPage;
