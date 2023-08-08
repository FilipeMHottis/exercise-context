import { createContext } from "react";
import { Wallpaper } from "../types";

type WallpaperContextType = {
    wallpapers: Wallpaper[];
    setWallpapers: (wallpapers: Wallpaper[]) => void;
    removeWallpaper: (id: number) => void;
};

const WallpaperContext = createContext({} as WallpaperContextType);

export default WallpaperContext;
