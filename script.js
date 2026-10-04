/* ============================================================
   1. ПЕРЕВОДЫ RU / EN
   ============================================================ */
const translations = {
  ru: {
    'nav.terms': 'Термины', 'nav.roles': 'Роли', 'nav.rules': 'Правила', 'nav.legal': 'Правовое',
    'header.discord': 'Discord',
    'bc.home': 'Главная', 'bc.rules': 'Правила',
    'share.btn': 'Поделиться',
    'page.title': 'Правила сообщества (ДИСКОРД)',
    'page.lead': 'Чтобы сохранить дружелюбную и активную атмосферу сообщества, каждый участник обязан соблюдать данные правила. Незнание правил не освобождает от ответственности.',
    'meta.date': 'обновлено 4 октября 2025',
    'meta.read': '5 мин чтения',

    'search.ph': 'Поиск по правилам и терминам...',
    'toolbar.expand': 'Развернуть всё',
    'toolbar.collapse': 'Свернуть всё',

    'random.label': 'Случайное правило',

    'readcheck.title': 'Отметь, что прочитал',
    'readcheck.desc': 'Это не обязательно, но помогает нам понимать, что правила читают.',

    'terms.title': 'Игровые термины', 'terms.badge': '16 терминов',
    'terms.lead': 'Сленг, который надо знать, чтобы понимать других игроков и админов. Если ты новичок - прочитай внимательно, тут ничего сложного.',

    'term.rp.b': 'РП', 'term.rp': 'Ролевая игра, то есть отыгрывание роли своего персонажа. В РП ты ведёшь себя так, как вёл бы себя твой герой в реальной жизни.',
    'term.dm.b': 'ДМ', 'term.dm': 'Deathmatch. Убийство игрока без причины и без РП-повода. Строго запрещено.',
    'term.tk.b': 'ТК', 'term.tk': 'Teamkill. Убийство союзника или члена своей фракции без причины.',
    'term.rk.b': 'РК', 'term.rk': 'Revenge Kill. Месть после смерти. Ты вернулся и убил того, кто тебя убил. Запрещено.',
    'term.mg.b': 'МГ', 'term.mg': 'Meta Gaming. Использование информации из реальной жизни (Discord, стрим, чат) в игре, которой персонаж не знает.',
    'term.pg.b': 'ПГ', 'term.pg': 'Power Gaming. Навязывание своей игры другим, действия без шанса на ответ, суперспособности персонажа.',
    'term.fg.b': 'ФГ', 'term.fg': 'Fear RP / Fail RP. Отсутствие страха за жизнь персонажа. Когда на тебя наставили оружие - ты обязан бояться.',
    'term.nrp.b': 'НРП', 'term.nrp': 'NonRP. Поведение вне роли: писать в чат "лол", "кек", обсуждать реальную жизнь, оскорблять по OOC.',
    'term.ooc.b': 'OOC / IC', 'term.ooc': 'OOC - вне роли (реальный ты). IC - в роли (твой персонаж). Не путай.',
    'term.afk.b': 'АФК', 'term.afk': 'AFK. Отшёл от клавиатуры. Долгое АФК на важных постах = наказание.',
    'term.bh.b': 'БХ', 'term.bh': 'Баг-юз. Использование багов игры для получения преимущества. Бан навсегда.',
    'term.sk.b': 'СК', 'term.sk': 'Spawn Kill. Убийство на респавне. Запрещено.',
    'term.gm.b': 'ГМ', 'term.gm': 'God Mode. Режим бессмертия. Игрокам запрещён, только для админов при работе.',
    'term.cheats.b': 'Читы', 'term.cheats': 'Любые сторонние программы, макросы, авто-кликеры. Бан перманентно.',
    'term.scam.b': 'Скам', 'term.scam': 'Мошенничество в сделках, кидок на деньги или имущество. Бан без разбора.',
    'term.twink.b': 'Твинк', 'term.twink': 'Второй аккаунт для обхода наказания. Бан на все аккаунты.',

    'roles.title': 'Роли на проекте', 'roles.badge': '6 ролей',
    'roles.lead': 'Кто есть кто. Если что-то случилось - пиши не всем подряд, а по адресу.',

    'role.owner.title': 'Владелец', 'role.owner.desc': 'Основатель и хозяин проекта. Принимает финальные решения, имеет высший приоритет. К нему обращаются только по действительно серьёзным вопросам.',
    'role.admin.title': 'Администратор', 'role.admin.desc': 'Следит за порядком, рассматривает жалобы, выдаёт наказания, решает спорные ситуации между игроками и фракциями.',
    'role.moder.title': 'Модератор', 'role.moder.desc': 'Следит за чатом и голосом, выдаёт мут или кик, помогает с простыми вопросами, эскалирует сложное админам.',
    'role.helper.title': 'Хелпер', 'role.helper.desc': 'Помогает новичкам разобраться в механике проекта. Не выдаёт наказания, но может подсказать и направить.',
    'role.dev.title': 'Разработчик', 'role.dev.desc': 'Пишет код, фиксит баги, добавляет новый контент. По техническим проблемам - к нему.',
    'role.player.title': 'Игрок', 'role.player.desc': 'Ты. Обязан соблюдать правила проекта, уважать других и отыгрывать роль. Нарушил - получил наказание.',

    'rules.title': 'Общие правила', 'rules.badge': '16 правил',
    'rules.lead': 'Незнание правил не освобождает от ответственности. Читай внимательно, тут всё по делу. Тыкай на любое правило, чтобы раскрыть подробности.',

    'rule.1.title': 'Уважительное общение', 'rule.1.desc': 'Запрещены оскорбления, травля, унижение, переход на личности и токсичное поведение в чате, голосе и Discord.', 'rule.1.punish': 'Наказание: мут от 12 часов до 7 дней. При систематических нарушениях - бан до 30 дней.',
    'rule.2.title': 'Без расизма и ненависти', 'rule.2.desc': 'Любые проявления расизма, ксенофобии, дискриминации по полу, религии, национальности и ориентации - перманентный бан.', 'rule.2.punish': 'Наказание: перманентный бан без права на разбан.',
    'rule.3.title': 'Без читов и софта', 'rule.3.desc': 'Читы, макросы, авто-кликеры, багоюз - бан навсегда без права на разбан.', 'rule.3.punish': 'Наказание: перманентный бан.',
    'rule.4.title': 'Без ДМ и ТК', 'rule.4.desc': 'Убийство игрока или союзника без РП-причины запрещено.', 'rule.4.punish': 'Наказание: кик, варн, бан.',
    'rule.5.title': 'Без РК', 'rule.5.desc': 'После смерти нельзя возвращаться и мстить убийце. Сначала отыгрыш, потом действия.', 'rule.5.punish': 'Наказание: варн, бан до 7 дней.',
    'rule.6.title': 'Без МГ и ПГ', 'rule.6.desc': 'Использование вне-игровой информации и навязывание игры другим запрещено. Играй честно.', 'rule.6.punish': 'Наказание: мут, варн, бан до 14 дней.',
    'rule.7.title': 'Fear RP', 'rule.7.desc': 'Твой персонаж обязан бояться за свою жизнь. Наставили оружие - подчиняйся, а не беги в атаку.', 'rule.7.punish': 'Наказание: варн, бан до 3 дней.',
    'rule.8.title': 'Без рекламы', 'rule.8.desc': 'Реклама сторонних проектов, серверов, каналов и магазинов без согласования с администрацией запрещена.', 'rule.8.punish': 'Наказание: мут до 7 дней, бан до 30 дней.',
    'rule.9.title': 'Без обмана', 'rule.9.desc': 'Скам, кидок в сделках, обман новичков и мошенничество - блокировка аккаунта и Discord.', 'rule.9.punish': 'Наказание: бан аккаунта и Discord.',
    'rule.10.title': 'Соблюдай закон', 'rule.10.desc': 'Никаких призывов к насилию, терроризму, экстремизму и прочего, что запрещено законом.', 'rule.10.punish': 'Наказание: перманентный бан и жалоба в Discord.',
    'rule.11.title': 'Слушай администрацию', 'rule.11.desc': 'Указания админов и модераторов обязательны к исполнению. Спорные ситуации решаются через жалобу в Discord.', 'rule.11.punish': 'Наказание: мут, кик, бан до 14 дней.',
    'rule.12.title': 'Без абуза правил', 'rule.12.desc': 'Попытка обойти наказание через твинки, смену ника или другие уловки - бан навсегда на все аккаунты.', 'rule.12.punish': 'Наказание: перманентный бан на все аккаунты.',
    'rule.13.title': 'Без политики и религии', 'rule.13.desc': 'Политические и религиозные споры в чате и голосе запрещены. Проект для игры, а не для митингов.', 'rule.13.punish': 'Наказание: мут, бан до 7 дней.',
    'rule.14.title': 'Без NSFW-контента', 'rule.14.desc': 'Порнография, шок-контент, жестокость в открытом виде - бан без предупреждения.', 'rule.14.punish': 'Наказание: бан без предупреждения.',
    'rule.15.title': 'Уважай авторские права', 'rule.15.desc': 'Запрещено выдавать себя за представителей правообладателей, использовать чужие логотипы и бренды без разрешения.', 'rule.15.punish': 'Наказание: бан до 30 дней.',
    'rule.16.title': 'Возраст 16+', 'rule.16.desc': 'Проект ориентирован на игроков 16 лет и старше. Младшим - только с согласия родителей.', 'rule.16.punish': 'Наказание: кик до подтверждения возраста.',

    'empty.terms': 'По запросу ничего не найдено.',
    'empty.rules': 'По запросу ничего не найдено.',

    'callout.text': 'Правила могут не применяться дословно, работаем по здравому смыслу. Например, ты формально ничего не нарушил, но по ощущениям сделал что-то плохое - мы можем наказать.',
    'callout.text2': 'И да, главная администрация проекта может не ссылаться на правила. Это нормально.',

    'ptable.title': 'Шпаргалка: что за что',
    'ptable.col1': 'Нарушение', 'ptable.col2': 'Наказание',
    'ptable.1a': 'Оскорбления', 'ptable.1b': 'мут 12ч - 7д',
    'ptable.2a': 'Расизм', 'ptable.2b': 'перманентный бан',
    'ptable.3a': 'Читы', 'ptable.3b': 'перманентный бан',
    'ptable.4a': 'ДМ / ТК', 'ptable.4b': 'кик, варн, бан',
    'ptable.5a': 'РК', 'ptable.5b': 'варн, бан до 7д',
    'ptable.6a': 'Реклама', 'ptable.6b': 'мут до 7д',
    'ptable.7a': 'Скам', 'ptable.7b': 'бан аккаунта',
    'ptable.8a': 'NSFW', 'ptable.8b': 'бан без предупреждения',

    'legal.title': 'Правовая информация', 'legal.badge': '8 пунктов',
    'legal.lead': 'Мы уважаем чужую интеллектуальную собственность и соблюдаем законодательство.',
    'legal.1.title': 'Независимая фанатская инициатива',
    'legal.1.desc': 'Undercover Community - независимый игровой community-проект, созданный фанатами для фанатов. Мы не связаны, не аффилированы и не поддерживаемся компаниями, которые создавали, продюсировали, распространяли или владеют правами на какие-либо сторонние произведения, их названия, логотипы, персонажей и иные элементы. Все упоминания носят исключительно информационный и фанатский характер.',
    'legal.2.title': 'Товарные знаки',
    'legal.2.desc': 'Все товарные знаки, логотипы, названия брендов и иные объекты интеллектуальной собственности, упомянутые на сайте, принадлежат их законным правообладателям. Мы не претендуем на эти права и используем упоминания только в информационных и описательных целях.',
    'legal.3.title': 'Соблюдение законов',
    'legal.3.desc': 'Проект обязуется соблюдать действующее законодательство Российской Федерации и стран присутствия участников. Мы запрещаем на своей площадке призывы к насилию, терроризму, экстремизму, разжигание межнациональной и межрелигиозной розни, распространение запрещённой информации и любой контент, нарушающий закон.',
    'legal.4.title': 'Возрастное ограничение',
    'legal.4.desc': 'Контент проекта ориентирован на аудиторию 16+. Если вам меньше 16 лет, использование проекта возможно только с разрешения родителей или законных представителей. Мы не собираем данные несовершеннолетних осознанно.',
    'legal.5.title': 'Обработка данных',
    'legal.5.desc': 'Мы собираем минимально необходимые данные (игровой ник, Discord ID, адрес электронной почты при регистрации) для работы проекта. Данные не передаются третьим лицам, кроме случаев, предусмотренных законом. По запросу удаляем аккаунт и связанные данные.',
    'legal.6.title': 'Авторские права на контент',
    'legal.6.desc': 'Все материалы, размещённые на сайте (тексты, оформление, код), созданы командой проекта. Если вы считаете, что какой-то материал нарушает ваши права, свяжитесь с нами в Discord, мы оперативно отреагируем и удалим спорный контент.',
    'legal.7.title': 'Отказ от ответственности',
    'legal.7.desc': 'Проект предоставляется "как есть". Мы не несём ответственности за действия игроков, их высказывания и поступки вне игровой площадки. Администрация оставляет за собой право изменять правила и функционал без предварительного уведомления.',
    'legal.8.title': 'Контакты правообладателей',
    'legal.8.desc': 'Если вы правообладатель и считаете, что мы нарушили ваши права, напишите нам в Discord. Мы готовы к диалогу, оперативно рассмотрим обращение и при необходимости внесём изменения или удалим контент.',

    'contact.title': 'Связь и жалобы',
    'contact.lead': 'Жалобы, заявки в администрацию, общение, ивенты и анонсы. Всё тут.',
    'contact.desc': 'Небольшой уютный сервер нашего проекта. Общение, ивенты, анонсы, жалобы.',
    'contact.members': 'участников', 'contact.online': 'онлайн',
    'contact.btn': 'Перейти', 'contact.link1': 'Discord:',

    'footer.title': 'Дисклеймер',
    'footer.desc': 'Undercover Community - независимая фанатская инициатива. Проект не связан, не аффилирован и не поддерживается компаниями, создававшими, продюсировавшими или владеющими правами на какие-либо сторонние произведения, их названия, логотипы и персонажей, а также их партнёрами и правообладателями. Все товарные знаки, логотипы и названия принадлежат их законным владельцам и используются исключительно в информационных и описательных целях. Проект соблюдает законодательство РФ и правила Discord.',
    'footer.copy': '© 2025 Undercover Community', 'footer.made': 'Сделано для игроков',

    'sidebar.progress': 'Прочитано',
    'sidebar.title': 'Содержание',
    'sidebar.terms': '1. Игровые термины',
    'sidebar.roles': '2. Роли на проекте',
    'sidebar.rules': '3. Общие правила',
    'sidebar.rule1': '1.1 Уважительное общение',
    'sidebar.rule2': '1.2 Расизм и ненависть',
    'sidebar.rule3': '1.3 Читы и софт',
    'sidebar.rule4': '1.4 ДМ и ТК',
    'sidebar.rule5': '1.5 РК',
    'sidebar.rule6': '1.6 МГ и ПГ',
    'sidebar.rule7': '1.7 Fear RP',
    'sidebar.rule8': '1.8 Реклама',
    'sidebar.rule9': '1.9 Обман',
    'sidebar.legal': '4. Правовая информация',
    'sidebar.discord': '5. Связь и жалобы'
  },

  en: {
    'nav.terms': 'Terms', 'nav.roles': 'Roles', 'nav.rules': 'Rules', 'nav.legal': 'Legal',
    'header.discord': 'Discord',
    'bc.home': 'Home', 'bc.rules': 'Rules',
    'share.btn': 'Share',
    'page.title': 'Community Rules (DISCORD)',
    'page.lead': 'To keep the community friendly and active, every member must follow these rules. Ignorance of the rules does not exempt you from responsibility.',
    'meta.date': 'updated October 4, 2025',
    'meta.read': '5 min read',

    'search.ph': 'Search rules and terms...',
    'toolbar.expand': 'Expand all',
    'toolbar.collapse': 'Collapse all',

    'random.label': 'Random rule',

    'readcheck.title': 'Mark as read',
    'readcheck.desc': 'Optional, but it helps us know the rules are being read.',

    'terms.title': 'Game terms', 'terms.badge': '16 terms',
    'terms.lead': 'Slang you need to know to understand other players and admins. If you are new - read carefully, nothing complicated here.',

    'term.rp.b': 'RP', 'term.rp': 'Roleplay, that is acting as your character. In RP you behave the way your hero would behave in real life.',
    'term.dm.b': 'DM', 'term.dm': 'Deathmatch. Killing a player without reason or RP motive. Strictly forbidden.',
    'term.tk.b': 'TK', 'term.tk': 'Teamkill. Killing an ally or a member of your own faction without reason.',
    'term.rk.b': 'RK', 'term.rk': 'Revenge Kill. Revenge after death. You came back and killed the one who killed you. Forbidden.',
    'term.mg.b': 'MG', 'term.mg': 'Meta Gaming. Using real-life information (Discord, stream, chat) in game that your character does not know.',
    'term.pg.b': 'PG', 'term.pg': 'Power Gaming. Forcing your game on others, actions with no chance to respond, superpowers of the character.',
    'term.fg.b': 'FRP', 'term.fg': 'Fear RP / Fail RP. Lack of fear for the character\'s life. When a weapon is pointed at you, you must be afraid.',
    'term.nrp.b': 'NRP', 'term.nrp': 'NonRP. Behaviour out of character: writing "lol" in chat, discussing real life, insulting OOC.',
    'term.ooc.b': 'OOC / IC', 'term.ooc': 'OOC - out of character (the real you). IC - in character (your hero). Don\'t mix them up.',
    'term.afk.b': 'AFK', 'term.afk': 'AFK. Away from keyboard. Long AFK at important posts = punishment.',
    'term.bh.b': 'BugUse', 'term.bh': 'Bug use. Exploiting game bugs for advantage. Permanent ban.',
    'term.sk.b': 'SK', 'term.sk': 'Spawn Kill. Killing at respawn. Forbidden.',
    'term.gm.b': 'GM', 'term.gm': 'God Mode. Immortality mode. Forbidden to players, only for admins on duty.',
    'term.cheats.b': 'Cheats', 'term.cheats': 'Any third-party software, macros, auto-clickers. Permanent ban.',
    'term.scam.b': 'Scam', 'term.scam': 'Fraud in deals, ripping off money or property. Ban without review.',
    'term.twink.b': 'Twink', 'term.twink': 'Second account to bypass punishment. Ban on all accounts.',

    'roles.title': 'Roles on the project', 'roles.badge': '6 roles',
    'roles.lead': 'Who is who. If something happened - write to the right person, not everyone.',

    'role.owner.title': 'Owner', 'role.owner.desc': 'Founder and owner of the project. Makes final decisions, has the highest priority. Contact only for truly serious matters.',
    'role.admin.title': 'Administrator', 'role.admin.desc': 'Keeps order, reviews reports, issues punishments, resolves disputes between players and factions.',
    'role.moder.title': 'Moderator', 'role.moder.desc': 'Monitors chat and voice, issues mute or kick, helps with simple questions, escalates complex ones to admins.',
    'role.helper.title': 'Helper', 'role.helper.desc': 'Helps newcomers understand the project mechanics. Cannot punish, but can advise and guide.',
    'role.dev.title': 'Developer', 'role.dev.desc': 'Writes code, fixes bugs, adds new content. For technical issues - contact them.',
    'role.player.title': 'Player', 'role.player.desc': 'You. Must follow the project rules, respect others and stay in character. Break the rules - get punished.',

    'rules.title': 'General rules', 'rules.badge': '16 rules',
    'rules.lead': 'Ignorance of the rules does not exempt you from responsibility. Read carefully, everything here is to the point. Click any rule to expand details.',

    'rule.1.title': 'Respectful communication', 'rule.1.desc': 'Insults, harassment, humiliation, personal attacks and toxic behaviour in chat, voice and Discord are forbidden.', 'rule.1.punish': 'Punishment: mute from 12 hours to 7 days. For repeated violations - ban up to 30 days.',
    'rule.2.title': 'No racism or hate', 'rule.2.desc': 'Any racism, xenophobia, discrimination by gender, religion, nationality or orientation - permanent ban.', 'rule.2.punish': 'Punishment: permanent ban with no unban.',
    'rule.3.title': 'No cheats or software', 'rule.3.desc': 'Cheats, macros, auto-clickers, bug use - permanent ban with no unban.', 'rule.3.punish': 'Punishment: permanent ban.',
    'rule.4.title': 'No DM or TK', 'rule.4.desc': 'Killing a player or ally without an RP reason is forbidden.', 'rule.4.punish': 'Punishment: kick, warn, ban.',
    'rule.5.title': 'No RK', 'rule.5.desc': 'After death you cannot return and take revenge. First roleplay, then action.', 'rule.5.punish': 'Punishment: warn, ban up to 7 days.',
    'rule.6.title': 'No MG or PG', 'rule.6.desc': 'Using out-of-game information and forcing your game on others is forbidden. Play fair.', 'rule.6.punish': 'Punishment: mute, warn, ban up to 14 days.',
    'rule.7.title': 'Fear RP', 'rule.7.desc': 'Your character must fear for their life. Weapon pointed at you - comply, don\'t charge.', 'rule.7.punish': 'Punishment: warn, ban up to 3 days.',
    'rule.8.title': 'No ads', 'rule.8.desc': 'Advertising third-party projects, servers, channels and shops without admin approval is forbidden.', 'rule.8.punish': 'Punishment: mute up to 7 days, ban up to 30 days.',
    'rule.9.title': 'No fraud', 'rule.9.desc': 'Scam, ripping off in deals, deceiving newcomers and fraud - account and Discord block.', 'rule.9.punish': 'Punishment: account and Discord ban.',
    'rule.10.title': 'Follow the law', 'rule.10.desc': 'No calls for violence, terrorism, extremism or anything else prohibited by law.', 'rule.10.punish': 'Punishment: permanent ban and report to Discord.',
    'rule.11.title': 'Obey admins', 'rule.11.desc': 'Orders from admins and moderators must be followed. Disputes are resolved via Discord report.', 'rule.11.punish': 'Punishment: mute, kick, ban up to 14 days.',
    'rule.12.title': 'No rule abuse', 'rule.12.desc': 'Trying to bypass punishment via twinks, nick changes or other tricks - permanent ban on all accounts.', 'rule.12.punish': 'Punishment: permanent ban on all accounts.',
    'rule.13.title': 'No politics or religion', 'rule.13.desc': 'Political and religious disputes in chat and voice are forbidden. The project is for gaming, not rallies.', 'rule.13.punish': 'Punishment: mute, ban up to 7 days.',
    'rule.14.title': 'No NSFW content', 'rule.14.desc': 'Pornography, shock content, explicit violence - ban without warning.', 'rule.14.punish': 'Punishment: ban without warning.',
    'rule.15.title': 'Respect copyright', 'rule.15.desc': 'Impersonating rights holders, using others\' logos and brands without permission is forbidden.', 'rule.15.punish': 'Punishment: ban up to 30 days.',
    'rule.16.title': 'Age 16+', 'rule.16.desc': 'The project targets players aged 16 and over. Younger - only with parental consent.', 'rule.16.punish': 'Punishment: kick until age is confirmed.',

    'empty.terms': 'Nothing found for your query.',
    'empty.rules': 'Nothing found for your query.',

    'callout.text': 'Rules may not be applied literally, we work by common sense. For example, you formally broke nothing, but it feels like you did something bad - we can punish you.',
    'callout.text2': 'And yes, the head administration may not reference the rules. That is normal.',

    'ptable.title': 'Cheat sheet: what for what',
    'ptable.col1': 'Violation', 'ptable.col2': 'Punishment',
    'ptable.1a': 'Insults', 'ptable.1b': 'mute 12h - 7d',
    'ptable.2a': 'Racism', 'ptable.2b': 'permanent ban',
    'ptable.3a': 'Cheats', 'ptable.3b': 'permanent ban',
    'ptable.4a': 'DM / TK', 'ptable.4b': 'kick, warn, ban',
    'ptable.5a': 'RK', 'ptable.5b': 'warn, ban up to 7d',
    'ptable.6a': 'Ads', 'ptable.6b': 'mute up to 7d',
    'ptable.7a': 'Scam', 'ptable.7b': 'account ban',
    'ptable.8a': 'NSFW', 'ptable.8b': 'ban without warning',

    'legal.title': 'Legal information', 'legal.badge': '8 items',
    'legal.lead': 'We respect intellectual property and comply with the law.',
    'legal.1.title': 'Independent fan initiative',
    'legal.1.desc': 'Undercover Community is an independent gaming community project created by fans for fans. We are not affiliated with, endorsed by, or supported by the companies that created, produced, distributed or own the rights to any third-party works, their titles, logos, characters or other elements. All references are purely informational and fan-based.',
    'legal.2.title': 'Trademarks',
    'legal.2.desc': 'All trademarks, logos, brand names and other intellectual property mentioned on the site belong to their rightful owners. We do not claim these rights and use references only for informational and descriptive purposes.',
    'legal.3.title': 'Compliance with the law',
    'legal.3.desc': 'The project undertakes to comply with the current legislation of the Russian Federation and the countries of its participants. We prohibit on our platform calls for violence, terrorism, extremism, incitement of ethnic and religious hatred, distribution of prohibited information and any content that violates the law.',
    'legal.4.title': 'Age restriction',
    'legal.4.desc': 'The project content targets an audience of 16+. If you are under 16, use of the project is possible only with the permission of parents or legal guardians. We do not knowingly collect data from minors.',
    'legal.5.title': 'Data processing',
    'legal.5.desc': 'We collect the minimum necessary data (in-game nick, Discord ID, email during registration) for the project to function. Data is not transferred to third parties except as required by law. On request we delete the account and related data.',
    'legal.6.title': 'Copyright on content',
    'legal.6.desc': 'All materials posted on the site (texts, design, code) are created by the project team. If you believe that some material violates your rights, contact us on Discord, we will promptly respond and remove the disputed content.',
    'legal.7.title': 'Disclaimer',
    'legal.7.desc': 'The project is provided "as is". We are not responsible for the actions of players, their statements and deeds outside the gaming platform. The administration reserves the right to change rules and functionality without prior notice.',
    'legal.8.title': 'Rights holders contact',
    'legal.8.desc': 'If you are a rights holder and believe we have violated your rights, write to us on Discord. We are open to dialogue, will promptly review the request and, if necessary, make changes or remove content.',

    'contact.title': 'Contact and reports',
    'contact.lead': 'Reports, admin applications, chat, events and announcements. All here.',
    'contact.desc': 'A small cozy server for our project. Chat, events, announcements, reports.',
    'contact.members': 'members', 'contact.online': 'online',
    'contact.btn': 'Join', 'contact.link1': 'Discord:',

    'footer.title': 'Disclaimer',
    'footer.desc': 'Undercover Community is an independent fan initiative. The project is not connected, affiliated or supported by the companies that created, produced or own the rights to any third-party works, their titles, logos and characters, as well as their partners and rights holders. All trademarks, logos and names belong to their rightful owners and are used solely for informational and descriptive purposes. The project complies with the legislation of the Russian Federation and Discord rules.',
    'footer.copy': '© 2025 Undercover Community', 'footer.made': 'Made for players',

    'sidebar.progress': 'Read',
    'sidebar.title': 'Contents',
    'sidebar.terms': '1. Game terms',
    'sidebar.roles': '2. Roles on the project',
    'sidebar.rules': '3. General rules',
    'sidebar.rule1': '1.1 Respectful communication',
    'sidebar.rule2': '1.2 Racism and hate',
    'sidebar.rule3': '1.3 Cheats and software',
    'sidebar.rule4': '1.4 DM and TK',
    'sidebar.rule5': '1.5 RK',
    'sidebar.rule6': '1.6 MG and PG',
    'sidebar.rule7': '1.7 Fear RP',
    'sidebar.rule8': '1.8 Ads',
    'sidebar.rule9': '1.9 Fraud',
    'sidebar.legal': '4. Legal information',
    'sidebar.discord': '5. Contact and reports'
  }
};

