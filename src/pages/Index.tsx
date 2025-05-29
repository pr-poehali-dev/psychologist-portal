import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Индивидуальная терапия",
      description:
        "Работа с тревогой, депрессией, травмами и жизненными кризисами",
      icon: "User",
    },
    {
      title: "Семейная терапия",
      description: "Помощь в решении семейных конфликтов и улучшении отношений",
      icon: "Users",
    },
    {
      title: "Групповая терапия",
      description: "Работа в группе для развития социальных навыков",
      icon: "Users2",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-violet-700">
            Психологический кабинет
          </h1>
          <Button className="bg-violet-600 hover:bg-violet-700">
            <Icon name="Phone" size={16} />
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Помощь в трудные{" "}
              <span className="text-violet-600">моменты жизни</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Профессиональная психологическая помощь в безопасной и
              поддерживающей обстановке. Вместе мы найдем пути к внутренней
              гармонии и благополучию.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
                <Icon name="Calendar" size={20} />
                Записаться на консультацию
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="MessageCircle" size={20} />
                Задать вопрос
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=600&fit=crop&crop=face"
                alt="Психолог"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Услуги</h3>
            <p className="text-xl text-slate-600">
              Индивидуальный подход к каждому клиенту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-violet-600"
                    />
                  </div>
                  <CardTitle className="text-xl text-slate-800">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Наши специалисты
            </h3>
            <p className="text-xl text-slate-600">
              Команда опытных психологов для вашего благополучия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Specialist 1 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&crop=face"
                    alt="Анна Петрова"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Анна Петрова
                  </h4>
                  <p className="text-violet-600 font-semibold mb-3">
                    Когнитивно-поведенческая терапия
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>8 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="GraduationCap"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>МГУ им. М.В. Ломоносова</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>1000+ сессий</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specialist 2 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=400&fit=crop&crop=face"
                    alt="Михаил Соколов"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Михаил Соколов
                  </h4>
                  <p className="text-violet-600 font-semibold mb-3">
                    Семейная и парная терапия
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>12 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="GraduationCap"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>СПбГУ, психологический факультет</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>800+ пар и семей</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specialist 3 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1594824944231-598dd3e85fdb?w=300&h=400&fit=crop&crop=face"
                    alt="Елена Васильева"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Елена Васильева
                  </h4>
                  <p className="text-violet-600 font-semibold mb-3">
                    Детская и подростковая психология
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>6 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="GraduationCap"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>РГГУ, клиническая психология</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>500+ детей и подростков</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Specialist 4 */}
            <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
                    alt="Дмитрий Кузнецов"
                    className="w-full h-48 sm:h-full object-cover"
                  />
                </div>
                <div className="sm:w-2/3 p-6">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">
                    Дмитрий Кузнецов
                  </h4>
                  <p className="text-violet-600 font-semibold mb-3">
                    Гештальт-терапия и травматерапия
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Award"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>10 лет опыта</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="GraduationCap"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>ВШЭ, психологический факультет</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon
                        name="Users"
                        size={16}
                        className="text-violet-600"
                      />
                      <span>700+ клиентов с травмами</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-violet-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Контакты и запись
            </h3>
            <p className="text-xl text-slate-600">
              Сделайте первый шаг к переменам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-800">
                  Свяжитесь со мной
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Icon name="Phone" size={24} className="text-violet-600" />
                  <div>
                    <p className="font-semibold text-slate-800">
                      +7 (999) 123-45-67
                    </p>
                    <p className="text-slate-600">Пн-Пт: 9:00-20:00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="Mail" size={24} className="text-violet-600" />
                  <div>
                    <p className="font-semibold text-slate-800">
                      anna@psychology.ru
                    </p>
                    <p className="text-slate-600">Ответ в течение 24 часов</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Icon name="MapPin" size={24} className="text-violet-600" />
                  <div>
                    <p className="font-semibold text-slate-800">
                      ул. Пушкина, д. 10
                    </p>
                    <p className="text-slate-600">Москва, м. Чистые пруды</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-slate-800">
                  Записаться на прием
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    Сообщение
                  </label>
                  <textarea
                    className="w-full p-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 h-24"
                    placeholder="Кратко опишите вашу ситуацию..."
                  />
                </div>
                <Button
                  className="w-full bg-violet-600 hover:bg-violet-700"
                  size="lg"
                >
                  <Icon name="Send" size={20} />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Психологический кабинет Анны Петровой. Конфиденциальность
            гарантирована.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
