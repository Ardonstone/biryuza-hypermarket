import chefImg from '../assets/shef-img.png';
import teaImg from '../assets/tea-img.png';
import logo from '../assets/logo.svg'; // Используем тот же лого, что в шапке

const PromoBanners = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-2.5 flex gap-5 font-sans ">
      
      {/* 1. Баннер с ИИ-Шефом */}
      <div className="flex-1 h-[350px] bg-gradient-to-br from-[#38B2AC] via-[#B2F7EF] to-[#B2F7EF] rounded-[30px] p-12 flex relative overflow-hidden border-biryuza-light/20 shadow-sm">
        <div className="flex flex-col justify-between z-10 w-full relative">
          <div>
            <h2 className="text-[40px] font-bold text-biryuza-dark leading-[1.1] mb-4">
              ИИ-шеф <br /> Бирюзович
            </h2>
            <p className="text-[24px] text-biryuza-dark font-medium leading-tight">
              Ваш умный <br /> помощник
            </p>
          </div>
          {/* Кнопка:  */}
          <button className="bg-biryuza-dark text-biryuza-bg text-[24px] px-16 py-3 rounded-[15px] font-bold w-fit hover:bg-biryuza-brand transition-colors">
            Начать
          </button>
        </div>
        
        {/* Картинка Шефа */}
        <div className="absolute right-0 bottom-0 h-[95%] w-full pointer-events-none flex justify-end">
           <img 
             src={chefImg} 
             className="h-full w-auto object-contain object-right-bottom" 
             alt="Шеф"
           />
           {/* Искорка над пальцем */}
        <span 
          className="absolute text-5xl animate-pulse"
          style={{ bottom: '43%', right: '41%' }} // Подбираем положение под палец
        >
          ✨
        </span>           
        </div>
      </div>

      {/* 2. Баннер с Чаем */}
      <div className="flex-1 h-[350px] bg-[#B2F7EF] rounded-[40px] p-12 flex relative overflow-hidden border-biryuza-light/20 shadow-sm">
        {/* Картинка Чая как фон */}
        <div className="absolute inset-0 z-0 flex justify-end">
           <img 
             src={teaImg} 
             className="h-full w-auto object-cover object-right" 
             alt="Чай"
           />
           {/* Умный градиент поверх картинки: от плотного цвета к прозрачности */}
           <div className="absolute inset-0 bg-gradient-to-r from-[#B2F7EF] via-[#B2F7EF] to-transparent w-3/4"></div>
        </div>

        {/* Контент поверх картинки */}
        <div className="flex flex-col z-10 relative">
          {/* Логотип как в шапке */}
          <img src={logo} alt="Бирюза" className="h-14 w-auto mb-10 block ml-[-6px] object-contain" />
          
          <h2 className="text-biryuza-dark leading-relaxed flex flex-col">
            <span className="text-[36px] font-bold block leading-snug">Больше,</span>
            <span className="text-[30px] font-medium opacity-90 leading-snug">чем просто <br /> чай</span>
         </h2>
       </div>
      </div>

    </section>
  );
};

export default PromoBanners;
