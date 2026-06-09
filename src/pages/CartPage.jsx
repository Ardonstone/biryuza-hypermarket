import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Импорт "базы данных"
import productsData from '../products.json';

// Импортируем картинки Бирюзовича
import shefImg from '../assets/shef-img.png';


const CartPage = () => {
  // 1. При загрузке добавляется поле count: 1 каждому товару, чтобы числа не пропадали
  const initialItems = productsData
    .filter(item => item.id >= 1 && item.id <= 3)
    .map(item => ({ ...item, count: 1 }));
  
  const [cartItems, setCartItems] = useState(initialItems);
  const [isAiAdded, setIsAiAdded] = useState(false);

  // 2. Функция расчета суммы 
  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = typeof item.price === 'number' ? item.price : 0;
    const itemCount = typeof item.count === 'number' ? item.count : 1;
    return sum + (itemPrice * itemCount);
  }, 0);

  // Функция добавления ингредиентов от ИИ-Шефа
  const handleAddAiIngredients = () => {
    if (!isAiAdded) {
      const aiProducts = productsData
        .filter(item => item.id === 4 || item.id === 5)
        .map(item => ({ ...item, count: 1 }));
      
      setCartItems([...cartItems, ...aiProducts]);
      setIsAiAdded(true);

      localStorage.setItem('aiProducts', 'true');

      setIsAiAdded(true);
    }
  };

  // Попап оформления заказа
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);


  return (
    <div className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-2.5 font-sans">
      
      <nav className="text-[14px] text-biryuza-brand mb-6 font-medium">
        <Link to="/" className="hover:text-biryuza-dark transition-colors">Главная</Link>
        <span className="mx-2 text-biryuza-brand">›</span>
        <span className="text-biryuza-dark font-bold">Корзина</span>
      </nav>

      <h1 className="text-[44px] font-semibold text-biryuza-dark mb-10">
        Ваша корзина
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
        
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[24px] font-semibold text-biryuza-dark">
              Товаров в корзине: {cartItems.length}
            </span>
            <button 
              onClick={() => {
                setCartItems(initialItems);
                setIsAiAdded(false);
                localStorage.removeItem('aiProducts');
                window.dispatchEvent(new Event('cartUpdated')); 
              }

              }
              className="flex items-center gap-2 text-[14px] text-biryuza-dark font-medium hover:text-biryuza-brand"
            >
              Очистить корзину <span>✕</span>
            </button>
          </div>

          <div className="flex flex-col gap-6 mb-12">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-transparent border-b border-biryuza-light/50 pb-6 flex items-center justify-between relative"
              >
                <div className="flex items-center gap-6">
                  <div className="w-[130px] h-[130px] bg-white rounded-[25px] border-6 border-biryuza-light flex items-center justify-center p-4">
                    <img src={item.img} alt={item.name} className="max-h-full object-contain" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-bold text-biryuza-dark max-w-[280px] leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-[22px] font-bold text-biryuza-dark">
                      {item.price.toFixed(2).replace('.', ',')} Р
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-4 bg-white border border-biryuza-light/50 rounded-xl px-4 py-2 text-biryuza-dark font-bold">
                    <button className="hover:text-biryuza-brand transition-colors">−</button>
                    <span className="w-4 text-center">{item.count}</span>
                    <button className="hover:text-biryuza-brand transition-colors">+</button>
                  </div>

                  <div className="absolute top-0 right-0">
                    <button className="text-biryuza-brand hover:text-biryuza-dark text-xl font-bold">
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-[500px]">
            <h2 className="text-[32px] font-semibold text-biryuza-dark mb-6">Итого:</h2>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center justify-between text-[20px]">
                <span className="text-biryuza-dark font-medium">Товаров в корзине</span>
                <span className="text-biryuza-dark font-bold">{cartItems.length}</span>
              </div>
              <div className="flex items-center justify-between text-[20px]">
                <span className="text-biryuza-dark font-medium">Доставка</span>
                <span className="text-biryuza-dark font-bold">0 Р</span>
              </div>
              <div className="flex items-center justify-between text-[24px] border-t border-biryuza-light/50 pt-3">
                <span className="text-biryuza-dark font-medium">Общая сумма заказа</span>
                <span className="text-biryuza-dark font-bold">{totalPrice.toFixed(2).replace('.', ',')} Р</span>
              </div>
            </div>

            <button 
              onClick={() => setIsOrderPlaced(true)} // Показываем окно при клике
              className="w-full bg-biryuza-dark text-biryuza-bg py-4 rounded-[15px] font-bold text-[20px] hover:bg-[#38B2AC] transition-colors shadow-sm">
              Оформить заказ
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#38B2AC] via-[#B2F7EF] to-[#B2F7EF] border-biryuza-light/30 rounded-[30px] p-6 flex flex-col items-center h-fit sticky top-[130px]">
          <div className="w-[120px] h-[120px] bg-biryuza-dark rounded-full overflow-hidden mb-4 border-4 border-biryuza-bg shadow-sm flex items-center justify-center relative">
            <img src={shefImg} alt="ИИ Бирюзович" className="w-full h-full object-cover scale-[2.2] origin-[70%_20%] pt-3" />
          </div>

          <h3 className="text-[20px] font-bold text-biryuza-dark mb-6">ИИ-шеф Бирюзович</h3>

          {!isAiAdded ? (
            <>
              <div className="bg-biryuza-bg text-biryuza-dark text-[14px] font-medium leading-tight p-4 rounded-[20px] mb-4 w-full shadow-sm text-center">
                <span className="text-yellow-500">✨</span> Вижу, вы собрали отличный набор! К вашему любимому бородинскому хлебу я подобрал рецепт: <span className="font-bold">"Бутерброды с сельдью и зеленью"</span>
              </div>
              <div className="bg-biryuza-bg text-biryuza-dark text-[14px] font-medium leading-tight p-3 rounded-[15px] mb-6 w-full text-center shadow-sm">
                Вам не хватает: <span className="font-bold">Сельдь слабосоленая</span> и <span className="font-bold">Укроп</span>
              </div>
              <button 
                onClick={handleAddAiIngredients}
                className="w-full bg-[#24475B] text-white text-[16px] font-bold py-3.5 rounded-[15px] hover:bg-[#38B2AC] transition-colors flex items-center justify-center gap-1 shadow-sm"
              >
                Добавить в корзину + 210 Р
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center w-full">
               <div className="bg-biryuza-bg text-biryuza-dark text-[14px] font-medium leading-tight p-5 rounded-[30px] relative mb-6 w-full shadow-sm text-center">
                  <p className="mb-1">✨ Ингредиенты добавлены!</p>
                  <p>Теперь у вас точно получится идеальная закуска</p>
               </div>
               
               <button className="w-full bg-[#24475B] text-biryuza-bg text-[18px] font-bold py-4 rounded-[15px] hover:bg-[#38B2AC] transition-colors shadow-sm">
                 Посмотреть рецепт
               </button>
            </div>
          )}
        </div>

      </div>

        {/* Попап успешного оформления заказа */}
        {isOrderPlaced && (
          <div className="fixed inset-0 bg-biryuza-dark/50 flex items-center justify-center z-[100] p-4">
            <div className="bg-biryuza-bg w-full max-w-[600px] rounded-[40px] p-10 py-14 flex flex-col items-center text-center shadow-2xl animate-in fade-in zoom-in duration-300">
      
              <h2 className="text-[32px] md:text-[38px] font-bold text-biryuza-dark mb-8 leading-tight">
                Заказ №12345 успешно оформлен!
              </h2>

              <div className="flex items-start gap-3 max-w-[450px] mb-10 text-middle">
                <p className="text-[16px] md:text-[20px] text-biryuza-dark font-medium leading-relaxed">
                  ✨ Бирюзович уже собирает лучшие продукты для вашего ужина! 
                  Рецепт закуски с бородинским хлебом я сохранил в ваших покупках
                </p>
              </div>

              <Link 
                to="/" 
                className="bg-[#24475B] text-white text-[20px] font-bold px-12 py-4 rounded-[20px] hover:bg-[#38B2AC] transition-all shadow-lg active:scale-95"
              >
                На главную
              </Link>
            </div>
          </div>
        )}

    </div>
  );
};

export default CartPage;
