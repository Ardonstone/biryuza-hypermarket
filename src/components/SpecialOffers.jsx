import spec1 from '../assets/spec-1.png';
import spec2 from '../assets/spec-2.png';
import spec3 from '../assets/spec-3.png';
import spec4 from '../assets/spec-4.png';

const SpecialOffers = () => {
  const offers = [
    { id: 1, img: spec1, title: 'Подарочный сертификат' },
    { id: 2, img: spec2, title: 'Экономия до 60%' },
    { id: 3, img: spec3, title: 'Помощь друзьям' },
    { id: 4, img: spec4, title: 'Сезон подарков' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px]">
      {/* Заголовок блока */}
      <h2 className="text-[32px] font-semibold text-biryuza-dark mb-8">
        Специальные предложения
      </h2>

      {/* Сетка предложений: 4 колонки с одинаковым расстоянием */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className="relative h-[160px] rounded-[30px] overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Картинка на весь фон карточки */}
            <img 
              src={offer.img} 
              alt={offer.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            
            {/* Легкий градиент поверх для красоты */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