/* ============================================================
   2. ЯЗЫК
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
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) el.placeholder = dict[key];
  });
  htmlEl.setAttribute('lang', lang);
  langButtons.forEach((b) => b.classList.toggle('active', b.dataset.lang === lang));
  try { localStorage.setItem('site-lang', lang); } catch (e) {}
}
langButtons.forEach((btn) => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
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
   4. ПРОГРЕСС ЧТЕНИЯ
   ============================================================ */
const readProgress = document.getElementById('readProgress');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');

function updateProgress() {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;
  const percent = docHeight > 0 ? Math.min(100, Math.round((scrolled / docHeight) * 100)) : 0;
  if (readProgress) readProgress.style.width = percent + '%';
  if (progressFill) progressFill.style.width = percent + '%';
  if (progressPercent) progressPercent.textContent = percent + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

/* ============================================================
   5. АККОРДЕОН ПРАВИЛ
   ============================================================ */
document.querySelectorAll('.rule-item').forEach((item) => {
  const header = item.querySelector('.rule-header');
  if (!header) return;
  header.addEventListener('click', () => {
    item.classList.toggle('open');
  });
});

/* Развернуть / свернуть всё */
document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.rule-item').forEach((r) => r.classList.add('open'));
  showToast('Все правила развёрнуты');
});
document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.rule-item').forEach((r) => r.classList.remove('open'));
  showToast('Все правила свёрнуты');
});

