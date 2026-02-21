/**
 * Portfolio — i18n, theme, smooth scroll, form demo, projects filter
 * Имя: Максим / Maxim
 */

// ——— i18n: переводы RU/EN ———
const translations = {
  ru: {
    nav: {
      logo: 'Максим',
      home: 'Главная',
      about: 'Обо мне',
      projects: 'Проекты',
      skills: 'Навыки',
      contact: 'Контакты',
    },
    hero: {
      title: 'Привет, я Максим — full-stack разработчик',
      subtitle: 'Специализация: React, Node.js, TypeScript, современный веб и серверная разработка',
      contact: 'Связаться',
      works: 'Просмотреть работы',
      resume: 'Скачать резюме',
    },
    about: {
      title: 'Обо мне',
      stack: 'Стек',
      p1: 'Студент 4 курса РТУ МИРЕА по направлению «Фуллстак-разработка». Готовлюсь к работе в веб-разработке: фронтенд, бэкенд, базы данных, современный стек.',
      p2: 'Обучаюсь на практике: делаю пет-проекты и выполняю учебные задания и проекты в университете.',
      p3: 'По технологиям из стека ниже проходил дополнительные курсы и продолжаю углублять знания.',
      p4: 'Постоянно учусь, читаю профессиональную литературу и статьи, улучшаю навыки — хочу расти как разработчик и быть полезным в команде.',
    },
    projects: {
      title: 'Проекты',
      subtitle: 'Избранные работы и пет-проекты',
      filterAll: 'Все',
      code: 'Код',
      demo: 'Демо',
    },
    skills: {
      title: 'Навыки',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Инструменты',
    },
    contact: {
      title: 'Контакты',
      subtitle: 'Напишите мне — с радостью отвечу',
      mailru: 'Письмо придёт на почту @mail.ru',
      socials: 'Соцсети и профили',
      name: 'Имя',
      email: 'Email',
      message: 'Сообщение',
      submit: 'Отправить',
      namePlaceholder: 'Ваше имя',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Текст сообщения...',
      success: 'Спасибо! Сообщение отправлено (демо).',
    },
    footer: {
      copyright: '© 2025 Максим',
    },
  },
  en: {
    nav: {
      logo: 'Maxim',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      title: "Hi, I'm Maxim — full-stack developer",
      subtitle: 'Focus: React, Node.js, TypeScript, modern web and server-side development',
      contact: 'Get in touch',
      works: 'View works',
      resume: 'Download resume',
    },
    about: {
      title: 'About me',
      stack: 'Stack',
      p1: '4th year student at RTU MIREA, majoring in Full-Stack Development. Focusing on frontend, backend, databases, and modern web technologies.',
      p2: 'Learning by doing: building pet projects and completing university assignments and team projects.',
      p3: 'Completed courses in the technologies listed below and keep deepening my skills.',
      p4: 'I keep learning, read professional resources, and work on improving my skills — I want to grow as a developer and contribute to a team.',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work and side projects',
      filterAll: 'All',
      code: 'Code',
      demo: 'Demo',
    },
    skills: {
      title: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Drop me a line — I\'ll be glad to reply',
      mailru: 'Your message will be sent to @mail.ru',
      socials: 'Socials & profiles',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Your message...',
      success: 'Thank you! Message sent (demo).',
    },
    footer: {
      copyright: '© 2025 Maxim',
    },
  },
};

