import emojiPattern from '../assets/emoji-pattern.svg';

const DiscountBanner = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px]">
      {/* Основной контейнер баннера с градиентом */}
      <div className="w-full bg-gradient-to-r from-[#38B2AC] to-[#71D7BD] rounded-[30px] h-[180px] relative overflow-hidden flex items-center px-12 shadow-lg shadow-biryuza-brand/20">
        
        {/* Паттерн со смайликами */}
        <div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none opacity-40">
          <img 
            src={emojiPattern} 
            className="h-full w-full object-contain object-right" 
            alt="" 
          />
        </div>

        {/* Контент баннера */}
        <div className="flex justify-between items-center w-full z-10">
          <div className="max-w-2xl">
            <h2 className="text-[32px] font-semibold text-biryuza-dark leading-tight mb-2">
              Большие скидки на избранные категории
            </h2>
            <p className="text-[20px] text-biryuza-dark font-medium">
              Доступные цены, широкий ассортимент и выгодные покупки
            </p>
          </div>

          {/* Кнопка "Узнать больше" */}
          <button className="bg-biryuza-bg hover:bg-biryuza-light text-biryuza-dark px-10 py-4 rounded-[15px] font-semibold text-[18px] transition-all shadow-md active:scale-95 whitespace-nowrap">
            Узнать больше
          </button>
        </div>

      </div>
    </section>
  );
};

export default DiscountBanner;
