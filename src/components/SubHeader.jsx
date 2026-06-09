const SubHeader = () => {
  const menuItems = [
    'Карта Бирюза', 
    'Акции и бонусы', 
    'Помощь', 
    'Покупателям', 
    'Партнерам', 
    'Вакансии', 
    'О компании'
  ];

  return (
    <nav className="max-w-[1440px] mx-auto px-10 xl:px-[140px] mt-[10px] mb-8">
      <ul className="flex items-center gap-8">
        {menuItems.map((item) => (
          <li key={item}>
            <a 
              href="#" 
              className="text-[14px] text-biryuza-dark font-medium hover:text-biryuza-brand transition-colors whitespace-nowrap"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SubHeader;
