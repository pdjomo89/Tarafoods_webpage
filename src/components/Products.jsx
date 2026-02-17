import products from '../data/products';
import ProductCard from './ProductCard';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Products.css';

function Products() {
  const { t } = useLanguage();

  return (
    <section className="products section" id="products">
      <div className="container">
        <h2 className="section-title">{t('products.sectionTitle')}</h2>
        <p className="section-subtitle">
          {t('products.sectionSubtitle')}
        </p>
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
