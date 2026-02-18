import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import SellingPoints from './components/SellingPoints';
import CommunityEnrichment from './components/CommunityEnrichment';
import OrderPayment from './components/OrderPayment';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <SellingPoints />
        <CommunityEnrichment />
        <OrderPayment />
      </main>
      <Footer />
    </>
  );
}

export default App;
