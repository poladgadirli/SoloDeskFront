/* ── TRANSLATIONS ── */
const translations = {
  en: {
    meta: { title: "ProjectCRM — Dashboard" },
    workspace: "Management panel", newPage: "New page", userRole: "Admin",
    topbar: { share: "Share", comments: "Comments", more: "More" },
    nav: { dashboard: "Dashboard", users: "Users", clients: "Clients", projects: "Projects", reports: "Reports", settings: "Settings", profile: "Profile" },
    breadcrumb: { app: "ProjectCRM", dashboard: "Dashboard" },
    page: {
      title: "Dashboard", desc: "Overview of the system · March 2026",
      callout: "This dashboard will work with dynamic data once connected to real API endpoints. Currently mock data is shown."
    },
    stats: {
      users: "Users", clients: "Clients", projects: "Projects", pending: "Pending",
      usersChip: "+3 this month", clientsChip: "+11 this month", projectsChip: "8 active", pendingChip: "need review"
    },
    section: { users: "Users", clients: "Clients", projects: "Projects", filter: "Filter", sort: "Sort", new: "+ New", filterChip: "⊞ Filter" },
    table: { name: "Name", role: "Role", status: "Status", phone: "Phone", client: "Client", owner: "Owner", deadline: "Deadline" },
    add: { user: "+ Add new user", client: "+ Add new client", project: "+ Add new project" },
    rowAction: "Open →", empty: "No results found",
    statuses: { active: "Active", inactive: "Inactive" },
    roles: { admin: "Admin", manager: "Manager", user: "User" },
    projectStatus: { progress: "In Progress", planning: "Planning", done: "Done" },
    searchPlaceholder: "Search...",
    modal: {
      newUser: "New User", newClient: "New Client", newProject: "New Project",
      name: "Full Name", email: "Email", role: "Role", status: "Status",
      phone: "Phone", owner: "Owner", projectName: "Project Name", client: "Client",
      projectStatus: "Status", deadline: "Deadline", cancel: "Cancel", save: "Save",
      nameReq: "Name is required", emailReq: "Valid email required"
    },
    detail: { email: "Email", phone: "Phone", role: "Role", status: "Status", owner: "Owner", client: "Client", deadline: "Deadline" },
    sort: { name: "Name (A–Z)", nameDesc: "Name (Z–A)", status: "Status", deadline: "Deadline" },
    filter: { all: "All", active: "Active", inactive: "Inactive", progress: "In Progress", planning: "Planning", done: "Done" },
    notify: { saved: "Saved successfully!", deleted: "Deleted.", reset: "Data reset to defaults." },
    settings: {
      title: "Settings", desc: "Manage your workspace preferences",
      appearance: "Appearance", theme: "Theme", themeDesc: "Switch between light and dark mode",
      light: "Light", dark: "Dark",
      language: "Language", languageDesc: "Interface display language",
      profile: "Profile",
      profileName: "Full Name", profileNameDesc: "Your display name in the workspace",
      profileEmail: "Email", profileEmailDesc: "Your account email address",
      profileRole: "Role", profileRoleDesc: "Your role in this workspace",
      workspace: "Workspace",
      wsName: "Workspace Name", wsNameDesc: "Visible in the sidebar header",
      dataInfo: "Data", dataInfoDesc: "Currently using mock data. Connect to a real API to enable live data.",
      mock: "Mock",
      danger: "Danger Zone",
      resetData: "Reset All Data", resetDataDesc: "Restore all users, clients, and projects to their initial state.",
      resetBtn: "Reset",
      saveProfile: "Save Profile"
    },
    reports: { title: "Reports", desc: "Analytics and summaries", soon: "Reports section is coming soon. Connect your API to enable analytics.", chartCaption: "Monthly project activity (mock)" }
  },
  az: {
    meta: { title: "ProjectCRM — Dashboard" },
    workspace: "İdarəetmə paneli", newPage: "Yeni səhifə", userRole: "Admin",
    topbar: { share: "Paylaş", comments: "Şərh", more: "Daha çox" },
    nav: { dashboard: "Dashboard", users: "İstifadəçilər", clients: "Müştərilər", projects: "Layihələr", reports: "Hesabatlar", settings: "Ayarlar", profile: "Profil" },
    breadcrumb: { app: "ProjectCRM", dashboard: "Dashboard" },
    page: {
      title: "Dashboard", desc: "Sistemin ümumi vəziyyəti · Mart 2026",
      callout: "Bu panel real API endpoint-lərə bağlandıqda dinamik data ilə işləyəcək. Hazırda mock data göstərilir."
    },
    stats: {
      users: "İstifadəçilər", clients: "Müştərilər", projects: "Layihələr", pending: "Gözləyir",
      usersChip: "+3 bu ay", clientsChip: "+11 bu ay", projectsChip: "8 aktiv", pendingChip: "yoxlanmalı"
    },
    section: { users: "İstifadəçilər", clients: "Müştərilər", projects: "Layihələr", filter: "Filtrlə", sort: "Sırala", new: "+ Yeni", filterChip: "⊞ Filtr" },
    table: { name: "Ad Soyad", role: "Rol", status: "Status", phone: "Telefon", client: "Müştəri", owner: "Owner", deadline: "Son tarix" },
    add: { user: "+ Yeni user əlavə et", client: "+ Yeni client əlavə et", project: "+ Yeni layihə əlavə et" },
    rowAction: "Aç →", empty: "Nəticə tapılmadı",
    statuses: { active: "Aktiv", inactive: "Passiv" },
    roles: { admin: "Admin", manager: "Manager", user: "User" },
    projectStatus: { progress: "In Progress", planning: "Planning", done: "Done" },
    searchPlaceholder: "Axtar...",
    modal: {
      newUser: "Yeni İstifadəçi", newClient: "Yeni Müştəri", newProject: "Yeni Layihə",
      name: "Ad Soyad", email: "Email", role: "Rol", status: "Status",
      phone: "Telefon", owner: "Owner", projectName: "Layihə adı", client: "Müştəri",
      projectStatus: "Status", deadline: "Son tarix", cancel: "Ləğv et", save: "Yadda saxla",
      nameReq: "Ad mütləqdir", emailReq: "Düzgün email daxil edin"
    },
    detail: { email: "Email", phone: "Telefon", role: "Rol", status: "Status", owner: "Owner", client: "Müştəri", deadline: "Son tarix" },
    sort: { name: "Ad (A–Z)", nameDesc: "Ad (Z–A)", status: "Status", deadline: "Son tarix" },
    filter: { all: "Hamısı", active: "Aktiv", inactive: "Passiv", progress: "In Progress", planning: "Planning", done: "Done" },
    notify: { saved: "Uğurla saxlandı!", deleted: "Silindi.", reset: "Data sıfırlandı." },
    settings: {
      title: "Ayarlar", desc: "Workspace parametrlərini idarə et",
      appearance: "Görünüş", theme: "Tema", themeDesc: "Light və dark rejim arasında keçid",
      light: "İşıqlı", dark: "Qaranlıq",
      language: "Dil", languageDesc: "İnterfeys dili",
      profile: "Profil",
      profileName: "Ad Soyad", profileNameDesc: "Workspace-də görünən adınız",
      profileEmail: "Email", profileEmailDesc: "Hesab email ünvanınız",
      profileRole: "Rol", profileRoleDesc: "Bu workspace-dəki rolunuz",
      workspace: "Workspace",
      wsName: "Workspace adı", wsNameDesc: "Sidebar başlığında görünür",
      dataInfo: "Data", dataInfoDesc: "Hazırda mock data istifadə olunur. Canlı data üçün API-ə qoşun.",
      mock: "Mock",
      danger: "Təhlükəli Zona",
      resetData: "Bütün datanı sıfırla", resetDataDesc: "İstifadəçi, müştəri və layihələri ilkin vəziyyətə qaytar.",
      resetBtn: "Sıfırla",
      saveProfile: "Profili saxla"
    },
    reports: { title: "Hesabatlar", desc: "Analitika və xülasələr", soon: "Hesabatlar bölməsi tezliklə gəlir. Analitikanı aktivləşdirmək üçün API-ə qoşun.", chartCaption: "Aylıq layihə aktivliyi (mock)" }
  },
  ru: {
    meta: { title: "ProjectCRM — Панель" },
    workspace: "Панель управления", newPage: "Новая страница", userRole: "Администратор",
    topbar: { share: "Поделиться", comments: "Комментарии", more: "Ещё" },
    nav: { dashboard: "Дашборд", users: "Пользователи", clients: "Клиенты", projects: "Проекты", reports: "Отчеты", settings: "Настройки", profile: "Профиль" },
    breadcrumb: { app: "ProjectCRM", dashboard: "Dashboard" },
    page: {
      title: "Dashboard", desc: "Обзор системы · Март 2026",
      callout: "Эта панель будет работать с динамическими данными после подключения к реальным API. Сейчас показаны мок-данные."
    },
    stats: {
      users: "Пользователи", clients: "Клиенты", projects: "Проекты", pending: "Ожидание",
      usersChip: "+3 за месяц", clientsChip: "+11 за месяц", projectsChip: "8 активных", pendingChip: "на проверке"
    },
    section: { users: "Пользователи", clients: "Клиенты", projects: "Проекты", filter: "Фильтр", sort: "Сортировать", new: "+ Новая", filterChip: "⊞ Фильтр" },
    table: { name: "Имя Фамилия", role: "Роль", status: "Статус", phone: "Телефон", client: "Клиент", owner: "Ответственный", deadline: "Срок" },
    add: { user: "+ Добавить пользователя", client: "+ Добавить клиента", project: "+ Добавить проект" },
    rowAction: "Открыть →", empty: "Результатов не найдено",
    statuses: { active: "Активен", inactive: "Неактивен" },
    roles: { admin: "Админ", manager: "Менеджер", user: "Пользователь" },
    projectStatus: { progress: "В процессе", planning: "Планирование", done: "Готово" },
    searchPlaceholder: "Поиск...",
    modal: {
      newUser: "Новый пользователь", newClient: "Новый клиент", newProject: "Новый проект",
      name: "Имя Фамилия", email: "Email", role: "Роль", status: "Статус",
      phone: "Телефон", owner: "Ответственный", projectName: "Название проекта", client: "Клиент",
      projectStatus: "Статус", deadline: "Срок", cancel: "Отмена", save: "Сохранить",
      nameReq: "Имя обязательно", emailReq: "Введите корректный email"
    },
    detail: { email: "Email", phone: "Телефон", role: "Роль", status: "Статус", owner: "Ответственный", client: "Клиент", deadline: "Срок" },
    sort: { name: "Имя (A–Я)", nameDesc: "Имя (Я–A)", status: "Статус", deadline: "Срок" },
    filter: { all: "Все", active: "Активен", inactive: "Неактивен", progress: "В процессе", planning: "Планирование", done: "Готово" },
    notify: { saved: "Успешно сохранено!", deleted: "Удалено.", reset: "Данные сброшены." },
    settings: {
      title: "Настройки", desc: "Управление параметрами рабочего пространства",
      appearance: "Внешний вид", theme: "Тема", themeDesc: "Переключение между светлым и тёмным режимом",
      light: "Светлая", dark: "Тёмная",
      language: "Язык", languageDesc: "Язык интерфейса",
      profile: "Профиль",
      profileName: "Имя Фамилия", profileNameDesc: "Ваше отображаемое имя",
      profileEmail: "Email", profileEmailDesc: "Email вашего аккаунта",
      profileRole: "Роль", profileRoleDesc: "Ваша роль в этом пространстве",
      workspace: "Рабочее пространство",
      wsName: "Название", wsNameDesc: "Отображается в заголовке боковой панели",
      dataInfo: "Данные", dataInfoDesc: "Сейчас используются мок-данные. Подключите API для живых данных.",
      mock: "Мок",
      danger: "Опасная зона",
      resetData: "Сбросить все данные", resetDataDesc: "Вернуть пользователей, клиентов и проекты в исходное состояние.",
      resetBtn: "Сбросить",
      saveProfile: "Сохранить профиль"
    },
    reports: { title: "Отчеты", desc: "Аналитика и сводки", soon: "Раздел отчётов скоро появится. Подключите API для аналитики.", chartCaption: "Ежемесячная активность (мок)" }
  }
};

