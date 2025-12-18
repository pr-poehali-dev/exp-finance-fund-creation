import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    amount: '',
    purpose: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 24 часов.",
    });
    setFormData({ name: '', phone: '', email: '', amount: '', purpose: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-primary">ЭКСПЕРТ ФИНАНС</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">О фонде</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('advantages')} className="text-gray-700 hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollToSection('conditions')} className="text-gray-700 hover:text-primary transition-colors">Условия</button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-700 hover:text-primary transition-colors">Отзывы</button>
              <Button onClick={() => scrollToSection('contact')}>Подать заявку</Button>
            </div>
          </nav>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Финансовые решения<br />для вашего <span className="text-primary">роста</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            КПК "ЭКСПЕРТ ФИНАНС" — надежный партнер для размещения средств под высокий процент и получения финансирования на выгодных условиях
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg">
              <Icon name="Rocket" size={20} className="mr-2" />
              Наши услуги
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')}>
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">О фонде</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              КПК "ЭКСПЕРТ ФИНАНС" — кредитный потребительский кооператив с многолетним опытом работы на финансовом рынке
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors animate-scale-in">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mb-4" />
                <CardTitle>Надежность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Работаем в соответствии с законодательством РФ, все операции прозрачны и застрахованы
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <Icon name="Award" size={48} className="text-primary mb-4" />
                <CardTitle>Опыт</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Более 10 лет успешной работы, тысячи довольных клиентов и партнеров
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Персональные условия для каждого клиента с учетом его потребностей и возможностей
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-xl text-gray-600">Выберите оптимальное финансовое решение</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <Icon name="PiggyBank" size={56} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Размещение средств</CardTitle>
                <CardDescription className="text-base">Инвестируйте под высокий процент</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>До <strong>18% годовых</strong> на размещение средств</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Минимальная сумма от 50 000 рублей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Гибкие сроки размещения от 3 месяцев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Ежемесячная выплата процентов</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                  Разместить средства
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader className="bg-gradient-to-br from-secondary/10 to-primary/10">
                <Icon name="HandCoins" size={56} className="text-primary mb-4" />
                <CardTitle className="text-2xl">Получение финансирования</CardTitle>
                <CardDescription className="text-base">Займы для развития бизнеса</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>От <strong>12% годовых</strong> на займы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Суммы от 100 000 до 5 000 000 рублей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Срок рассмотрения заявки — 1-2 дня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="CheckCircle2" size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>Возможность досрочного погашения</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => scrollToSection('contact')}>
                  Получить финансирование
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h3>
            <p className="text-xl text-gray-600">Почему выбирают ЭКСПЕРТ ФИНАНС</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
              <Icon name="Zap" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Быстрое решение</h4>
              <p className="text-gray-600">Рассмотрение заявки в течение 1-2 рабочих дней</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
              <Icon name="FileCheck" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Минимум документов</h4>
              <p className="text-gray-600">Упрощенная процедура оформления</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
              <Icon name="Calculator" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Прозрачные условия</h4>
              <p className="text-gray-600">Никаких скрытых комиссий и платежей</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
              <Icon name="Headphones" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">Всегда на связи для решения ваших вопросов</p>
            </div>
          </div>
        </div>
      </section>

      <section id="conditions" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Условия сотрудничества</h3>
            <p className="text-xl text-gray-600">Детальная информация о наших программах</p>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Для размещения средств
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Percent" size={18} className="text-primary" />
                      Процентные ставки
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• 3-6 месяцев: 15% годовых</li>
                      <li>• 6-12 месяцев: 16,5% годовых</li>
                      <li>• 12+ месяцев: 18% годовых</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Wallet" size={18} className="text-primary" />
                      Условия
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Минимальная сумма: 50 000 ₽</li>
                      <li>• Максимальная сумма: без ограничений</li>
                      <li>• Выплата процентов: ежемесячно</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-secondary/5">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                  Для получения финансирования
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Percent" size={18} className="text-primary" />
                      Процентные ставки
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• До 500 000 ₽: от 16% годовых</li>
                      <li>• 500 000 - 2 000 000 ₽: от 14% годовых</li>
                      <li>• От 2 000 000 ₽: от 12% годовых</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="FileText" size={18} className="text-primary" />
                      Требования
                    </h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Возраст: от 21 года</li>
                      <li>• Гражданство РФ</li>
                      <li>• Постоянный доход или бизнес</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h3>
            <p className="text-xl text-gray-600">Что говорят о нас наши партнеры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий К.</CardTitle>
                    <p className="text-sm text-gray-500">Предприниматель</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Получил финансирование для расширения бизнеса за 2 дня. Отличные условия и профессиональный подход. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена М.</CardTitle>
                    <p className="text-sm text-gray-500">Инвестор</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Размещаю средства уже 2 года. Проценты выплачиваются всегда вовремя, никаких задержек. Очень доволен сотрудничеством."
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Александр П.</CardTitle>
                    <p className="text-sm text-gray-500">Владелец бизнеса</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  "Прозрачные условия, без скрытых комиссий. Менеджеры всегда на связи и помогают решить любые вопросы. Надежный партнер!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Подать заявку</h3>
            <p className="text-xl text-gray-600">Заполните форму и мы свяжемся с вами в течение 24 часов</p>
          </div>
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardTitle className="flex items-center gap-2">
                <Icon name="FileText" size={24} className="text-primary" />
                Заявка на финансирование
              </CardTitle>
              <CardDescription>Все поля обязательны для заполнения</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="amount">Желаемая сумма (₽)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="500000"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="purpose">Цель получения финансирования</Label>
                  <Textarea
                    id="purpose"
                    placeholder="Опишите, на что вы планируете использовать средства..."
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    required
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <Separator className="my-12" />

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Phone" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div>
              <Icon name="Mail" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-gray-600">info@expert-finance.ru</p>
            </div>
            <div>
              <Icon name="MapPin" size={32} className="text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="TrendingUp" size={28} className="text-primary" />
                <h4 className="text-xl font-bold">ЭКСПЕРТ ФИНАНС</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Кредитный потребительский кооператив. Ваш надежный финансовый партнер.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Размещение средств</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Получение финансирования</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">О компании</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О фонде</button></li>
                <li><button onClick={() => scrollToSection('advantages')} className="hover:text-primary transition-colors">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('conditions')} className="hover:text-primary transition-colors">Условия</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>+7 (495) 123-45-67</li>
                <li>info@expert-finance.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 КПК "ЭКСПЕРТ ФИНАНС". Все права защищены.</p>
            <p className="mt-2">КПК "ЭКСПЕРТ ФИНАНС" осуществляет деятельность на основании ФЗ-190 "О кредитной кооперации"</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
