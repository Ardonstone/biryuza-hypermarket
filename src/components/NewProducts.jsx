import iconCart from '../assets/icon-cart.svg'; 
import wavesBg from '../assets/waves-bg.svg';
import new1 from '../assets/new-1.png';
import new2 from '../assets/new-2.png';
import new3 from '../assets/new-3.png';
import new4 from '../assets/new-4.png';

const NewProducts = () => {
  const newItems = [
    { id: 1, name: 'Сыр Almette творожный сливочный 150г', price: '214,90', img: new1 },
    { id: 2, name: 'Колбаса Черкизово молочная 400г', price: '198,97', img: new2 },
    { id: 3, name: 'Чипсы Pringles original 165г', price: '236,97', img: new3 },
    { id: 4, name: 'Газированный напиток Fanta апельсин 50мл', price: '67,97', img: new4 },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px]">
      {/* Основная плашка Новинок */}
      <div className="bg-biryuza-brand rounded-[40px] p-12 relative overflow-hidden shadow-xl">
        
        {/* Волны на фоне */}
        <img 
          src={wavesBg} 
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" 
          alt="" 
        />

        <div className="flex justify-between items-center mb-10 relative z-10">
          <h2 className="text-[32px] font-semibold text-[#E6FAF9]">Новинки</h2>
          <button className="text-[#E6FAF9] font-medium hover:text-biryuza-dark transition-colors">
            Посмотреть всё ›
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {newItems.map((item) => (
            <div key={item.id} className="bg-biryuza-light rounded-[30px] p-6 flex flex-col items-center shadow-xl hover:scale-[1.02] transition-all duration-300 group">
              
              <div className="h-[140px] w-full flex items-center justify-center mb-6">
                <img src={item.img} alt={item.name} className="max-h-full object-contain group-hover:rotate-3 transition-transform" />
              </div>

              <div className="w-full">
                <p className="text-[18px] font-bold text-biryuza-dark mb-1">{item.price} ₽</p>
                <p className="text-[13px] text-biryuza-dark font-medium leading-tight mb-5 h-[32px] line-clamp-2">
                  {item.name}
                </p>

                {/* Кнопка с иконкой */}
                <button className="w-full py-3 bg-biryuza-bg rounded-xl flex items-center justify-center gap-3 text-[13px] font-bold text-biryuza-dark hover:bg-biryuza-brand hover:text-white transition-all">
                  <img src={iconCart} className="w-4 h-4 brightness-0 opacity-70" alt="" />
                  <span>В корзину</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewProducts;
