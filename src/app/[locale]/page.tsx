import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

import React from "react";

const LoginPage = () => {
  const t = useTranslations("LoginPage");
  return (
    <div>
      <h1>{t("loginPlaceholder")}</h1>
    </div>
  );
};

export default LoginPage;
