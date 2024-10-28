import React from "react";
import Window from "@/components/interface/Window";

const page = ({ params: { locale } }: { params: { locale: "en" | "pl" } }) => {
  const windowProps = {
    locale: locale,
    name: { en: "Settings", pl: "Ustawienia" },
  };
  return (
    <Window sidebar={<Sidebar />} {...windowProps}>
      <div></div>
    </Window>
  );
};

const Sidebar = () => {
  return <div></div>;
};

export default page;
