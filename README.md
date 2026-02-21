# Портфолио — Full-Stack разработчик

Одностраничный адаптивный сайт-портфолио на HTML, Tailwind CSS и JavaScript. Русский язык по умолчанию.

## Стек

- **HTML** — разметка
- **Tailwind CSS** (CDN) — стили, адаптив, тёмная тема
- **JavaScript** — плавный скролл, анимации при скролле, форма (демо)
- **Шрифты:** ONY Semimono Beta (основной), Aptos (заголовки), Manrope (резерв)
- **Иконки:** [skillicons.dev](https://skillicons.dev/) (стек), Font Awesome (соцсети, UI)

## Структура проекта

```
PortfolioWeb/
├── index.html      # Страница: Hero, Обо мне, Проекты, Контакты
├── app.js          # Логика: переводы, тема, форма, рендер проектов
├── fonts/          # ONY Semimono Beta (.otf)
├── assets/         # resume.pdf (добавить самому), README
└── README.md
```

## Запуск локально

1. Клонируй репозиторий или открой папку в терминале.
2. Запусти локальный сервер:

```bash
python3 -m http.server 5500
```

3. Открой в браузере: **http://localhost:5500**

Либо открой `index.html` напрямую (часть возможностей может не работать из-за ограничений `file://`).

## Разделы

- **Главная (Hero)** — приветствие, специализация, кнопки «Связаться», «Просмотреть работы», «Скачать резюме».
- **Обо мне** — текст о себе и стек (Frontend, Backend, Инструменты) с иконками.
- **Проекты** — карточки с превью (iframe с GitHub Pages), названием, описанием, технологиями и ссылками на код и демо.
- **Контакты** — форма обратной связи (демо, без бэкенда), email, соцсети (GitHub, LinkedIn, Telegram, hh.ru).

## Настройка под себя

### Проекты

В `app.js` массив **projectsData**. Добавляй объекты по образцу:

```js
{
  id: 2,
  title: { ru: 'Название', en: 'Title' },
  description: { ru: 'Описание', en: 'Description' },
  image: 'https://...',           // картинка, если нет linkDemo
  tech: ['React', 'Node.js'],
  tags: ['react', 'node'],
  linkCode: 'https://github.com/username/repo',
  linkDemo: 'https://username.github.io/repo/',  // превью в карточке
}
```

`linkDemo` — URL сайта на GitHub Pages; в карточке показывается превью (iframe). Если сайт блокирует встраивание — будет использоваться `image`.

### Контакты

В `index.html` в разделе «Контакты» замени:

- `hello@example.com` на свой email;
- ссылки `https://github.com`, `https://linkedin.com`, `https://t.me/your_username`, `https://hh.ru/...` на свои профили.

В `app.js` в объекте **translations** при необходимости поправь текст про mail.ru и подписи кнопок.

### Резюме

Положи файл **resume.pdf** в папку **assets/** — кнопка «Скачать резюме» будет вести на него.

### Шрифты

- Основной текст: шрифты в папке **fonts/** (ONY Semimono Beta). Подключение в `<style>` в `index.html`.
- Заголовки: Aptos (системный), fallback — Segoe UI, system-ui.

## Тёмная тема

Тема задаётся классом `dark` на `<html>`. В коде переключатель темы отключён; при желании можно вернуть кнопку и логику в `app.js` (localStorage, `document.documentElement.classList.toggle('dark')`).

## Лицензия

Свободное использование для личного портфолио.
