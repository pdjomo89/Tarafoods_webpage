import { useLanguage } from '../context/LanguageContext';
import '../styles/Footer.css';

function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              Tara<span>foods</span>
            </div>
            <p>{t('footer.brand')}</p>
          </div>

          <div>
            <h4>{t('footer.quickLinks')}</h4>
            <div className="footer-links">
              <a href="#home">{t('header.home')}</a>
              <a href="#products">{t('header.products')}</a>
              <a href="#find-us">{t('header.findUs')}</a>
              <a href="#order">{t('header.orderNow')}</a>
            </div>
          </div>

          <div>
            <h4>{t('footer.contactUs')}</h4>
            <div className="footer-contact">
              <p>
                <span>📞</span>
                <a href="tel:+237692491059">+237 692 491 059</a>
              </p>
              <p>
                <span>📧</span>
                <a href="mailto:info@tarafoods.com">info@tarafoods.com</a>
              </p>
              <p>
                <span>📍</span>
                Yaoundé, Rails Ngousso
              </p>
            </div>
          </div>

          <div>
            <h4>{t('footer.followUs')}</h4>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">🌐</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">📢</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.rights')(year)}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