/* ── DEFAULT DATA ── */
const DEFAULT_USERS = [
  { id: 1, name: "Polad Aliyev",   email: "polad@example.com", role: "admin",   status: "active" },
  { id: 2, name: "Murad Mammadov", email: "murad@example.com", role: "manager", status: "active" },
  { id: 3, name: "Tural Hasanov",  email: "tural@example.com", role: "user",    status: "inactive" }
];
const DEFAULT_CLIENTS = [
  { id: 1, fullname: "Kamran Quliyev",  email: "kamran@client.com", phone: "+994 50 111 22 33", owner: "Polad" },
  { id: 2, fullname: "Elvin Rzayev",    email: "elvin@client.com",  phone: "+994 55 123 45 67", owner: "Murad" },
  { id: 3, fullname: "Orxan Ismayilov", email: "orxan@client.com",  phone: "+994 70 123 45 67", owner: "Polad" }
];
const DEFAULT_PROJECTS = [
  { id: 1, title: "CRM API Development", client: "Kamran Quliyev", status: "progress", startDate: "Apr 1, 2026", deadline: "Apr 15, 2026", startDateISO: "2026-04-01T00:00:00Z", deadlineISO: "2026-04-15T00:00:00Z", deadlineHasTime: false },
  { id: 2, title: "Admin Dashboard UI",  client: "Elvin Rzayev",   status: "planning", startDate: "Apr 5, 2026", deadline: "Apr 20, 2026", startDateISO: "2026-04-05T00:00:00Z", deadlineISO: "2026-04-20T00:00:00Z", deadlineHasTime: false },
  { id: 3, title: "Reporting Module",    client: "Orxan Ismayilov", status: "done",     startDate: "Mar 1, 2026", deadline: "Mar 18, 2026", startDateISO: "2026-03-01T00:00:00Z", deadlineISO: "2026-03-18T00:00:00Z", deadlineHasTime: false }
];

