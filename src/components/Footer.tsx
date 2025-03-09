import React, { useState } from 'react';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const ApplicationForm = () => (
    <div className="fixed inset-0 bg-mercedes-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-mercedes-white p-6 md:p-8 max-w-md w-full">
        <h3 className="text-xl md:text-2xl font-corporate-condensed tracking-wider mb-6">Оставить заявку</h3>
        <form className="space-y-6">
          <div>
            <label className="block font-corporate text-sm mb-2">Имя</label>
            <input
              type="text"
              className="input-mercedes"
              placeholder="Введите ваше имя"
            />
          </div>
          <div>
            <label className="block font-corporate text-sm mb-2">Телефон</label>
            <input
              type="tel"
              className="input-mercedes"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div>
            <label className="block font-corporate text-sm mb-2">Email</label>
            <input
              type="email"
              className="input-mercedes"
              placeholder="example@mail.ru"
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-end space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="px-6 py-2 border border-mercedes-black text-mercedes-black hover:text-mercedes-accent hover:border-mercedes-accent transition-colors duration-300"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-8 py-3 bg-mercedes-accent text-mercedes-white font-corporate-condensed
                tracking-wider border border-transparent hover:bg-transparent hover:border-mercedes-accent hover:text-mercedes-black
                transition-all duration-300"
            >
              Отправить
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <footer className="bg-mercedes-black text-mercedes-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <h3 className="text-xl font-corporate-condensed tracking-wider mb-6">Контакты</h3>
            <div className="space-y-4 text-mercedes-silver">
              <p className="flex items-center">
                <span className="w-6 h-6 mr-3">📞</span>
                +7 (999) 123-45-67
              </p>
              <p className="flex items-center">
                <span className="w-6 h-6 mr-3">✉️</span>
                info@education.ru
              </p>
              <p className="flex items-center">
                <span className="w-6 h-6 mr-3">🕒</span>
                Пн-Пт 9:00-18:00
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-corporate-condensed tracking-wider mb-6">Адрес</h3>
            <div className="text-mercedes-silver">
              <p className="flex items-start">
                <span className="w-6 h-6 mr-3 flex-shrink-0">📍</span>
                <span>г. Москва, ул. Примерная, д. 123</span>
              </p>
              <p className="flex items-start mt-4">
                <span className="w-6 h-6 mr-3 flex-shrink-0">🚇</span>
                <span>м. Примерная, выход 1, 5 минут пешком</span>
              </p>
            </div>
          </div>
          
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-xl font-corporate-condensed tracking-wider mb-6">Остались вопросы?</h3>
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-3 bg-mercedes-accent text-mercedes-white font-corporate-condensed
                tracking-wider border border-transparent hover:bg-transparent hover:border-mercedes-accent
                transition-all duration-300 group"
            >
              <span>Оставить заявку</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 pt-8 border-t border-mercedes-silver/20 text-center text-mercedes-silver">
          <p>© 2024 Образовательная Организация. Все права защищены.</p>
        </div>
      </div>
      
      {showModal && <ApplicationForm />}
    </footer>
  );
};

export default Footer; 