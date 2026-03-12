import '../scss/tailwind.css';
import "../scss/main.scss";

// Importera automatiskt ALLA .scss och .js-filer från din components-mapp
// Detta gör att Vite bygger dem och ger dig HMR direkt i Drupal
import.meta.glob('../../components/**/*.scss', { eager: true });
import.meta.glob('../../components/**/*.js', { eager: true });