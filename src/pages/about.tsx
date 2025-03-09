import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('basic-info');

  // Обновляем активный раздел при изменении URL
  useEffect(() => {
    if (router.isReady) {
      const { section } = router.query;
      if (section && typeof section === 'string') {
        setActiveSection(section);
      }
    }
  }, [router.isReady, router.query]);

  // Обновляем URL при изменении активного раздела
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    router.push(`/about?section=${sectionId}`, undefined, { shallow: true });
  };

  const menuItems = [
    { title: 'Основные сведения', id: 'basic-info', href: '/about?section=basic-info' },
    { title: 'Структура и органы управления', id: 'structure', href: '/about?section=structure' },
    { title: 'Документы', id: 'documents', href: '/about?section=documents' },
    { title: 'Образование', id: 'education', href: '/about?section=education' },
    { title: 'Руководство', id: 'management', href: '/about?section=management' },
    { title: 'Педагогический состав', id: 'teachers', href: '/about?section=teachers' },
    { title: 'Материально-техническое обеспечение', id: 'facilities', href: '/about?section=facilities' },
    { title: 'Платные образовательные услуги', id: 'paid-services', href: '/about?section=paid-services' },
    { title: 'Финансово-хозяйственная деятельность', id: 'financial', href: '/about?section=financial' },
    { title: 'Вакантные места для приема', id: 'vacancies', href: '/about?section=vacancies' },
    { title: 'Стипендии и меры поддержки', id: 'scholarships', href: '/about?section=scholarships' },
    { title: 'Международное сотрудничество', id: 'international', href: '/about?section=international' },
    { title: 'Организация питания', id: 'food', href: '/about?section=food' },
    { title: 'Образовательные стандарты', id: 'standards', href: '/about?section=standards' },
  ];

  // Функция для отображения контента в зависимости от выбранного раздела
  const renderContent = () => {
    switch (activeSection) {
      case 'basic-info':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Основные сведения</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-corporate-condensed mb-3">Общая информация</h3>
                <p className="text-gray-700 mb-4">
                  Образовательная организация основана в 2005 году и является одним из ведущих учебных заведений в своей области.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Полное наименование: Автономная некоммерческая организация дополнительного профессионального образования "Образовательная Организация"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Сокращенное наименование: АНО ДПО "Образовательная Организация"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Дата создания: 15 марта 2005 года</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-corporate-condensed mb-3">Контактная информация</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Адрес: г. Москва, ул. Примерная, д. 123</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Телефон: +7 (999) 123-45-67</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Email: info@education.ru</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Режим работы: Пн-Пт с 9:00 до 18:00</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-corporate-condensed mb-3">Учредители</h3>
                <p className="text-gray-700 mb-4">
                  Учредителями организации являются:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>ООО "Образовательные технологии"</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Иванов Иван Иванович</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'structure':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Структура и органы управления</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-corporate-condensed mb-3">Структура организации</h3>
                <p className="text-gray-700 mb-4">
                  Образовательная организация имеет следующую структуру управления:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Директор - осуществляет общее руководство</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Заместитель директора по учебной работе - координирует образовательный процесс</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Заместитель директора по административно-хозяйственной части - отвечает за материально-техническое обеспечение</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Учебно-методический отдел - разрабатывает и совершенствует учебные программы</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-corporate-condensed mb-3">Органы управления</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Общее собрание работников - высший коллегиальный орган управления</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Педагогический совет - постоянно действующий коллегиальный орган управления</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mercedes-accent mr-2">•</span>
                    <span>Методический совет - совещательный орган при директоре</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'documents':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Документы</h2>
            <p className="text-gray-700 mb-6">
              Основные документы образовательной организации:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="w-10 h-10 bg-mercedes-accent/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-corporate-condensed">Устав образовательной организации</h3>
                  <a href="#" className="text-mercedes-accent text-sm hover:underline">Скачать PDF</a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="w-10 h-10 bg-mercedes-accent/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-corporate-condensed">Лицензия на осуществление образовательной деятельности</h3>
                  <a href="#" className="text-mercedes-accent text-sm hover:underline">Скачать PDF</a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                <div className="w-10 h-10 bg-mercedes-accent/20 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-corporate-condensed">Правила внутреннего распорядка обучающихся</h3>
                  <a href="#" className="text-mercedes-accent text-sm hover:underline">Скачать PDF</a>
                </div>
              </div>
            </div>
          </div>
        );
      // Другие разделы...
      default:
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Выберите раздел</h2>
            <p className="text-gray-700">
              Пожалуйста, выберите интересующий вас раздел из меню слева.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Сведения об организации - Образовательная Организация</title>
        <meta name="description" content="Сведения об образовательной организации" />
      </Head>

      <Header />

      <main className="flex-grow bg-white">
        <div className="container py-12">
          <h1 className="text-4xl font-corporate-condensed tracking-wider mb-8">
            Сведения об образовательной организации
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Боковая навигация */}
            <div className="md:w-1/4">
              <div className="bg-gray-50 p-4 sticky top-4">
                <h3 className="text-lg font-corporate-condensed mb-4 pb-2 border-b border-mercedes-silver/20">
                  Навигация
                </h3>
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleSectionChange(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors duration-200 flex items-center
                        ${activeSection === item.id 
                          ? 'bg-mercedes-accent text-white' 
                          : 'text-gray-700 hover:bg-mercedes-silver/10'}`}
                    >
                      <div className={`w-1.5 h-1.5 rounded-full mr-2 ${activeSection === item.id ? 'bg-white' : 'bg-mercedes-accent'}`}></div>
                      <span>{item.title}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Основной контент */}
            <div className="md:w-3/4">
              {renderContent()}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage; 