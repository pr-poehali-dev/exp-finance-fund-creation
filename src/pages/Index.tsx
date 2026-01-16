const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
          Добро пожаловать! 👋
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          Расскажите, что хотите создать?
        </p>
        <div className="max-w-2xl mx-auto text-left bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Примеры проектов:
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-2xl">🏪</span>
              <span>Интернет-магазин или лендинг для бизнеса</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📊</span>
              <span>Дашборд с аналитикой и графиками</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">📝</span>
              <span>Блог, портфолио или каталог</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <span>CRM, планировщик задач или калькулятор</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-2xl">🎨</span>
              <span>Креативный сайт с анимациями</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
