(function () {
  "use strict";

  /* ─── TRANSLATIONS ─────────────────────────────────── */
  const LANGS = {
    PT: {
      flag: "🇧🇷", label: "PT",
      nav: ["Sobre Mim", "Serviços", "Portfólio", "Contato"],
      hire: "Contrate-me",
      badge: "Olá, eu sou",
      heroSub: "Desenvolvedor Front-End apaixonado por criar experiências digitais modernas, performáticas e acessíveis.",
      downloadCV: "Download CV",
      myWork: "Meu Trabalho",
      statsLabel: "Total de", statsValue: "Projetos Entregues",
      specialtyLabel: "Especialidade",
      specialtyTitle: ["Desenvolvimento", "Front-End"],
      aboutLabel: "Sobre Mim",
      aboutTitle: ["Conheça Minha", "Trajetória!"],
      aboutText: "Sou Everton Luis da Silva Chagas, desenvolvedor front-end apaixonado por transformar ideias em interfaces elegantes. Trabalho com as principais tecnologias do mercado, colaborando com a necessidade dos nossos clientes.",
      servicesLabel: "O Que Faço", servicesTitle: "Meus Serviços",
      servicesSub: "Do design ao deploy, ofereço soluções completas para produtos digitais modernos e escaláveis.",
      services: [
        { title: "Front-End Dev", desc: "Interfaces modernas com React, Vue e Angular." },
        { title: "Figma", desc: "Criação de layouts e protótipos visuais no Figma." },
        { title: "Web Development", desc: "Sites e landing pages responsivos e otimizados." },
        { title: "Back-End", desc: "APIs RESTful e GraphQL com Node.js." },
        { title: "Banco de Dados", desc: "MongoDB, PostgreSQL e MySQL." },
        { title: "DevOps Básico", desc: "Docker, AWS e Git para deploy e CI/CD." },
      ],
      portfolioLabel: "Trabalhos", portfolioTitle: "Portfólio",
      viewProject: "Ver Projeto ao Vivo",
      projects: [
        { desc: "Sistema de delivery completo para hamburgueria, com cardápio digital interativo, carrinho de compras, verificação automática de horário de funcionamento e finalização de pedido direto pelo WhatsApp. Interface responsiva construída com HTML, CSS, JavaScript e Tailwind CSS." },
      ],
      skillsLabel: "Tecnologias", skillsTitle: "Minhas Skills",
      ctaLabel: "Pronto para Contratar?", ctaTitle: "Estou Disponível para Freelance",
      contactLabel: "Contato",
      contactTitle: ["Vamos Trabalhar", "Juntos!"],
      contactSub: "Tem um projeto em mente? Quer trocar uma ideia? Me manda uma mensagem e retorno em até 24h.",
      contactFields: { name: "Seu Nome", email: "Seu E-mail", subject: "Assunto", message: "Sua mensagem...", send: "Enviar Mensagem" },
      contactInfo: [
        { label: "Email", value: "evertonluissilvachagas9@gmail.com" },
        { label: "WhatsApp", value: "+55 (15) 99604-5915" },
        { label: "Localização", value: "Sorocaba-SP, Brasil · UTC-3" },
      ],
      footer: "Todos os direitos reservados",
    },
    EN: {
      flag: "🇺🇸", label: "EN",
      nav: ["About Me", "Services", "Portfolio", "Contact"],
      hire: "Hire Me",
      badge: "Hello, I am",
      heroSub: "Front-End Developer passionate about building modern, performant and accessible digital experiences.",
      downloadCV: "Download CV",
      myWork: "My Work",
      statsLabel: "Total of", statsValue: "Projects Delivered",
      specialtyLabel: "Specialty",
      specialtyTitle: ["Front-End", "Development"],
      aboutLabel: "About Me",
      aboutTitle: ["Know My", "Story!"],
      aboutText: "I'm Everton Luis da Silva Chagas, a front-end developer passionate about turning ideas into elegant interfaces. I work with the main technologies on the market, collaborating to meet the needs of our clients.",
      servicesLabel: "What I Do", servicesTitle: "My Services",
      servicesSub: "From design to deployment, I offer complete solutions for modern and scalable digital products.",
      services: [
        { title: "Front-End Dev", desc: "Modern interfaces with React, Vue and Angular." },
        { title: "Figma", desc: "Layout creation and visual prototypes in Figma." },
        { title: "Web Development", desc: "Responsive and optimized websites and landing pages." },
        { title: "Back-End", desc: "RESTful and GraphQL APIs with Node.js." },
        { title: "Databases", desc: "MongoDB, PostgreSQL and MySQL." },
        { title: "Basic DevOps", desc: "Docker, AWS and Git for deploy and CI/CD." },
      ],
      portfolioLabel: "Works", portfolioTitle: "Portfolio",
      viewProject: "View Live Project",
      projects: [
        { desc: "Complete delivery system for a burger restaurant, featuring an interactive digital menu, shopping cart, automatic business-hours check and order checkout straight through WhatsApp. Responsive interface built with HTML, CSS, JavaScript and Tailwind CSS." },
      ],
      skillsLabel: "Technologies", skillsTitle: "My Skills",
      ctaLabel: "Ready to Hire?", ctaTitle: "I'm Available for Freelance",
      contactLabel: "Contact",
      contactTitle: ["Let's Work", "Together!"],
      contactSub: "Have a project in mind? Want to exchange ideas? Send me a message and I'll get back to you within 24h.",
      contactFields: { name: "Your Name", email: "Your E-mail", subject: "Subject", message: "Your message...", send: "Send Message" },
      contactInfo: [
        { label: "Email", value: "evertonluissilvachagas9@gmail.com" },
        { label: "WhatsApp", value: "+55 (15) 99604-5915" },
        { label: "Location", value: "Sorocaba-SP, Brazil · UTC-3" },
      ],
      footer: "All rights reserved",
    },
    ES: {
      flag: "🇪🇸", label: "ES",
      nav: ["Sobre Mí", "Servicios", "Portafolio", "Contacto"],
      hire: "Contrátame",
      badge: "Hola, soy",
      heroSub: "Desarrollador Front-End apasionado por crear experiencias digitales modernas, eficientes y accesibles.",
      downloadCV: "Descargar CV",
      myWork: "Mi Trabajo",
      statsLabel: "Total de", statsValue: "Proyectos Entregados",
      specialtyLabel: "Especialidad",
      specialtyTitle: ["Desarrollo", "Front-End"],
      aboutLabel: "Sobre Mí",
      aboutTitle: ["Conoce Mi", "Trayectoria!"],
      aboutText: "Soy Everton Luis da Silva Chagas, desarrollador front-end apasionado por transformar ideas en interfaces elegantes. Trabajo con las principales tecnologías del mercado, colaborando con las necesidades de nuestros clientes.",
      servicesLabel: "Qué Hago", servicesTitle: "Mis Servicios",
      servicesSub: "Del diseño al despliegue, ofrezco soluciones completas para productos digitales modernos y escalables.",
      services: [
        { title: "Front-End Dev", desc: "Interfaces modernas con React, Vue y Angular." },
        { title: "Figma", desc: "Creación de layouts y prototipos visuales en Figma." },
        { title: "Web Development", desc: "Sitios y landing pages responsivos y optimizados." },
        { title: "Back-End", desc: "APIs RESTful y GraphQL con Node.js." },
        { title: "Bases de Datos", desc: "MongoDB, PostgreSQL y MySQL." },
        { title: "DevOps Básico", desc: "Docker, AWS y Git para deploy y CI/CD." },
      ],
      portfolioLabel: "Trabajos", portfolioTitle: "Portafolio",
      viewProject: "Ver Proyecto en Vivo",
      projects: [
        { desc: "Sistema de delivery completo para una hamburguesería, con menú digital interactivo, carrito de compras, verificación automática de horario de atención y finalización de pedido directo por WhatsApp. Interfaz responsiva construida con HTML, CSS, JavaScript y Tailwind CSS." },
      ],
      skillsLabel: "Tecnologías", skillsTitle: "Mis Skills",
      ctaLabel: "¿Listo para Contratar?", ctaTitle: "Estoy Disponible para Freelance",
      contactLabel: "Contacto",
      contactTitle: ["Trabajemos", "Juntos!"],
      contactSub: "¿Tienes un proyecto en mente? ¿Quieres intercambiar ideas? Envíame un mensaje y respondo en 24h.",
      contactFields: { name: "Tu Nombre", email: "Tu E-mail", subject: "Asunto", message: "Tu mensaje...", send: "Enviar Mensaje" },
      contactInfo: [
        { label: "Email", value: "evertonluissilvachagas9@gmail.com" },
        { label: "WhatsApp", value: "+55 (15) 99604-5915" },
        { label: "Ubicación", value: "Sorocaba-SP, Brasil · UTC-3" },
      ],
      footer: "Todos los derechos reservados",
    },
  };

  /* ─── DATA ──────────────────────────────────────────── */
  const SKILLS = [
    { name: "HTML", pct: 95 }, { name: "CSS", pct: 90 }, { name: "JavaScript", pct: 88 },
    { name: "TypeScript", pct: 82 }, { name: "React", pct: 85 }, { name: "Vue", pct: 75 },
    { name: "Angular", pct: 70 }, { name: "Node.js", pct: 78 }, { name: "Tailwind", pct: 92 },
    { name: "Bootstrap", pct: 88 }, { name: "GraphQL", pct: 72 }, { name: "MongoDB", pct: 75 },
    { name: "PostgreSQL", pct: 70 }, { name: "MySQL", pct: 68 }, { name: "Docker", pct: 65 },
    { name: "AWS", pct: 62 }, { name: "Git & GitHub", pct: 90 }, { name: "Figma", pct: 80 },
    { name: "Sass", pct: 85 }, { name: "JSON", pct: 95 },
  ];

  const PROJECT_BASE = [
    {
      title: "Dev Burguer - Sistema de Delivery",
      cat: "Front-End",
      techs: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "https://cardapio-online-delta-one.vercel.app/",
    },
  ];

  const SERVICE_ICONS = [
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
  ];

  /* ─── STATE ─────────────────────────────────────────── */
  let lang = "PT";
  let isLight = false;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  function scrollToTarget(href) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  /* ─── RENDER: STATIC TEXT PER LANGUAGE ─────────────── */
  function renderTexts() {
    const T = LANGS[lang];

    $$(".nav-link").forEach((btn, i) => (btn.textContent = T.nav[i]));
    $$(".nav-link-mobile").forEach((btn, i) => (btn.textContent = T.nav[i]));
    $("#hireBtnDesktop").textContent = T.hire;
    $("#hireBtnMobile").textContent = T.hire;
    $("#hireBtnCta").textContent = T.hire;

    $("#heroBadge").textContent = T.badge;
    $("#heroSub").textContent = T.heroSub;
    $("#downloadCvLabel").textContent = T.downloadCV;
    $("#myWorkLabel").textContent = T.myWork;

    $("#statsLabel").textContent = T.statsLabel;
    $("#statsValue").textContent = T.statsValue;

    $("#specialtyLabel").textContent = T.specialtyLabel;
    $("#specialtyTitle0").textContent = T.specialtyTitle[0];
    $("#specialtyTitle1").textContent = T.specialtyTitle[1];

    $("#aboutLabel").textContent = T.aboutLabel;
    $("#aboutTitle0").textContent = T.aboutTitle[0];
    $("#aboutTitle1").textContent = T.aboutTitle[1];
    $("#aboutText").textContent = T.aboutText;

    $("#servicesLabel").textContent = T.servicesLabel;
    $("#servicesTitle").textContent = T.servicesTitle;
    $("#servicesSub").textContent = T.servicesSub;

    $("#portfolioLabel").textContent = T.portfolioLabel;
    $("#portfolioTitle").textContent = T.portfolioTitle;

    $("#skillsLabel").textContent = T.skillsLabel;
    $("#skillsTitle").textContent = T.skillsTitle;

    $("#ctaLabel").textContent = T.ctaLabel;
    $("#ctaTitle").textContent = T.ctaTitle;

    $("#contactLabel").textContent = T.contactLabel;
    $("#contactTitle0").textContent = T.contactTitle[0];
    $("#contactTitle1").textContent = T.contactTitle[1];
    $("#contactSub").textContent = T.contactSub;

    $("#fieldName").placeholder = T.contactFields.name;
    $("#fieldEmail").placeholder = T.contactFields.email;
    $("#fieldSubject").placeholder = T.contactFields.subject;
    $("#fieldMessage").placeholder = T.contactFields.message;
    $("#fieldSend").textContent = T.contactFields.send;

    $("#footerRights").textContent = T.footer;

    renderServices();
    renderPortfolio();
    renderContactInfo();
  }

  function renderServices() {
    const T = LANGS[lang];
    const grid = $("#servicesGrid");
    grid.innerHTML = "";
    T.services.forEach((s, i) => {
      const filled = i % 3 === 1;
      const card = document.createElement("div");
      card.className = "service-card";
      card.innerHTML = `
        <div class="service-icon${filled ? " filled" : ""}">${SERVICE_ICONS[i]}</div>
        <h3 class="service-title">${s.title}</h3>
        <p class="service-desc">${s.desc}</p>
      `;
      grid.appendChild(card);
    });
  }

  function renderPortfolio() {
    const T = LANGS[lang];

    const grid = $("#projectsGrid");
    grid.innerHTML = "";

    PROJECT_BASE.forEach((p, i) => {
      const card = document.createElement("div");
      card.className = "project-card project-card-featured";
      card.innerHTML = `
        <div class="project-img-wrap">
          <img src="src/img/dev-burguer-preview.jpg" alt="${p.title}" class="project-img" />
          <span class="project-cat">${p.cat}</span>
        </div>
        <div class="project-body">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${T.projects[i].desc}</p>
          <div class="project-techs">
            ${p.techs.map((t) => `<span class="project-tech">${t}</span>`).join("")}
          </div>
          <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn-solid project-link">
            <span>${T.viewProject}</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  function renderContactInfo() {
    const T = LANGS[lang];
    const icons = [
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v16H4z" opacity="0"/><path d="M22 6l-10 7L2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>',
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
      '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    ];
    const wrap = $("#contactInfo");
    wrap.innerHTML = "";
    T.contactInfo.forEach((info, i) => {
      const item = document.createElement("div");
      item.className = "contact-item";
      item.innerHTML = `
        <div class="contact-icon">${icons[i]}</div>
        <div>
          <p class="contact-item-label">${info.label}</p>
          <p class="contact-item-value">${info.value}</p>
        </div>
      `;
      wrap.appendChild(item);
    });
  }

  function renderSkillsBars() {
    const wrap = $("#skillsBars");
    wrap.innerHTML = "";
    SKILLS.slice(0, 8).forEach((s) => {
      const bar = document.createElement("div");
      bar.className = "skill-bar";
      bar.innerHTML = `
        <div class="skill-bar-top">
          <span class="skill-bar-name">${s.name}</span>
          <span class="skill-bar-pct">${s.pct}%</span>
        </div>
        <div class="skill-bar-track">
          <div class="skill-bar-fill" data-pct="${s.pct}"></div>
        </div>
      `;
      wrap.appendChild(bar);
    });
    observeSkillBars();
  }

  function observeSkillBars() {
    const bars = $$(".skill-bar-fill");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.pct + "%";
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach((b) => obs.observe(b));
  }

  function renderSkillsTags() {
    const wrap = $("#skillsTags");
    wrap.innerHTML = "";
    SKILLS.forEach((s, i) => {
      const tag = document.createElement("span");
      tag.className = "skill-tag" + (i % 7 === 0 ? " filled" : "");
      tag.textContent = s.name;
      wrap.appendChild(tag);
    });

    const marquee = $("#marquee");
    marquee.innerHTML = "";
    [...SKILLS, ...SKILLS].forEach((s) => {
      const span = document.createElement("span");
      span.textContent = s.name + " /";
      marquee.appendChild(span);
    });
  }

  function renderHeroDecorations() {
    const dotsWrap = $("#heroDots");
    const dots = [
      { top: "15%", left: "10%", size: 3, delay: "0s" },
      { top: "30%", left: "45%", size: 2, delay: "1s" },
      { top: "65%", left: "15%", size: 4, delay: "2s" },
      { top: "80%", left: "60%", size: 2, delay: "0.5s" },
      { top: "20%", left: "80%", size: 3, delay: "1.5s" },
      { top: "50%", left: "90%", size: 2, delay: "3s" },
      { top: "90%", left: "35%", size: 3, delay: "2.5s" },
      { top: "45%", left: "5%", size: 2, delay: "4s" },
    ];
    dots.forEach((d, i) => {
      const dot = document.createElement("div");
      dot.className = "hero-dot";
      const isOrange = i % 2 === 0;
      dot.style.top = d.top;
      dot.style.left = d.left;
      dot.style.width = d.size + "px";
      dot.style.height = d.size + "px";
      dot.style.backgroundColor = isOrange ? "#ff5500" : "var(--text-muted)";
      dot.style.animationDelay = d.delay;
      dot.style.boxShadow = isOrange ? "0 0 6px rgba(255,85,0,0.8)" : "none";
      dotsWrap.appendChild(dot);
    });
  }

  /* ─── LANGUAGE SWITCH ───────────────────────────────── */
  function setLang(newLang) {
    lang = newLang;
    const T = LANGS[lang];
    $("#langFlag").textContent = T.flag;
    $("#langLabel").textContent = T.label;
    $("#langFlagMobile").textContent = T.flag;
    $$(".lang-option").forEach((opt) => {
      opt.classList.toggle("active", opt.dataset.lang === lang);
    });
    renderTexts();
  }

  /* ─── THEME TOGGLE ──────────────────────────────────── */
  function setTheme(light) {
    isLight = light;
    document.body.classList.toggle("light", isLight);
    $$("#iconSun, .icon-sun-m").forEach((el) => (el.style.display = isLight ? "none" : "block"));
    $$("#iconMoon, .icon-moon-m").forEach((el) => (el.style.display = isLight ? "block" : "none"));
  }

  /* ─── INIT ──────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
    renderHeroDecorations();
    renderSkillsBars();
    renderSkillsTags();
    renderTexts();

    // Smooth scroll nav
    $$("[data-target]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToTarget(el.dataset.target);
        $("#navMobileMenu").classList.remove("open");
      });
    });

    $("#logoLink").addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Navbar scroll shadow
    const navbar = $("#navbar");
    window.addEventListener(
      "scroll",
      () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
      },
      { passive: true }
    );

    // Theme toggle
    $("#themeToggle").addEventListener("click", () => setTheme(!isLight));
    $("#themeToggleMobile").addEventListener("click", () => setTheme(!isLight));

    // Language dropdown (desktop)
    const langBtn = $("#langBtn");
    const langMenu = $("#langMenu");
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.classList.toggle("open");
    });

    // Language dropdown (mobile)
    const langBtnMobile = $("#langBtnMobile");
    const langMenuMobile = $("#langMenuMobile");
    langBtnMobile.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenuMobile.classList.toggle("open");
    });

    $$(".lang-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        setLang(opt.dataset.lang);
        langMenu.classList.remove("open");
        langMenuMobile.classList.remove("open");
      });
    });

    document.addEventListener("click", () => {
      langMenu.classList.remove("open");
      langMenuMobile.classList.remove("open");
    });

    // Mobile menu toggle
    const menuToggle = $("#menuToggle");
    const navMobileMenu = $("#navMobileMenu");
    const iconMenu = $("#iconMenu");
    const iconClose = $("#iconClose");
    menuToggle.addEventListener("click", () => {
      const open = navMobileMenu.classList.toggle("open");
      iconMenu.style.display = open ? "none" : "block";
      iconClose.style.display = open ? "block" : "none";
    });

    // Contact form opens a pre-filled message in the visitor's email client.
    $("#contactForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = $("#fieldName").value.trim();
      const email = $("#fieldEmail").value.trim();
      const subject = $("#fieldSubject").value.trim();
      const message = $("#fieldMessage").value.trim();
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:ever.chagas93@outlook.com?subject=${encodeURIComponent(
        subject || "Contato via portfólio"
      )}&body=${body}`;
    });
  });
})();
