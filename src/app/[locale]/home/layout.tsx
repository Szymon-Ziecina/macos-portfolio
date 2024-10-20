import Desktop from "@/components/interface/Desktop";
import Dock from "@/components/interface/Dock";

export default function DesktopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full relative flex flex-col items-center justify-between">
      <div className="h-full w-full flex flex-col items-center justify-center m-2">
        <Desktop />
        {children}
      </div>
      <Dock />
    </div>
  );
}
