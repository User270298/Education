import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

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
            
            <div className="overflow-hidden bg-white shadow-md rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                      Дата создания образовательной организации
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АКАДЕМИЯ ПРАКТИКИ МЕЖДУНАРОДНОГО БИЗНЕСА» действует с 22 февраля 2024 года
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Полное наименование организации
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «АКАДЕМИЯ ПРАКТИКИ МЕЖДУНАРОДНОГО БИЗНЕСА»
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Сокращенное наименование организации
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      ООО «АПМБ»
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Учредителем является
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Зулина Елена Владимировна
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Лицензия на осуществление образовательной деятельности
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Лицензии на осуществление образовательной деятельности от 05.04.2024 г. № Л035-01298-77/01118654, выдана Департаментом образования и науки города Москвы
                      <div className="mt-2">
                        <a 
                          href="https://islod.obrnadzor.gov.ru/rlic/details/aeab445a-9e89-f718-9dd9-a49fc05d71b5/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-mercedes-accent hover:underline"
                        >
                          Выписка из реестра
                        </a>
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Место нахождения организации
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      108803, Г.МОСКВА, ВН.ТЕР.Г. ПОСЕЛЕНИЕ ВОСКРЕСЕНСКОЕ, П ВОСКРЕСЕНСКОЕ, Д. 40, К. 2, КВ. 48
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Адрес места осуществления образовательной деятельности
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      108803, Г.МОСКВА, ВН.ТЕР.Г. ПОСЕЛЕНИЕ ВОСКРЕСЕНСКОЕ, П ВОСКРЕСЕНСКОЕ, Д. 40, К. 2, КВ. 48
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Режим работы образовательной организации
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      Понедельник - пятница с 10:00 до 19:00
                    </td>
                  </tr>
                  
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Контактные телефоны, адрес электронной почты, адрес официального сайта
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      <div>Тел.: 89613250011, 8 (863) 226-87-00</div>
                      <div>E-mail: <a href="mailto:academ.ibp@gmail.com" className="text-mercedes-accent hover:underline">academ.ibp@gmail.com</a></div>
                      <div>Сайт: <a href="https://academ-ibp.com" target="_blank" rel="noopener noreferrer" className="text-mercedes-accent hover:underline">https://academ-ibp.com</a></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'structure':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Структура и органы управления образовательной организацией</h2>
            
            <div className="space-y-8">
              {/* Организационная структура */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-corporate-condensed mb-4">Организационная структура</h3>
                
                <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Схема организационной структуры */}
                    <div className="w-full max-w-3xl mx-auto px-4">
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex flex-col items-center">
                          {/* Генеральный директор */}
                          <div className="bg-mercedes-accent text-white px-6 py-3 rounded-md text-center mb-8 w-64">
                            <div className="font-bold">Генеральный директор</div>
                            <div className="text-sm">Содикова С.Ш.</div>
                          </div>
                          
                          {/* Линия соединения */}
                          <div className="w-0.5 h-8 bg-gray-400"></div>
                          
                          {/* Учебный центр */}
                          <div className="bg-mercedes-silver/30 text-gray-800 px-6 py-3 rounded-md text-center mb-8 w-64">
                            <div className="font-bold">Учебный центр ООО «АПМБ»</div>
                          </div>
                          
                          {/* Линия соединения */}
                          <div className="w-0.5 h-8 bg-gray-400"></div>
                          
                          {/* Нижний уровень */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-center">
                              <div className="font-bold">Учебно-методический отдел</div>
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-center">
                              <div className="font-bold">Отдел по работе с клиентами</div>
                            </div>
                            <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-md text-center">
                              <div className="font-bold">Административный отдел</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-4 py-2 bg-mercedes-accent text-white rounded-md hover:bg-mercedes-accent/80 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Скачать схему организационной структуры (PDF)
                  </a>
                </div>
              </div>
              
              {/* Сведения о руководителях */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-corporate-condensed mb-4">Сведения о руководителях</h3>
                
                <div className="overflow-hidden bg-white rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                          Генеральный директор
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Содикова Сабина Шухратжоновна
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Телефон
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          89613250011, 8 (863) 226-87-00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Email
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a href="mailto:academ.ibp@gmail.com" className="text-mercedes-accent hover:underline">
                            academ.ibp@gmail.com
                          </a>
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Сайт
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a href="https://academ-ibp.com" target="_blank" rel="noopener noreferrer" className="text-mercedes-accent hover:underline">
                            https://academ-ibp.com
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Структурные подразделения */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-corporate-condensed mb-4">Структурные подразделения</h3>
                
                <div className="overflow-hidden bg-white rounded-lg border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                          Наименование структурного подразделения
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          Учебный центр ООО «АПМБ»
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Место нахождения структурного подразделения
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          108803, Г.МОСКВА, ВН.ТЕР.Г. ПОСЕЛЕНИЕ ВОСКРЕСЕНСКОЕ, П ВОСКРЕСЕНСКОЕ, Д. 40, К. 2, КВ. 48
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Положение о структурном подразделении
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-700">
                          <a 
                            href="#" 
                            className="inline-flex items-center text-mercedes-accent hover:underline"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Положение о структурном подразделении (PDF)
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
        <title>Сведения об организации - ООО «АПМБ»</title>
        <meta name="description" content="Сведения об образовательной организации ООО «АПМБ»" />
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