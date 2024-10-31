import { create } from "zustand";

interface WallpaperStore {
  wallpaper: string;
  wallpaperName: string;
  wallpaperMode: string;
  changeWallpaper: (wallpaper: string) => void;
  changeWallpaperName: (wallpaperName: string) => void;
  changeWallpaperMode: (mode: string) => void;
}

const useWallpaperStore = create<WallpaperStore>((set) => ({
  wallpaper: "/wallpapers/Sequoia_",
  wallpaperName: "Sequoia",
  wallpaperMode: "light",
  changeWallpaper: (wallpaper) => {
    set(() => ({ wallpaper: wallpaper }));
  },
  changeWallpaperName: (wallpaperName) =>
    set(() => ({ wallpaperName: wallpaperName })),
  changeWallpaperMode: (mode) => set(() => ({ wallpaperMode: mode })),
}));

export default useWallpaperStore;
