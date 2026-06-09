import imgMilk from '../assets/prod-milk.png';
import imgSausage from '../assets/prod-sausage.png';
import imgWipes from '../assets/prod-wipes.png';
import imgChocolate from '../assets/prod-chocolate.png';
import imgCaviar from '../assets/prod-caviar.png';
import imgCheese from '../assets/prod-cheese.png';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Молоко Домик в деревне 3,2% 950г', price: '148,90', img: imgMilk },
    { id: 2, name: 'Колбаса докторская Папа может 450г', price: '251,99', img: imgSausage },
    { id: 3, name: 'Влажные салфетки Johnson\'s baby 25 штук', price: '197,97', img: imgWipes },
    { id: 4, name: 'Шоколад Alpen Gold фундук молочный 80г', price: '95,97', img: imgChocolate },
    { id: 5, name: 'Икра лососевая зернистая 95г', price: '499,99', img: imgCaviar },
    { id: 6, name: 'Сырок творожный А.Ростагрокомплекс кокос', price: '87,99', img: imgCheese },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[80px] mb-20 font-sans">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-[32px] font-semibold text-biryuza-dark leading-none">Товары недели</h2>
        <button className="text-biryuza-dark font-medium hover:text-biryuza-brand transition-colors flex items-center gap-1">
          Посмотреть всё <span className="text-xl">›</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col group cursor-pointer max-w-[180px] mx-auto w-full">
            {/* Рамка для фото */}
            <div className="aspect-square bg-white rounded-[30px] border-6 border-biryuza-light flex items-center justify-center p-4 mb-3 group-hover:border-biryuza-brand transition-all duration-300">
               <img 
                src={product.img} 
                alt={product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
               />
            </div>

            {/* Цена и название */}
            <div className="flex flex-col">
              <span className="text-[18px] font-bold text-biryuza-dark leading-none mb-1.5">
                {product.price} ₽
              </span>
              <p className="text-[13px] text-biryuza-dark font-medium leading-snug line-clamp-2 h-[34px]">
                {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
