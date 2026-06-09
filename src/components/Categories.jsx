import catSale from '../assets/cat-sale.svg';
import catAll from '../assets/cat-all.svg';
import catKids from '../assets/cat-kids.svg';
import catPets from '../assets/cat-pets.svg';
import catHome from '../assets/cat-home.svg';
import catCare from '../assets/cat-care.svg';

const Categories = () => {
  const categories = [
    { id: 1, title: 'Акции и бонусы', icon: catSale },
    { id: 2, title: 'Все продукты', icon: catAll },
    { id: 3, title: 'Для детей', icon: catKids },
    { id: 4, title: 'Для питомцев', icon: catPets },
    { id: 5, title: 'Все для дома', icon: catHome },
    { id: 6, title: 'Уход и гигиена', icon: catCare },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px] mb-20">
      <div className="flex justify-center gap-14 items-start">
        {categories.map((cat) => (
          <div key={cat.id} className="flex flex-col items-center gap-4 group cursor-pointer w-[100px]">
            
            {/* 
                Плашка: 
                - Размер уменьшен до 90x90 (w-[90px] h-[90px])
                - Градиент при наведении: от B2F7EF до 71D7BD
            */}
            <div className="w-[90px] h-[90px] bg-biryuza-light rounded-[28px] flex items-center justify-center border-biryuza-light/10 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-[#B2F7EF] group-hover:to-[#71D7BD] group-hover:shadow-lg group-hover:shadow-biryuza-brand/20 p-6">
              <img 
                src={cat.icon} 
                alt={cat.title} 
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* 
                Подпись:
                - Цвет biryuza-dark (самый темный)
                - font-bold для четкости (чтобы не казался серым)
            */}
            <span className="text-center text-[13px] text-biryuza-dark font-bold leading-tight transition-colors group-hover:text-biryuza-brand">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
