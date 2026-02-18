import { useLanguage } from '../context/LanguageContext';
import '../styles/CommunityEnrichment.css';

function CommunityEnrichment() {
  const { t } = useLanguage();

  return (
    <section className="community section" id="community">
      <div className="container">
        <h2 className="section-title">{t('community.sectionTitle')}</h2>
        <p className="section-subtitle">{t('community.sectionSubtitle')}</p>

        <div className="community-intro">
          <p>{t('community.introParagraph')}</p>
        </div>

        <div className="community-stats">
          <div className="community-stat">
            <span className="community-stat-number">150+</span>
            <span className="community-stat-label">{t('community.statFarmers')}</span>
          </div>
          <div className="community-stat">
            <span className="community-stat-number">200+</span>
            <span className="community-stat-label">{t('community.statJobs')}</span>
          </div>
          <div className="community-stat">
            <span className="community-stat-number">30+</span>
            <span className="community-stat-label">{t('community.statCommunities')}</span>
          </div>
          <div className="community-stat">
            <span className="community-stat-number">500+</span>
            <span className="community-stat-label">{t('community.statTrees')}</span>
          </div>
        </div>

        <div className="community-initiatives">
          <div className="community-card">
            <span className="community-card-icon">🤝</span>
            <h3>{t('community.initiative1Title')}</h3>
            <p>{t('community.initiative1Desc')}</p>
          </div>
          <div className="community-card">
            <span className="community-card-icon">♿</span>
            <h3>{t('community.initiative2Title')}</h3>
            <p>{t('community.initiative2Desc')}</p>
          </div>
          <div className="community-card">
            <span className="community-card-icon">🎓</span>
            <h3>{t('community.initiative3Title')}</h3>
            <p>{t('community.initiative3Desc')}</p>
          </div>
          <div className="community-card">
            <span className="community-card-icon">💚</span>
            <h3>{t('community.initiative4Title')}</h3>
            <p>{t('community.initiative4Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityEnrichment;
