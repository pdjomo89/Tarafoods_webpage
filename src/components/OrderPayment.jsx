import { useState } from 'react';
import products from '../data/products';
import { useLanguage } from '../context/LanguageContext';
import '../styles/OrderPayment.css';

// Placeholder payment details — replace with your real info
const PAYMENT_INFO = {
  mtnMomo: '+237 692 491 059',
  orangeMoney: '+237 692 491 059',
  bank: {
    name: 'Your Bank Name',
    accountName: 'TARAFOODS SARL',
    accountNumber: 'XXXX XXXX XXXX XXXX',
  },
};

function OrderPayment() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    product: '',
    packSize: '',
    quantity: 1,
    address: '',
    paymentMethod: '',
  });
  const [confirmation, setConfirmation] = useState(null);

  const selectedProduct = products.find((p) => p.id === Number(form.product));
  const selectedPack = selectedProduct
    ? selectedProduct.packs.find((pk) => pk.size === Number(form.packSize))
    : null;
  const totalPrice = selectedPack ? selectedPack.price * form.quantity : 0;
  const currency = selectedProduct ? selectedProduct.currency : 'FCFA';

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'product') {
      setForm({ ...form, product: value, packSize: '' });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productName = selectedProduct
      ? (language === 'fr' ? selectedProduct.name_fr : selectedProduct.name)
      : 'N/A';
    setConfirmation({
      name: form.name,
      phone: form.phone,
      productName,
      packSize: form.packSize,
      quantity: form.quantity,
      address: form.address,
      paymentMethod: form.paymentMethod,
      totalPrice,
      currency,
    });
  };

  const handleNewOrder = () => {
    setConfirmation(null);
    setForm({
      name: '',
      phone: '',
      product: '',
      packSize: '',
      quantity: 1,
      address: '',
      paymentMethod: '',
    });
  };

  const renderPaymentInstructions = () => {
    if (!confirmation) return null;
    const { paymentMethod, totalPrice: amount, currency: cur } = confirmation;

    if (paymentMethod === 'mtn_momo') {
      return (
        <div className="payment-instruction-detail">
          <p>{t('order.momoInstructions')(amount, cur)}</p>
          <div className="payment-number">
            <span>📱</span>
            <strong>{PAYMENT_INFO.mtnMomo}</strong>
          </div>
        </div>
      );
    }
    if (paymentMethod === 'orange_money') {
      return (
        <div className="payment-instruction-detail">
          <p>{t('order.orangeInstructions')(amount, cur)}</p>
          <div className="payment-number">
            <span>📱</span>
            <strong>{PAYMENT_INFO.orangeMoney}</strong>
          </div>
        </div>
      );
    }
    if (paymentMethod === 'bank_transfer') {
      return (
        <div className="payment-instruction-detail">
          <p>{t('order.bankInstructions')(amount, cur)}</p>
          <div className="bank-details">
            <div><strong>{t('order.bankName')}:</strong> {PAYMENT_INFO.bank.name}</div>
            <div><strong>{t('order.accountName')}:</strong> {PAYMENT_INFO.bank.accountName}</div>
            <div><strong>{t('order.accountNumber')}:</strong> {PAYMENT_INFO.bank.accountNumber}</div>
          </div>
        </div>
      );
    }
    if (paymentMethod === 'cash') {
      return (
        <div className="payment-instruction-detail">
          <p>{t('order.cashInstructions')(amount, cur)}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="order-payment section" id="order">
      <div className="container">
        <h2 className="section-title">{t('order.sectionTitle')}</h2>
        <p className="section-subtitle">
          {t('order.sectionSubtitle')}
        </p>

        <div className="order-grid">
          <div className="order-form-wrapper">
            <h3>{t('order.placeOrder')}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t('order.fullName')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t('order.fullNamePlaceholder')}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('order.phone')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder={t('order.phonePlaceholder')}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="product">{t('order.selectJuice')}</label>
                  <select
                    id="product"
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('order.chooseJuice')}</option>
                    {products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {language === 'fr' ? p.name_fr : p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="packSize">{t('order.selectPack')}</label>
                  <select
                    id="packSize"
                    name="packSize"
                    value={form.packSize}
                    onChange={handleChange}
                    required
                    disabled={!selectedProduct}
                  >
                    <option value="">{t('order.choosePack')}</option>
                    {selectedProduct && selectedProduct.packs.map((pack) => (
                      <option key={pack.size} value={pack.size}>
                        {t('products.packOf')} {pack.size} — {pack.price.toLocaleString()} {selectedProduct.currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="quantity">{t('order.quantity')}</label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    min="1"
                    max="50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="paymentMethod">{t('order.paymentMethod')}</label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('order.choosePayment')}</option>
                    <option value="mtn_momo">{t('order.mtnMomo')}</option>
                    <option value="orange_money">{t('order.orangeMoney')}</option>
                    <option value="bank_transfer">{t('order.bankTransfer')}</option>
                    <option value="cash">{t('order.cashOnDelivery')}</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">{t('order.address')}</label>
                <textarea
                  id="address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder={t('order.addressPlaceholder')}
                  required
                />
              </div>

              {totalPrice > 0 && (
                <div className="order-total">
                  <span>{t('order.total')}:</span>
                  <strong>{totalPrice.toLocaleString()} {currency}</strong>
                </div>
              )}

              <button type="submit" className="btn btn-primary">
                {t('order.submitOrder')}
              </button>
            </form>
          </div>

          <div className="payment-wrapper">
            <h3>{t('order.paymentMethods')}</h3>
            <div className="payment-methods">
              <div className="payment-card">
                <span className="payment-icon">📱</span>
                <div className="payment-info">
                  <h4>{t('order.mtnMomo')}</h4>
                  <p>{PAYMENT_INFO.mtnMomo}</p>
                </div>
              </div>

              <div className="payment-card">
                <span className="payment-icon">📱</span>
                <div className="payment-info">
                  <h4>{t('order.orangeMoney')}</h4>
                  <p>{PAYMENT_INFO.orangeMoney}</p>
                </div>
              </div>

              <div className="payment-card">
                <span className="payment-icon">💵</span>
                <div className="payment-info">
                  <h4>{t('order.cashOnDelivery')}</h4>
                  <p>{t('order.cashOnDeliveryDesc')}</p>
                </div>
              </div>

              <div className="payment-card">
                <span className="payment-icon">🏦</span>
                <div className="payment-info">
                  <h4>{t('order.bankTransfer')}</h4>
                  <p>{PAYMENT_INFO.bank.accountName} — {PAYMENT_INFO.bank.name}</p>
                </div>
              </div>
            </div>

            <div className="phone-order-box">
              <h4>{t('order.phoneOrder')}</h4>
              <p>{t('order.phoneOrderDesc')}</p>
              <a href="tel:+2376924910​59">+237 692 49 10 59</a>
            </div>
          </div>
        </div>
      </div>

      {confirmation && (
        <div className="confirmation-overlay" onClick={() => setConfirmation(null)}>
          <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
            <button className="confirmation-close" onClick={() => setConfirmation(null)}>
              &times;
            </button>
            <div className="confirmation-header">
              <span className="confirmation-check">✓</span>
              <h3>{t('order.orderConfirmation')}</h3>
              <p>{t('order.confirmationMsg')(confirmation.name)}</p>
            </div>

            <div className="confirmation-summary">
              <h4>{t('order.orderSummary')}</h4>
              <div className="summary-row">
                <span>{t('order.product')}:</span>
                <span>{confirmation.productName}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.pack')}:</span>
                <span>{t('products.packOf')} {confirmation.packSize}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.quantity')}:</span>
                <span>{confirmation.quantity}</span>
              </div>
              <div className="summary-row">
                <span>{t('order.deliveryTo')}:</span>
                <span>{confirmation.address}</span>
              </div>
              <div className="summary-row summary-total">
                <span>{t('order.total')}:</span>
                <strong>{confirmation.totalPrice.toLocaleString()} {confirmation.currency}</strong>
              </div>
            </div>

            <div className="confirmation-payment">
              <h4>{t('order.paymentInstructions')}</h4>
              {renderPaymentInstructions()}
            </div>

            <p className="confirmation-note">{t('order.weWillCall')}</p>

            <div className="confirmation-actions">
              <button className="btn btn-primary" onClick={handleNewOrder}>
                {t('order.placeNewOrder')}
              </button>
              <button className="btn btn-outline" onClick={() => setConfirmation(null)}>
                {t('order.close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default OrderPayment;