// Данные проектов: добавь свои репозитории с GitHub Pages
// linkDemo — URL сайта на GitHub Pages (превью загрузится в карточке; если сайт блокирует встраивание — покажется image)
// linkCode — ссылка на репозиторий GitHub
const projectsData = [
  {
    id: 1,
    title: { ru: 'WebCalculator', en: 'WebCalculator' },
    description: { ru: 'Веб-калькулятор с базовыми операциями: сложение, вычитание, умножение, деление.', en: 'Web calculator with basic operations: add, subtract, multiply, divide.' },
    image: 'https://placehold.co/600x340/6366f1/ffffff?text=WebCalculator',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/WebCalculator',
    linkDemo: 'https://lrg1763.github.io/WebCalculator/',
  },
  {
    id: 2,
    title: { ru: 'Меню ресторана Grut', en: 'Grut Restaurant Menu' },
    description: { ru: 'Сайт меню ресторана Grut: коктейли, закуски, навигация по разделам.', en: 'Grut restaurant menu: cocktails, appetizers, section navigation.' },
    image: 'https://placehold.co/600x340/1a1a1a/ffffff?text=Grut+Menu',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/GrutMenuWeb',
    linkDemo: 'https://lrg1763.github.io/GrutMenuWeb/',
  },
  {
    id: 3,
    title: { ru: 'Коктейли в ресторане Grut', en: 'Grut Restaurant Cocktails' },
    description: { ru: 'Лендинг: коктейльная карта ресторана Grut, одна цена 999₽.', en: 'Landing: Grut restaurant cocktail menu, single price 999₽.' },
    image: 'https://placehold.co/600x340/1a1a1a/ffffff?text=Grut+Cocktails',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: '#',
    linkDemo: 'http://grut.site/',
  },
  {
    id: 4,
    title: { ru: 'Калькулятор ИМТ', en: 'BMI Calculator' },
    description: { ru: 'Индекс массы тела: расчёт по весу и росту, шкала ИМТ.', en: 'Body mass index calculator: weight and height, BMI scale.' },
    image: 'https://placehold.co/600x340/10b981/ffffff?text=BMI',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/BmiWeb',
    linkDemo: 'https://lrg1763.github.io/BmiWeb/',
  },
  {
    id: 5,
    title: { ru: 'Barterswap', en: 'Barterswap' },
    description: { ru: 'Платформа бартерного обмена навыками и услугами: профили, поиск, чат, отзывы.', en: 'Barter exchange platform for skills and services: profiles, search, chat, reviews.' },
    image: 'https://placehold.co/600x340/8b5cf6/ffffff?text=Barterswap',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    tags: ['react', 'node'],
    linkCode: 'https://github.com/lrg1763/BarterswapWeb',
    linkDemo: 'https://lrg1763.github.io/BarterswapWeb/',
  },
  {
    id: 6,
    title: { ru: 'Крестики-нолики', en: 'Tic-tac-toe' },
    description: { ru: 'Многопользовательская игра по ссылке: создание комнаты, ожидание второго игрока.', en: 'Multiplayer game via link: create room, wait for second player.' },
    image: 'https://placehold.co/600x340/f59e0b/ffffff?text=Tic-tac-toe',
    tech: ['React', 'Node.js', 'Socket.IO'],
    tags: ['react', 'node'],
    linkCode: '#',
    linkDemo: 'https://tictactoeweb-xic1.onrender.com/',
  },
  {
    id: 7,
    title: { ru: 'BitGrid', en: 'BitGrid' },
    description: { ru: 'Веб-проект BitGrid на GitHub Pages.', en: 'BitGrid web project on GitHub Pages.' },
    image: 'https://placehold.co/600x340/6366f1/ffffff?text=BitGrid',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/BitGridWeb',
    linkDemo: 'https://lrg1763.github.io/BitGridWeb/',
  },
  {
    id: 8,
    title: { ru: 'Grut Web', en: 'Grut Web' },
    description: { ru: 'Лендинг ресторана Grut: страница «Скоро».', en: 'Grut restaurant landing: Coming Soon page.' },
    image: 'https://placehold.co/600x340/1a1a1a/ffffff?text=Grut+Web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/GrutWeb',
    linkDemo: 'https://lrg1763.github.io/GrutWeb/',
  },
  {
    id: 9,
    title: { ru: 'Construction Services', en: 'Construction Services' },
    description: { ru: 'Сайт услуг в сфере строительства и ремонта.', en: 'Construction and renovation services website.' },
    image: 'https://placehold.co/600x340/0ea5e9/ffffff?text=Construction',
    tech: ['HTML', 'CSS', 'JavaScript'],
    tags: ['javascript'],
    linkCode: 'https://github.com/lrg1763/ConstructionServicesWeb',
    linkDemo: 'https://lrg1763.github.io/ConstructionServicesWeb/',
  },
  // Добавляй свои проекты по образцу:
  // {
  //   id: 2,
  //   title: { ru: 'Название', en: 'Title' },
  //   description: { ru: 'Описание', en: 'Description' },
  //   image: 'https://...', // скриншот или placeholder, если нет linkDemo
  //   tech: ['React', 'Node.js'],
  //   tags: ['react', 'node'],
  //   linkCode: 'https://github.com/username/repo',
  //   linkDemo: 'https://username.github.io/repo/', // превью сайта загрузится в карточке
  // },
];

// Текущий язык (восстанавливаем из localStorage)
let currentLang = localStorage.getItem('portfolio-lang') || 'ru';

function getNested(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

/** Применить переводы ко всем элементам с data-i18n и data-i18n-placeholder */
function applyTranslations(lang) {
  const t = translations[lang] || translations.ru;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = getNested(t, key);
    if (value != null) el.textContent = value;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = getNested(t, key);
    if (value != null) el.placeholder = value;
  });
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
  document.title = lang === 'ru' ? 'Максим — Full-Stack разработчик' : 'Maxim — Full-Stack Developer';
  renderProjects(currentLang, currentFilter);
}

/** Переключение языка */
function setLang(lang) {
  applyTranslations(lang);
}

// ——— Тема (светлая / тёмная) ———
function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  const dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
}