/* ── STATE ── */
let users    = DEFAULT_USERS.map(u => ({ ...u }));
let clients  = DEFAULT_CLIENTS.map(c => ({ ...c }));
let projects = DEFAULT_PROJECTS.map(p => ({ ...p }));
let nextId   = 10;
let currentLang   = "en";
let currentTheme  = "light";
let activeNav     = "dashboard";
let userSort      = "name", userFilter    = "all";
let clientSort    = "name", clientFilter  = "all";
let projectSort   = "name", projectFilter = "all";

const navItems = [
  { key: "dashboard", icon: "⌂" },
  { key: "users",     icon: "◎" },
  { key: "clients",   icon: "□" },
  { key: "projects",  icon: "◱" },
  { key: "reports",   icon: "◈" },
  { key: "profile",   icon: "👤" },
  { key: "settings",  icon: "⚙" }
];

/* ── HELPERS ── */
function t(path) {
  const segs = path.split(".");
  let node = translations[currentLang];
  for (const s of segs) { if (node && s in node) node = node[s]; else return path; }
  return node;
}

function initials(name) {
  return (name || "?").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
}

function roleTag(role) {
  const map = { admin: "t-purple", manager: "t-blue", user: "t-gray" };
  return `<span class="tag ${map[role] || "t-gray"}">${t(`roles.${role}`)}</span>`;
}

function statusTag(s) {
  const ok = s === "active";
  return `<span class="tag ${ok ? "t-green" : "t-gray"}"><span class="tag-dot" style="background:${ok ? "#16a34a" : "#9ca3af"}"></span>${t(`statuses.${s}`)}</span>`;
}

function projectStatusTag(s) {
  const m = { progress: { cls: "t-blue", dot: "#2563eb" }, planning: { cls: "t-orange", dot: "#d97706" }, done: { cls: "t-green", dot: "#16a34a" } };
  const x = m[s] || { cls: "t-gray", dot: "#9ca3af" };
  return `<span class="tag ${x.cls}"><span class="tag-dot" style="background:${x.dot}"></span>${t(`projectStatus.${s}`)}</span>`;
}

function showNotify(msgKey) {
  let n = document.getElementById("notify-toast");
  if (!n) { n = document.createElement("div"); n.id = "notify-toast"; document.body.appendChild(n); }
  n.className = "notify-toast";
  n.textContent = t(`notify.${msgKey}`);
  void n.offsetHeight;
  n.classList.add("show");
  clearTimeout(n._tid);
  n._tid = setTimeout(() => n.classList.remove("show"), 2200);
}

/* ── THEME ── */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  // topbar icon
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) btn.querySelector(".theme-icon").textContent = theme === "dark" ? "🌙" : "☀️";
  // settings page buttons
  document.querySelectorAll(".theme-opt").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.themeVal === theme);
  });
}

function toggleTheme() {
  applyTheme(currentTheme === "light" ? "dark" : "light");
}

