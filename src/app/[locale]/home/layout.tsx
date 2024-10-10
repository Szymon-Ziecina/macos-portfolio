import Dock from "@/components/interface/Dock";
import { AppProps } from "@/types";

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col items-center justify-between">
      <div></div>
      {children}
      <Dock />
    </div>
  );
}
