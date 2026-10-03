/* ============================================================
   1. ПЕРЕВОДЫ (RU / EN)
   ============================================================ */
const translations = {
  ru: {
    'nav.terms': 'Термины',
    'nav.roles': 'Роли',
    'nav.rules': 'Правила',
    'nav.legal': 'Правовое',

    'header.discord': 'DISCORD',

    'ticker.1': '◆ ПРАВИЛА UNDERCOVER COMMUNITY',
    'ticker.2': '◆ УВАЖАЙ ДРУГИХ ИГРОКОВ',
    'ticker.3': '◆ БЕЗ ЧИТОВ И БАГОУЗА',
    'ticker.4': '◆ ИГРАЙ ЧЕСТНО',
    'ticker.5': '◆ DISCORD.GG/SUWJGDWFTX',

    'hero.badge': 'ПРАВИЛА UNDERCOVER COMMUNITY',
    'hero.line1': 'ПРАВИЛА',
    'hero.line2': 'И ТЕРМИНЫ',
    'hero.desc': 'Перед началом игры обязательно ознакомься с терминологией проекта и правилами сообщества. Незнание правил не освобождает от ответственности. За нарушения — бан без предупреждения.',
    'hero.discord': 'ЗАЙТИ В DISCORD',
    'hero.readRules': 'ЧИТАТЬ ПРАВИЛА',
    'hero.cubeHint': 'Крути куб мышкой · свайп на мобиле',

    'terms.title1': 'ИГРОВЫЕ',
    'terms.title2': 'ТЕРМИНЫ',
    'terms.sub': 'Сленг, который нужно знать, чтобы понимать других игроков и админов.',

    'term.rp.b': 'РП / RP',
    'term.rp': 'Ролевая игра — отыгрывание роли своего персонажа. В РП ты ведёшь себя так, как вёл бы себя твой герой в реальной жизни.',
    'term.dm.b': 'ДМ / DM',
    'term.dm': 'Deathmatch — убийство игрока без причины и без РП-повода. Строго запрещено.',
    'term.tk.b': 'ТК / TK',
    'term.tk': 'Teamkill — убийство союзника или члена своей фракции без причины.',
    'term.rk.b': 'РК / RK',
    'term.rk': 'Revenge Kill — месть после смерти. Ты вернулся и убил того, кто тебя убил. Запрещено.',
    'term.mg.b': 'МГ / MG',
    'term.mg': 'Meta Gaming — использование информации из реальной жизни (Discord, стрим, чат) в игре, которой персонаж не знает.',
    'term.pg.b': 'ПГ / PG',
    'term.pg': 'Power Gaming — навязывание своей игры другим, действия без шанса на ответ, суперспособности персонажа.',
    'term.fg.b': 'ФГ / FRP',
    'term.fg': 'Fear RP / Fail RP — отсутствие страха за жизнь персонажа. Когда на тебя наставили оружие — ты обязан бояться.',
    'term.nrp.b': 'НРП / NRP',
    'term.nrp': 'NonRP — поведение вне роли: писать в чат «лол», «кек», обсуждать реальную жизнь, оскорблять по OOC.',
    'term.ooc.b': 'OOC / IC',
    'term.ooc': 'OOC — вне роли (реальный ты). IC — в роли (твой персонаж). Не путай.',
    'term.afk.b': 'АФК / AFK',
    'term.afk': 'AFK — отшёл от клавиатуры. Долгое АФК на важных постах = наказание.',
    'term.bh.b': 'БХ / BugUse',
    'term.bh': 'Баг-юз — использование багов игры для получения преимущества. Бан навсегда.',
    'term.sk.b': 'СК / SK',
    'term.sk': 'Spawn Kill — убийство на респавне. Запрещено.',
    'term.gm.b': 'ГМ / GM',
    'term.gm': 'God Mode — режим бессмертия. Игрокам запрещён, только для админов при работе.',
    'term.cheats.b': 'Читы / Cheats',
    'term.cheats': 'Любые сторонние программы, макросы, авто-кликеры. Бан перманентно.',
    'term.scam.b': 'Скам / Scam',
    'term.scam': 'Мошенничество в сделках, кидок на деньги или имущество. Бан без разбора.',
    'term.twink.b': 'Твинк / Twink',
    'term.twink': 'Второй аккаунт для обхода наказания. Бан на все аккаунты.',

    'roles.title1': 'РОЛИ НА',
    'roles.title2': 'ПРОЕКТЕ',
    'roles.sub': 'Кто есть кто и к кому обращаться.',

    'role.owner.title': 'Владелец',
    'role.owner.desc': 'Основатель и хозяин проекта. Принимает финальные решения, имеет высший приоритет. К нему обращаются только по действительно серьёзным вопросам.',
    'role.admin.title': 'Администратор',
    'role.admin.desc': 'Следит за порядком, рассматривает жалобы, выдаёт наказания, решает спорные ситуации между игроками и фракциями.',
    'role.moder.title': 'Модератор',
    'role.moder.desc': 'Следит за чатом и голосом, выдаёт мут/кик, помогает с простыми вопросами, эскалирует сложное админам.',
    'role.helper.title': 'Хелпер',
    'role.helper.desc': 'Помогает новичкам разобраться в механике проекта. Не выдаёт наказания, но может подсказать и направить.',
    'role.dev.title': 'Разработчик',
    'role.dev.desc': 'Пишет код, фиксит баги, добавляет новый контент. По техническим проблемам — к нему.',
    'role.player.title': 'Игрок',
    'role.player.desc': 'Ты. Обязан соблюдать правила проекта, уважать других и отыгрывать роль. Нарушил — получил наказание.',

    'rules.title1': 'ОБЩИЕ',
    'rules.title2': 'ПРАВИЛА',
    'rules.sub': 'Незнание правил не освобождает от ответственности.',

    'rule.1.title': 'Уважение',
    'rule.1.desc': 'Запрещены оскорбления, травля, унижение, переход на личности и токсичное поведение в чате, голосе и Discord.',
    'rule.2.title': 'Без расизма и ненависти',
    'rule.2.desc': 'Любые проявления расизма, ксенофобии, дискриминации по полу, религии, национальности и ориентации — перманентный бан.',
    'rule.3.title': 'Без читов и софта',
    'rule.3.desc': 'Читы, макросы, авто-кликеры, багоюз — бан навсегда без права на разбан.',
    'rule.4.title': 'Без ДМ и ТК',
    'rule.4.desc': 'Убийство игрока или союзника без РП-причины запрещено. Наказание: кик, варн, бан.',
    'rule.5.title': 'Без РК',
    'rule.5.desc': 'После смерти нельзя возвращаться и мстить убийце. Сначала — отыгрыш, потом — действия.',
    'rule.6.title': 'Без МГ и ПГ',
    'rule.6.desc': 'Использование вне-игровой информации и навязывание игры другим запрещено. Играй честно.',
    'rule.7.title': 'Fear RP',
    'rule.7.desc': 'Твой персонаж обязан бояться за свою жизнь. Наставили оружие — подчиняйся, а не беги в атаку.',
    'rule.8.title': 'Без рекламы',
    'rule.8.desc': 'Реклама сторонних проектов, серверов, каналов и магазинов без согласования с администрацией запрещена.',
    'rule.9.title': 'Без обмана',
    'rule.9.desc': 'Скам, кидок в сделках, обман новичков и мошенничество — блокировка аккаунта и Discord.',
    'rule.10.title': 'Соблюдай закон',
    'rule.10.desc': 'Никаких призывов к насилию, терроризму, экстремизму и прочего, что запрещено законом.',
    'rule.11.title': 'Слушай администрацию',
    'rule.11.desc': 'Указания админов и модераторов обязательны к исполнению. Спорные ситуации решаются через жалобу в Discord.',
    'rule.12.title': 'Без абуза правил',
    'rule.12.desc': 'Попытка обойти наказание через твинки, смену ника или другие уловки — бан навсегда на все аккаунты.',
    'rule.13.title': 'Без политики и религии',
    'rule.13.desc': 'Политические и религиозные споры в чате и голосе запрещены. Проект — для игры, а не для митингов.',
    'rule.14.title': 'Без NSFW-контента',
    'rule.14.desc': 'Порнография, шок-контент, жестокость в открытом виде — бан без предупреждения.',
    'rule.15.title': 'Уважай авторские права',
    'rule.15.desc': 'Запрещено выдавать себя за представителей правообладателей, использовать чужие логотипы и бренды без разрешения.',
    'rule.16.title': 'Возраст 16+',
    'rule.16.desc': 'Проект ориентирован на игроков 16 лет и старше. Младшим — только с согласия родителей.',

    'legal.title1': 'ПРАВОВАЯ',
    'legal.title2': 'ИНФОРМАЦИЯ',
    'legal.sub': 'Мы уважаем чужую интеллектуальную собственность и соблюдаем законодательство.',

    'legal.1.title': 'Независимая фанатская инициатива',
    'legal.1.desc': 'Undercover Community — независимый игровой community-проект, созданный фанатами для фанатов. Мы не связаны, не аффилированы и не поддерживаемся компаниями, которые создавали, продюсировали, распространяли или владеют правами на какие-либо сторонние произведения, их названия, логотипы, персонажей и иные элементы. Все упоминания носят исключительно информационный и фанатский характер.',
    'legal.2.title': 'Товарные знаки',
    'legal.2.desc': 'Все товарные знаки, логотипы, названия брендов и иные объекты интеллектуальной собственности, упомянутые на сайте, принадлежат их законным правообладателям. Мы не претендуем на эти права и используем упоминания только в информационных и описательных целях.',
    'legal.3.title': 'Соблюдение законов',
    'legal.3.desc': 'Проект обязуется соблюдать действующее законодательство Российской Федерации и стран присутствия участников. Мы запрещаем на своей площадке призывы к насилию, терроризму, экстремизму, разжигание межнациональной и межрелигиозной розни, распространение запрещённой информации и любой контент, нарушающий закон.',
    'legal.4.title': 'Возрастное ограничение',
    'legal.4.desc': 'Контент проекта ориентирован на аудиторию 16+. Если вам меньше 16 лет — использование проекта возможно только с разрешения родителей или законных представителей. Мы не собираем данные несовершеннолетних осознанно.',
    'legal.5.title': 'Обработка данных',
    'legal.5.desc': 'Мы собираем минимально необходимые данные (игровой ник, Discord ID, адрес электронной почты при регистрации) для работы проекта. Данные не передаются третьим лицам, кроме случаев, предусмотренных законом. По запросу — удаляем аккаунт и связанные данные.',
    'legal.6.title': 'Авторские права на контент',
    'legal.6.desc': 'Все материалы, размещённые на сайте (тексты, оформление, код), созданы командой проекта. Если вы считаете, что какой-то материал нарушает ваши права — свяжитесь с нами в Discord, мы оперативно отреагируем и удалим спорный контент.',
    'legal.7.title': 'Отказ от ответственности',
    'legal.7.desc': 'Проект предоставляется «как есть». Мы не несём ответственности за действия игроков, их высказывания и поступки вне игровой площадки. Администрация оставляет за собой право изменять правила и функционал без предварительного уведомления.',
    'legal.8.title': 'Контакты правообладателей',
    'legal.8.desc': 'Если вы — правообладатель и считаете, что мы нарушили ваши права, напишите нам в Discord. Мы готовы к диалогу, оперативно рассмотрим обращение и при необходимости внесём изменения или удалим контент.',

    'cta.title1': 'ЗАХОДИ В НАШ',
    'cta.title2': 'DISCORD',
    'cta.desc': 'Жалобы, заявки в администрацию, общение, ивенты и анонсы — всё там.',
    'cta.members': 'участников',
    'cta.online': 'онлайн',

    'footer.title': 'ДИСКЛЕЙМЕР',
    'footer.desc': 'Undercover Community — независимая фанатская инициатива. Проект не связан, не аффилирован и не поддерживается компаниями, создававшими, продюсировавшими или владеющими правами на какие-либо сторонние произведения, их названия, логотипы и персонажей, а также их партнёрами и правообладателями. Все товарные знаки, логотипы и названия принадлежат их законным владельцам и используются исключительно в информационных и описательных целях. Проект соблюдает законодательство РФ и правила Discord.',
    'footer.copy': '© 2025 Undercover Community',
    'footer.made': 'Сделано с ♥ для игроков'
  },

  en: {
    'nav.terms': 'Terms',
    'nav.roles': 'Roles',
    'nav.rules': 'Rules',
    'nav.legal': 'Legal',

    'header.discord': 'DISCORD',

    'ticker.1': '◆ UNDERCOVER COMMUNITY RULES',
    'ticker.2': '◆ RESPECT OTHER PLAYERS',
    'ticker.3': '◆ NO CHEATS OR BUG USE',
    'ticker.4': '◆ PLAY FAIR',
    'ticker.5': '◆ DISCORD.GG/SUWJGDWFTX',

    'hero.badge': 'UNDERCOVER COMMUNITY RULES',
    'hero.line1': 'RULES',
    'hero.line2': 'AND TERMS',
    'hero.desc': 'Before you start playing, make sure you read the project terminology and community rules. Ignorance of the rules does not exempt you from responsibility. Violations result in a ban without warning.',
    'hero.discord': 'JOIN DISCORD',
    'hero.readRules': 'READ THE RULES',
    'hero.cubeHint': 'Drag the cube with your mouse · swipe on mobile',

    'terms.title1': 'GAME',
    'terms.title2': 'TERMS',
    'terms.sub': 'Slang you need to know to understand other players and admins.',

    'term.rp.b': 'RP',
    'term.rp': 'Roleplay — acting as your character. In RP you behave the way your hero would behave in real life.',
    'term.dm.b': 'DM',
    'term.dm': 'Deathmatch — killing a player without reason or RP motive. Strictly forbidden.',
    'term.tk.b': 'TK',
    'term.tk': 'Teamkill — killing an ally or a member of your own faction without reason.',
    'term.rk.b': 'RK',
    'term.rk': 'Revenge Kill — revenge after death. You came back and killed the one who killed you. Forbidden.',
    'term.mg.b': 'MG',
    'term.mg': 'Meta Gaming — using real-life information (Discord, stream, chat) in game that your character does not know.',
    'term.pg.b': 'PG',
    'term.pg': 'Power Gaming — forcing your game on others, actions with no chance to respond, superpowers of the character.',
    'term.fg.b': 'FRP',
    'term.fg': 'Fear RP / Fail RP — lack of fear for the character\'s life. When a weapon is pointed at you, you must be afraid.',
    'term.nrp.b': 'NRP',
    'term.nrp': 'NonRP — behaviour out of character: writing "lol" in chat, discussing real life, insulting OOC.',
    'term.ooc.b': 'OOC / IC',
    'term.ooc': 'OOC — out of character (the real you). IC — in character (your hero). Don\'t mix them up.',
    'term.afk.b': 'AFK',
    'term.afk': 'AFK — away from keyboard. Long AFK at important posts = punishment.',
    'term.bh.b': 'BugUse',
    'term.bh': 'Bug use — exploiting game bugs for advantage. Permanent ban.',
    'term.sk.b': 'SK',
    'term.sk': 'Spawn Kill — killing at respawn. Forbidden.',
    'term.gm.b': 'GM',
    'term.gm': 'God Mode — immortality mode. Forbidden to players, only for admins on duty.',
    'term.cheats.b': 'Cheats',
    'term.cheats': 'Any third-party software, macros, auto-clickers. Permanent ban.',
    'term.scam.b': 'Scam',
    'term.scam': 'Fraud in deals, ripping off money or property. Ban without review.',
    'term.twink.b': 'Twink',
    'term.twink': 'Second account to bypass punishment. Ban on all accounts.',

    'roles.title1': 'ROLES ON',
    'roles.title2': 'THE PROJECT',
    'roles.sub': 'Who is who and who to contact.',

    'role.owner.title': 'Owner',
    'role.owner.desc': 'Founder and owner of the project. Makes final decisions, has the highest priority. Contact only for truly serious matters.',
    'role.admin.title': 'Administrator',
    'role.admin.desc': 'Keeps order, reviews reports, issues punishments, resolves disputes between players and factions.',
    'role.moder.title': 'Moderator',
    'role.moder.desc': 'Monitors chat and voice, issues mute/kick, helps with simple questions, escalates complex ones to admins.',
    'role.helper.title': 'Helper',
    'role.helper.desc': 'Helps newcomers understand the project mechanics. Cannot punish, but can advise and guide.',
    'role.dev.title': 'Developer',
    'role.dev.desc': 'Writes code, fixes bugs, adds new content. For technical issues — contact them.',
    'role.player.title': 'Player',
    'role.player.desc': 'You. Must follow the project rules, respect others and stay in character. Break the rules — get punished.',

    'rules.title1': 'GENERAL',
    'rules.title2': 'RULES',
    'rules.sub': 'Ignorance of the rules does not exempt you from responsibility.',

    'rule.1.title': 'Respect',
    'rule.1.desc': 'Insults, harassment, humiliation, personal attacks and toxic behaviour in chat, voice and Discord are forbidden.',
    'rule.2.title': 'No racism or hate',
    'rule.2.desc': 'Any racism, xenophobia, discrimination by gender, religion, nationality or orientation — permanent ban.',
    'rule.3.title': 'No cheats or software',
    'rule.3.desc': 'Cheats, macros, auto-clickers, bug use — permanent ban with no unban.',
    'rule.4.title': 'No DM or TK',
    'rule.4.desc': 'Killing a player or ally without an RP reason is forbidden. Punishment: kick, warn, ban.',
    'rule.5.title': 'No RK',
    'rule.5.desc': 'After death you cannot return and take revenge. First roleplay, then action.',
    'rule.6.title': 'No MG or PG',
    'rule.6.desc': 'Using out-of-game information and forcing your game on others is forbidden. Play fair.',
    'rule.7.title': 'Fear RP',
    'rule.7.desc': 'Your character must fear for their life. Weapon pointed at you — comply, don\'t charge.',
    'rule.8.title': 'No ads',
    'rule.8.desc': 'Advertising third-party projects, servers, channels and shops without admin approval is forbidden.',
    'rule.9.title': 'No fraud',
    'rule.9.desc': 'Scam, ripping off in deals, deceiving newcomers and fraud — account and Discord block.',
    'rule.10.title': 'Follow the law',
    'rule.10.desc': 'No calls for violence, terrorism, extremism or anything else prohibited by law.',
    'rule.11.title': 'Obey admins',
    'rule.11.desc': 'Orders from admins and moderators must be followed. Disputes are resolved via Discord report.',
    'rule.12.title': 'No rule abuse',
    'rule.12.desc': 'Trying to bypass punishment via twinks, nick changes or other tricks — permanent ban on all accounts.',
    'rule.13.title': 'No politics or religion',
    'rule.13.desc': 'Political and religious disputes in chat and voice are forbidden. The project is for gaming, not rallies.',
    'rule.14.title': 'No NSFW content',
    'rule.14.desc': 'Pornography, shock content, explicit violence — ban without warning.',
    'rule.15.title': 'Respect copyright',
    'rule.15.desc': 'Impersonating rights holders, using others\' logos and brands without permission is forbidden.',
    'rule.16.title': 'Age 16+',
    'rule.16.desc': 'The project targets players aged 16 and over. Younger — only with parental consent.',

    'legal.title1': 'LEGAL',
    'legal.title2': 'INFORMATION',
    'legal.sub': 'We respect intellectual property and comply with the law.',

    'legal.1.title': 'Independent fan initiative',
    'legal.1.desc': 'Undercover Community is an independent gaming community project created by fans for fans. We are not affiliated with, endorsed by, or supported by the companies that created, produced, distributed or own the rights to any third-party works, their titles, logos, characters or other elements. All references are purely informational and fan-based.',
    'legal.2.title': 'Trademarks',
    'legal.2.desc': 'All trademarks, logos, brand names and other intellectual property mentioned on the site belong to their rightful owners. We do not claim these rights and use references only for informational and descriptive purposes.',
    'legal.3.title': 'Compliance with the law',
    'legal.3.desc': 'The project undertakes to comply with the current legislation of the Russian Federation and the countries of its participants. We prohibit on our platform calls for violence, terrorism, extremism, incitement of ethnic and religious hatred, distribution of prohibited information and any content that violates the law.',
    'legal.4.title': 'Age restriction',
    'legal.4.desc': 'The project content targets an audience of 16+. If you are under 16, use of the project is possible only with the permission of parents or legal guardians. We do not knowingly collect data from minors.',
    'legal.5.title': 'Data processing',
    'legal.5.desc': 'We collect the minimum necessary data (in-game nick, Discord ID, email during registration) for the project to function. Data is not transferred to third parties except as required by law. On request — we delete the account and related data.',
    'legal.6.title': 'Copyright on content',
    'legal.6.desc': 'All materials posted on the site (texts, design, code) are created by the project team. If you believe that some material violates your rights — contact us on Discord, we will promptly respond and remove the disputed content.',
    'legal.7.title': 'Disclaimer',
    'legal.7.desc': 'The project is provided "as is". We are not responsible for the actions of players, their statements and deeds outside the gaming platform. The administration reserves the right to change rules and functionality without prior notice.',
    'legal.8.title': 'Rights holders contact',
    'legal.8.desc': 'If you are a rights holder and believe we have violated your rights, write to us on Discord. We are open to dialogue, will promptly review the request and, if necessary, make changes or remove content.',

    'cta.title1': 'JOIN OUR',
    'cta.title2': 'DISCORD',
    'cta.desc': 'Reports, admin applications, chat, events and announcements — all there.',
    'cta.members': 'members',
    'cta.online': 'online',

    'footer.title': 'DISCLAIMER',
    'footer.desc': 'Undercover Community is an independent fan initiative. The project is not connected, affiliated or supported by the companies that created, produced or own the rights to any third-party works, their titles, logos and characters, as well as their partners and rights holders. All trademarks, logos and names belong to their rightful owners and are used solely for informational and descriptive purposes. The project complies with the legislation of the Russian Federation and Discord rules.',
    'footer.copy': '© 2025 Undercover Community',
    'footer.made': 'Made with ♥ for players'
  }
};