// ——— Мобильное меню (бургер) ———
function initBurger() {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');
  const links = menu.querySelectorAll('.nav-mobile-link');
  burger?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
  links.forEach((link) => {
    link.addEventListener('click', () => menu.classList.add('hidden'));
  });
}

// ——— Плавный скролл к якорям (при необходимости перехватываем клики) ———
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      a.addEventListener('click', (e) => {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });
}

// ——— Анимация появления секций при скролле ———
let revealObserver = null;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-6');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
  }
  document.querySelectorAll('.reveal:not([data-reveal-observed])').forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-500');
    el.setAttribute('data-reveal-observed', '1');
    revealObserver.observe(el);
  });
}
function initReveal() {
  observeReveals();
}

// ——— Форма обратной связи (демо) ———
function initContactForm() {
  const form = document.getElementById('contact-form');
  const messageEl = document.getElementById('form-message');
  if (!form || !messageEl) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    messageEl.classList.remove('hidden');
    messageEl.textContent = currentLang === 'ru' ? 'Спасибо! Сообщение отправлено (демо).' : 'Thank you! Message sent (demo).';
    form.reset();
    setTimeout(() => messageEl.classList.add('hidden'), 4000);
  });
}

// ——— Проекты: рендер и фильтр ———
let currentFilter = 'all';
const FILTER_TAG_MAP = { react: 'React', node: 'Node.js', typescript: 'TypeScript', vue: 'Vue', javascript: 'JavaScript', docker: 'Docker' };

function getUniqueTags() {
  const set = new Set();
  projectsData.forEach((p) => p.tags.forEach((t) => set.add(t)));
  return ['all', ...Array.from(set)];
}

function renderProjects(lang, filter) {
  const grid = document.getElementById('projects-grid');
  const filterContainer = document.getElementById('projects-filter');
  const t = translations[lang]?.projects || translations.ru.projects;
  if (!grid) return;

  const filtered =
    filter === 'all' ? projectsData : projectsData.filter((p) => p.tags.includes(filter));

  // Кнопки фильтра
  if (filterContainer) {
    const tags = getUniqueTags();
    filterContainer.innerHTML = tags
      .map((tag) => {
        const label = tag === 'all' ? t.filterAll : (FILTER_TAG_MAP[tag] || tag);
        const active = filter === tag;
        return `<button type="button" class="project-filter-btn px-4 py-2 rounded-xl text-sm font-medium transition-colors ${active ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}" data-filter="${tag}">${label}</button>`;
      })
      .join('');
    filterContainer.querySelectorAll('.project-filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        currentFilter = btn.getAttribute('data-filter');
        renderProjects(currentLang, currentFilter);
      });
    });
  }

  grid.innerHTML = filtered
    .map(
      (p) => {
        const previewBlock = p.linkDemo
          ? `<div class="relative w-full h-44 sm:h-52 overflow-hidden rounded-t-2xl bg-gray-100 dark:bg-gray-700"><iframe src="${p.linkDemo}" title="Превью: ${p.title[lang] || p.title.ru}" class="border-0 absolute top-0 left-0" loading="lazy" style="width: 500%; height: 500%; transform: scale(0.2); transform-origin: 0 0;"></iframe></div>`
          : `<img src="${p.image}" alt="" class="w-full h-44 object-cover" loading="lazy" />`;
        return `
    <article class="project-card reveal rounded-2xl overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow" data-tags="${p.tags.join(' ')}">
      <div class="relative aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
        ${previewBlock}
        ${p.linkDemo ? `<a href="${p.linkDemo}" target="_blank" rel="noopener noreferrer" class="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/20 transition-colors"><span class="opacity-0 hover:opacity-100 bg-white/90 dark:bg-gray-800/90 text-sm font-medium px-3 py-2 rounded-lg">Открыть сайт</span></a>` : ''}
      </div>
      <div class="p-5">
        <h3 class="text-xl font-semibold mb-2">${p.title[lang] || p.title.ru}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${p.description[lang] || p.description.ru}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${p.tech.map((tech) => `<span class="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-xs">${tech}</span>`).join('')}
        </div>
        <div class="flex gap-2">
          <a href="${p.linkCode}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium transition-colors"><i class="fab fa-github"></i> ${t.code}</a>
          ${p.linkDemo ? `<a href="${p.linkDemo}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 hover:bg-indigo-200 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-medium transition-colors">${t.demo}</a>` : ''}
        </div>
      </div>
    </article>
  `;
      }
    )
    .join('');
  observeReveals();
}

// ——— Инициализация при загрузке ———
function init() {
  initTheme();
  applyTranslations(currentLang);
  initBurger();
  initSmoothScroll();
  initReveal();
  initContactForm();
  renderProjects(currentLang, currentFilter);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
