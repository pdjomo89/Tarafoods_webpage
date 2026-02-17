import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="header-logo">
          Tara<span>foods</span>
        </a>

        <nav className="header-nav">
          <a href="#home">{t('header.home')}</a>
          <a href="#products">{t('header.products')}</a>
          <a href="#find-us">{t('header.findUs')}</a>
          <a href="#order">{t('header.orderNow')}</a>
        </nav>

        <button className="lang-toggle" onClick={toggleLanguage} aria-label="Toggle language">
          {language === 'en' ? 'FR' : 'EN'}
        </button>

        <a href="#order" className="btn btn-primary header-cta">
          {t('header.orderNow')}
        </a>

        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>{t('header.home')}</a>
        <a href="#products" onClick={closeMenu}>{t('header.products')}</a>
        <a href="#find-us" onClick={closeMenu}>{t('header.findUs')}</a>
        <a href="#order" onClick={closeMenu}>{t('header.orderNow')}</a>
      </nav>
    </header>
  );
}

export default Header;
