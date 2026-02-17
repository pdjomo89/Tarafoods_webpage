import { useLanguage } from '../context/LanguageContext';
import '../styles/AboutUs.css';

function AboutUs() {
  const { t } = useLanguage();

  return (
    <section className="about-us section" id="about">
      <div className="container">
        <h2 className="section-title">{t('about.sectionTitle')}</h2>
        <p className="section-subtitle">{t('about.sectionSubtitle')}</p>

        <div className="about-content">
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

export default AboutUs;
