import { features, locations } from '../data/sellingPoints';
import { useLanguage } from '../context/LanguageContext';
import '../styles/SellingPoints.css';
import '../styles/AboutUs.css';

function SellingPoints() {
  const { language, t } = useLanguage();

  return (
    <section className="selling-points section" id="find-us">
      <div className="container">
        <h2 className="section-title">{t('sellingPoints.sectionTitle')}</h2>
        <p className="section-subtitle">
          {t('sellingPoints.sectionSubtitle')}
        </p>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{language === 'fr' ? feature.title_fr : feature.title}</h3>
              <p>{language === 'fr' ? feature.description_fr : feature.description}</p>
            </div>
          ))}
        </div>

        <h3 className="locations-title">{t('sellingPoints.locationsTitle')}</h3>
        <div className="locations-grid">
          {locations.map((location) => (
            <div key={location.id} className="location-card">
              <h3>{language === 'fr' ? location.name_fr : location.name}</h3>
              <div className="location-detail">
                <span className="icon">📍</span>
                <span>{location.address}, {location.city}</span>
              </div>
              <div className="location-detail">
                <span className="icon">📞</span>
                <a href={`tel:${location.phone.replace(/\s/g, '')}`}>
                  {location.phone}
                </a>
              </div>
              <div className="location-detail">
                <span className="icon">🕒</span>
                <span>{language === 'fr' ? location.hours_fr : location.hours}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="about-inline" id="about">
          <h3 className="locations-title">{t('about.sectionTitle')}</h3>
          <div className="about-text">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>
          <div className="about-values">
            <div className="about-value-card">
              <span className="about-value-icon">🌿</span>
              <h3>{t('about.value1Title')}</h3>
              <p>{t('about.value1Desc')}</p>
            </div>
            <div className="about-value-card">
              <span className="about-value-icon">🤝</span>
              <h3>{t('about.value2Title')}</h3>
              <p>{t('about.value2Desc')}</p>
            </div>
            <div className="about-value-card">
              <span className="about-value-icon">🏆</span>
              <h3>{t('about.value3Title')}</h3>
              <p>{t('about.value3Desc')}</p>
            </div>
            <div className="about-value-card">
              <span className="about-value-icon">🌍</span>
              <h3>{t('about.value4Title')}</h3>
              <p>{t('about.value4Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SellingPoints;
