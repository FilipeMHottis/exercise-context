import ReactDOM from 'react-dom/client';
import App from './App';
import WallpaperProvider from './context/WallpaperProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WallpaperProvider>
    <App />
  </WallpaperProvider>  
);