/* ============================================================
   2. СМЕНА ЯЗЫКА
   ============================================================ */
const langButtons = document.querySelectorAll('.lang-btn');
const htmlEl = document.documentElement;

function setLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  htmlEl.setAttribute('lang', lang);
  langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('site-lang'); } catch (e) {}
  const browser = (navigator.language || 'ru').slice(0, 2).toLowerCase();
  const lang = saved || (browser === 'ru' ? 'ru' : 'en');
  setLanguage(lang);
})();

/* ============================================================
   3. ПЛАВНЫЙ СКРОЛЛ
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================================
   4. 3D-КУБ: ВРАЩЕНИЕ
   ============================================================ */
const cube = document.getElementById('cube');
const stage = document.querySelector('.cube-stage');

let rotX = -20, rotY = -30;
let dragging = false, lastX = 0, lastY = 0, autoSpin = true;

function applyRotation() {
  cube.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
}
function autoRotate() {
  if (autoSpin && !dragging) {
    rotY += 0.25;
    applyRotation();
  }
  requestAnimationFrame(autoRotate);
}
autoRotate();

stage.addEventListener('mousedown', (e) => {
  dragging = true; autoSpin = false;
  lastX = e.clientX; lastY = e.clientY;
});
window.addEventListener('mouseup', () => {
  dragging = false;
  setTimeout(() => { if (!dragging) autoSpin = true; }, 3000);
});
window.addEventListener('mousemove', (e) => {
  if (!dragging) return;
  rotY += (e.clientX - lastX) * 0.5;
  rotX -= (e.clientY - lastY) * 0.5;
  rotX = Math.max(-80, Math.min(80, rotX));
  lastX = e.clientX; lastY = e.clientY;
  applyRotation();
});

