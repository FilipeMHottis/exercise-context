import './App.css';
import Wallpapers from './components/wallpapers';
import wallpapersData from './data/wallpapers';
import { useState } from 'react';

function App() {
  const [wallpapers, setWallpapers] = useState([...wallpapersData]);

  const removeWallpaper = (id: number) => {
    const filteredWallpapers = wallpapers.filter(
      (wallpaper) => wallpaper.id !== id
    );

    setWallpapers(filteredWallpapers);
  };

  return <Wallpapers data={wallpapers} removeWallpaper={removeWallpaper} />;
}

export default App;
