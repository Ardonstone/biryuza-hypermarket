import { Link } from 'react-router-dom';
import breadImg from '../assets/br-1.png';
import sandwich from '../assets/sandwich.png';
import Categories from '../components/Categories';
import SpecialOffers from '../components/SpecialOffers';
import ProductList from '../components/ProductList';
import NewProducts from '../components/NewProducts';
import DiscountBanner from '../components/DiscountBanner';
import Partners from '../components/Partners';

const ProductPage = () => {
  return (
    <><div className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-2.5 font-sans">
      
      {/* 1. Хлебные крошки */}
      <nav className="text-[14px] text-biryuza-brand mb-9 font-medium">
        <Link to="/" className="hover:text-biryuza-dark transition-colors">Главная</Link>
        <span className="mx-2 text-biryuza-brand">›</span>
        <span>Каталог</span>
        <span className="mx-2 text-biryuza-brand">›</span>
        <Link to="/bread" className="hover:text-biryuza-dark transition-colors">Хлеб и выпечка</Link>
        <span className="mx-2 text-biryuza-brand">›</span>
        <span className="text-biryuza-dark font-bold">Хлеб Бородинский</span>
      </nav>

      {/* 2. Основной блок карточки товара */}
      <div className="grid grid-cols-1 md:grid-cols-[450px_1fr] gap-10 items-start mb-10">
        
        {/* Левая часть: Фото товара */}
        <div className="bg-white rounded-[40px] border-8 border-biryuza-light p-10 flex items-center justify-center aspect-square shadow-sm">
          <img 
            src={breadImg} 
            alt="Хлеб Бородинский" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Правая часть: Инфо и цены */}
        <div className="flex flex-col">
          <h1 className="text-[32px] font-bold text-biryuza-dark leading-tight mb-4">
            Хлеб Бородинский ржаной нарезанный 330г
          </h1>

          {/* Плашка покупки */}
          <div className="bg-[#B2F7EF] border border-biryuza-light rounded-[20px] p-6 mb-6">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-[36px] font-bold text-biryuza-dark">33,99 ₽</span>
            </div>
            
            {/* Рейтинг */}
            <div className="flex items-center gap-2 text-sm text-biryuza-dark mb-5">
              <span className="text-yellow-400">★</span>
              <span className="font-bold text-biryuza-dark">4,9</span>
              <span>•</span>
              <span>739 оценок</span>
              <span>321 отзывов</span>
              <span className="text-biryuza-brand cursor-pointer ml-1">›</span>
            </div>

            {/* Кнопки */}
            <div className="flex items-center gap-4">
              <button className="px-8 py-3 bg-biryuza-dark text-biryuza-bg text-[15px] font-bold rounded-xl hover:bg-[#38B2AC] transition-colors">
                В корзину
              </button>
              
              {/* Счетчик */}
              <div className="flex items-center gap-3 bg-white border border-biryuza-light/50 rounded-xl px-4 py-3 text-biryuza-dark font-bold">
                <button className="hover:text-biryuza-brand transition-colors">−</button>
                <span className="w-5 text-center">1</span>
                <button className="hover:text-biryuza-brand transition-colors">+</button>
              </div>
            </div>
          </div>

          {/* Пищевая ценность (БЖУ) */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-biryuza-dark uppercase mb-3 tracking-wide">
              Пищевая ценность
            </h3>
            <div className="grid grid-cols-4 gap-4 max-w-md">
              <div className="text-center">
                <p className="text-[18px] font-bold text-biryuza-dark">229</p>
                <p className="text-xs text-biryuza-dark font-medium">Ккал</p>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold text-biryuza-dark">6.50</p>
                <p className="text-xs text-biryuza-dark font-medium">Белки</p>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold text-biryuza-dark">2.10</p>
                <p className="text-xs text-biryuza-dark font-medium">Жиры</p>
              </div>
              <div className="text-center">
                <p className="text-[18px] font-bold text-biryuza-dark">46</p>
                <p className="text-xs text-biryuza-dark font-medium">Углеводы</p>
              </div>
            </div>
          </div>

          {/* ИИ-подсказка */}
          <div className="bg-[#B2F7EF] rounded-[15px] p-4 flex items-start gap-3 border-biryuza-brand/20 max-w-lg">
            <span className="text-[20px] leading-none mt-0.5">✨</span>
            <p className="text-sm text-biryuza-dark font-semibold leading-tight">
              Бирюзович подскажет замену, если товар закончится
            </p>
          </div>
        </div>
      </div>

      {/* 3. ИИ-Баннер с рецептом */}
      <div className="w-full h-[180px] bg-[#B2F7EF] rounded-[30px] flex relative overflow-hidden border border-biryuza-light/30 mb-10">
        <div className="flex flex-col justify-center z-10 p-10 max-w-2xl">
          <h2 className="text-[28px] font-bold text-biryuza-dark leading-snug mb-2">
            У Бирюзовича есть рецепт с этим хлебом!
          </h2>
          <p className="text-[20px] text-biryuza-dark font-medium">
            Посмотрите ингредиенты и этапы готовки
          </p>
        </div>
        
        {/* Картинка и кнопка справа */}
        <div className="absolute right-0 top-0 h-full w-[60%] flex items-center justify-end pr-10">
          {/* Для фона баннера используем картинку бутерброда */}
          <div 
            className="absolute right-0 top-0 h-full w-full"
            style={{
              backgroundImage: `url(${sandwich})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 40%, transparent 100%)',
              opacity: 0.8
            }}
          />
          <button className="z-10 bg-biryuza-dark text-biryuza-bg px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#38B2AC] transition-colors">
            Открыть рецепт <span className="text-biryuza-brand">✨</span>
          </button>
        </div>
      </div>
      
    </div>

    {/* 4. Повторяющиеся блоки выводятся вне контейнера */}
        <>
            <Categories />
            <SpecialOffers />
            <ProductList />
            <NewProducts />
            <DiscountBanner />
            <Partners />
        </>
    </>
  );
};

export default ProductPage;