/* ── PAGE ROUTING ── */
const PAGE_MAP = {
  dashboard: "page-dashboard",
  users:     "page-dashboard",
  clients:   "page-dashboard",
  projects:  "page-dashboard",
  reports:   "page-reports",
  settings:  "page-settings",
  profile:   "page-profile"
};

function navigateTo(key) {
  activeNav = key;
  renderNav();

  // hide all pages
  ["page-dashboard", "page-profile", "page-settings", "page-reports"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });

  // show target page
  const pageId = PAGE_MAP[key] || "page-dashboard";
  const page = document.getElementById(pageId);
  if (page) { page.style.display = ""; page.style.animation = "none"; void page.offsetHeight; page.style.animation = ""; }

  // update breadcrumb
  document.getElementById("breadcrumb-cur").textContent = t(`nav.${key}`);

  // scroll to section on dashboard
  if (["users", "clients", "projects"].includes(key)) {
    const sMap = { users: ".section-users", clients: ".section-clients", projects: ".section-projects" };
    const target = document.querySelector(sMap[key]);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  }
}

/* ── NAV ── */
function renderNav() {
  const navList = document.getElementById("nav-list");
  navList.innerHTML = "";
  const counts = { users: users.length, clients: clients.length, projects: projects.length };
  navItems.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "nav-item" + (item.key === activeNav ? " active" : "");
    const count = counts[item.key];
    btn.innerHTML = `
      <span class="nav-icon">${item.icon}</span>
      ${t(`nav.${item.key}`)}
      ${count != null ? `<span class="nav-count">${count}</span>` : ""}
    `;
    btn.addEventListener("click", () => navigateTo(item.key));
    navList.appendChild(btn);
  });
}

/* ── STATS ── */
function renderStats() {
  const statsRow = document.getElementById("stats-row");
  if (!statsRow) return;
  const pending = projects.filter(p => p.status === "planning").length;
  const items = [
    { num: users.length,    lbl: t("stats.users"),   chip: t("stats.usersChip"),   cls: "t-blue" },
    { num: clients.length,  lbl: t("stats.clients"),  chip: t("stats.clientsChip"), cls: "t-green" },
    { num: projects.length, lbl: t("stats.projects"), chip: t("stats.projectsChip"),cls: "t-orange" },
    { num: pending,         lbl: t("stats.pending"),  chip: t("stats.pendingChip"), cls: "t-red" }
  ];
  statsRow.innerHTML = "";
  items.forEach(s => {
    const cell = document.createElement("div");
    cell.className = "stat-cell";
    cell.innerHTML = `<div class="stat-num">${s.num}</div><div class="stat-lbl">${s.lbl}</div><div><span class="tag stat-chip ${s.cls}">${s.chip}</span></div>`;
    statsRow.appendChild(cell);
  });
}

/* ── DROPDOWN ── */
function openDropdown(anchor, items, onSelect) {
  closeAllDropdowns();
  const dd = document.createElement("div");
  dd.className = "dropdown-menu"; dd.id = "active-dropdown";
  items.forEach(({ label, value }) => {
    const btn = document.createElement("button");
    btn.className = "dropdown-item"; btn.textContent = label;
    btn.addEventListener("click", () => { onSelect(value); closeAllDropdowns(); });
    dd.appendChild(btn);
  });
  document.body.appendChild(dd);
  const r = anchor.getBoundingClientRect();
  dd.style.top  = (r.bottom + window.scrollY + 4) + "px";
  dd.style.left = (r.left + window.scrollX) + "px";
  setTimeout(() => document.addEventListener("click", closeAllDropdowns, { once: true }), 0);
}
function closeAllDropdowns() {
  const dd = document.getElementById("active-dropdown");
  if (dd) dd.remove();
}

/* ── DETAIL PANEL ── */
function openDetailPanel(type, item) {
  closeDetailPanel();
  const panel = document.createElement("div");
  panel.id = "detail-panel"; panel.className = "detail-panel";
  let rows = "";
  if (type === "user") {
    rows = `
      <div class="detail-row"><span class="detail-key">${t("detail.email")}</span><span class="detail-val">${item.email}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.role")}</span><span class="detail-val">${roleTag(item.role)}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.status")}</span><span class="detail-val">${statusTag(item.status)}</span></div>`;
  } else if (type === "client") {
    rows = `
      <div class="detail-row"><span class="detail-key">${t("detail.email")}</span><span class="detail-val">${item.email}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.phone")}</span><span class="detail-val">${item.phone}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.owner")}</span><span class="detail-val">${item.owner}</span></div>`;
  } else {
    rows = `
      <div class="detail-row"><span class="detail-key">${t("detail.client")}</span><span class="detail-val">${item.client}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.status")}</span><span class="detail-val">${projectStatusTag(item.status)}</span></div>
      <div class="detail-row"><span class="detail-key">${t("detail.deadline")}</span><span class="detail-val">${item.deadline}</span></div>`;
  }
  const name = item.name || item.fullname || item.title;
  panel.innerHTML = `
    <div class="detail-header">
      <div class="detail-avatar">${initials(name)}</div>
      <div class="detail-title">${name}</div>
      <button class="detail-close" id="dc-btn">✕</button>
    </div>
    <div class="detail-body">${rows}</div>
    <div class="detail-footer">
      <button class="detail-edit-btn" id="de-btn">✎ Edit</button>
      <button class="detail-del-btn"  id="dd-btn">🗑 Delete</button>
    </div>`;
  document.body.appendChild(panel);
  requestAnimationFrame(() => panel.classList.add("open"));
  document.getElementById("dc-btn").addEventListener("click", closeDetailPanel);
  document.getElementById("de-btn").addEventListener("click", () => {
    closeDetailPanel();
    if (type === "user") openUserModal(item);
    else if (type === "client") openClientModal(item);
    else openProjectModal(item);
  });
  document.getElementById("dd-btn").addEventListener("click", () => {
    if (type === "user")   { users    = users.filter(u => u.id !== item.id);    renderUsers(); }
    else if (type === "client") { clients = clients.filter(c => c.id !== item.id); renderClients(); }
    else { projects = projects.filter(p => p.id !== item.id); renderProjects(""); }
    renderStats(); renderNav(); closeDetailPanel(); showNotify("deleted");
  });
}
function closeDetailPanel() {
  const p = document.getElementById("detail-panel");
  if (p) { p.classList.remove("open"); setTimeout(() => p.remove(), 220); }
}

