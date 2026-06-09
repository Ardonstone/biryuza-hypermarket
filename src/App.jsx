import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import Home from './pages/Home';
import BreadPage from './pages/BreadPage';
import ProductPage from './pages/ProductPage';
import AccountPage from './pages/AccountPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <div className="min-h-screen bg-biryuza-bg font-sans">
      <ScrollToTop />
      <Header />
      <SubHeader />

      {/* Центральная часть, которая будет меняться */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/bread" element={<BreadPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
