"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { LoginFormProps } from "@/types";
import Image from "next/image";

const LoginForm = ({ avatar, name }: LoginFormProps) => {
  const t = useTranslations("LoginPage");
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/home");
  };

  return (
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
  );
};

export default LoginForm;