/* ── MODAL ── */
function openModal(title, bodyHTML, onSave) {
  closeModal();
  const ov = document.createElement("div");
  ov.id = "modal-overlay"; ov.className = "modal-overlay";
  ov.innerHTML = `
    <div class="modal" id="modal-box">
      <div class="modal-header"><span class="modal-title">${title}</span><button class="modal-close" id="mc-btn">✕</button></div>
      <div class="modal-body">${bodyHTML}</div>
      <div class="modal-footer">
        <button class="modal-cancel" id="mcan-btn">${t("modal.cancel")}</button>
        <button class="modal-save"   id="msav-btn">${t("modal.save")}</button>
      </div>
    </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(() => ov.classList.add("open"));
  document.getElementById("mc-btn").addEventListener("click", closeModal);
  document.getElementById("mcan-btn").addEventListener("click", closeModal);
  ov.addEventListener("click", e => { if (e.target === ov) closeModal(); });
  document.getElementById("msav-btn").addEventListener("click", () => {
    if (onSave()) { closeModal(); showNotify("saved"); renderStats(); renderNav(); }
  });
}
function closeModal() {
  const ov = document.getElementById("modal-overlay");
  if (ov) { ov.classList.remove("open"); setTimeout(() => ov.remove(), 200); }
}

function field(id, label, type = "text", value = "") {
  return `<div class="form-field"><label class="form-label" for="${id}">${label}</label><input class="form-input" id="${id}" type="${type}" value="${value}" /></div>`;
}
function selectField(id, label, options, value = "") {
  const opts = options.map(o => `<option value="${o.v}" ${o.v === value ? "selected" : ""}>${o.l}</option>`).join("");
  return `<div class="form-field"><label class="form-label" for="${id}">${label}</label><select class="form-input form-select" id="${id}">${opts}</select></div>`;
}
function val(id) { return (document.getElementById(id)?.value || "").trim(); }

/* ── USER MODAL ── */
function openUserModal(ex = null) {
  const body = `
    ${field("m-name", t("modal.name"), "text", ex?.name || "")}
    ${field("m-email", t("modal.email"), "email", ex?.email || "")}
    ${selectField("m-role", t("modal.role"), [
      { v: "admin", l: t("roles.admin") }, { v: "manager", l: t("roles.manager") }, { v: "user", l: t("roles.user") }
    ], ex?.role || "user")}
    ${selectField("m-status", t("modal.status"), [
      { v: "active", l: t("statuses.active") }, { v: "inactive", l: t("statuses.inactive") }
    ], ex?.status || "active")}
    <div id="form-err" class="form-err"></div>`;
  openModal(t("modal.newUser"), body, () => {
    const name = val("m-name"), email = val("m-email");
    if (!name)  { document.getElementById("form-err").textContent = t("modal.nameReq"); return false; }
    if (!email || !email.includes("@")) { document.getElementById("form-err").textContent = t("modal.emailReq"); return false; }
    if (ex) { const u = users.find(u => u.id === ex.id); Object.assign(u, { name, email, role: val("m-role"), status: val("m-status") }); }
    else users.push({ id: nextId++, name, email, role: val("m-role"), status: val("m-status") });
    renderUsers(); return true;
  });
}

/* ── CLIENT MODAL ── */
function openClientModal(ex = null) {
  const ownerOpts = users.map(u => ({ v: u.name.split(" ")[0], l: u.name }));
  const body = `
    ${field("m-name", t("modal.name"), "text", ex?.fullname || "")}
    ${field("m-email", t("modal.email"), "email", ex?.email || "")}
    ${field("m-phone", t("modal.phone"), "text", ex?.phone || "")}
    ${selectField("m-owner", t("modal.owner"), ownerOpts, ex?.owner || ownerOpts[0]?.v || "")}
    <div id="form-err" class="form-err"></div>`;
  openModal(t("modal.newClient"), body, () => {
    const name = val("m-name"), email = val("m-email");
    if (!name)  { document.getElementById("form-err").textContent = t("modal.nameReq"); return false; }
    if (!email || !email.includes("@")) { document.getElementById("form-err").textContent = t("modal.emailReq"); return false; }
    if (ex) { const c = clients.find(c => c.id === ex.id); Object.assign(c, { fullname: name, email, phone: val("m-phone"), owner: val("m-owner") }); }
    else clients.push({ id: nextId++, fullname: name, email, phone: val("m-phone"), owner: val("m-owner") });
    renderClients(); return true;
  });
}

/* ── PROJECT MODAL ── */
function openProjectModal(ex = null) {
  const clientOpts = clients.map(c => ({ v: c.fullname, l: c.fullname }));

  let existingStartDate = "";
  let existingDate = "";
  let existingTime = "";
  let existingHasTime = false;

  if (ex?.startDateISO) {
    const dt = new Date(ex.startDateISO);
    if (!Number.isNaN(dt)) {
      existingStartDate = dt.toISOString().split('T')[0];
    }
  } else if (ex?.startDate) {
    const dt = new Date(ex.startDate);
    if (!Number.isNaN(dt)) {
      existingStartDate = dt.toISOString().split('T')[0];
    }
  }

  if (ex?.deadlineISO) {
    const dt = new Date(ex.deadlineISO);
    if (!Number.isNaN(dt)) {
      existingDate = dt.toISOString().split('T')[0];
      if (ex.deadlineHasTime) {
        existingTime = dt.toTimeString().slice(0,5);
        existingHasTime = true;
      }
    }
  } else if (ex?.deadline) {
    const dt = new Date(ex.deadline);
    if (!Number.isNaN(dt)) {
      existingDate = dt.toISOString().split('T')[0];
      if (ex.deadlineHasTime) {
        existingTime = dt.toTimeString().slice(0,5);
        existingHasTime = true;
      }
    }
  }

  const body = `
    ${field("m-title", t("modal.projectName"), "text", ex?.title || "")}
    ${selectField("m-client", t("modal.client"), clientOpts.length ? clientOpts : [{ v: "", l: "—" }], ex?.client || "")}
    ${selectField("m-status", t("modal.projectStatus"), [
      { v: "progress", l: t("projectStatus.progress") }, { v: "planning", l: t("projectStatus.planning") }, { v: "done", l: t("projectStatus.done") }
    ], ex?.status || "planning")}
    <div class="form-field">
      <label class="form-label" for="m-start-date">Start Date</label>
      <input class="form-input" id="m-start-date" type="date" value="${existingStartDate}" />
    </div>
    <div class="form-field">
      <label class="form-label" for="m-deadline-date">${t("modal.deadline")}</label>
      <input class="form-input" id="m-deadline-date" type="date" value="${existingDate}" />
    </div>
    <div class="form-field">
      <label class="form-label" for="m-deadline-time">Time (optional, leave empty if not needed)</label>
      <input class="form-input" id="m-deadline-time" type="time" value="${existingHasTime ? existingTime : ""}" />
    </div>
    <div id="form-err" class="form-err"></div>`;

  openModal(t("modal.newProject"), body, () => {
    const title = val("m-title");
    const startDate = val("m-start-date");
    const date = val("m-deadline-date");
    const time = val("m-deadline-time");

    if (!title) { document.getElementById("form-err").textContent = t("modal.nameReq"); return false; }
    if (!startDate) { document.getElementById("form-err").textContent = "Start date is required"; return false; }
    if (!date) { document.getElementById("form-err").textContent = "Deadline date is required"; return false; }

    let isoStr = date;
    if (time) {
      isoStr += `T${time}:00`;
    } else {
      isoStr += `T00:00:00`;
    }

    const dt = new Date(isoStr);
    if (Number.isNaN(dt.getTime())) { document.getElementById("form-err").textContent = "Invalid deadline"; return false; }

    const formattedDate = dt.toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' });
    const formattedTime = time ? ` ${time}` : "";
    const deadlineDisplay = `${formattedDate}${formattedTime}`;
    const hasTime = Boolean(time);

    if (ex) {
      const p = projects.find(p => p.id === ex.id);
      Object.assign(p, {
        title,
        client: val("m-client"),
        status: val("m-status"),
        startDate: new Date(startDate).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }),
        startDateISO: new Date(`${startDate}T00:00:00`).toISOString(),
        deadline: deadlineDisplay,
        deadlineISO: dt.toISOString(),
        deadlineHasTime: hasTime
      });
    } else {
      projects.push({
        id: nextId++,
        title,
        client: val("m-client"),
        status: val("m-status"),
        startDate: new Date(startDate).toLocaleDateString(undefined, { day: 'numeric', month: 'short', year: 'numeric' }),
        startDateISO: new Date(`${startDate}T00:00:00`).toISOString(),
        deadline: deadlineDisplay,
        deadlineISO: dt.toISOString(),
        deadlineHasTime: hasTime
      });
    }

    renderProjects(document.getElementById("project-search")?.value?.toLowerCase() || "");
    return true;
  });
}

/* ── RENDER TABLES ── */
function renderUsers() {
  const tbody = document.getElementById("users-tbody");
  let list = [...users];
  if (userFilter !== "all") list = list.filter(u => u.status === userFilter);
  if (userSort === "name") list.sort((a,b) => a.name.localeCompare(b.name));
  else if (userSort === "nameDesc") list.sort((a,b) => b.name.localeCompare(a.name));
  else if (userSort === "status") list.sort((a,b) => a.status.localeCompare(b.status));
  tbody.innerHTML = !list.length ? `<tr><td colspan="4"><div class="empty-state">${t("empty")}</div></td></tr>` : "";
  list.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="row-avatar">${initials(u.name)}</div>
        <div><div class="cell-name">${u.name}</div><div class="cell-sub">${u.email}</div></div>
      </div></td>
      <td>${roleTag(u.role)}</td>
      <td>${statusTag(u.status)}</td>
      <td style="width:60px"><button class="row-action">${t("rowAction")}</button></td>`;
    tr.querySelector(".row-action").addEventListener("click", e => { e.stopPropagation(); openDetailPanel("user", u); });
    tbody.appendChild(tr);
  });
  const addRow = document.createElement("tr");
  addRow.className = "add-row";
  addRow.innerHTML = `<td colspan="4" style="padding-left:14px">${t("add.user")}</td>`;
  addRow.addEventListener("click", () => openUserModal());
  tbody.appendChild(addRow);
}

