# Портфолио Full-Stack разработчик

Одностраничный адаптивный сайт-портфолио. 

---

## Технологии

| Что | Как |
|-----|-----|
| Разметка | HTML5 |
| Стили | Tailwind CSS (CDN) |
| Логика | Vanilla JavaScript |
| Шрифты | ONY Semimono Beta (текст), Aptos (заголовки), Manrope (резерв) |
| Иконки | [skillicons.dev](https://skillicons.dev/) (стек), Font Awesome (соцсети) |

Поддерживается тёмная тема (класс `dark` на `<html>`).

---

## Структура проекта

```
PortfolioWeb/
├── index.html    # Вся страница: Hero, Обо мне, Проекты, Контакты
├── app.js        # Рендер проектов, форма, плавный скролл, анимации
├── fonts/        # ONY Semimono Beta (Regular, Black)
├── assets/       # resume.pdf (положи сюда своё резюме)
└── README.md
```

---

## Запуск

```bash
# Из корня проекта
python3 -m http.server 5500
```

Открой в браузере: **http://localhost:5500**

Можно открыть и `index.html` напрямую — часть возможностей при `file://` может не работать.

---

## Разделы сайта

- **Главная (Hero)** — приветствие, кратко о специализации, кнопки «Связаться», «Просмотреть работы», «Скачать резюме». Фон: точечный градиент и размытые фиолетовые пятна.
- **Обо мне** — текст о себе, блок «Стек» (Frontend / Backend / Инструменты) с иконками технологий.
- **Проекты** — карточки с превью (iframe по ссылке на демо), названием, описанием, технологиями, ссылками «Код» и «Демо». Каждая секция не менее 100% высоты экрана.
- **Контакты** — форма (демо, без бэкенда), подпись про почту @mail.ru, email и соцсети (GitHub, LinkedIn, Telegram, hh.ru).

---

## Как настроить под себя

### Проекты

В **app.js** отредактируй массив **projectsData**. Пример элемента:

```js
{
  id: 7,
  title: { ru: 'Название', en: 'Title' },
  description: { ru: 'Описание', en: 'Description' },
  image: 'https://...',   // fallback, если нет linkDemo или iframe блокируется
  tech: ['React', 'Node.js'],
  tags: ['react', 'node'],
  linkCode: 'https://github.com/username/repo',
  linkDemo: 'https://username.github.io/repo/',
}
```

- **linkDemo** — ссылка на живой сайт; в карточке показывается превью (iframe). Для `http://` на странице с `https://` превью может блокироваться браузером.
- **linkCode** — репозиторий на GitHub.

### Контакты и соцсети

В **index.html** в блоке «Контакты» замени:

- `hello@example.com` на свой email;
- `https://github.com`, `https://linkedin.com`, `https://t.me/your_username`, ссылку на hh.ru — на свои профили.

При необходимости подправь тексты в **app.js** в объекте **translations** (в т.ч. про mail.ru).

### Резюме

Положи **resume.pdf** в папку **assets/** — кнопка «Скачать резюме» будет вести на этот файл.

### Шрифты

- **Текст:** файлы в **fonts/** (ONY Semimono Beta). Подключение в `<style>` в **index.html**.
- **Заголовки:** Aptos (системный), резерв — Segoe UI, system-ui. Настраивается в `tailwind.config` в **index.html**.

---

## Лицензия

Свободное использование для личного портфолио.
