import part1 from '../assets/partner-1.png';
import part2 from '../assets/partner-2.png';
import part3 from '../assets/partner-3.png';
import part4 from '../assets/partner-4.png';
import part5 from '../assets/partner-5.png';
import part6 from '../assets/partner-6.png';

const Partners = () => {
  const partners = [
    { id: 1, name: 'Т-банк', desc: '1500 бонусов на дебетовую карту Black', img: part1, color: 'border-yellow-400' },
    { id: 2, name: 'СберБанк', desc: '600 бонусов на дебетовую карту Мир', img: part2, color: 'border-green-500' },
    { id: 3, name: 'Кораблик', desc: 'Скидка 15% на детские товары от 1500 рублей', img: part3, color: 'border-blue-300' },
    { id: 4, name: 'Royal Canin', desc: '2000 баллов на товары для питомцев', img: part4, color: 'border-red-500' },
    { id: 5, name: 'Globus', desc: 'До 5% скидка на продукты питания', img: part5, color: 'border-orange-500' },
    { id: 6, name: 'ВТБ', desc: '700 бонусов на дебетовую карту ВТБ', img: part6, color: 'border-blue-400' },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px] mb-20">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-[32px] font-semibold text-biryuza-dark">Бонусы от партнеров</h2>
        <button className="text-biryuza-dark font-medium hover:text-biryuza-brand transition-colors">
          Посмотреть всё ›
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {partners.map((partner) => (
          <div key={partner.id} className="flex flex-col group cursor-pointer max-w-[180px] mx-auto w-full">
            {/* Плашка логотипа */}
            <div className={`aspect-square bg-white rounded-[30px] border-6 border-biryuza-light flex items-center justify-center p-6 mb-4 group-hover:shadow-md transition-all duration-300`}>
               <img 
                src={partner.img} 
                alt={partner.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
               />
            </div>

            <div className="flex flex-col px-1">
              <span className="text-[14px] font-bold text-biryuza-dark mb-1 leading-tight">
                {partner.name}
              </span>
              <p className="text-[11px] text-biryuza-dark font-medium leading-snug line-clamp-3">
                {partner.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