stage.addEventListener('touchstart', (e) => {
  dragging = true; autoSpin = false;
  const t = e.touches[0];
  lastX = t.clientX; lastY = t.clientY;
}, { passive: true });
window.addEventListener('touchend', () => {
  dragging = false;
  setTimeout(() => { if (!dragging) autoSpin = true; }, 3000);
});
stage.addEventListener('touchmove', (e) => {
  if (!dragging) return;
  const t = e.touches[0];
  rotY += (t.clientX - lastX) * 0.5;
  rotX -= (t.clientY - lastY) * 0.5;
  rotX = Math.max(-80, Math.min(80, rotX));
  lastX = t.clientX; lastY = t.clientY;
  applyRotation();
}, { passive: true });

/* ============================================================
   5. "ЖИВОЙ" СЧЁТЧИК УЧАСТНИКОВ DISCORD
   ============================================================ */
const discordCount = document.getElementById('discordCount');
const discordCount2 = document.getElementById('discordCount2');
let members = 1248;

function formatNum(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

setInterval(() => {
  const delta = Math.floor(Math.random() * 7) - 2;
  members = Math.max(1100, members + delta);
  const formatted = formatNum(members);
  if (discordCount) discordCount.textContent = formatted;
  if (discordCount2) discordCount2.textContent = formatted;
}, 2800);

/* ============================================================
   6. ПОЯВЛЕНИЕ КАРТОЧЕК ПРИ СКРОЛЛЕ
   ============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.term, .role, .rule, .legal-card').forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(24px)';
  card.style.transition = `opacity .6s ease ${(i % 12) * 0.05}s, transform .6s ease ${(i % 12) * 0.05}s`;
  observer.observe(card);
});