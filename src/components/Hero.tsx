import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <div className="relative bg-mercedes-black text-mercedes-white min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Контейнер для изображения */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/education.jpg"
              alt="Образовательный процесс"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-mercedes-black via-mercedes-black/80 to-transparent" />
          </div>
        </div>

        {/* Контент */}
        <div className="container relative z-10 py-12 md:py-24">
          <div className="max-w-xl md:max-w-2xl space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-corporate-condensed tracking-wider leading-tight">
              Качественное образование для вашего будущего
            </h2>
            
            <div className="w-16 md:w-24 h-1 bg-mercedes-accent" />
            
            <p className="text-lg md:text-xl text-mercedes-silver font-corporate leading-relaxed">
              Мы предлагаем современные образовательные программы, 
              квалифицированных преподавателей и комфортную среду для обучения. 
              Развивайтесь вместе с нами!
            </p>
            
            <div className="pt-4">
              <Link 
                href="/about"
                className="inline-flex items-center px-8 py-3 bg-mercedes-accent text-mercedes-white font-corporate-condensed
                  tracking-wider border border-transparent hover:bg-transparent hover:border-mercedes-accent
                  transition-all duration-300 group"
              >
                <span>Подробнее об организации</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Преимущества организации */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-corporate-condensed tracking-wider text-center mb-16">
            Преимущества нашей образовательной организации
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 bg-mercedes-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-corporate-condensed tracking-wide text-center mb-4">Современные программы обучения</h3>
              <p className="text-gray-600 text-center">
                Наши образовательные программы разработаны с учетом современных требований рынка труда и постоянно обновляются.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 bg-mercedes-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-corporate-condensed tracking-wide text-center mb-4">Квалифицированные преподаватели</h3>
              <p className="text-gray-600 text-center">
                Наши преподаватели — опытные профессионалы с многолетним стажем работы и глубокими знаниями в своих областях.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-16 h-16 bg-mercedes-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-corporate-condensed tracking-wide text-center mb-4">Гарантия качества</h3>
              <p className="text-gray-600 text-center">
                Мы гарантируем высокое качество образования и индивидуальный подход к каждому студенту.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg flex items-start transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-mercedes-accent rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-corporate-condensed tracking-wide mb-3">Высокий процент трудоустройства</h3>
                <p className="text-gray-600">
                  Более 85% наших выпускников успешно трудоустраиваются по специальности в течение первых трех месяцев после окончания обучения.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg flex items-start transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
              <div className="w-12 h-12 bg-mercedes-accent rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-corporate-condensed tracking-wide mb-3">Партнерство с ведущими компаниями</h3>
                <p className="text-gray-600">
                  Мы сотрудничаем с крупнейшими компаниями отрасли, что позволяет нашим студентам проходить стажировки и получать предложения о работе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero; 