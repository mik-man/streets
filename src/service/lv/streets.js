var streets = ["5-й Парк",
"700-річчя Львова пл.",
"Абхазька",
"Авіаційна",
"Автобудівельників проїзд",
"Агабек-Заде",
"Аґрусова",
"Азовська",
"Айвазовського",
"Акацієва",
"Албанська",
"Алмазна",
"Алмазова Генерала",
"Алчевської",
"Ангарна",
"Ангеловича Митрополита",
"Антоненка-Давидовича Бориса",
"Антонича",
"Антоновича Володимира",
"Апостола Данила",
"Аральська",
"Аркаса Миколи",
"Арсенальна",
"Архипенка Олександра",
"Архівна",
"Архітекторська",
"Бабія",
"Багалія",
"Багряного Івана",
"Бажана",
"Базальтова",
"Базарна",
"Бакинська",
"Балабана Маєра",
"Балкова",
"Балтійська",
"Бальзака",
"Банаха",
"Бандери Степана",
"Бандрівського",
"Банківська",
"Барбарисова",
"Барвінок Ганни",
"Барвінських",
"Баронча Садока",
"Басараб Ольги",
"Батуринська",
"Бахматюка",
"Бачинського",
"Баштанна",
"Белзька",
"Бенцаля Миколи",
"Бережанська",
"Березова",
"Берестяна",
"Беринди",
"Бескидська",
"Бетховена",
"Біберовича Івана",
"Бібліотечна",
"Бігова",
"Біласа",
"Білинського Капітана",
"Білогорща",
"Білоруська",
"Білоцерківська",
"Біляшівського Миколи",
"Блажкевич",
"Боберського Івана",
"Бобинського",
"Богданівська",
"Богомольця Академіка",
"Богуна Івана",
"Боднарська",
"Бодянського",
"Бой-Желенського",
"Бойківська",
"Бойчука Михайла",
"Болбочана Полковника",
"Болгарська",
"Бориславська",
"Боровиковського",
"Бортнянського Дмитра",
"Святохресна",
"Ботанічна",
"Ботєва",
"Боткіна",
"Братів Климових",
"Братів Міхновських",
"Братів Рогатинців",
"Собєського",
"Братів Тимошенків",
"Братня",
"Бринського",
"Броварна",
"Бродівська",
"Бруснична",
"Бруснівська",
"Брюллова",
"Брюховицька",
"Бужанська",
"Бузинова",
"Бузкова",
"Буйка Професора",
"Букова",
"Буковинська",
"Буська",
"Буцманюка Юліяна",
"Бучми",
"Вагилевича",
"Вагова",
"Вагонна",
"Валова",
"Варшавська",
"Васильківського",
"Васильченка",
"Вахнянина Анатолія",
"Вашингтона Джорджа",
"Веделя",
"Величка Самійла",
"Велички Професора",
"Тупикова",
"Величковського",
"Венеціанова",
"Вербицького Михайла",
"Вербова",
"Вересая Остапа",
"Вернадського",
"Вернигори",
"Верхратського",
"Вершницька",
"Весела",
"Весняна",
"Ветеранів",
"Вечірня",
"Вигін",
"Виговського Івана",
"Вигоди",
"Визвольна",
"Вилітна",
"Винниківська",
"Винниця",
"Винницька",
"Винниченка Володимира",
"Чарнецького",
"Виноградна",
"Випасова",
"Висока",
"Високий Замок",
"Височана",
"Вишенського",
"Вишиваного пл.",
"Вишнева",
"Вівсяна",
"Відкрита",
"Війтовича",
"Вільде Ірини",
"Вільхова",
"Вірменська",
"Вітвера Гартмана",
"Вітовського Дмитра",
"Пелчинська",
"Вітрякова",
"Вітряна",
"Вічева",
"Вічева пл.",
"Бенедиктинів пл.",
"Бенедиктинська пл.",
"Вовка Федора",
"Водна",
"Водогінна",
"Возняка Академіка",
"Волинська",
"Володимира Великого",
"Волоська",
"Волошина Августина",
"Волошкова",
"Волощака Андрія",
"Воля",
"Воробкевича Сидора",
"Вороного Миколи",
"Сенкевича",
"Врізана",
"Врубеля",
"Втіха",
"Вугільна",
"Вузька",
"Вулецька",
"Гавришкевича",
"Газова",
"Гайворонського Михайла",
"Гайдамацька",
"Гайдучка",
"Гайова",
"Гайовської",
"Галечко Софії",
"Галицька",
"Галицька пл.",
"Галілея",
"Гамалії",
"Ганкевича",
"Ганцова",
"Гарматія",
"Гашека Ярослава",
"Гвардійська",
"Геологів",
"Героїв Крут",
"Герцена",
"Геца",
"Гіацинтова",
"Гіпсова",
"Гірника Олекси",
"Глибока",
"Глиняна",
"Глинянський Тракт",
"Глібова",
"Глінки",
"Гнатевича Богдана",
"Гнатюка Академіка",
"Ягайлонська",
"Ягеллонська",
"Єзуїтська",
"Гніздовського",
"Гоголя",
"Годованця",
"Голинського",
"Головатого Антона",
"Головацького",
"Голубина",
"Голубовича Сидора",
"Голубця Миколи",
"Горбачевського Івана",
"Горбкова",
"Гординських",
"Гордієнка",
"Горівська",
"Горіхова",
"Горліса-Горського Юрія",
"Горобинна",
"Городницька",
"Городоцька",
"Городецька",
"Казимирівська",
"Токажевського",
"Горської",
"Господарська",
"Гостинна",
"Грабова",
"Грабовського",
"Грабянки Григорія",
"Гранична",
"Гранітна",
"Гребінки",
"Грекова Генерала",
"Грецька",
"Гречана",
"Грибова",
"Григоренка Генерала пл.",
"Смольки",
"Григоровича",
"Грицая Генерала",
"Грінченка",
"Грузинська",
"Грушева",
"Грушевського Михайла",
"Грюнвальдська",
"Грядкова",
"Гулака-Артемовського",
"Гуні Дмитра",
"Гуцульська",
"Гушалевича",
"Ґрунтова (Грунтова)",
"Дагестанська",
"Дальня",
"Данила Галицького пл.",
"Данилишина Дмитра",
"Дашкевича Романа",
"Короля Яна",
"Двірцева пл.",
"Вільсона пл.",
"Декарта",
"Демнянська",
"Детька",
"Джерельна",
"Джерельна",
"Дзиндри",
"Дивізійна",
"Диктова",
"Динівська",
"Діаманда",
"Дібровна",
"Лукевича",
"Дідушка",
"Дніпрової Чайки",
"Дніпровська",
"Дністерська",
"Довбуша Олекси",
"Довга",
"Довженка Олександра",
"Дозвільна",
"Долинського",
"Долішня",
"Донецька",
"Донцова Дмитра",
"Доробок",
"Дорогичинська",
"Дороша",
"Дорошенка Петра",
"Сикстуська",
"Досвітня",
"Доступна",
"Драгана",
"Драгоманова",
"Драй-Хмари",
"Дріжджова",
"Дрогобицька",
"Дрогобича",
"Друкарська",
"Дублянська",
"Дубнівська",
"Дубова",
"Дубровицька",
"Дудаєва Джохара",
"Дунайська",
"Духновича",
"Дучимінської Ольги",
"Емінеску",
"Енергетична",
"Естонська",
"Євського",
"Єрошенка",
"Єфремова Сергія Академіка",
"Жасминова",
"Ждахи",
"Жемчужникова",
"Жижки Яна",
"Житня",
"Житомирська",
"Жнивна",
"Жовківська",
"Мартина св.",
"Жуковського",
"Журавлина",
"Заболотівська",
"Заводська",
"Загірна",
"Загородня",
"Загула Дмитра",
"Заклинських",
"Залізнична",
"Залізняка Максима",
"Залісна",
"Замарстинівська",
"Заміська",
"Замкнена",
"Замкова",
"Заньковецької Марії",
"Заозерна",
"Заозерний 1-ий",
"Заозерний 2-ий",
"Заозерний 3-ий",
"Заозерний 4-ий",
"Заозерний 5-ий",
"Заозерний 6-ий",
"Запашна",
"Заповітна",
"Запольської Габріели",
"Запорізька",
"Зарицьких",
"Засядька Генерала",
"Затишна",
"Захарієвича",
"Збаразька",
"Збиральна",
"Збоїща",
"Зборівська",
"Звенигородська пл.",
"Зв'язкова",
"Здоров'я",
"Зелена",
"Земельна",
"Землеробна",
"Зернова",
"Зерова Миколи",
"Зигзаг",
"Зимновідська",
"Зимова",
"Зимова Горішня",
"Зимова Долішня",
"Золота",
"Золочівська",
"Зоряна",
"Зрубова",
"Зубрицького",
"Зубрівська",
"Зустрічна",
"Іванова Гора",
"Івасюка Володимира",
"Ігорева",
"Ільмова",
"Інструментальна",
"Ірчана",
"Кавалерідзе Івана",
"Кавказька",
"Каганця Марка",
"Казахська",
"Каліча Гора",
"Каліча",
"Калнишевського",
"Каменярів",
"Камінна",
"Кам'янецька",
"Кам'янка",
"Канівська",
"Караджича",
"Караїмська",
"Карбишева",
"Карманського",
"Кармелюка",
"Карпатська",
"Карпинця Івана",
"Карпінського",
"Кастелівка",
"Катедральна пл.",
"Капітульна пл.",
"Каховська",
"Качали",
"Каштанова",
"Квітки-Основ'яненка",
"Квітнева",
"Квітова",
"Керамічна",
"Керченська",
"Кибальчича",
"Київська",
"Кирила і Мефодія",
"Длугоша",
"Кирилівська",
"Китайська",
"Кишинівська",
"Кінцева",
"Кленова",
"Клепарівська",
"Кльоновича",
"Княгині Ольги",
"Княжа",
"Копцева",
"Князя Лева",
"Князя Мстислава Удатного",
"Князя Романа",
"Баторія",
"Князя Святослава пл.",
"Бема пл.",
"Князя Ярослава Осмомисла",
"Князя Ярослава Осмомисла пл.",
"Краківська пл.",
"Кобзарська",
"Кобилиці Лук'яна",
"Кобилянської",
"Кобринської",
"Ковалева",
"Ковалевської",
"Ковалика Професора",
"Ковальська",
"Ковельська",
"Коверка",
"Ковжуна Павла",
"Козацька",
"Козельницька",
"Козика Михайла",
"Козланюка",
"Козловського",
"Кокорудза",
"Колесси Академіка",
"Коліївщини пл.",
"Колійна",
"Колісна",
"Колодзінського",
"Колодійська",
"Колодязьна",
"Коломийська",
"Колоскова",
"Колумба Христофора",
"Кольберга",
"Комаринця",
"Комарова",
"Кондратюка",
"Кондукторська",
"Кониського Олександра",
"Охоронок",
"Коновальця Євгена",
"29-го Листопада",
"Конопляна",
"Конопницької",
"Конотопська",
"Конюшинна",
"Кооперативна",
"Копальна",
"Копача",
"Коперника",
"Копистинського",
"Кордуби",
"Корейська",
"Корецька",
"Корінна",
"Коріятовича",
"Корнякта",
"Короленка Володимира",
"Корольова",
"Коротка",
"Корпанюків",
"Корсунська",
"Кортумівка",
"Корякська",
"Кос-Анатольського",
"Косинського",
"Космічна",
"Костомарова",
"Костюшка Тадеуша",
"Котика",
"Котка",
"Котляревського",
"Котлярська",
"Коциловського",
"Коцка Адама",
"Коцюбинського",
"Кочегарська",
"Кошиця",
"Кошова",
"Кравецька",
"Кравса Генерала",
"Кравченко Уляни",
"Кравчука Михайла Академіка",
"Крайня",
"Краківська",
"Красівська",
"Краснянська",
"Кревецького",
"Кременецька",
"Крехівська",
"Крива Липа",
"Гавсмана пасаж",
"Кривоноса Максима",
"Кривчицька дорога",
"Кримська",
"Крип'якевича Академіка",
"Кричевського Михайла",
"Кропивницького пл.",
"Кругла",
"Кругова",
"Круп'ярська",
"Крута",
"Крушельницьких родини",
"Крушельницької Соломії",
"Крашевського",
"Турецька",
"Кубанська",
"Кубійовича",
"Кузневича",
"Кузнярівка",
"Кузьми",
"Кукурудзяна",
"Куликівська",
"Куліша Пантелеймона",
"Кульпарківська",
"Кульчицької",
"Купали Янки",
"Купальська",
"Купчинського",
"Курбаса Леся",
"Курильська",
"Курінна",
"Курмановича Генерала",
"Кутова",
"Кучера Романа Академіка",
"Кушевича",
"Кущова",
"Лаврінського",
"Лазаренка Академіка",
"Лазнева",
"Ламана",
"Ланова",
"Ластів'яча",
"Латвійська",
"Лебедина",
"Левандівська",
"Левинського Івана",
"Реймонта",
"Левицького",
"Кохановського",
"Лемика",
"Лемківська",
"Ленона Джона",
"Леонтовича",
"Лепкого Богдана",
"Лесі Українки",
"Ливарна",
"Лижв'ярська",
"Липи Юрія",
"Липинського",
"Липківського Митрополита",
"Липнева пл.",
"Липова Алея",
"Лисеницька",
"Лисенка",
"Листова",
"Листопадна",
"Листопадового чину",
"Литвиненка",
"Литовська",
"Личаківська",
"Лікувальна",
"Лінкольна Авраама",
"Лірницька",
"Лісна",
"Лісна",
"Лістаференца",
"Ліська",
"Літня",
"Ліщинова",
"Лобачевського",
"Ловецька",
"Лодія",
"Лотоцького",
"Луганська",
"Лугова",
"Лукасевича",
"Лукаша",
"Лукича",
"Лукіяновича Дениса",
"Луцька",
"Луцького",
"Лучкая",
"Лушпинського",
"Льняна",
"Любачівська",
"Любінська",
"Людкевича Станіслава",
"Люльки Академіка",
"Лютнева",
"Ляйнберга",
"Магазинова",
"Мазепи Гетьмана",
"Міста Печ",
"Маївського",
"Майданна",
"Майорівка",
"Маковея",
"Максимовича Михайла",
"Мала",
"Маланюка Євгена пл.",
"Малехівська",
"Малинова",
"Малицької",
"Малі кривчиці",
"Малковицька",
"Малоголосківська",
"Манастирського",
"Марка Вовчка",
"Мартовича",
"Марунька",
"Маршалівка",
"Масарика",
"Матейка",
"Мацієвича",
"Машиністів",
"Меблярська",
"Медведецького Професора",
"Медова",
"Медової Печери",
"Межова",
"Мележа",
"Мельника",
"Мельничука",
"Менделєєва",
"Менцинського Модеста",
"Меретина Бернарда",
"Йосафата",
"Металістів",
"Метлинського",
"Метрологічна",
"Механічна",
"Мечникова",
"Микитки Генерала",
"Миклухо-Маклая",
"Миколайчука",
"Мила",
"Милорадович",
"Милятинська",
"Миргородська",
"Мирна",
"Мирного Панаса",
"Мисливська",
"Митна пл.",
"Цлова пл.",
"Михальчука",
"Мишуги",
"Мідна",
"Міжгірна",
"Міртова",
"Міцкевича пл.",
"Мар'яцька пл.",
"Млинова",
"Мови Василя",
"Могили",
"Могильницького",
"Молдавська",
"Молодіжна",
"Молочна",
"Монгольська",
"Моринецька",
"Морозенка",
"Морозна",
"Моршинська",
"Мостова",
"Мосяжна",
"Моторна",
"Моха",
"Музейна пл.",
"Зацерковна пл.",
"Музики Ярослава",
"Мукачівська",
"Мулярська",
"Мундяк",
"Мурави Марка",
"Мурашка",
"Мурована",
"Мучна",
"Мушака Юрія",
"На Копані",
"На Нивах",
"На Сторожі",
"На Чвертях",
"Навколишня",
"Навої Алішера",
"Навроцького",
"Нагірна",
"Нагірних",
"Над Джерелом",
"Надійна",
"Над'ярна",
"Назарука",
"Наливайка",
"Нарбута Георгія",
"Народна",
"Нарцисова",
"Насипна",
"Насінна",
"Наступальна",
"Наукова",
"Нафтова",
"Невелика",
"Невського Олександра",
"Некрасова",
"Немирівська",
"Нестора Літописця",
"Нечая",
"Нечуя-Левицького",
"Нижанківського Остапа",
"Низинна",
"Низова",
"Низький Замок",
"Лукасінського",
"Ніжинська",
"Ніщинського",
"Новаківського",
"Новий Світ",
"Новознесенська",
"Овочева",
"Огієнка Івана",
"Огіркова",
"Оглоблина",
"Одеська",
"Ожешко",
"Ожинова",
"Озаркевича",
"Скарги П.",
"Озерна",
"Околична",
"Окружна",
"Окуневського",
"Олесницького",
"Олеся Олександра",
"Олешківська",
"Олійна",
"Ольжича",
"Опільського",
"Опришківська",
"Орельська",
"Орлика Пилипа",
"Орлина",
"Орна",
"Освицька",
"Осикова",
"Остроградських",
"Острозького",
"Остряниці Якова",
"Очаківська",
"Очеретяна",
"Павлика",
"Павлова Академіка",
"Павлокомська",
"Падури",
"Палія",
"Панаса Сотника",
"Панаса Сотника бічна",
"Панча Петра",
"Панчишина",
"Паньківського",
"Папарівка",
"Папоротна",
"Параджанова",
"Паращука",
"Паркова",
"Пулавського",
"Парова",
"Паровозна",
"Парфановичів",
"Пасіки Галицькі",
"Пасічна",
"Пастернака Ярослава",
"Патона",
"Пачовського",
"Пекарська",
"Перекопська",
"Перелітна",
"Перемиська",
"Переможна",
"Перехід",
"Переяславська",
"Перова",
"Персенківка",
"Перфецького",
"Петлюри Симона",
"Петрака",
"Петрицького",
"Петровського",
"Петрусенка",
"Петрушевича Євгена пл.",
"Пикулицька",
"Пильникарська",
"Пимоненка Миколи",
"Пинська",
"Пирогівка",
"Півколо",
"Північна",
"Під Голоском",
"Під дубом",
"Підвальна",
"Підгаєцька",
"Підгірна",
"Піддубного Івана",
"Підзамче",
"Підкови Івана пл.",
"Підлісна",
"Підміська",
"Підмурна",
"Підрічна",
"Підстригача Академіка",
"Пілотів",
"Піскова",
"Піша",
"Планерна",
"Пластова",
"Плетенецького",
"Плугова",
"Плужника",
"Плющова",
"Повітряна",
"Поворотна",
"Повстанська",
"Погідна",
"Погулянка",
"Подолинського",
"Поетична",
"Пожежників",
"Покутська",
"Поліська",
"Політехнічна",
"Поліщука Валер'яна",
"Половинна",
"Полтави",
"Полтв'яна",
"Полуботка",
"Полуботка Гетьмана",
"Полуднева",
"Полунична",
"Польна",
"Польова",
"Помірки",
"Поморянська",
"Поперечна",
"Поповича",
"Порічкова",
"Порохова",
"Потебні",
"Потелицька",
"Похила",
"Почаївська",
"Поштова",
"Приблицька бічна",
"Прилбицька",
"Природна",
"Прихильна",
"Приязна",
"Прогулкова",
"Прокоповича",
"Промислова",
"Пропелерна",
"Просвіти",
"Кармелітська",
"Проста",
"Простора",
"Професорська",
"Пстрака Ярослава",
"Пташина",
"Пулюя Івана",
"Пустомитівська",
"Пчілки Олени",
"Пшенична",
"П'ясецького",
"Равська",
"Радехівська",
"Радість",
"Райдужна",
"Райніса Яніса",
"Раковського",
"Ранкова",
"Раппопорта Якова",
"Ратича",
"Рахівська",
"Ребета",
"Ревуцького",
"Резедова",
"Реміснича",
"Рєпіна",
"Ржегоржа Франтішека",
"Рибна",
"Рилєєва",
"Рильського",
"Римлянина",
"Ринок пл.",
"Рівна",
"Рівненська",
"Рівнинна",
"Різбярська",
"Різні пл.",
"Різьбярська",
"Рільнича",
"Річицька",
"Робітнича",
"Рожева",
"Розбіжна",
"Розвилиста",
"Розкіш",
"Розлога",
"Розсадна",
"Розточчя",
"Роксоляни",
"Ромаданівська",
"Романицького Бориса",
"Романчука",
"Ромашкова",
"Росиста",
"Рослинна",
"Россі Карла",
"Рубінова",
"Рубчака Івана",
"Рудакі",
"Руданського",
"Рудненська",
"Рудницького Академіка",
"Русових",
"Руставелі Шота",
"Руська",
"Рутковича Івана",
"Домбровського",
"Ручай",
"Рядова",
"Рясненська",
"Ряшівська",
"Сагайдачного",
"Садибна",
"Садівнича",
"Садова",
"Садовського",
"Саковича",
"Саксаганського",
"Академічна пл.",
"Самарська",
"Самбірська",
"Самійленка",
"Самокиша",
"Самчука Уласа",
"Санітарна",
"Сарненська",
"Сар'яна",
"Сахарова Андрія Академіка",
"Вулецька",
"Свєнціцького Іларіона",
"Дверніцького",
"Свидницького",
"Світанкова",
"Світла",
"Свободи просп.",
"Карла Людвига",
"Легіонів",
"Гетьманська",
"Гетьманські вали",
"Святого Теодора пл.",
"Святого Юра пл.",
"Севастопольська",
"Севери Івана",
"Сельських",
"Селянська",
"Семирадського",
"Сеньковича",
"Сербська",
"Сєченова",
"Сигнальна",
"Сигнівка",
"Симоненка Василя",
"Синявського",
"Сихівська",
"Сихівська бічна",
"Сихівська-Бічна",
"Сімовича Василя",
"Сінна",
"Сірка Івана",
"Січинського",
"Січнева",
"Січова",
"Січових Стрільців",
"Третього Мая",
"Скельна",
"Скидана",
"Скісна",
"Скляна",
"Скнилів",
"Скнилівська",
"Скнилівський 10-й",
"Скнилівський 1-й",
"Скнилівський 2-й",
"Скнилівський 3-й",
"Скнилівський 4-й",
"Скнилівський 5-й",
"Скнилівський 6-й",
"Скнилівський 7-й",
"Скнилівський 8-й",
"Скнилівський 9-й",
"Сковороди",
"Скорини",
"Скрипника",
"Скромна",
"Сластіона",
"Сливова",
"Сліпого Йосипа",
"Скарбівська",
"Слобідська",
"Слободівни Марії",
"Словацького",
"Слов'янська",
"Слюсарська",
"Смаль-Стоцького",
"Білінських",
"Смерекова",
"Сметани",
"Сміла",
"Сміливих",
"Смолича",
"Смольського Григорія",
"Смотрицького",
"Снігурівська",
"Сніжна",
"Снопківська",
"Соборна пл.",
"Бернардинська пл.",
"Сокільницька",
"Соколина",
"Солов'їна",
"Солодова",
"Солом'янка",
"Сонячна",
"Соняшникова",
"Сороки",
"Сорохтея Осипа",
"Сорочинська",
"Сосенка Модеста",
"Соснова",
"Сосюри",
"Спадиста",
"Спокійна",
"Сполучна",
"Сріблиста",
"Ставова",
"Ставропігійська",
"Стадників",
"Станційна",
"Станція Личаків",
"Стара",
"Старий Ринок пл.",
"Старицького",
"Стародубська",
"Барська",
"Староєврейська",
"Боїмів",
"Зарваниця",
"Старознесенська",
"Староміська",
"Стеблиста",
"Стельмаха",
"Степанівни Олени",
"Ленінградська",
"Степового",
"Стефаника",
"Стеценка",
"Стецька Ярослава",
"Стешенка",
"Стороженка",
"Стрийська",
"Стрілецька",
"Стрімка",
"Струмок",
"Студентська",
"Студинського",
"Стуса Василя",
"Суботівська",
"Судова",
"Сулими",
"Сумська",
"Сусідня",
"Суха",
"Сушка",
"Сушкевича",
"Східна",
"Сходова",
"Сяйво",
"Сянська",
"Біжнича",
"Божнича",
"Табірна",
"Таджицька",
"Таллінська",
"Таманська",
"Танячкевича",
"Тарасівська",
"Таращанська",
"Тарнавка",
"Тарнавського Генерала",
"Татарбунарська",
"Татарська",
"Творча",
"Театральна",
"Теліги Олени",
"Темницьких",
"Тена Бориса",
"Теребовельська",
"Терлецького",
"Тернова",
"Тернопільська",
"Тершаковців",
"Госєвського пл.",
"Тесленка",
"Теслярська",
"Технічна",
"Тиверська",
"Тиктора",
"Станіслава св.",
"Тисова",
"Тиха",
"Тичини",
"Тіниста",
"Тісна",
"Ткацька",
"Тобілевича",
"Толстогольва",
"Томашівська",
"Томашівського",
"Топольна",
"Топольний 1-й",
"Топольний 2-й",
"Топольний 3-й",
"Топольний 4-й",
"Топольний 5-й",
"Топольний 6-й",
"Торгова",
"Голуховського",
"Торф'яна",
"Трависта",
"Трещаківського",
"Трильовського",
"Тролейбусна",
"Тростинна",
"Трускавецька",
"Труша",
"Трясила Тараса",
"Туган-Барановського",
"Трибунальська",
"Сакраменток",
"Тунельна",
"Тургенєва",
"Турецька",
"Туркменська",
"Турянського",
"Тучапського",
"Тюльпанова",
"Тютюнників",
"Угнівська",
"Угорська",
"Ударна",
"Ужгородська",
"Узбецька",
"Уманська",
"Університетська",
"Урожайна",
"Устияновича",
"Фабрична",
"Федорова Івана",
"Федьковича",
"Фещенка-Чопівського",
"Фіалкова",
"Філатова Академіка",
"Флінти",
"Франка Івана",
"Панська",
"Зибликевича",
"Софії",
"Франка Івана пл.",
"Фредра Олександра",
"Фурманська",
"Харківська",
"Хасевича Ніла",
"Хвильового Миколи",
"Хімічна",
"Хлібна",
"Хмельницького Богдана",
"Хмільова",
"Холмська",
"Холодна",
"Холодного",
"Холодноярська",
"Хорватська",
"Хоробрих",
"Хортицька",
"Хотинська",
"Хоткевича Гната",
"Художня",
"Хуторівка",
"Цегельського",
"Центральний проїзд",
"Церетелі",
"Цетнерівка",
"Цехова",
"Циганівка",
"Чагарникова",
"Чайковського",
"Чарнецького Єпископа",
"Червона",
"Червоної Калини просп.",
"Черемхова",
"Черемшини",
"Черешнева",
"Черкаська",
"Чернеча Гора",
"Черника",
"Чернівецька",
"Чернігівська",
"Чесанівська",
"Чехова",
"Чечета",
"Чигиринська",
"Чижевського",
"Чикаленка",
"Чмоли Івана",
"Чоловського",
"Чорновола Вячеслава просп.",
"Чорноморська",
"Чубинського Павла",
"Чуваська",
"Чугайстра",
"Чукаріна",
"Чумацька",
"Чупринки ген.",
"Чупринки Генерала",
"Крижова",
"Чучмана",
"Шараневича Івана",
"Шатківського",
"Шафарика",
"Шахтарська",
"Шашкевича Маркіяна пл.",
"Шведська",
"Шевська",
"Шевченка",
"Шевченка просп.",
"Шептицьких",
"Шеремети",
"Широка",
"Шишманова Івана",
"Шімзерів",
"Шкільна",
"Шкіряна",
"Шкрібляків",
"Шолом-Алейхема",
"Шопена",
"Шпитальна",
"Шполянська",
"Шумського",
"Шухевича",
"Щекавицька",
"Щепкіна",
"Щепова",
"Щирецька",
"Щоголева",
"Щурата",
"Юнаківа Генерала",
"Юнацька",
"Яблунева",
"Яворівська",
"Яворницького Дмитра",
"Яворського Стефана пл.",
"Яловець",
"Ялтинська",
"Янева",
"Яновського Юрія",
"Януша",
"Японська",
"Яреми Професора",
"Яричівська",
"Ярова",
"Ярослава Мудрого",
"Ярославена",
"Ярославенка",
"Ярошинської",
"Ясна",
"Яцкова Михайла"]
