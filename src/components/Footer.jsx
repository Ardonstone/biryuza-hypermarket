import logo from '../assets/logo.svg';
import iconTg from '../assets/social-tg.svg';
import iconVk from '../assets/social-vk.svg';
import iconMail from '../assets/social-mail.svg';
import iconSend from '../assets/icon-send.svg';

const Footer = () => {
  return (
    /* border-t создает ту самую разделяющую линию сверху */
    <footer className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[100px] pb-12 font-sans border-t border-biryuza-light/50 pt-12">
      
<div className="flex justify-between items-center mb-1 relative">
  
  {/* 1. Логотип (слева) */}
  <div className="flex shrink-0 z-10">
    <img src={logo} alt="Бирюза" className="h-10 w-auto opacity-80" />
  </div>

  {/* 2. Навигация (РОВНО ПО ЦЕНТРУ СТРАНИЦЫ) */}
  <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 items-center whitespace-nowrap">
    {['О нас', 'Контакты', 'Помощь', 'Отзывы'].map((item) => (
      <a 
        key={item} 
        href="#" 
        className="text-[14px] text-biryuza-dark font-medium hover:text-biryuza-brand transition-colors"
      >
        {item}
      </a>
    ))}
  </nav>

  {/* 3. Блок подписки (справа) */}
  <div className="flex flex-col items-end z-10">
    <div className="flex items-center bg-biryuza-light/30 rounded-2xl p-1.5 w-[320px] border border-biryuza-light/50 focus-within:border-biryuza-brand transition-all">
      <input 
        type="email" 
        placeholder="E-mail" 
        className="bg-transparent flex-1 px-4 py-2 outline-none text-sm text-biryuza-dark placeholder:text-biryuza-brand/50"
      />
      <button className="bg-biryuza-light text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm">
        <img src={iconSend} className="w-4 h-4" alt="Отправить" />
      </button>
    </div>
    <p className="text-[10px] text-biryuza-dark/40 mt-2 italic mr-2">
      Будь в курсе последних событий
    </p>
  </div>
</div>


      {/* Нижняя часть (Копирайт и Соцсети) */}
      <div className="flex justify-between items-center border-t border-biryuza-light/20 pt-8">
        <a href="#" className="text-[12px] text-biryuza-dark hover:text-biryuza-brand transition-colors">
          Политика конфиденциальности
        </a>

        <div className="flex gap-4">
          {[iconTg, iconVk, iconMail].map((icon, index) => (
            <button key={index} className="w-10 h-10 bg-biryuza-dark text-white rounded-full flex items-center justify-center hover:bg-biryuza-brand transition-all shadow-sm active:scale-90">
              <img src={icon} className="w-5 h-5 brightness-0 invert" alt="соцсеть" />
            </button>
          ))}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