function renderClients() {
  const tbody = document.getElementById("clients-tbody");
  let list = [...clients];
  if (clientFilter !== "all") list = list.filter(c => c.owner.toLowerCase() === clientFilter);
  if (clientSort === "name") list.sort((a,b) => a.fullname.localeCompare(b.fullname));
  else if (clientSort === "nameDesc") list.sort((a,b) => b.fullname.localeCompare(a.fullname));
  tbody.innerHTML = !list.length ? `<tr><td colspan="4"><div class="empty-state">${t("empty")}</div></td></tr>` : "";
  list.forEach(c => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><div style="display:flex;align-items:center;gap:8px">
        <div class="row-avatar" style="background:var(--tag-blue-bg);color:var(--tag-blue-fg)">${initials(c.fullname)}</div>
        <div><div class="cell-name">${c.fullname}</div><div class="cell-sub">${c.email}</div></div>
      </div></td>
      <td style="color:var(--text2)">${c.phone}</td>
      <td><div style="display:flex;align-items:center;gap:6px">
        <div class="row-avatar" style="width:18px;height:18px;font-size:8px">${initials(c.owner)}</div>
        <span style="font-size:13px">${c.owner}</span>
      </div></td>
      <td style="width:60px"><button class="row-action">${t("rowAction")}</button></td>`;
    tr.querySelector(".row-action").addEventListener("click", e => { e.stopPropagation(); openDetailPanel("client", c); });
    tbody.appendChild(tr);
  });
  const addRow = document.createElement("tr");
  addRow.className = "add-row";
  addRow.innerHTML = `<td colspan="4" style="padding-left:14px">${t("add.client")}</td>`;
  addRow.addEventListener("click", () => openClientModal());
  tbody.appendChild(addRow);
}

function renderProjects(filter) {
  const tbody = document.getElementById("projects-tbody");
  let list = [...projects];
  if (projectFilter !== "all") list = list.filter(p => p.status === projectFilter);
  if (filter) list = list.filter(p => p.title.toLowerCase().includes(filter) || p.client.toLowerCase().includes(filter));
  if (projectSort === "name") list.sort((a,b) => a.title.localeCompare(b.title));
  else if (projectSort === "nameDesc") list.sort((a,b) => b.title.localeCompare(a.title));
  else if (projectSort === "status") list.sort((a,b) => a.status.localeCompare(b.status));
  else if (projectSort === "deadline") list.sort((a,b) => {
    const da = new Date(a.deadlineISO || a.deadline);
    const db = new Date(b.deadlineISO || b.deadline);
    return da - db;
  });
  tbody.innerHTML = !list.length ? `<tr><td colspan="5"><div class="empty-state">${t("empty")}</div></td></tr>` : "";
  list.forEach(p => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="cell-name">${p.title}</td>
      <td style="color:var(--text2)">${p.client}</td>
      <td>${projectStatusTag(p.status)}</td>
      <td style="color:var(--text3);font-size:13px">${p.startDate || "—"}</td>
      <td style="color:var(--text3);font-size:13px">${p.deadline}</td>
      <td style="width:60px"><button class="row-action">${t("rowAction")}</button></td>`;
    tr.querySelector(".row-action").addEventListener("click", e => { e.stopPropagation(); openDetailPanel("project", p); });
    tbody.appendChild(tr);
  });
  const addRow = document.createElement("tr");
  addRow.className = "add-row";
  addRow.innerHTML = `<td colspan="5" style="padding-left:14px">${t("add.project")}</td>`;
  addRow.addEventListener("click", () => openProjectModal());
  tbody.appendChild(addRow);
}

