import type { Localized } from './types';

export interface AcademyDirection {
  id: string;
  text: Localized;
}

export interface AcademyContact {
  id: string;
  label: Localized;
  phone: string;
  email: string | null;
}

export interface AcademyInfo {
  intro: Localized;
  directions: AcademyDirection[];
  infra: {
    desc_1: Localized;
    desc_2: Localized;
    desc_3: Localized;
  };
  contacts: AcademyContact[];
}

export const academy: AcademyInfo = {
  intro: {
    en: "The Republican Training and Methodological Center is a unified training and methodological institution of the Uzbekistan Red Crescent Society, established by decision of the Society's Presidium No. 7/2 of July 7, 2000. It is the only center of this format among National Red Crescent Societies in Central Asia.",
    ru: 'Республиканский учебно-методический центр — единое учебное, методическое и образовательное учреждение Общества Красного Полумесяца Узбекистана, созданное на основании решения Президиума Общества №7/2 от 7 июля 2000 года. Это единственный центр такого формата среди Национальных обществ Красного Полумесяца в Центральной Азии.',
    uz: 'Respublika O\'quv-Uslubiy Markazi — O\'zbekiston Qizil Yarim Oy Jamiyatining yagona o\'quv, uslubiy va ta\'lim muassasasi bo\'lib, Jamiyat Prezidiumining 2000-yil 7-iyuldagi 7/2-sonli qarori asosida tashkil etilgan. Bu hozirgi kunda Markaziy Osiyo mintaqasidagi Milliy Qizil Yarim Oy jamiyatlari orasida ushbu formatdagi yagona markazdir.',
  },
  directions: [
    {
      id: 'training',
      text: {
        en: "Training, preparation and retraining of Society staff and volunteers, improving qualifications in the main areas of the Society's charter, including first aid training, emergency preparedness and response, knowledge about the International Red Cross and Red Crescent Movement and International Humanitarian Law.",
        ru: 'Обучение, подготовка и переподготовка сотрудников и волонтёров Общества, повышение квалификации по основным направлениям устава, включая обучение первой помощи, подготовку к чрезвычайным ситуациям и их ликвидацию, распространение знаний о Международном движении Красного Креста и Красного Полумесяца и Международном гуманитарном праве.',
        uz: 'Jamiyat xodimlarini va ko\'ngillilarini o\'qitish, tayyorlash va qayta tayyorlash, ustav faoliyatining asosiy yo\'nalishlari bo\'yicha malakasini oshirish, shu jumladan birinchi yordam ko\'rsatishga o\'rgatish, favqulodda vaziyatlarga tayyorgarlik ko\'rish va ularni bartaraf etish, Xalqaro Qizil Xoch va Qizil Yarim Oy Harakati va Xalqaro gumanitar huquq to\'g\'risida bilimlarni tarqatish.',
      },
    },
    {
      id: 'assist-events',
      text: {
        en: 'Assisting in organizing and holding seminars, trainings, presidium meetings and other events of the Uzbekistan Red Crescent Society and partner organizations.',
        ru: 'Содействие в организации и проведении семинаров, тренингов, заседаний президиума и других мероприятий Общества Красного Полумесяца и партнёрских организаций.',
        uz: 'O\'zbekiston Qizil Yarim Oy Jamiyati va hamkor tashkilotlar tomonidan tashkil etiladigan seminarlar, treninglar, prezidiumlar va boshqa tadbirlarni tashkillashtirish va o\'tkazishda yordam berish.',
      },
    },
    {
      id: 'charity-events',
      text: {
        en: 'Organizing charity, cultural and sports events with the participation of Society volunteers, the population and young people.',
        ru: 'Организация благотворительных, культурных и спортивных мероприятий с участием волонтёров Общества, населения и молодёжи.',
        uz: 'Jamiyat ko\'ngillilari, aholi hamda yoshlar ishtirokida xayriya, madaniy va sport tadbirlarini tashkil etish.',
      },
    },
    {
      id: 'methodological',
      text: {
        en: 'Providing methodological, consultative and practical assistance to the Society organizations, generalizing the experience of the best organizations and introducing effective working methods.',
        ru: 'Оказание методической, консультативной и практической помощи организациям Общества, обобщение опыта лучших организаций и внедрение эффективных форм и методов работы.',
        uz: 'Jamiyat tashkilotlariga uslubiy, maslahat va amaliy yordam ko\'rsatish, eng yaxshi tashkilotlar tajribasini umumlashtirish va samarali ish shakllarini joriy etish.',
      },
    },
    {
      id: 'innovation',
      text: {
        en: "Supporting the development and implementation of innovative programs and projects within the charter's objectives, and developing the Center's material, technical and financial base.",
        ru: 'Содействие разработке и внедрению инновационных программ и проектов в рамках задач устава, развитие материально-технической, учебно-методической и финансовой базы Центра.',
        uz: 'Ustav vazifalari doirasida innovatsion dasturlar va loyihalarni ishlab chiqish va tadbiq etishda yordam berish, Markazning moddiy-texnik, o\'quv-uslubiy va moliyaviy bazasini rivojlantirish.',
      },
    },
    {
      id: 'cooperation',
      text: {
        en: 'Cooperating with international, state and non-governmental organizations, private companies and agencies to support the Society humanitarian activities.',
        ru: 'Сотрудничество с международными, государственными и негосударственными организациями, частными компаниями и ведомствами для поддержки гуманитарной деятельности Общества.',
        uz: 'O\'zbekiston QYaOJga ko\'maklashish doirasida xalqaro, davlat va nodavlat tashkilotlar, xususiy kompaniyalar va turli idoralar bilan hamkorlikni amalga oshirish.',
      },
    },
  ],
  infra: {
    desc_1: {
      en: 'The Center is an 8-storey building with a total area of more than 4000 square meters, where all necessary conditions for effective training and holding various events have been created. Every year, from 500 to 1500 people are trained at the Center.',
      ru: 'Центр — это 8-этажное здание общей площадью более 4000 квадратных метров, где созданы все необходимые условия для эффективного обучения и проведения различных мероприятий. Ежегодно в Центре обучается от 500 до 1500 человек.',
      uz: 'Markaz — umumiy maydoni 4000 kvadrat metrdan ortiq bo\'lgan 8 qavatli bino bo\'lib, o\'quvchilarni samarali o\'qitish va turli tadbirlarni o\'tkazish uchun barcha zarur sharoitlar yaratilgan. Markazda har yili 500 dan 1500 gacha kishi o\'qitiladi.',
    },
    desc_2: {
      en: 'With the support of the Uzbekistan Red Crescent Society, the Center is equipped with modern office and thematic equipment, including modern first aid mannequins, simulation materials, technical equipment for emergencies and other types of training equipment.',
      ru: 'При содействии Общества Красного Полумесяца Узбекистана Центр оснащён современным офисным и тематическим оборудованием, включая современные манекены для первой помощи, имитационные материалы, техническое оборудование для чрезвычайных ситуаций и другие виды учебного оборудования.',
      uz: 'O\'zbekiston Qizil Yarim Oy Jamiyati ko\'magi bilan Markaz zamonaviy ofis va tematik uskunalar, jumladan birinchi yordam uchun zamonaviy manekenlar, taqlid materiallari, favqulodda vaziyatlar uchun texnik jihozlar va boshqa turdagi o\'quv qurilmalari bilan jihozlangan.',
    },
    desc_3: {
      en: 'The building has two conference halls - a small hall for 30 listeners and a large hall for more than 100 people. On the second and third floors there is a hotel complex accommodating 50 people in 14 rooms with LED TVs, air conditioning and free Wi-Fi, and on the lower floor - a dining room and buffet.',
      ru: 'В здании имеются два конференц-зала — малый зал на 30 слушателей и большой зал более чем на 100 человек. На втором и третьем этажах расположен гостиничный комплекс, вмещающий 50 человек в 14 номерах с LED-телевизорами, кондиционерами и бесплатным Wi-Fi, а на нижнем этаже — столовая и буфет.',
      uz: 'Binoda ikkita konferens-zal mavjud — 30 tinglovchiga mo\'ljallangan kichik zal va 100 dan ortiq kishiga mo\'ljallangan katta zal. Ikkinchi va uchinchi qavatlarda 14 mehmonxona xonasida 50 kishini sig\'dira oladigan mehmonxona majmuasi joylashgan bo\'lib, LED televizorlar, konditsionerlar va bepul Wi-Fi bilan jihozlangan, pastki qavatda esa ovqatlanish xonasi va bufet mavjud.',
    },
  },
  contacts: [
    {
      id: 'firstaid',
      label: {
        en: 'First Aid Training Courses',
        ru: 'Курсы обучения первой помощи',
        uz: 'Birinchi yordam o\'quv kurslari',
      },
      phone: '+998 78 150 81 11 / 78 150 14 88',
      email: 'mso@redcrescent.uz',
    },
    {
      id: 'events',
      label: {
        en: 'Events Organization',
        ru: 'Организация мероприятий',
        uz: 'Tadbirlarni tashkil etish',
      },
      phone: '+998 71 276 99 01/02',
      email: 'rumc@redcrescent.uz',
    },
    {
      id: 'hotel',
      label: {
        en: 'Hotel Booking',
        ru: 'Бронирование гостиницы',
        uz: 'Mehmonxonani bron qilish',
      },
      phone: '+998 71 276 96 63',
      email: null,
    },
  ],
};
