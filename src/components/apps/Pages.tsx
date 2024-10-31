import { GithubUserType } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ReactNode } from "react";
import { BsCardImage, BsLayoutSidebar, BsParagraph } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { HiTableCells } from "react-icons/hi2";
import {
  IoChevronDownSharp,
  IoDocumentTextOutline,
  IoShapesOutline,
} from "react-icons/io5";
import { LiaBrushSolid, LiaChartPieSolid } from "react-icons/lia";
import { PiUserCirclePlusFill } from "react-icons/pi";
import { TbTextRecognition } from "react-icons/tb";
import { TfiCommentAlt } from "react-icons/tfi";

const sectionOne = [
  { text: "View", icon: <BsLayoutSidebar size={22} /> },
  {
    text: "Zoom",
    icon: (
      <div className="flex items-center gap-1 rounded-md px-2 border border-gray-400 text-sm">
        100% <IoChevronDownSharp />
      </div>
    ),
  },
  { text: "Add Page", icon: <CgAddR size={22} /> },
];
const cectionTwo = [
  { text: "Insert", icon: <BsParagraph size={22} /> },
  { text: "Table", icon: <HiTableCells size={22} /> },
  { text: "Chart", icon: <LiaChartPieSolid size={22} /> },
  { text: "Text", icon: <TbTextRecognition size={22} /> },
  { text: "Shapes", icon: <IoShapesOutline size={22} /> },
  { text: "Media", icon: <BsCardImage size={22} /> },
  { text: "Comment", icon: <TfiCommentAlt size={22} /> },
];
const sectionFour = [
  { text: "Format", icon: <LiaBrushSolid size={22} /> },
  { text: "Document", icon: <IoDocumentTextOutline size={22} /> },
];

const Pages = ({ userData: user }: { userData: GithubUserType }) => {
  const t = useTranslations("AboutMe");

  return (
    <>
      <nav className="flex items-center justify-between bg-[#f2eeef] border-b-2 border-gray-400/50 text-gray-600 px-3 w-[1024px]">
        <section className="flex items-end gap-1 xl:gap-3">
          {sectionOne.map((section) => (
            <NavIcon key={section.text}>
              {section.icon}
              {section.text}
            </NavIcon>
          ))}
        </section>
        <section className="flex items-end gap-1 xl:gap-3">
          {cectionTwo.map((section) => (
            <NavIcon key={section.text}>
              {section.icon}
              {section.text}
            </NavIcon>
          ))}
        </section>
        <section className="flex items-end gap-1 xl:gap-3">
          <NavIcon>
            <PiUserCirclePlusFill size={22} />
            Colaborate
          </NavIcon>
        </section>
        <section className="flex items-end gap-1 xl:gap-3">
          {sectionFour.map((section) => (
            <NavIcon key={section.text}>
              {section.icon}
              {section.text}
            </NavIcon>
          ))}
        </section>
      </nav>
      <main className="flex justify-center w-[1024px] bg-gray-100">
        <div className="w-3/5 h-[700px] bg-white p-3 overflow-y-auto">
          <div className="flex flex-col gap-4 justify-center items-center p-4 max-w-lg mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">
              {t("title")}
            </h1>
            <Image
              src={user?.avatar_url || "/wallpapers/default.jpg"}
              alt="Profile Image"
              height={150}
              width={150}
              className="rounded-full shadow-lg"
            />
            <p className="text-center mt-4 leading-relaxed text-lg">
              {t("aboutMe")}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Pages;

function NavIcon({ children }: { children: ReactNode }) {
  return <div className="flex flex-col items-center">{children}</div>;
}