/* ── SECTION BUTTON WIRING ── */
function setupSectionButtons() {
  const userSec = document.querySelector(".section-users");
  userSec.querySelector("[data-i18n='section.sort']").addEventListener("click", function () {
    openDropdown(this, [
      { label: t("sort.name"), value: "name" }, { label: t("sort.nameDesc"), value: "nameDesc" }, { label: t("sort.status"), value: "status" }
    ], v => { userSort = v; renderUsers(); });
  });
  userSec.querySelector("[data-i18n='section.filter']").addEventListener("click", function () {
    openDropdown(this, [
      { label: t("filter.all"), value: "all" }, { label: t("filter.active"), value: "active" }, { label: t("filter.inactive"), value: "inactive" }
    ], v => { userFilter = v; renderUsers(); });
  });
  userSec.querySelector("[data-i18n='section.new']").addEventListener("click", () => openUserModal());

  const clientSec = document.querySelector(".section-clients");
  clientSec.querySelector("[data-i18n='section.sort']").addEventListener("click", function () {
    openDropdown(this, [
      { label: t("sort.name"), value: "name" }, { label: t("sort.nameDesc"), value: "nameDesc" }
    ], v => { clientSort = v; renderClients(); });
  });
  clientSec.querySelector("[data-i18n='section.filter']").addEventListener("click", function () {
    const opts = [{ label: t("filter.all"), value: "all" }, ...users.map(u => ({ label: u.name, value: u.name.split(" ")[0].toLowerCase() }))];
    openDropdown(this, opts, v => { clientFilter = v; renderClients(); });
  });
  clientSec.querySelector("[data-i18n='section.new']").addEventListener("click", () => openClientModal());

  const projSec = document.querySelector(".section-projects");
  projSec.querySelector("[data-i18n='section.sort']")?.addEventListener("click", function () {
    openDropdown(this, [
      { label: t("sort.name"), value: "name" }, { label: t("sort.nameDesc"), value: "nameDesc" },
      { label: t("sort.status"), value: "status" }, { label: t("sort.deadline"), value: "deadline" }
    ], v => { projectSort = v; renderProjects(document.getElementById("project-search").value.toLowerCase()); });
  });
  projSec.querySelector(".filter-chip")?.addEventListener("click", function () {
    openDropdown(this, [
      { label: t("filter.all"), value: "all" }, { label: t("filter.progress"), value: "progress" },
      { label: t("filter.planning"), value: "planning" }, { label: t("filter.done"), value: "done" }
    ], v => { projectFilter = v; renderProjects(document.getElementById("project-search").value.toLowerCase()); });
  });
  projSec.querySelector("[data-i18n='section.new']").addEventListener("click", () => openProjectModal());
}

