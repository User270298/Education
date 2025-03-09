import React, { useState } from 'react';

function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Основные сведения', href: '/about?section=basic-info' },
    { title: 'Структура и органы управления образовательной организацией', href: '/about?section=structure' },
    { title: 'Документы', href: '/about?section=documents' },
    { title: 'Образование', href: '/about?section=education' },
    { title: 'Руководство', href: '/about?section=management' },
    { title: 'Педагогический состав', href: '/about?section=teachers' },
    { title: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда', href: '/about?section=facilities' },
    { title: 'Платные образовательные услуги', href: '/about?section=paid-services' },
    { title: 'Финансово-хозяйственная деятельность', href: '/about?section=financial' },
    { title: 'Вакантные места для приема (перевода) обучающихся', href: '/about?section=vacancies' },
    { title: 'Стипендии и меры поддержки обучающихся', href: '/about?section=scholarships' },
    { title: 'Международное сотрудничество', href: '/about?section=international' },
    { title: 'Организация питания в образовательной организации', href: '/about?section=food' },
    { title: 'Образовательные стандарты и требования', href: '/about?section=standards' },
  ];

  return (
    <header className="bg-mercedes-black text-mercedes-white">
      {/* Верхняя часть с логотипом */}
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 md:py-6">
          <h1 className="text-2xl md:text-3xl font-corporate-condensed tracking-wider">
            Образовательная Организация
          </h1>
          <div className="text-left md:text-right font-corporate text-mercedes-silver mt-2 md:mt-0">
            <p>ИНН: 1234567890</p>
            <p>ОГРН: 1234567890123</p>
          </div>
        </div>
      </div>
      
      {/* Сплошная навигационная панель */}
      <div className="bg-mercedes-silver/10 border-t border-b border-mercedes-silver/20">
        {/* Мобильная кнопка меню */}
        <div className="container md:hidden py-4">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center text-mercedes-silver"
          >
            <span className="mr-2">Меню</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Десктопное меню */}
        <div className="container hidden md:block">
          <nav className="flex">
            <a 
              href="/" 
              className="py-4 px-6 text-mercedes-silver hover:text-mercedes-white hover:bg-mercedes-accent transition-all duration-200"
            >
              Главная
            </a>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <a 
                href="/about"
                className="py-4 px-6 text-mercedes-silver group-hover:text-mercedes-white group-hover:bg-mercedes-accent transition-all duration-200 h-full w-full text-left inline-block"
              >
                Сведения об организации
              </a>
              
              {isHovered && (
                <div className="absolute left-0 top-full mt-0 w-[800px] bg-mercedes-black border border-mercedes-silver/20 shadow-mercedes z-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {menuItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="block px-6 py-3 text-sm text-mercedes-silver hover:text-mercedes-white
                          hover:bg-mercedes-accent/20 transition-all duration-200 border-b border-mercedes-silver/10"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-mercedes-accent rounded-full mr-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
                          <span>{item.title}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a 
              href="/about" 
              className="py-4 px-6 text-mercedes-silver hover:text-mercedes-white hover:bg-mercedes-accent transition-all duration-200"
            >
              О нас
            </a>
          </nav>
        </div>
      </div>
      
      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-mercedes-silver/20 container">
          <div className="flex flex-col space-y-4">
            <a 
              href="/" 
              className="text-mercedes-silver hover:text-mercedes-accent transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </a>
            
            <div className="flex flex-col space-y-2">
              <a 
                href="/about"
                className="text-left text-mercedes-silver hover:text-mercedes-accent transition-colors duration-200 py-2 font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Сведения об организации
              </a>
              
              <div className="pl-4 flex flex-col space-y-2 mt-2">
                {menuItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-sm text-mercedes-silver hover:text-mercedes-accent transition-colors duration-200 py-2 flex items-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-1.5 h-1.5 bg-mercedes-accent rounded-full mr-2"></div>
                    <span>{item.title}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <a 
              href="/about" 
              className="text-mercedes-silver hover:text-mercedes-accent transition-colors duration-200 py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              О нас
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;