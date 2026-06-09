import { Link } from 'react-router-dom';

// Импортируем картинки (положи их в src/assets/ или замени пути на свои)
import avatarImg from '../assets/avatar.png'; 
import vtbCard from '../assets/vtb-card.png';
import tbankCard from '../assets/tbank-card.png';

const AccountPage = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-2.5 font-sans">
      
      {/* 1. Хлебные крошки */}
      <nav className="text-[14px] text-biryuza-brand mb-6 font-medium">
        <Link to="/" className="hover:text-biryuza-dark transition-colors">Главная</Link>
        <span className="mx-2 text-biryuza-brand">›</span>
        <span className="text-biryuza-dark font-bold">Личный кабинет</span>
      </nav>

      <h1 className="text-[44px] font-semibold text-biryuza-dark mb-10">
        Личный кабинет
      </h1>

      {/* 2. Основной блок: Меню и Профиль */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start mb-16">
        
        {/* Левая колонка: Меню */}
        <aside>
          <ul className="flex flex-col gap-4 text-[20px] text-biryuza-dark/70 font-semibold">
            <li className="text-biryuza-dark text-[24px] font-bold cursor-pointer">
              Мой кабинет
            </li>
            <li className="flex items-center gap-2 hover:text-biryuza-brand cursor-pointer transition-colors">
              <span className="text-biryuza-brand">✨</span> Мои предпочтения
            </li>
            <li className="hover:text-biryuza-brand cursor-pointer transition-colors">
              Моя корзина
            </li>
            <li className="hover:text-biryuza-brand cursor-pointer transition-colors">
              Избранное
            </li>
            <li className="hover:text-biryuza-brand cursor-pointer transition-colors mt-4">
              Выйти
            </li>
          </ul>
        </aside>

        {/* Правая колонка: Аватар и Данные */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-12 items-center">
          
          {/* Аватар */}
          <div className="w-[280px] h-[280px] rounded-full overflow-hidden shadow-md">
            <img 
              src={avatarImg} 
              alt="Мария" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Форма данных */}
          <div className="flex flex-col gap-4 max-w-[500px]">
            {[
              { label: 'Фамилия', value: 'Петрова' },
              { label: 'Имя', value: 'Мария' },
              { label: 'Отчество', value: 'Ивановна' },
              { label: 'Дата рождения', value: '25.03.1981' },
              { label: 'Город', value: 'г. Москва' },
              { label: 'E-mail', value: 'petrova1981@yandex.ru' },
            ].map((field, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-xs text-biryuza-dark/60 font-medium mb-1 ml-1">
                  {field.label}
                </span>
                <div className="bg-[#B2F7EF]/40 border border-biryuza-light/50 rounded-xl px-4 py-2.5 text-[16px] font-semibold text-biryuza-dark">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Раздел "Мои карты" */}
      <div className="mb-10">
        <h2 className="text-[32px] font-semibold text-biryuza-dark mb-6">
          Мои карты
        </h2>
        <div className="flex flex-wrap gap-6">
          {/* Карта ВТБ */}
          <div className="w-[340px] h-[210px] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img src={vtbCard} alt="ВТБ Мир" className="w-full h-full object-cover" />
          </div>
          {/* Карта Т-Банк */}
          <div className="w-[340px] h-[210px] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <img src={tbankCard} alt="T-Bank Black" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default AccountPage;
