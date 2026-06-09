import only1 from '../assets/only-1.png';
import only2 from '../assets/only-2.png';
import only3 from '../assets/only-3.png';
import only4 from '../assets/only-4.png';
import only5 from '../assets/only-5.png';

const OnlyBiryuza = () => {
  const exclusiveItems = [
    { id: 1, name: 'Шоколад молочный Бирюза 80г', price: '89,99', img: only1 },
    { id: 2, name: 'Хрустящее печенье Бирюза 126г', price: '184,97', img: only2 },
    { id: 3, name: 'Сыр сливочный Бирюза 150г', price: '154,97', img: only3 },
    { id: 4, name: 'Йогурт домашний Бирюза 95г', price: '31,97', img: only4 },
    { id: 5, name: 'Нежные хлебцы Бирюза 100г', price: '89,99', img: only5 },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px] mb-20">
      {/* Заголовок */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-[32px] font-semibold text-biryuza-dark">Только в Бирюзе</h2>
        <button className="text-biryuza-dark font-medium hover:text-biryuza-brand transition-colors">
          Посмотреть всё ›
        </button>
      </div>

      {/* Сетка товаров (5 в ряд) */}
      <div className="flex justify-between gap-6">
        {exclusiveItems.map((item) => (
          <div key={item.id} className="flex flex-col group cursor-pointer w-[180px]">
            
            {/* Яркая голубая плашка */}
            <div className="aspect-square bg-biryuza-light rounded-[30px] flex items-center justify-center p-4 mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm group-hover:shadow-biryuza-brand/20">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-contain drop-shadow-md" 
              />
            </div>

            {/* Текстовый блок */}
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-biryuza-dark mb-1">
                {item.price} ₽
              </span>
              <p className="text-[13px] text-biryuza-dark font-medium leading-tight line-clamp-2 h-[32px]">
                {item.name}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlyBiryuza;
