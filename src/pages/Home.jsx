import PromoBanners from '../components/PromoBanners';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import ProductList from '../components/ProductList';
import NewProducts from '../components/NewProducts';
import DiscountBanner from '../components/DiscountBanner';
import Partners from '../components/Partners';
import Reviews from '../components/Reviews';


const Home = () => {
  return (
    <main>
      <PromoBanners />
      <Categories />
      <SpecialOffers />
      <ProductList />
      <NewProducts />
      <DiscountBanner />
      <Partners />
      <Reviews />
    </main>
  );
};

export default Home;
