import userImg from '../assets/review-user.png';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

const Reviews = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[100px] mb-20 text-center relative">
      
      {/* Заголовок блока */}
      <h2 className="text-[54px] font-semibold text-biryuza-dark mb-12 leading-tight">
        Отзывы от наших <br /> покупателей
      </h2>

      {/* Контейнер слайдера */}
      <div className="flex flex-col items-center max-w-4xl mx-auto relative px-20">
        
        {/* Фотография в круге */}
        <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-4 border-biryuza-brand shadow-xl mb-10">
          <img src={userImg} alt="Покупатель" className="w-full h-full object-cover" />
        </div>

        {/* Блок ИИ-резюме */}
        <div className="flex items-center gap-2 mb-8 group">
          <span className="text-2xl animate-pulse">✨</span>
          <p className="text-[18px] font-bold text-biryuza-dark tracking-wide">
            ИИ-резюме: <span className="font-medium text-[18px] ml-1">Покупатели ценят свежесть и быструю доставку</span>
          </p>
          <span className="text-2xl animate-pulse">✨</span>
        </div>

        {/* Текст отзыва */}
        <div className="text-[18px] text-biryuza-dark leading-relaxed max-w-2xl italic">
          <p className="mb-2">«Очень нравится гипермаркет «Бирюза»!»</p>
          <p>Все просто и понятно, хороший выбор товаров, приятные цены. Заказ пришел быстро, всё аккуратно упаковано. Теперь покупаю только здесь! Спасибо!</p>
        </div>

        {/* Кнопки навигации (Стрелочки) */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-biryuza-brand/40 rounded-full flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm active:scale-90">
          <img src={arrowLeft} className="w-5 h-5" alt="Назад" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-biryuza-brand/40 rounded-full flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm active:scale-90">
          <img src={arrowRight} className="w-5 h-5" alt="Вперед" />
        </button>

      </div>
    </section>
  );
};

export default Reviews;
