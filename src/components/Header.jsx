import { useState } from 'react';
import { Link } from 'react-router-dom';

// Импортируем все твои иконки из папки assets
import logo from '../assets/logo.svg';
import iconSearch from '../assets/icon-search.svg';
import iconLocation from '../assets/icon-location.svg';
import iconUser from '../assets/icon-user.svg';
import iconCart from '../assets/icon-cart.svg';

const Header = () => {
  // Хук состояния для открытия/закрытия каталога (false - закрыто)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  // Список категорий для выпадающего меню
  const categoriesList = [
    'Молочные продукты', 'Овощи и фрукты', 'Мясо и птица', 
    'Хлеб и выпечка', 'Бакалея', 'Замороженные продукты', 
    'Сладости', 'Напитки', 'Готовая еда', 'Консервы'
  ];

  return (
    <header className="w-full bg-biryuza-bg py-4 border-b border-biryuza-light sticky top-0 z-50 font-sans">
      <div className="max-w-[1440px] mx-auto px-10 xl:px-[140px] flex items-center gap-4">
        
        {/* 1. Логотип */}
        <Link to="/" className="flex shrink-0 cursor-pointer mr-2">
          <img src={logo} alt="Бирюза" className="h-9 w-auto" />
        </Link>

        {/* 2. Кнопка Каталог */}
        <button 
          onClick={() => setIsCatalogOpen(!isCatalogOpen)}
          className="bg-biryuza-brand text-biryuza-dark h-11 px-6 rounded-[10px] flex items-center gap-3 font-medium hover:brightness-95 transition-all active:scale-95 shadow-sm"
        >
          {/* Иконка меняется на крестик при открытии */}
          <span className="text-xl font-bold">{isCatalogOpen ? '✕' : '☰'}</span>
          <span className="tracking-wide">Каталог</span>
        </button>

        {/* 3. Поиск */}
        <div className="flex-1 flex items-center bg-white rounded-[10px] h-11 px-4 border border-biryuza-light focus-within:border-biryuza-brand transition-all">
          <img src={iconSearch} className="w-5 h-5 opacity-40" alt="" />
          <input 
            type="text" 
            placeholder="Найти товар" 
            className="bg-transparent w-full h-full outline-none text-biryuza-dark px-3 text-sm placeholder:text-biryuza-dark/30"
          />
        </div>

        {/* 4. Кнопка Найти */}
        <button className="bg-biryuza-brand text-biryuza-dark h-11 px-8 rounded-[10px] font-medium hover:brightness-95 transition-all shadow-sm">
          Найти
        </button>

        {/* 5. Адрес доставки */}
        <div className="hidden lg:flex items-center gap-3 bg-biryuza-light/30 h-11 px-4 rounded-[10px] border border-biryuza-light cursor-pointer hover:bg-biryuza-light/50 transition-all">
          <img src={iconLocation} className="w-5 h-5" alt="" />
          <div className="text-[10px] leading-tight text-biryuza-dark">
            <p className="opacity-50 font-medium">Москва</p>
            <p className="font-bold whitespace-nowrap">Никольская, 3</p>
          </div>
          <span className="text-biryuza-brand font-bold">›</span>
        </div>

        {/* 6. Личный кабинет и Корзина */}
        <div className="flex gap-4">
          <Link
            to="/account" 
            className="w-11 h-11 bg-biryuza-light rounded-[10px] flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm group"
          >
            <img src={iconUser} className="w-6 h-6 opacity-80 group-hover:opacity-100" alt="Профиль" />
          </Link>
          
          <Link 
            to="/cart"
            className="w-11 h-11 bg-biryuza-light rounded-[10px] flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm relative group"
          >
            <img src={iconCart} className="w-6 h-6 opacity-80 group-hover:opacity-100" alt="Корзина" />
          </Link>

        </div>

      </div>

      {/* ВЫПАДАЮЩЕЕ МЕНЮ КАТАЛОГА */}
      {isCatalogOpen && (
        <>
          {/* Полупрозрачный фон с затемнением */}
          <div 
            className="fixed inset-0 bg-biryuza-dark/50 z-40 mt-[77px]" 
            onClick={() => setIsCatalogOpen(false)} 
          />
          
          {/* Окно меню */}
          <nav className="absolute top-[77px] left-10 xl:left-[140px] w-[300px] bg-biryuza-bg border border-biryuza-light rounded-b-[20px] shadow-2xl z-50 py-4 max-h-[70vh] overflow-y-auto">
            <ul className="flex flex-col">
              
              {/* Спец-пункт «Персонально для вас» с эффектом наведения */}
              <li className="px-6 py-3 text-biryuza-brand font-bold flex items-center gap-2 border-b border-biryuza-light/30 cursor-pointer hover:bg-white transition-all">
                <span>✨</span> Персонально для вас
              </li>

              {categoriesList.map((item) => (
                <li key={item}>
                  {/* Если это "Хлеб и выпечка", делаем его ссылкой */}
                  {item === 'Хлеб и выпечка' ? (
                    <Link
                      to="/bread"
                      onClick={() => setIsCatalogOpen(false)} // Закрываем каталог при переходе
                      className="px-6 py-3 text-biryuza-dark font-medium hover:bg-white hover:text-biryuza-brand flex items-center justify-between transition-all"
                    >
                      {item} <span className="text-biryuza-brand font-bold"></span>
                    </Link>
                  ) : (
                    /* Все остальные пункты теперь тоже красиво подсвечиваются при наведении */
                    <div className="px-6 py-3 text-biryuza-dark font-medium cursor-pointer hover:bg-white hover:text-biryuza-brand transition-all">
                      {item}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
