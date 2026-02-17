import { useLanguage } from '../context/LanguageContext';
import '../styles/ProductCard.css';

function ProductCard({ product }) {
  const { language, t } = useLanguage();

  const name = language === 'fr' ? product.name_fr : product.name;
  const tagline = language === 'fr' ? product.tagline_fr : product.tagline;
  const description = language === 'fr' ? product.description_fr : product.description;
  const lowestPrice = product.packs[0].price;

  return (
    <div className="product-card">
      <div
        className="product-card-image"
        style={{ backgroundColor: product.color }}
      >
        {product.image ? (
          <img src={product.image} alt={name} className="product-card-img" />
        ) : (
          product.emoji
        )}
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{name}</h3>
        <p className="product-card-tagline">{tagline}</p>
        <p className="product-card-desc">{description}</p>
        <ul className="product-card-packs">
          {product.packs.map((pack) => (
            <li key={pack.size}>
              {t('products.packOf')} {pack.size} — {pack.price.toLocaleString()} {product.currency}
            </li>
          ))}
        </ul>
        <div className="product-card-footer">
          <span className="product-card-price">
            {t('products.fromPrice')} {lowestPrice.toLocaleString()} <span>{product.currency}</span>
          </span>
          <a href="#order" className="btn btn-primary">{t('products.orderBtn')}</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
