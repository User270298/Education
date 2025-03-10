import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import AccessibilityButton from '../components/AccessibilityButton';

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
            
            <div className="mb-6">
              <p className="text-gray-700">
                Все документы доступны для просмотра онлайн и скачивания в формате PDF. 
                Документы утверждены руководителем и подписаны простой электронной подписью.
              </p>
              <div className="mt-2">
                <a 
                  href="https://youtu.be/uNi196TfxwI?si=cWRyb_lfcztUoZ3R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedes-accent hover:underline inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Инструкция по проверке электронной подписи
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Устав образовательной организации',
                  filename: 'ustav.pdf'
                },
                {
                  title: 'Правила внутреннего распорядка обучающихся',
                  filename: 'pravila_vnutrennego_rasporyadka.pdf'
                },
                {
                  title: 'Правила внутреннего трудового распорядка',
                  filename: 'pravila_trudovogo_rasporyadka.pdf'
                },
                {
                  title: 'Правила приема на обучение',
                  filename: 'pravila_priema.pdf'
                },
                {
                  title: 'Положение о режиме занятий',
                  filename: 'polozhenie_rezhim_zanyatiy.pdf'
                },
                {
                  title: 'Формы, периодичность и порядок текущего контроля',
                  filename: 'formy_kontrolya.pdf'
                },
                {
                  title: 'Порядок и основания перевода и отчисления обучающихся',
                  filename: 'poryadok_perevoda.pdf'
                },
                {
                  title: 'Порядок оформления возникновения, приостановления и прекращения отношений',
                  filename: 'poryadok_oformleniya.pdf',
                  description: 'между образовательной организацией и обучающимися и (или) родителями'
                },
                {
                  title: 'План развития образовательной организации',
                  filename: 'plan_razvitiya.pdf'
                },
                {
                  title: 'Положение о Комиссии по урегулированию споров',
                  filename: 'polozhenie_komissia.pdf',
                  description: 'между участниками образовательных отношений'
                },
                {
                  title: 'Положение о порядке обучения по индивидуальному учебному плану',
                  filename: 'polozhenie_ind_plan.pdf'
                },
                {
                  title: 'Отчет о результатах самообследования',
                  filename: 'otchet_samoobsledovanie.pdf',
                  description: '(обновляется ежегодно)'
                }
              ].map((doc, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-corporate-condensed text-lg mb-1">{doc.title}</h3>
                      {doc.description && (
                        <p className="text-sm text-gray-600 mb-2">{doc.description}</p>
                      )}
                      <div className="flex space-x-4">
                        <a 
                          href={`/documents/${doc.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mercedes-accent hover:underline text-sm inline-flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Просмотреть онлайн
                        </a>
                        <a 
                          href={`/documents/${doc.filename}`}
                          download
                          className="text-mercedes-accent hover:underline text-sm inline-flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Скачать PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'education':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Образование</h2>
            
            <div className="mb-6">
              <p className="text-gray-700">
                Все документы доступны для просмотра онлайн и скачивания в формате PDF. 
                Образовательные программы утверждены руководителем и подписаны простой электронной подписью.
              </p>
            </div>

            {/* Основная информация */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о реализуемых уровнях образования
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Дополнительное профессиональное образование
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о формах обучения
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Заочное (с использованием электронного обучения или дистанционных образовательных технологий)
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о нормативных сроках обучения
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Дополнительное профессиональное образование: от 16 часов
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о численности обучающихся по реализуемым образовательным программам за счёт бюджетных ассигнований
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        не имеется
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о численности обучающихся по договорам об образовании
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        не имеется
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о языках, на которых осуществляется образование
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Обучение осуществляется на русском языке.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 w-[40%]">
                        Информация о направлениях и результатах научной деятельности
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        не имеется
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Документы */}
            <div className="space-y-6">
              {/* Положение о языке обучения */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-corporate-condensed mb-4">Положение о языке обучения</h3>
                <div className="flex space-x-4">
                  <a 
                    href="/documents/polozhenie_o_yazyke.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-mercedes-accent hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Просмотреть онлайн
                  </a>
                  <a 
                    href="/documents/polozhenie_o_yazyke.pdf"
                    download
                    className="inline-flex items-center text-mercedes-accent hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Скачать PDF
                  </a>
                </div>
              </div>

              {/* Образовательные программы */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-corporate-condensed mb-4">Образовательные программы</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-mercedes-accent pl-4">
                    <h4 className="font-corporate-condensed text-lg mb-2">
                      Дополнительная профессиональная программа – программа повышения квалификации «111111»
                    </h4>
                    <div className="flex space-x-4">
                      <a 
                        href="/documents/program_111111.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-mercedes-accent hover:underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Просмотреть онлайн
                      </a>
                      <a 
                        href="/documents/program_111111.pdf"
                        download
                        className="inline-flex items-center text-mercedes-accent hover:underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Скачать PDF
                      </a>
                      <Link 
                        href="/programs/111111"
                        className="inline-flex items-center text-mercedes-accent hover:underline"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        Подробнее о программе
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'management':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Руководство</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-corporate-condensed mb-4">Руководство образовательной организации</h3>
              
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ФИО
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Должность
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Контактные данные
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {/* Генеральный директор */}
                      <tr>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            Содикова Сабина Шухратжоновна
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            Генеральный директор
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            <div className="mb-1">
                              Тел.: <a href="tel:89613250011" className="text-mercedes-accent hover:underline">89613250011</a>,{' '}
                              <a href="tel:88632268700" className="text-mercedes-accent hover:underline">8 (863) 226-87-00</a>
                            </div>
                            <div>
                              E-mail: <a href="mailto:academ.ibp@gmail.com" className="text-mercedes-accent hover:underline">
                                academ.ibp@gmail.com
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Заместитель генерального директора */}
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900">
                            <span className="text-gray-500 italic">Должность вакантна</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900">
                            Заместитель генерального директора
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500 italic">
                            Информация будет добавлена после назначения на должность
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-4 text-sm text-gray-600">
                <p>* Информация о заместителе руководителя будет обновлена после назначения сотрудника на должность соответствующим приказом.</p>
              </div>
            </div>
          </div>
        );
      case 'teachers':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Педагогический состав</h2>
            
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ФИО
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Должность
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Уровень образования, ученые степени, звания
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Дополнительное профессиональное образование
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Общий стаж работы
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Преподаваемые учебные программы
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500 italic">
                        Информация о педагогическом составе будет добавлена после формирования штата преподавателей
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'facilities':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда
            </h2>

            <div className="space-y-8">
              {/* Основная информация */}
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/3">
                        Сведения о наличии оборудованных учебных кабинетов
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Образовательная деятельность ведется с применением дистанционных образовательных технологий и электронного обучения
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения о доступе к информационным системам
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Образовательная организация имеет необходимое серверное оборудование, обеспечивающее функционирование электронной информационно-образовательной среды, и высокоскоростной канал доступа к электронной информационно-образовательной среде.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения об электронных образовательных ресурсах
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Обучение проводится посредством электронной образовательной среды (платформы){' '}
                        <a href="https://getcourse.ru/" target="_blank" rel="noopener noreferrer" className="text-mercedes-accent hover:underline">
                          https://getcourse.ru/
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения о наличии библиотек и средств обучения
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <p>Заключен соглашение с электронной библиотекой. Обучающимся по всем образовательным программам выдаются электронная литература и методические пособия.</p>
                        <p className="mt-2">Для лиц с ограниченными возможностями и инвалидов предусмотрены специальные технические средства обучения и дистанционная форма обучения.</p>
                        <p className="mt-2">Объекты спорта не предусмотрены.</p>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения о специальных условиях для инвалидов
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Отсутствуют. Образовательная деятельность ведется с применением дистанционных образовательных технологий и электронного обучения.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения о наличии средств обучения и воспитания
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Обучение осуществляется с использованием дистанционных образовательных технологий с использованием электронного образовательного ресурса:{' '}
                        <a href="https://getcourse.ru/" target="_blank" rel="noopener noreferrer" className="text-mercedes-accent hover:underline">
                          https://getcourse.ru/
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Сведения о наличии общежития
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        Отсутствуют. Образовательная деятельность ведется с применением дистанционных образовательных технологий и электронного обучения.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'paid-services':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">Платные образовательные услуги</h2>
            
            <div className="mb-6">
              <p className="text-gray-700">
                ООО «АПМБ» оказывает услуги на коммерческой основе. Все документы доступны для просмотра онлайн и скачивания в формате PDF. 
                Документы утверждены руководителем и подписаны простой электронной подписью.
              </p>
              <div className="mt-2">
                <a 
                  href="https://youtu.be/uNi196TfxwI?si=cWRyb_lfcztUoZ3R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mercedes-accent hover:underline inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Инструкция по проверке электронной подписи
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  title: 'Положение об оказании платных образовательных услуг',
                  filename: 'polozhenie_platnye_uslugi.pdf'
                },
                {
                  title: 'Приказ об утверждении форм договоров об оказании платных образовательных услуг',
                  filename: 'prikaz_dogovory.pdf'
                },
                {
                  title: 'Приказ о стоимости обучения',
                  filename: 'prikaz_stoimost.pdf'
                }
              ].map((doc, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-mercedes-accent/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mercedes-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-corporate-condensed text-lg mb-2">{doc.title}</h3>
                      <div className="flex space-x-4">
                        <a 
                          href={`/documents/${doc.filename}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-mercedes-accent hover:underline text-sm inline-flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Просмотреть онлайн
                        </a>
                        <a 
                          href={`/documents/${doc.filename}`}
                          download
                          className="text-mercedes-accent hover:underline text-sm inline-flex items-center"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Скачать PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'financial':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Финансово-хозяйственная деятельность
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-700">
                  ООО «АПМБ» не является получателем субсидий на выполнение государственного (муниципального) задания, 
                  целевых субсидий, а также бюджетных инвестиций. В связи с этим, все финансовые показатели в Плане 
                  финансово-хозяйственной деятельности и Отчета о финансово-хозяйственной деятельности, отражаются 
                  по деятельности от оказания платных образовательных услуг.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-corporate-condensed mb-4">Документы</h3>
                <div className="flex space-x-4">
                  <a 
                    href="/documents/plan_fhd.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-mercedes-accent hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    План финансово-хозяйственной деятельности (PDF)
                  </a>
                  <a 
                    href="/documents/plan_fhd.pdf"
                    download
                    className="inline-flex items-center text-mercedes-accent hover:underline"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Скачать PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'vacancies':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Вакантные места для приема (перевода) обучающихся
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <div className="prose max-w-none text-gray-700">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Зачисление в группы проводится по заявлениям от физических лиц без вступительных испытаний.</li>
                    <li>При поступлении на курс заключается договор на предоставление платных образовательных услуг.</li>
                    <li>Прием на обучение в ООО «АПМБ» проводится в соответствии с возможной наполняемостью группы.</li>
                    <li>Набор в группы ведется в течение всего календарного года.</li>
                    <li>Вакантных мест для приема на обучение за счет государственного бюджета не предусмотрено.</li>
                    <li>ООО «АПМБ» предоставляет услуги на коммерческой основе.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Источник финансирования
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Количество вакантных мест
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        За счет бюджетных ассигнований федерального бюджета
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        За счет бюджетов субъектов РФ
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        За счет местных бюджетов
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        0
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        По договорам об образовании
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Не ограничено
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'scholarships':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Стипендии и меры поддержки обучающихся
            </h2>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none text-gray-700">
                <p>
                  Организация не оказывает мер поддержки обучающимся, не имеет общежития, 
                  интерната и не предоставляет стипендии.
                </p>
              </div>
            </div>
          </div>
        );
      case 'international':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Международное сотрудничество
            </h2>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-corporate-condensed mb-4">
                  Информация о заключенных и планируемых к заключению договорах
                </h3>
                <p>
                  Заключенных и планируемых к заключению договоров с иностранными и (или) 
                  международными организациями по вопросам образования и науки нет.
                </p>
              </div>
            </div>
          </div>
        );
      case 'food':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Организация питания в образовательной организации
            </h2>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none text-gray-700">
                <h3 className="text-xl font-corporate-condensed mb-4">
                  Сведения об условиях питания и охраны здоровья обучающихся
                </h3>
                <div className="space-y-4">
                  <p>
                    Образовательная деятельность ведется с применением дистанционных 
                    образовательных технологий и электронного обучения.
                  </p>
                  <p>
                    На занятиях преподавателями доводится информация, направленная на 
                    формирование здорового образа жизни.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'standards':
        return (
          <div>
            <h2 className="text-3xl font-corporate-condensed tracking-wider mb-6">
              Образовательные стандарты и требования
            </h2>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="prose max-w-none text-gray-700">
                <p>
                  В отношении реализуемых программ не предъявляются требования федеральных 
                  государственных образовательных стандартов, федеральных государственных 
                  требований и образовательных стандартов.
                </p>
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

      <AccessibilityButton />
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