import { useLanguage } from '../context/LanguageContext';
import heroBanner from '../assets/hero-banner.jpeg';
import '../styles/Hero.css';

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">🍍 {t('hero.badge')}</span>
          <h1>{t('hero.title')}</h1>
          <p className="hero-text">
            {t('hero.text')}
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">
              {t('hero.explore')}
            </a>
            <a href="#order" className="btn btn-outline">
              {t('hero.order')}
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroBanner} alt="Tarafoods juice collection" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
