import React, { useState, useEffect } from 'react';

const AccessibilityButton = () => {
  const [isAccessible, setIsAccessible] = useState(false);

  const toggleAccessibility = () => {
    setIsAccessible(!isAccessible);
    if (!isAccessible) {
      // Применяем стили для версии слабовидящих
      document.body.classList.add('accessible-mode');
      // Сохраняем состояние в localStorage
      localStorage.setItem('accessibleMode', 'true');
    } else {
      // Убираем стили для версии слабовидящих
      document.body.classList.remove('accessible-mode');
      localStorage.removeItem('accessibleMode');
    }
  };

  // Проверяем сохраненное состояние при загрузке
  useEffect(() => {
    const savedMode = localStorage.getItem('accessibleMode');
    if (savedMode === 'true') {
      setIsAccessible(true);
      document.body.classList.add('accessible-mode');
    }
  }, []);

  return (
    <button
      onClick={toggleAccessibility}
      className="fixed top-4 right-4 z-50 bg-mercedes-accent text-white px-4 py-2 rounded-lg shadow-lg hover:bg-mercedes-accent/80 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mercedes-accent flex items-center space-x-2"
      aria-label="Версия для слабовидящих"
      role="switch"
      aria-checked={isAccessible}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5" 
        viewBox="0 0 20 20" 
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
      </svg>
      <span className="hidden md:inline">Версия для слабовидящих</span>
    </button>
  );
};

export default AccessibilityButton; 