/* ============================================================
   6. ПОИСК
   ============================================================ */
const searchInput = document.getElementById('searchInput');
const termsEmpty = document.getElementById('termsEmpty');
const rulesEmpty = document.getElementById('rulesEmpty');

function normalize(s) {
  return (s || '').toLowerCase().trim();
}

searchInput.addEventListener('input', () => {
  const q = normalize(searchInput.value);

  // термины
  let termHits = 0;
  document.querySelectorAll('#termsGrid .term').forEach((el) => {
    const hay = normalize(el.dataset.search + ' ' + el.textContent);
    const match = !q || hay.includes(q);
    el.hidden = !match;
    if (match) termHits++;
  });
  if (termsEmpty) termsEmpty.hidden = termHits > 0;

  // роли
  document.querySelectorAll('.role-item').forEach((el) => {
    const hay = normalize(el.dataset.search + ' ' + el.textContent);
    el.hidden = q && !hay.includes(q);
  });

  // правила
  let ruleHits = 0;
  document.querySelectorAll('#rulesList .rule-item').forEach((el) => {
    const hay = normalize(el.dataset.search + ' ' + el.textContent);
    const match = !q || hay.includes(q);
    el.hidden = !match;
    if (match) {
      ruleHits++;
      if (q) el.classList.add('open');
    }
  });
  if (rulesEmpty) rulesEmpty.hidden = ruleHits > 0;
});

