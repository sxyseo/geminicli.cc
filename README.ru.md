# Сайт-туториал Gemini CLI 🚀

[![Веб-сайт](https://img.shields.io/website?url=https%3A%2F%2Fwww.geminicli.cc)](https://www.geminicli.cc/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Развернуто%20на-Vercel-black?logo=vercel)](https://vercel.com/)

> 🌐 **Официальный сайт**: [https://www.geminicli.cc/](https://www.geminicli.cc/)

**Самый полный ресурс для изучения и освоения Google Gemini CLI.** Создавайте мощные ИИ-приложения с уверенностью благодаря нашим обширным туториалам, документации и практическим примерам.

![Скриншот сайта Gemini CLI](https://github.com/sxyseo/geminicli.cc/blob/main/docs/images/website-preview.png)

## 🌍 Языковые версии

- [🇺🇸 English](README.md)
- [🇨🇳 简体中文](README.zh-CN.md)
- [🇯🇵 日本語](README.ja.md)
- [🇰🇷 한국어](README.ko.md)
- [🇪🇸 Español](README.es.md)
- [🇫🇷 Français](README.fr.md)
- [🇩🇪 Deutsch](README.de.md)
- [🇷🇺 Русский](README.ru.md) (текущий)

## ✨ Основные функции

### 🎯 **Комплексная обучающая платформа**
- **50+ интерактивных туториалов** - От начального до продвинутого уровня
- **Полная документация** - Руководства по установке, аутентификации, командам и конфигурации
- **Практические примеры** - Реальные образцы кода и случаи использования
- **Лучшие практики** - Оптимизация безопасности, производительности и рабочих процессов

### 🌍 **Многоязычная поддержка**
- **12 языков** с переключением в реальном времени
- **Локализованный контент** - Туториалы и документация на родном языке
- **Глобальное сообщество** - Связывайтесь с разработчиками по всему миру

### 💻 **Интерактивный опыт**
- **Веб-терминал** - Практикуйте команды прямо в браузере
- **Подсветка синтаксиса** - Красивое представление кода с Prism.js
- **Автодополнение** - Умные предложения для быстрого обучения
- **Живые демо** - Смотрите Gemini CLI в действии

### 🎨 **Современный дизайн**
- **Адаптивная верстка** - Идеально на десктопе, планшете и мобильном
- **Темный/светлый режим** - Выберите предпочитаемую тему
- **Плавные анимации** - На основе Framer Motion
- **Доступный UI** - Дизайн, соответствующий WCAG

### ⚡ **Высокая производительность**
- **Генерация статического сайта** - Молниеносная загрузка страниц
- **CDN распространение** - Глобальная доставка контента через Vercel
- **Оптимизация изображений** - Оптимизация изображений Next.js
- **SEO-оптимизация** - Полные мета-теги и карта сайта

## 🚀 Быстрый старт

### Требования

- **Node.js** 18.0+ 
- **npm** 7.0+ или **yarn** 1.22+ или **pnpm** 8.0+
- **Git** для контроля версий

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/sxyseo/geminicli.cc.git
cd geminicli.cc

# Установить зависимости
npm install
# или
yarn install
# или
pnpm install

# Запустить сервер разработки
npm run dev
# или
yarn dev
# или
pnpm dev
```

### Настройка окружения

Создайте файл `.env.local` в корневой директории:

```env
# Опционально: Аналитика и отслеживание
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Опционально: Флаги функций
NEXT_PUBLIC_FEATURE_PLAYGROUND=true
NEXT_PUBLIC_FEATURE_COMMUNITY=true
```

## 🛠️ Технологический стек

### **Frontend фреймворк**
- **[Next.js 14](https://nextjs.org/)** - React фреймворк с App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Типобезопасная разработка
- **[React 18](https://reactjs.org/)** - Новейшие функции React

### **Стилизация и UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Утилитарный CSS фреймворк
- **[shadcn/ui](https://ui.shadcn.com/)** - Красивая библиотека компонентов
- **[Lucide React](https://lucide.dev/)** - Современная библиотека иконок
- **[Framer Motion](https://www.framer.com/motion/)** - Плавные анимации

### **Разработка и развертывание**
- **[Vercel](https://vercel.com/)** - Хостинг и развертывание
- **[ESLint](https://eslint.org/)** - Линтинг кода
- **[Prettier](https://prettier.io/)** - Форматирование кода

## 🚀 Развертывание

### **Vercel (Рекомендуется)**

Сайт оптимизирован для развертывания на Vercel:

```bash
# Установить Vercel CLI
npm i -g vercel

# Развернуть на preview
vercel

# Развернуть в продакшн
vercel --prod
```

## 📊 Метрики производительности

### **Core Web Vitals**
- **Largest Contentful Paint (LCP)**: < 1.2с
- **First Input Delay (FID)**: < 100мс  
- **Cumulative Layout Shift (CLS)**: < 0.1

### **Оценки Lighthouse**
- **Производительность**: 95+ 🟢
- **Доступность**: 100 🟢
- **Лучшие практики**: 100 🟢
- **SEO**: 100 🟢

## 🤝 Вклад в проект

Мы приветствуем вклад от сообщества! Вот как вы можете помочь:

### **Способы внести вклад**
- 🐛 **Отчеты об ошибках** - Нашли проблему? Дайте нам знать!
- 💡 **Запросы функций** - Есть идеи для улучшений?
- 📝 **Документация** - Помогите улучшить наши руководства
- 🌐 **Переводы** - Добавьте поддержку большего количества языков
- 🎨 **Дизайн** - Улучшите UI/UX и доступность

### **Рабочий процесс разработки**

1. **Форкнуть репозиторий**
2. **Создать ветку функции**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Внести изменения**
4. **Запустить тесты и линтинг**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```
5. **Зафиксировать изменения**
   ```bash
   git commit -m "Добавить потрясающую функцию"
   ```
6. **Отправить в ваш форк**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Создать Pull Request**

## 📄 Лицензия

Этот проект лицензирован под **лицензией MIT** - см. файл [LICENSE](LICENSE) для подробностей.

## 🔗 Ссылки

- **🌐 Официальный сайт**: [https://www.geminicli.cc/](https://www.geminicli.cc/)
- **📚 Документация**: [https://www.geminicli.cc/docs](https://www.geminicli.cc/docs)
- **🎓 Туториалы**: [https://www.geminicli.cc/tutorials](https://www.geminicli.cc/tutorials)
- **🎮 Площадка**: [https://www.geminicli.cc/playground](https://www.geminicli.cc/playground)
- **💬 Discord сообщество**: [Присоединиться к Discord](https://discord.gg/gemini-cli)
- **📊 Vercel аналитика**: [Панель производительности](https://vercel.com/sxyseos-projects/geminicli.cc)

## 🙏 Благодарности

- **Google** - За создание потрясающего Gemini CLI
- **Vercel** - За отличную платформу хостинга и развертывания
- **shadcn** - За красивую библиотеку UI компонентов
- **Участники сообщества** - За туториалы, отзывы и улучшения

---

<div align="center">
  <p>
    <strong>Создано с ❤️ сообществом Gemini CLI</strong>
  </p>
  <p>
    <a href="https://www.geminicli.cc/">Посетить сайт</a> • 
    <a href="https://www.geminicli.cc/docs">Документация</a> • 
    <a href="https://www.geminicli.cc/tutorials">Туториалы</a> • 
    <a href="https://discord.gg/gemini-cli">Сообщество</a>
  </p>
</div> 