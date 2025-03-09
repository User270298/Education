import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Сбросить сообщение об успешной отправке через 5 секунд
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Контакты - ООО «АПМБ»</title>
        <meta name="description" content="Контактная информация ООО «АПМБ»" />
      </Head>

      <Header />

      <main className="flex-grow bg-white">
        <div className="container py-12">
          <h1 className="text-4xl font-corporate-condensed tracking-wider mb-8">
            Контакты
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-corporate-condensed tracking-wide mb-6">
                  Наши контакты
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-corporate-condensed mb-1">Адрес</h3>
                      <p className="text-gray-700">
                        108803, Г.МОСКВА, ВН.ТЕР.Г. ПОСЕЛЕНИЕ ВОСКРЕСЕНСКОЕ, П ВОСКРЕСЕНСКОЕ, Д. 40, К. 2, КВ. 48
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-corporate-condensed mb-1">Телефоны</h3>
                      <p className="text-gray-700">89613250011</p>
                      <p className="text-gray-700">8 (863) 226-87-00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-corporate-condensed mb-1">Email</h3>
                      <p className="text-gray-700">
                        <a href="mailto:academ.ibp@gmail.com" className="text-mercedes-accent hover:underline">
                          academ.ibp@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-corporate-condensed mb-1">Режим работы</h3>
                      <p className="text-gray-700">Понедельник - пятница с 10:00 до 19:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-corporate-condensed mb-1">Сайт</h3>
                      <p className="text-gray-700">
                        <a href="https://academ-ibp.com" target="_blank" rel="noopener noreferrer" className="text-mercedes-accent hover:underline">
                          https://academ-ibp.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Форма обратной связи */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-corporate-condensed tracking-wide mb-6">
                  Связаться с нами
                </h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg">
                    Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-mercedes w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-mercedes w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-mercedes w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Сообщение *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="input-mercedes w-full"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-8 py-3 bg-mercedes-accent text-mercedes-white font-corporate-condensed
                          tracking-wider border border-transparent hover:bg-transparent hover:border-mercedes-accent hover:text-mercedes-black
                          transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Карта */}
          <div className="mt-12">
            <h2 className="text-2xl font-corporate-condensed tracking-wide mb-6">
              Как нас найти
            </h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="w-full h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.2978857275375!2d37.46999867677688!3d55.57058997326359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54d85195f75b7%3A0x7c9e2e73f1c1a1a0!2z0JLQvtGB0LrRgNC10YHQtdC90YHQutC-0LUsINCc0L7RgdC60LLQsCwg0KDQvtGB0YHQuNGP!5e0!3m2!1sru!2sru!4v1650000000000!5m2!1sru!2sru" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactsPage; 