/* ============================================================
   7. СЛУЧАЙНОЕ ПРАВИЛО
   ============================================================ */
const randomText = document.getElementById('randomText');
const randomRefresh = document.getElementById('randomRefresh');

function pickRandomRule() {
  const rules = Array.from(document.querySelectorAll('#rulesList .rule-item'));
  if (!rules.length) return;
  const r = rules[Math.floor(Math.random() * rules.length)];
  const num = r.querySelector('.rule-num').textContent;
  const title = r.querySelector('h3').textContent;
  const desc = r.querySelector('.rule-body p')?.textContent || '';
  randomText.textContent = `${num} ${title} - ${desc}`;
}
randomRefresh.addEventListener('click', pickRandomRule);
pickRandomRule();

/* ============================================================
   8. ЛАЙК + ПРОСМОТРЫ
   ============================================================ */
const likeBtn = document.getElementById('likeBtn');
const likeCountEl = document.getElementById('likeCount');
const viewsEl = document.getElementById('viewsCount');
let liked = false;
let likes = 128;

likeBtn.addEventListener('click', () => {
  liked = !liked;
  likes += liked ? 1 : -1;
  likeCountEl.textContent = likes;
  likeBtn.classList.toggle('liked', liked);
  likeBtn.querySelector('.like-heart').textContent = liked ? '♥' : '♡';
});