/* ── SETTINGS PAGE WIRING ── */
function setupSettingsPage() {
  // theme opts
  document.querySelectorAll(".theme-opt").forEach(btn => {
    btn.addEventListener("click", () => applyTheme(btn.dataset.themeVal));
  });

  // settings language select (mirrors topbar)
  const settingsLang = document.getElementById("settings-lang-select");
  if (settingsLang) {
    settingsLang.value = currentLang;
    settingsLang.addEventListener("change", () => {
      setLanguage(settingsLang.value);
      const topbarLang = document.getElementById("lang-select");
      if (topbarLang) topbarLang.value = currentLang;
    });
  }

  // reset data
  document.getElementById("reset-data-btn")?.addEventListener("click", () => {
    users    = DEFAULT_USERS.map(u => ({ ...u }));
    clients  = DEFAULT_CLIENTS.map(c => ({ ...c }));
    projects = DEFAULT_PROJECTS.map(p => ({ ...p }));
    nextId   = 10;
    renderUsers(); renderClients();
    renderProjects(document.getElementById("project-search")?.value?.toLowerCase() || "");
    renderStats(); renderNav();
    showNotify("reset");
  });

  // save settings
  document.getElementById("settings-save-btn")?.addEventListener("click", () => {
    const emailInput    = document.getElementById("settings-email");
    const passwordInput = document.getElementById("settings-password");
    const wsInput       = document.getElementById("ws-name-input");

    if (emailInput)    document.querySelector(".u-role").textContent = emailInput.value || t("settings.profileEmail");
    if (wsInput)       document.querySelector(".ws-name").textContent = wsInput.value || "ProjectCRM";

    // password is not actually saved in mock app - only show toast
    if (passwordInput && passwordInput.value) {
      showNotify("saved");
      passwordInput.value = "";
    } else {
      showNotify("saved");
    }
  });

  // save profile page
  document.getElementById("profile-save-btn")?.addEventListener("click", () => {
    const firstName = document.getElementById("profile-firstname")?.value.trim() || "";
    const lastName  = document.getElementById("profile-lastname")?.value.trim() || "";
    const username  = document.getElementById("profile-username")?.value.trim() || "";
    const display   = document.getElementById("profile-displayname")?.value.trim() || `${firstName} ${lastName}`.trim();

    const fullName = `${firstName} ${lastName}`.trim();
    const newDisplay = display || fullName || "User";

    // Update sidebar and profile summary
    if (fullName) {
      const sideName = document.querySelector(".u-name");
      if (sideName) sideName.textContent = fullName;
    }
    const displayInput = document.getElementById("profile-displayname");
    if (displayInput) displayInput.value = newDisplay;

    // keep sidebar avatar initials in sync
    const initialsEl = document.getElementById("user-avatar");
    if (initialsEl) {
      const initialsSrc = fullName || newDisplay;
      initialsEl.textContent = initialsSrc.split(" ").map(w => w[0] || "").join("").slice(0,2).toUpperCase();
    }

    // Show saved text directly on profile page for user feedback
    let profileToast = document.getElementById("profile-save-feedback");
    if (!profileToast) {
      profileToast = document.createElement("div");
      profileToast.id = "profile-save-feedback";
      profileToast.style.marginTop = "12px";
      profileToast.style.fontSize = "13px";
      profileToast.style.color = "var(--text2)";
      document.getElementById("page-profile")?.appendChild(profileToast);
    }
    profileToast.textContent = "Profile saved.";

    if (username) {
      document.querySelector(".u-role").textContent = username;
    }

    showNotify("saved");
  });
}

/* ── LANGUAGE ── */
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = t("meta.title");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.getAttribute("data-i18n")));
  document.querySelectorAll("[data-i18n-title]").forEach(el => el.title = t(el.getAttribute("data-i18n-title")));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.getAttribute("data-i18n-placeholder")));
  renderNav(); renderStats(); renderUsers(); renderClients();
  renderProjects(document.getElementById("project-search")?.value?.toLowerCase() || "");
  // sync settings lang select
  const sl = document.getElementById("settings-lang-select");
  if (sl) sl.value = lang;
}

/* ── INIT ── */
window.addEventListener("DOMContentLoaded", () => {
  // open profile from sidebar user row
  document.getElementById("user-profile-btn")?.addEventListener("click", () => navigateTo("profile"));

  // topbar lang
  const langSelect = document.getElementById("lang-select");
  if (langSelect) {
    langSelect.value = currentLang;
    langSelect.addEventListener("change", () => {
      setLanguage(langSelect.value);
      const sl = document.getElementById("settings-lang-select");
      if (sl) sl.value = currentLang;
    });
  }

  // theme toggle (topbar)
  document.getElementById("theme-toggle-btn")?.addEventListener("click", toggleTheme);

  // initial static i18n
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.getAttribute("data-i18n")));
  document.querySelectorAll("[data-i18n-title]").forEach(el => el.title = t(el.getAttribute("data-i18n-title")));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => el.placeholder = t(el.getAttribute("data-i18n-placeholder")));

  // render
  renderNav(); renderStats(); renderUsers(); renderClients(); renderProjects("");
  setupSectionButtons();
  setupSettingsPage();

  // project search
  document.getElementById("project-search")?.addEventListener("input", function () {
    renderProjects(this.value.toLowerCase());
  });

  // share btn
  document.querySelector("[data-i18n-title='topbar.share']")?.addEventListener("click", () => {
    navigator.clipboard?.writeText(window.location.href).catch(() => {});
    showNotify("saved");
  });

  // apply initial theme
  applyTheme("light");
});
