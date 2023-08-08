import { Wallpaper } from '../../types';
import styles from './wallpapers.module.css';

type WallpapersProps = {
  data: Wallpaper[];
  removeWallpaper: (id: number) => void;
};

function Wallpapers({ data, removeWallpaper }: WallpapersProps) {
  return (
    <>
      <h1>Wallpapers</h1>
      <div className={styles.wallpapersListContainer}>
        {data.map((wallpaper) => (
          <div className={styles.cardContainer} key={wallpaper.id}>
            <div className={styles.cardTitle}>
              <p className={styles.cardTitle}>{wallpaper.title}</p>
            </div>
            <img
              className={styles.cardImage}
              src={wallpaper.url}
              alt={wallpaper.title}
            />
            <button
              className={styles.cardButtonRight}
              onClick={() => removeWallpaper(wallpaper.id)}
            >
              Apagar
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Wallpapers;