/* просмотры - лёгкое увеличение для реализма */
let views = 6482;
setInterval(() => {
  views += Math.floor(Math.random() * 3);
  if (viewsEl) viewsEl.textContent = views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}, 8000);

/* ============================================================
   9. READ CHECK
   ============================================================ */
const readCheck = document.getElementById('readCheck');
const readCheckIcon = document.getElementById('readCheckIcon');
const readCheckProgress = document.getElementById('readCheckProgress');
let readDone = false;

readCheck.addEventListener('click', () => {
  readDone = !readDone;
  readCheck.classList.toggle('done', readDone);
  readCheckIcon.textContent = readDone ? '✓' : '☐';
  readCheckProgress.textContent = readDone ? '100%' : '0%';
  if (readDone) showToast('Спасибо, что прочитал!');
});

/* ============================================================
   10. SHARE + TOAST
   ============================================================ */
const toast = document.getElementById('toast');
let toastTimer = null;

function showToast(msg) {
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

document.getElementById('shareBtn').addEventListener('click', async () => {
  const url = window.location.href;
  const title = document.title;
  try {
    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
      showToast('Ссылка скопирована');
    }
  } catch (e) {
    // отмена - ничего
  }
});

/* ============================================================
   11. ПОДСВЕТКА САЙДБАРА
   ============================================================ */
const sidebarLinks = document.querySelectorAll('.sidebar-link');
const sectionIds = ['terms', 'roles', 'rules', 'legal', 'discord'];
const sections = sectionIds.map((id) => document.getElementById(id));

function updateSidebarActive() {
  const scrollY = window.scrollY + 140;
  let active = null;
  sections.forEach((s) => {
    if (s && s.offsetTop <= scrollY) active = s.id;
  });
  sidebarLinks.forEach((link) => {
    const href = link.getAttribute('href').replace('#', '');
    link.style.color = href === active ? 'var(--white)' : '';
    link.style.background = href === active ? 'rgba(255,255,255,0.05)' : '';
  });
}
window.addEventListener('scroll', updateSidebarActive, { passive: true });
updateSidebarActive();