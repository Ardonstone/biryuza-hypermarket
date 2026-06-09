import { Link } from 'react-router-dom';
// Импортируем иконку корзины для кнопок "Добавить"
import iconCart from '../assets/icon-cart.svg';
// Баннер с чиабаттой
import ciabattaBg from '../assets/ciabatta-bg.png';



const BreadPage = () => {
  // Имитация списка хлеба
  const breadProducts = [
    { id: 1, name: 'Хлеб Бородинский ржаной нарезанный 330г', price: '33,99', img: '/src/assets/br-1.png', ai: true },
    { id: 2, name: 'Хлеб пшеничный нарезанный Harrys 470г', price: '131,90', img: '/src/assets/br-2.png' },
    { id: 3, name: 'Тортилья пшеничная Мультизлак Delicados 200г', price: '69,97', img: '/src/assets/br-3.png' },
    { id: 4, name: 'Хлеб Подовой белый нарезанный 350г', price: '91,97', img: '/src/assets/br-4.png' },
    { id: 5, name: 'Лаваш Армянский тонкий Хлебный дом 300г', price: '49,99', img: '/src/assets/br-5.png' },
    { id: 6, name: 'Лаваш тонкий Армянский...', price: '39,90', img: '/src/assets/br-6.png' },
    { id: 7, name: 'Лепешки Тортильи пшеничные гриль Mission 250г', price: '110,94', img: '/src/assets/br-7.png' },
    { id: 8, name: 'Хлеб зерновой мультизлаковый 300г', price: '65,90', img: '/src/assets/br-8.png' },
    { id: 9, name: 'Лепешки Тортильи мексиканские оригинальные 400г', price: '152,97', img: '/src/assets/br-9.png' },
    { id: 10, name: 'Нежные хлебцы Бирюза 100г', price: '89,99', img: '/src/assets/br-10.png' },
    { id: 11, name: 'Лепешки сырные Mission 250г', price: '130,99', img: '/src/assets/br-11.png' },
    { id: 12, name: 'Хлебцы Три злака Dr.Korner 90г', price: '53,97', img: '/src/assets/br-12.png' },
    { id: 13, name: 'Хлебцы вафельные ржаные Виктория 150г', price: '154,97', img: '/src/assets/br-13.png' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-2.5 font-sans">
      
      {/* 1. Хлебные крошки */}
      <nav className="text-[14px] text-biryuza-brand mb-6 font-medium">
        <Link to="/" className="hover:text-biryuza-dark transition-colors">Главная</Link>
        <span className="mx-2 text-biryuza-brand">›</span>
        <span>Каталог</span> <span className="mx-2">›</span>
        <span className="text-biryuza-dark font-bold">Хлеб и выпечка</span>
      </nav>

      {/* Основная сетка: Левое меню и Правый контент */}
      <div className="grid grid-cols-[250px_1fr] gap-10 items-start">
        
        {/* ЛЕВАЯ КОЛОНКА: Навигация подкаталога */}
        <aside className="flex flex-col gap-6 sticky top-[100px]">
          <h1 className="text-[44px] font-semibold text-biryuza-dark leading-tight mb-2">
            Хлеб и выпечка
          </h1>
          
          <ul className="flex flex-col gap-4">
            {/* Активный пункт с ИИ-искоркой */}
            <li className="bg-biryuza-light/40 text-biryuza-dark font-bold px-4 py-3 rounded-xl flex items-center gap-2 cursor-pointer border border-biryuza-light/50">
              <span className="text-biryuza-brand">✨</span> Подобранное для вас
            </li>
            <li className="text-biryuza-dark font-medium px-4 py-2 hover:text-biryuza-brand cursor-pointer transition-colors">
              Без глютена
            </li>
            <li className="text-biryuza-dark font-medium px-4 py-2 hover:text-biryuza-brand cursor-pointer transition-colors">
              Свежая выпечка
            </li>
          </ul>
        </aside>

        {/* ПРАВАЯ КОЛОНКА: Контент */}
        <div className="flex flex-col gap-10">
          
          {/* 2. Баннер "Бирюзович рекомендует" */}
          <div className="w-full h-[220px] bg-[#B2F7EF] rounded-[30px] flex relative overflow-hidden border-biryuza-light">
            <div className="flex flex-col justify-center z-10 p-10 max-w-lg">
              <h2 className="text-[32px] font-bold text-biryuza-dark leading-none mb-4 flex items-center gap-2">
                Бирюзович <br /> рекомендует
                <span className="text-3xl animate-pulse">✨</span>
              </h2>
              <p className="text-[18px] text-biryuza-dark font-medium leading-relaxed">
                Свежая чиабатта <br /> для вашего завтрака
              </p>
            </div>
            
            {/* Картинка чиабатты с мягким наложением градиента */}
            <div 
              className="absolute right-0 top-0 h-full w-[60%]"
              style={{
                maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)'
              }}
            >
              <img src={ciabattaBg} className="w-full h-full object-cover object-center" alt="Чиабатта" /> 
            </div>
          </div>

            {/* 3. Сетка товаров (5 в ряд) */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6">
              {breadProducts.map((product) => {
                const cardContent = (
                  <>
                   {/* Плашка для фото */}
                   <div className="aspect-square bg-white rounded-[25px] border-6 border-biryuza-light flex items-center justify-center p-4 mb-3 group-hover:border-biryuza-brand transition-all duration-300 shadow-sm relative">
           
                      {/* ИИ-МЕТКА (если товар с флагом ai: true) */}
                      {product.ai && (
                        <span className="absolute -top-2 -right-2 bg-biryuza-dark text-white text-xs w-7 h-7 rounded-full flex items-center justify-center font-bold shadow-lg border-2 border-white">
                          ✨
                        </span>
                      )}

                      <img 
                       src={product.img} 
                       alt={product.name} 
                       className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                      />
                    </div>

                   {/* Инфо и кнопка Добавить */}
                   <div className="flex flex-col">
                     <span className="text-[16px] font-bold text-biryuza-dark mb-1">
                       {product.price} ₽
                     </span>
                     <p className="text-[12px] text-biryuza-dark font-medium leading-tight line-clamp-3 h-[45px] mb-3">
                       {product.name}
                     </p>

                      <button className="w-full py-2.5 bg-[#B2F7EF] rounded-xl flex items-center justify-center gap-2 text-[13px] font-bold text-biryuza-dark hover:bg-biryuza-brand hover:text-white transition-all shadow-sm">
                        <img src={iconCart} className="w-3.5 h-3.5 brightness-0 opacity-70" alt="" />
                        Добавить
                      </button>
                    </div>
                 </>
               );

                // Если это Бородинский хлеб (id: 1), делаем его ссылкой
                if (product.id === 1) {
                  return (
                    <Link 
                      key={product.id} 
                      to="/product/1" 
                      className="flex flex-col group cursor-pointer max-w-[180px] mx-auto w-full"
                   >
                     {cardContent}
                   </Link>
                  );
                }

                // Для всех остальных товаров оставляем обычный div без ссылки
                return (
                  <div 
                    key={product.id} 
                    className="flex flex-col group cursor-not-allowed max-w-[180px] mx-auto w-full"
                  >
                    {cardContent}
                  </div>
                );
             })}
            </div>


        </div>
      </div>
    </div>
  );
};

export default BreadPage;
