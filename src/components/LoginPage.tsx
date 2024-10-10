"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { LoginPageProps } from "@/types";
import Image from "next/image";
import Clock from "./widgets/Clock";

const LoginPage = ({ avatar, name, locale }: LoginPageProps) => {
  const t = useTranslations("LoginPage");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
    <div className="h-full pb-20 pt-16 flex flex-col justify-between items-center">
      <Clock variant="big" locale={locale} />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-3 text-white"
      >
        <Image
          src={avatar || "/wallpapers/default.jpg"}
          alt="Avatar"
          height={56}
          width={56}
          className="rounded-full"
        />
        <p className="text-lg font-semibold">{name}</p>
        <input
          type="password"
          className="bg-white/30 backdrop-blur-md rounded-full focus:outline-none px-2 py-1 text-base text-white placeholder-white/70 shadow-inner"
          placeholder={t("loginPlaceholder")}
        />
      </form>
    </div>
  );
};

export default LoginPage;
