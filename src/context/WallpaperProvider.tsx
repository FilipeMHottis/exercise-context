import React, { useState } from "react";
import WallpaperContext from "./WallpaperContext";
import wallpapersData from "../data/wallpapers";
import { Wallpaper } from "../types";

const WallpaperProvider = ({ children }: { children:React.ReactNode }) => {
    const [wallpapers, setWallpapers] = useState(wallpapersData);

    const removeWallpaper = (id: number) => {
        const filteredWallpapers = wallpapers.filter(
            (wallpaper) => wallpaper.id !== id
        );

        setWallpapers(filteredWallpapers);
    };

    return (
        <WallpaperContext.Provider value={{ wallpapers, setWallpapers, removeWallpaper }}>
            {children}
        </WallpaperContext.Provider>
    );
};

export default WallpaperProvider;
