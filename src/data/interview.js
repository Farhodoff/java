export const interviewCategories = [
  { id: 'core_java', name: 'Core Java', icon: 'Coffee' },
  { id: 'oop', name: 'OOP', icon: 'Code' },
  { id: 'collections', name: 'Collections', icon: 'Layers' },
  { id: 'sql', name: 'SQL', icon: 'Database' },
  { id: 'jdbc', name: 'JDBC', icon: 'Link' },
  { id: 'postgresql', name: 'PostgreSQL', icon: 'Database' },
  { id: 'springboot', name: 'Spring Boot', icon: 'Leaf' },
  { id: 'rest_api', name: 'REST API', icon: 'Globe' },
  { id: 'hibernate', name: 'Hibernate', icon: 'Layers' },
  { id: 'git', name: 'Git', icon: 'GitBranch' },
  { id: 'security_jwt', name: 'Security (JWT)', icon: 'Shield' },
  { id: 'docker', name: 'Docker', icon: 'Box' },
  { id: 'oracle_db', name: 'Oracle DB', icon: 'Database' },
  { id: 'microservices', name: 'Microservices', icon: 'Cpu' },
  { id: 'kafka', name: 'Apache Kafka', icon: 'Cpu' }
];

export const interviewData = {
  core_java: [
    {
      id: 101,
      question: 'JDK, JRE va JVM farqi nimada?',
      answer: 'JVM (Java Virtual Machine) - baytkodni mashina kodiga o\'g\'iruvchi virtual mashina. JRE (Java Runtime Environment) - JVM va ishga tushirish uchun kutubxonalar (dasturni ishlatish uchun). JDK (Java Development Kit) - JRE va ishlab chiquvchi vositalar (kompilyator javac va h.k.) jamlanmasi.',
      difficulty: 'Easy'
    },
    {
      id: 102,
      question: 'Primitiv va Reference ma\'lumot turlari farqi nima?',
      answer: 'Primitivlar (int, double, boolean va h.k.) qiymatni to\'g\'ridan-to\'g\'ri xotirada (Stack-da) saqlaydi va tez ishlaydi. Reference turlar (String, Object, Arraylar) Heap xotiradagi ob\'ektga havola (manzil) saqlaydi.',
      difficulty: 'Easy'
    },
    {
      id: 103,
      question: 'Nega String ob\'ekti immutable (o\'zgarmas)?',
      answer: 'String xavfsizlik (masalan, tarmoq ulanishlari, fayl yo\'llari), xotira optimallashuvi (String Pool) va ko\'p oqimli muhitda (Thread safety) xavfsiz bo\'lishi uchun immutable qilingan. Agar u o\'zgartirilsa, barcha havolalar o\'zgarib xavfsizlikka zarar yetardi.',
      difficulty: 'Medium'
    },
    {
      id: 104,
      question: 'String, StringBuilder va StringBuffer farqlari qanday?',
      answer: 'String - o\'zgarmas (immutable). StringBuilder - o\'zgaruvchan (mutable) va oqimlar uchun xavfsiz emas (tezkor). StringBuffer - o\'zgaruvchan (mutable) va oqimlar uchun xavfsiz (synchronized metodlarga ega, sekinroq).',
      difficulty: 'Medium'
    },
    {
      id: 105,
      question: 'Garbage Collection qanday ishlaydi?',
      answer: 'Garbage Collection (GC) - Heap xotirada hech qaysi havola (reference) orqali ulanmagan (foydalanilmayotgan) keraksiz ob\'ektlarni aniqlaydi va ularni o\'chirib, xotirani avtomatik tozalaydi. Buni JVM o\'z nazoratida bajaradi.',
      difficulty: 'Hard'
    },
    {
      id: 106,
      question: 'Checked va Unchecked Exception farqi nima?',
      answer: 'Checked exception-lar compile-time-da tekshiriladi, dasturchi majburan try-catch yoki throws ishlatishi kerak (masalan, IOException). Unchecked exception-lar runtime-da yuz beradi (RuntimeException vorislari, masalan NullPointerException) va ularni tekshirish majburiy emas.',
      difficulty: 'Medium'
    },
    {
      id: 107,
      question: '== va equals() farqlari nimada?',
      answer: '== operatori primitivlar qiymatini yoki ob\'ektlarning xotiradagi manzillarini (reference) solishtiradi. equals() metodi esa ob\'ekt ichidagi qiymatlarni solishtirish uchun ishlatiladi (String kabi sinflarda override qilingan).',
      difficulty: 'Easy'
    },
    {
      id: 108,
      question: 'Amaliy savol: Try-catch-finally blokida finally ichida return yozilsa nima bo\'ladi?',
      answer: 'Agar finally ichida return yozilsa, try yoki catch bloklaridagi return qiymatlari inkor qilinadi va finally ichidagi return qiymati qaytariladi. Bu yomon amaliyot hisoblanadi (bad practice).',
      difficulty: 'Hard'
    }
  ],
  oop: [
    {
      id: 201,
      question: 'OOP ning 4 ta asosiy ustuni qaysilar?',
      answer: '1. Encapsulation (Inkapsulyatsiya) - ma\'lumotlar va metodlarni bir sinfga birlashtirish va ularni tashqi ta\'sirdan himoya qilish. 2. Inheritance (Vorisiylik) - bitta sinf xususiyatlarini ikkinchisiga o\'tkazish. 3. Polymorphism (Polimorfizm) - bir xil nomli metodning har xil shaklda ishlashi. 4. Abstraction (Abstraksiya) - ob\'ektning faqat muhim xususiyatlarini ko\'rsatib, ichki murakkabliklarini yashirish.',
      difficulty: 'Easy'
    },
    {
      id: 202,
      question: 'Interface va Abstract class farqi nimada?',
      answer: 'Abstract class-larda constructor bo\'ladi, holat saqlovchi o\'zgaruvchilar bo\'lishi mumkin. Java-da faqat bitta sinfdan voris olish mumkin. Interface-da esa constructor bo\'lmaydi, faqat o\'zgarmaslar (constants) va mavhum metodlar bo\'ladi (Java 8+ default/static metodlar ham). Bir nechta interface implement qilish mumkin.',
      difficulty: 'Medium'
    },
    {
      id: 203,
      question: 'Polimorfizm turlari qaysilar?',
      answer: 'Polimorfizm 2 xil bo\'ladi: 1. Compile-time (Static) polimorfizm - Method Overloading orqali amalga oshadi. 2. Runtime (Dynamic) polimorfizm - Method Overriding orqali amalga oshadi.',
      difficulty: 'Medium'
    },
    {
      id: 204,
      question: 'Method Overloading va Overriding farqi nimada?',
      answer: 'Overloading - bir xil nomli lekin har xil parametrli metodlarni bitta sinfda yozish. Overriding - ota sinfdagi metodni bola sinfda o\'zgartirib yozish (nomi va parametrlari bir xil bo\'lishi shart).',
      difficulty: 'Easy'
    },
    {
      id: 205,
      question: 'Abstraksiya va Inkapsulyatsiya o\'rtasidagi farq nima?',
      answer: 'Abstraksiya "nima qilish kerakligini" belgilaydi va murakkab detallarni yashiradi (masalan, Interface). Inkapsulyatsiya esa ma\'lumotlarni "qanday xavfsiz saqlashni" belgilaydi (masalan, private maydonlar va public getter/setter).',
      difficulty: 'Medium'
    },
    {
      id: 206,
      question: 'Composition vs Inheritance (Kompozitsiya va Vorisiylik) - qaysi biri afzal?',
      answer: '"Composition over Inheritance" tamoyiliga ko\'ra kompozitsiya afzal. Vorisiylik sinflar orasida juda kuchli bog\'liqlik (tight coupling) yaratadi. Kompozitsiyada esa bir sinf boshqasini o\'z maydoni sifatida chaqiradi, bu moslashuvchanlikni oshiradi.',
      difficulty: 'Medium'
    },
    {
      id: 207,
      question: 'this va super kalit so\'zlari nima vazifani bajaradi?',
      answer: 'this - joriy sinf ob\'ektiga ishora qiladi (konstruktor yoki metodlarni chaqirish). super - ota sinf ob\'ektiga yoki metodiga ishora qiladi, ota sinf konstruktorini chaqirishda ishlatiladi.',
      difficulty: 'Easy'
    },
    {
      id: 208,
      question: 'Amaliy savol: Konstruktor ichida boshqa konstruktorni chaqirish shartlari qanday?',
      answer: 'Konstruktor ichida joriy sinfning (this()) yoki ota sinfning (super()) boshqa konstruktorini chaqirish faqat konstruktorning ENG BIRINCHI qatorida bo\'lishi shart. Aks holda compile-time error yuz beradi.',
      difficulty: 'Hard'
    }
  ],
  collections: [
    {
      id: 301,
      question: 'ArrayList va LinkedList farqi nimada?',
      answer: 'ArrayList - dinamik massivga asoslangan, indeks orqali element o\'qish O(1) tez, element qo\'shish/o\'chirish o\'rtada bo\'lsa O(n) sekin. LinkedList - ikki tomonlama bog\'langan ro\'yxatga asoslangan, element qo\'shish/o\'chirish O(1) tez, o\'qish esa O(n) sekin.',
      difficulty: 'Easy'
    },
    {
      id: 302,
      question: 'HashMap ishlash prinsipi qanday?',
      answer: 'HashMap - kalit-qiymat (Key-Value) juftligini saqlaydi. Kalitning hashCode() bo\'yicha xotiradagi joy (bucket) aniqlanadi. Bir xil indeksli bucket-da bir nechta element bo\'lsa (collision yuz bersa), LinkedList yoki Red-Black Tree sifatida saqlanadi. equals() kalitni aniq solishtirish uchun ishlatiladi.',
      difficulty: 'Hard'
    },
    {
      id: 303,
      question: 'Comparable va Comparator farqi nima?',
      answer: 'Comparable - tabiiy saralash tartibini belgilaydi (compareTo() metodi orqali) va saralanuvchi sinf ichida implement qilinadi. Comparator - tashqi saralash qoidasini belgilaydi (compare() metodi) va alohida sinf yoki lambda sifatida yoziladi.',
      difficulty: 'Medium'
    },
    {
      id: 304,
      question: 'Set va List interfeyslari farqi nima?',
      answer: 'List - elementlarni tartiblangan holda saqlaydi, indeks orqali murojaat qilish mumkin va dublikat elementlarga ruxsat beradi. Set - dublikat elementlarni saqlamaydi, elementlar tartibi kafolatlanmaydi (LinkedHashSet-dan tashqari) va indeksga ega emas.',
      difficulty: 'Easy'
    },
    {
      id: 305,
      question: 'Fail-Fast va Fail-Safe iteratorlar farqi nima?',
      answer: 'Fail-Fast iterator (masalan, ArrayList iteratori) to\'plam o\'zgarishi bilan darhol ConcurrentModificationException tashlaydi. Fail-Safe iterator (masalan, CopyOnWriteArrayList) to\'plamning klon nusxasi ustida ishlaydi va xato tashlamaydi.',
      difficulty: 'Hard'
    },
    {
      id: 306,
      question: 'HashSet qanday ishlaydi?',
      answer: 'HashSet ichki qismida elementlarni kalit sifatida saqlaydigan HashMap-dan foydalanadi. Qiymat sifatida esa har doim bir xil PRESENT nomli dummy ob\'ekt qo\'yiladi. Shuning uchun u ham noyoblikni kafolatlaydi.',
      difficulty: 'Medium'
    },
    {
      id: 307,
      question: 'Queue va Stack farqlari nimada?',
      answer: 'Queue (Navbat) - FIFO (First In First Out) tamoyilida ishlaydi (birinchi kirgan birinchi chiqadi). Stack (Stek) - LIFO (Last In First Out) tamoyilida ishlaydi (oxirgi kirgan birinchi chiqadi).',
      difficulty: 'Easy'
    },
    {
      id: 308,
      question: 'Amaliy savol: HashMap-ga mutable (o\'zgaruvchan) kalit qo\'yilsa nima bo\'ladi?',
      answer: 'Agar HashMap-da kalit sifatida ishlatilgan ob\'ekt o\'zgartirilsa, uning hashCode() qiymati ham o\'zgaradi. Natijada siz keyinchalik o\'sha kalit orqali qiymatni topa olmaysiz, chunki HashMap uni mutlaqo boshqa bucket-dan qidiradi. Shuning uchun kalitlar har doim immutable (String, Integer) bo\'lishi shart.',
      difficulty: 'Hard'
    }
  ],
  sql: [
    {
      id: 401,
      question: 'SQL va uning asosiy buyruqlar guruhlari qaysilar?',
      answer: 'SQL (Structured Query Language) - relyatsion bazalar bilan ishlash tili. Guruhlar: DDL (Data Definition: CREATE, ALTER, DROP), DML (Data Manipulation: SELECT, INSERT, UPDATE, DELETE), DCL (Data Control: GRANT, REVOKE), TCL (Transaction Control: COMMIT, ROLLBACK).',
      difficulty: 'Easy'
    },
    {
      id: 402,
      question: 'WHERE va HAVING o\'rtasidagi farq nima?',
      answer: 'WHERE - yakka qatorlarni filtrlash uchun GROUP BY-dan oldin bajariladi. HAVING - guruhlangan guruh natijalarini filtrlash uchun GROUP BY-dan keyin ishlaydi va aggregate funksiyalar (SUM, AVG, COUNT) bilan ishlatilishi mumkin.',
      difficulty: 'Medium'
    },
    {
      id: 403,
      question: 'INNER JOIN va LEFT JOIN farqi nima?',
      answer: 'INNER JOIN - faqat ikkala jadvalda ham bir-biriga mos keluvchi bog\'langan qatorlarni qaytaradi. LEFT JOIN - chap jadvaldagi barcha qatorlarni va o\'ng jadvaldan mos kelganlarini qaytaradi (o\'ng tomonda moslik topilmasa null bo\'ladi).',
      difficulty: 'Easy'
    },
    {
      id: 404,
      question: 'PRIMARY KEY va UNIQUE constraint farqi nimada?',
      answer: 'PRIMARY KEY jadvaldagi qatorni noyob qiladi, null qiymat qabul qilmaydi va bitta jadvalda faqat 1 ta bo\'ladi. UNIQUE constraint ham ustundagi qiymatlarni noyob qiladi, lekin null qiymat qabul qilishi mumkin va jadvalda bir nechta bo\'lishi mumkin.',
      difficulty: 'Easy'
    },
    {
      id: 405,
      question: 'Tranzaksiyadagi ACID xususiyatlari nima?',
      answer: 'Atomicity - tranzaksiya yo to\'liq bajariladi, yoki umuman bajarilmaydi. Consistency - tranzaksiyadan keyin ma\'lumotlar yaxlitligi buzilmaydi. Isolation - parallel tranzaksiyalar bir-biriga xalaqit bermaydi. Durability - tranzaksiya tugagach, natijalar tizim buzilsa ham saqlanib qoladi.',
      difficulty: 'Medium'
    },
    {
      id: 406,
      question: 'Database Index nima va u qanday ishlaydi?',
      answer: 'Index - jadvalda ma\'lumot qidirishni tezlashtirish uchun maxsus tuzilma (odatda B-Tree). U kitob oxiridagi mundarijaga o\'xshaydi. Ustunga indeks qo\'yilsa qidiruv tezlashadi, lekin ma\'lumot yozish (INSERT, UPDATE) biroz sekinlashadi.',
      difficulty: 'Medium'
    },
    {
      id: 407,
      question: 'TRUNCATE va DELETE farqi nimada?',
      answer: 'DELETE - DML buyrug\'i bo\'lib, qatorlarni shart asosida o\'chiradi, rollback qilish mumkin va triggerlarni ishga tushiradi. TRUNCATE - DDL buyrug\'i bo\'lib, butun jadvalni tozalaydi, rollback qilib bo\'lmaydi (tranzaksiyasiz), triggerlar ishlamaydi va ancha tez ishlaydi.',
      difficulty: 'Medium'
    },
    {
      id: 408,
      question: 'Amaliy savol: N+1 so\'rovi (Query) muammosi nima va u qanday hal qilinadi?',
      answer: 'N+1 muammosi - relyatsiyaga ega ob\'ektlarni yuklashda bazaga juda ko\'p ortiqcha so\'rov yuborilishi. Masalan, 10 ta postni olib, ularning har birining avtorini alohida so\'rov bilan yuklash (jami 1 + 10 ta so\'rov). Hal qilish: SQL-da JOIN FETCH yoki Spring-da EntityGraph ishlatish orqali barcha ma\'lumotlarni bitta so\'rovda olib kelish.',
      difficulty: 'Hard'
    }
  ],
  jdbc: [
    {
      id: 501,
      question: 'JDBC nima va uning asosiy vazifasi qanday?',
      answer: 'JDBC (Java Database Connectivity) - Java dasturlarining relyatsion ma\'lumotlar ombori (RDBMS) bilan muloqot qilishi uchun standart API. U drayverlar yordamida bazaga ulanish, SQL so\'rovlarni bajarish va natijalarni olish imkonini beradi.',
      difficulty: 'Easy'
    },
    {
      id: 502,
      question: 'Statement va PreparedStatement farqi nimada?',
      answer: 'Statement so\'rovlarni har safar bazada qaytadan kompilyatsiya qiladi va SQL Injection xavfi bor. PreparedStatement esa so\'rovni oldindan kompilyatsiya qiladi (pre-compiled), parametrlarni xavfsiz joylashtiradi va tezroq ishlaydi.',
      difficulty: 'Medium'
    },
    {
      id: 503,
      question: 'JDBC-da SQL Injection-dan qanday himoyalanish mumkin?',
      answer: 'Har doim PreparedStatement-dan foydalanish va dinamik SQL yozishda String birlashtirish (+) o\'rniga so\'roq belgilari (?) yordamida parametrlarni yuklash orqali himoyalaniladi.',
      difficulty: 'Easy'
    },
    {
      id: 504,
      question: 'Connection Pool (Ulanishlar hovuzi) nima?',
      answer: 'Bazaga har safar yangi ulanish yaratish juda qimmat (resurs talab qiluvchi) jarayon. Connection Pool (masalan HikariCP) oldindan bir nechta ulanishlarni tayyorlab qo\'yadi va kerak bo\'lganda dasturga berib, ishlatib bo\'lingach qaytarib oladi.',
      difficulty: 'Medium'
    },
    {
      id: 505,
      question: 'ResultSet nima va undan ma\'lumot qanday olinadi?',
      answer: 'ResultSet - bajarilgan SQL so\'rovi natijasida qaytgan ma\'lumotlar jadvali. next() metodi yordamida qatorlar bo\'ylab siljiladi va getInt(), getString() kabi metodlar bilan ustun qiymatlari olinadi.',
      difficulty: 'Easy'
    },
    {
      id: 506,
      question: 'Batch Processing (Paketli ishlov berish) nima va u nega kerak?',
      answer: 'Batch Processing - bir nechta SQL buyruqlarini bazaga bittalab emas, balki guruhlab (bitta paketda) yuborish. Bu tarmoq trafigini va bazaga murojaatlar sonini sezilarli darajada kamaytiradi va tezlikni oshiradi.',
      difficulty: 'Medium'
    },
    {
      id: 507,
      question: 'execute(), executeQuery() va executeUpdate() farqlari qanday?',
      answer: 'executeQuery() faqat SELECT uchun ishlatiladi va ResultSet qaytaradi. executeUpdate() INSERT, UPDATE, DELETE uchun ishlatiladi va ta\'sir qilgan qatorlar sonini (int) qaytaradi. execute() esa har qanday SQL uchun ishlatiladi (boolean qaytaradi).',
      difficulty: 'Medium'
    },
    {
      id: 508,
      question: 'Amaliy savol: JDBC tranzaksiyasini qanday boshqarish mumkin?',
      answer: 'JDBC-da tranzaksiyani boshqarish uchun connection ob\'ektida connection.setAutoCommit(false) qilinadi. Barcha operatsiyalar muvaffaqiyatli tugasa connection.commit() chaqiriladi. Agar birorta xatolik yuz bersa, catch blokida connection.rollback() chaqiriladi.',
      difficulty: 'Hard'
    }
  ],
  postgresql: [
    {
      id: 601,
      question: 'PostgreSQL nima va uning boshqa RDBMS-lardan afzalligi nima?',
      answer: 'PostgreSQL - kuchli, ochiq kodli ob\'ekt-relyatsion ma\'lumotlar ombori tizimi (ORDBMS). Afzalligi: JSONB kabi no-SQL formatlarni qo\'llashi, kengayuvchanligi, yuqori darajadagi ACID muvofiqligi va murakkab so\'rovlarni tezkor qayta ishlashi.',
      difficulty: 'Easy'
    },
    {
      id: 602,
      question: 'JSON va JSONB ma\'lumot turlari farqi nima?',
      answer: 'JSON matn formatida saqlaydi, har safar o\'qishda parsing talab qiladi (yozish tez, o\'qish sekin). JSONB esa binar formatda saqlaydi, indekslashni qo\'llaydi va juda tez o\'qiladi (yozish biroz sekinroq, lekin tavsiya etiladi).',
      difficulty: 'Medium'
    },
    {
      id: 603,
      question: 'MVCC (Multi-Version Concurrency Control) nima?',
      answer: 'MVCC - PostgreSQL-ning parallelizm mexanizmi. Bazadagi qatorni yozish va o\'qish jarayonlari bir-birini bloklamasligi uchun har bir tranzaksiya ma\'lumotning o\'ziga xos versiyasini ko\'radi. Bu bazani juda tez va blokirovkalarsiz ishlashini ta\'minlaydi.',
      difficulty: 'Hard'
    },
    {
      id: 604,
      question: 'PostgreSQL-da serial va bigserial turlari nima?',
      answer: 'Serial turlari haqiqiy ma\'lumot turi emas. Bu avtomatik ravishda ketma-ketlik (sequence) yaratib, ustunga avtomatik oshib boruvchi (auto-increment) qiymat berish uchun qulay sintaktik yordamchidir.',
      difficulty: 'Easy'
    },
    {
      id: 605,
      question: 'VACUUM buyrug\'i nima vazifani bajaradi?',
      answer: 'MVCC tufayli o\'chirilgan yoki yangilangan qatorlar xotirada "o\'lik qatorlar" (dead tuples) bo\'lib qoladi. VACUUM buyrug\'i ushbu o\'lik joylarni tozalaydi va operatsion tizim yoki yangi ma\'lumotlar uchun bo\'shatadi.',
      difficulty: 'Medium'
    },
    {
      id: 606,
      question: 'Common Table Expressions (CTE) yoki WITH nima?',
      answer: 'CTE - murakkab SQL so\'rovlarini osonroq va tushunarli qilish uchun vaqtincha natijaviy jadvallar yaratish imkoniyati. U so\'rov boshida WITH yordamida e\'lon qilinadi.',
      difficulty: 'Medium'
    },
    {
      id: 607,
      question: 'View va Materialized View farqi nimada?',
      answer: 'View - virtual jadval bo\'lib, so\'rov chaqirilganda bazada SQL qaytadan bajariladi (ma\'lumot saqlamaydi). Materialized View esa so\'rov natijasini xotiraga jismonan yozib qo\'yadi va refresh qilinmaguncha o\'zgarmaydi (juda tez o\'qiladi).',
      difficulty: 'Hard'
    },
    {
      id: 608,
      question: 'Amaliy savol: PostgreSQL-da upsert (insert or update) qanday bajariladi?',
      answer: 'PostgreSQL-da upsert bajarish uchun INSERT INTO ... ON CONFLICT (noyob_ustun) DO UPDATE SET ... sintaksisidan foydalaniladi. Bu dublikat kalit xatolarining oldini oladi.',
      difficulty: 'Medium'
    }
  ],
  springboot: [
    {
      id: 701,
      question: 'Spring Boot nima va u an\'anaviy Spring-dan nimasi bilan farq qiladi?',
      answer: 'Spring Boot - bu Spring loyihalarini tez va minimal konfiguratsiya bilan sozlash va ishga tushirish uchun framework. Farqi: an\'anaviy Spring-da XML yoki Java orqali ko\'plab sozlamalar (web.xml, DispatcherServlet) talab etiladi. Spring Boot esa auto-configuration va embedded server (Tomcat) taqdim etadi.',
      difficulty: 'Easy'
    },
    {
      id: 702,
      question: 'Dependency Injection (DI) va Inversion of Control (IoC) nima?',
      answer: 'IoC - ob\'ektlarni yaratish va boshqarish nazoratini dasturchidan framework (IoC Container) zimmasiga o\'tkazish. DI - ushbu ob\'ektlarning bog\'liqliklarini (dependencies) container tomonidan avtomatik ravishda ob\'ektga taqdim etilishi (inject qilinishi).',
      difficulty: 'Medium'
    },
    {
      id: 703,
      question: 'Spring Bean scope-lari qaysilar va ularning farqi nima?',
      answer: '1. Singleton (default) - butun loyihada bitta bean ob\'ekti. 2. Prototype - har safar chaqirilganda yangi ob\'ekt. 3. Request - har HTTP request uchun yangi ob\'ekt. 4. Session - har bir user session uchun bitta ob\'ekt.',
      difficulty: 'Medium'
    },
    {
      id: 704,
      question: '@Component, @Service va @Repository farqi nima?',
      answer: 'Uchchalasi ham sinfni Spring Bean sifatida IoC-da ro\'yxatga oladi. @Component - umumiy bean-lar uchun. @Service - biznes-mantiq (service layer) sinflari uchun. @Repository - baza bilan ishlovchi sinflar uchun bo\'lib, u ma\'lumotlar ombori xatoliklarini Spring DataAccessException-ga o\'giradi.',
      difficulty: 'Easy'
    },
    {
      id: 705,
      question: '@Autowired nima va qaysi injection turi eng afzal?',
      answer: '@Autowired bean bog\'liqligini avtomatik ulab beradi. Injection turlari: Field, Setter va Constructor injection. Eng afzali Constructor injection hisoblanadi, chunki u sinfni test qilishni osonlashtiradi va maydonlarni final qilish imkonini beradi.',
      difficulty: 'Medium'
    },
    {
      id: 706,
      question: 'Spring Boot-da Auto-Configuration qanday ishlaydi?',
      answer: 'Auto-configuration class path-dagi kutubxonalarga qarab loyihani avtomatik sozlaydi. Masalan, agar classpath-da H2 yoki PostgreSQL drayveri aniqlansa, u avtomatik DataSource bean-ini yaratadi. Buni @EnableAutoConfiguration yoki @SpringBootApplication boshqaradi.',
      difficulty: 'Hard'
    },
    {
      id: 707,
      question: 'Spring Boot Profiles nima va u nima uchun kerak?',
      answer: 'Profiles turli xil muhitlar (development, testing, production) uchun alohida sozlamalarni (masalan, turli xil bazalar yoki portlar) ishlatish imkonini beradi. Masalan, application-dev.properties yoki application-prod.properties.',
      difficulty: 'Easy'
    },
    {
      id: 708,
      question: 'Amaliy savol: Spring Boot loyihasining ishlash tezligi va monitoringini qanday amalga oshirish mumkin?',
      answer: 'Buning uchun Spring Boot Actuator kutubxonasidan foydalaniladi. U `/actuator/health`, `/actuator/metrics` kabi endpoint-lar orqali loyihaning umumiy holati va xotira sarfini monitoring qilish imkonini beradi.',
      difficulty: 'Medium'
    }
  ],
  rest_api: [
    {
      id: 801,
      question: 'REST API nima va REST constraint-lari qaysilar?',
      answer: 'REST (Representational State Transfer) - web xizmatlar yaratish uchun arxitektura uslubi. Cheklovlari (constraints): Client-Server ajratilishi, Stateless (holatsiz), Cacheable (keshlanuvchi), Uniform Interface (standart interfeys), Layered System (qatlamli tizim).',
      difficulty: 'Easy'
    },
    {
      id: 802,
      question: 'HTTP metodlari qaysilar va ulardan qaysilari xavfsiz (Safe) va idempotent?',
      answer: 'GET, HEAD - safe va idempotent. PUT, DELETE - safe emas, lekin idempotent (ko\'p chaqirilsa ham natija bir xil). POST, PATCH - safe ham, idempotent ham emas (har safar yangi holat yaratishi mumkin).',
      difficulty: 'Medium'
    },
    {
      id: 803,
      question: 'Mashhur HTTP Status kodlari guruhlari nima?',
      answer: '1xx (Informational), 2xx (Success: 200 OK, 201 Created), 3xx (Redirection: 301, 302), 4xx (Client Error: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found), 5xx (Server Error: 500 Internal Server Error).',
      difficulty: 'Easy'
    },
    {
      id: 804,
      question: '@PathVariable va @RequestParam farqi nimada?',
      answer: '@PathVariable - o\'zgaruvchini URL path ichidan oladi (masalan, `/users/{id}`). @RequestParam - o\'zgaruvchini URL query string parametridan oladi (masalan, `/users?page=1`).',
      difficulty: 'Easy'
    },
    {
      id: 805,
      question: 'Idempotent HTTP metodi nima degani?',
      answer: 'Idempotent metod - bir xil parametrlar bilan bir necha bor chaqirilganda ham server holatiga va natijasiga birinchi chaqiruv bilan bir xil ta\'sir qiladigan metod. Masalan, ob\'ektni o\'chirish (DELETE) yoki to\'liq yangilash (PUT).',
      difficulty: 'Medium'
    },
    {
      id: 806,
      question: 'API Versioning (versiyalash) qanday amalga oshiriladi?',
      answer: 'API versiyalashning bir necha usuli bor: 1. URI orqali (`/api/v1/users`). 2. Query parameter orqali (`/api/users?version=1`). 3. Custom Header orqali (`X-API-Version: 1`). 4. Accept header (Media Type) orqali.',
      difficulty: 'Medium'
    },
    {
      id: 807,
      question: 'Statelessness (holatsizlik) deganda nima tushuniladi?',
      answer: 'Stateless API-da server mijozning hech qanday sessiya holatini saqlamaydi. Mijozdan kelgan har bir so\'rov to\'liq va mustaqil bo\'lishi, o\'zida identifikatsiya va avtorizatsiya ma\'lumotlarini (masalan, JWT token) saqlashi shart.',
      difficulty: 'Medium'
    },
    {
      id: 808,
      question: 'Amaliy savol: REST controller-da exception-larni markazlashgan holda qanday tutish mumkin?',
      answer: 'Spring Boot-da bunga erishish uchun `@ControllerAdvice` yoki `@RestControllerAdvice` annotatsiyali global sinf yaratiladi va unda muayyan xatoliklar uchun `@ExceptionHandler` annotatsiyali metodlar yoziladi.',
      difficulty: 'Hard'
    }
  ],
  hibernate: [
    {
      id: 901,
      question: 'Hibernate nima va ORM nima?',
      answer: 'ORM (Object-Relational Mapping) - ob\'ektlar (Java sinflari) va jadvallar (MB jadvallari) o\'rtasida ko\'prik o\'rnatuvchi texnologiya. Hibernate - Java Persistence API (JPA) spetsifikatsiyasini amalga oshiruvchi eng mashhur ORM framework-dir.',
      difficulty: 'Easy'
    },
    {
      id: 902,
      question: 'Hibernate ob\'ektlarining holatlari (Entity States) qaysilar?',
      answer: '1. Transient - yangi yaratilgan, hali bazaga saqlanmagan ob\'ekt. 2. Persistent (Managed) - bazada bor va tranzaksiya nazoratida bo\'lgan ob\'ekt. 3. Detached - tranzaksiyadan uzilgan, lekin ID-si bor ob\'ekt. 4. Removed - o\'chirilish uchun belgilangan ob\'ekt.',
      difficulty: 'Hard'
    },
    {
      id: 903,
      question: 'Lazy va Eager yuklash (FetchType) farqi nimada?',
      answer: 'Lazy loading - bog\'langan ob\'ektlar faqat ularga to\'g\'ridan-to\'g\'ri murojaat qilingandagina bazadan yuklanadi. Eager loading - bog\'langan ob\'ektlar asosiy ob\'ekt bilan birga darhol bazadan so\'rab olinadi.',
      difficulty: 'Medium'
    },
    {
      id: 904,
      question: 'Hibernate-da Birinchi darajali (L1) va Ikkinchi darajali (L2) kesh farqlari qanday?',
      answer: 'L1 kesh - Session darajasida bo\'lib, u har doim yoniq bo\'ladi va bitta sessiya doirasidagi takroriy so\'rovlarni keshlaydi. L2 kesh - SessionFactory darajasida bo\'lib, barcha sessiyalar uchun umumiy va uni qo\'shimcha sozlash orqali yoqish kerak (masalan, Ehcache).',
      difficulty: 'Hard'
    },
    {
      id: 905,
      question: 'Cascade turlari nima uchun ishlatiladi?',
      answer: 'Cascade (vorisiy ta\'sir) ota ob\'ekt ustida bajarilgan operatsiyalar (saqlash, o\'chirish, yangilash) unga bog\'langan bola ob\'ektlarga ham avtomatik uzatilishini ta\'minlaydi (masalan, CascadeType.ALL).',
      difficulty: 'Medium'
    },
    {
      id: 906,
      question: 'Hibernate-da Session va SessionFactory nima?',
      answer: 'SessionFactory - butun dastur uchun bitta yaratiladigan, og\'ir va thread-safe bo\'lgan konfiguratsiya ob\'ekti. Session - bazaga ulanishni ta\'minlovchi, qisqa umrli va thread-safe bo\'lmagan ob\'ekt bo\'lib, u SessionFactory-dan olinadi.',
      difficulty: 'Medium'
    },
    {
      id: 907,
      question: 'Dirty Checking nima?',
      answer: 'Dirty checking - Hibernate tranzaksiya tugashida (commit bo\'lishida) managed holatdagi ob\'ektlar maydonini tekshiradi va agar biron bir o\'zgarish aniqlasa, avtomatik ravishda UPDATE SQL so\'rovini generatsiya qilib bazaga yuboradi (dasturchi majburan save() chaqirishi shart emas).',
      difficulty: 'Hard'
    },
    {
      id: 908,
      question: 'Amaliy savol: @OneToMany aloqasini qanday to\'g\'ri loyihalash kerak?',
      answer: 'Samarali bo\'lishi uchun ikki tomonlama (bidirectional) bog\'lanish yaratish, bola tomonda `@ManyToOne` va `@JoinColumn` yozish, ota tomonda esa `@OneToMany(mappedBy = "...")` yozish va `FetchType.LAZY` qo\'llash lozim.',
      difficulty: 'Medium'
    }
  ],
  git: [
    {
      id: 1001,
      question: 'Git nima va u markazlashgan tizimlardan (SVN) qanday farq qiladi?',
      answer: 'Git - bu taqsimlangan (distributed) versiyalarni boshqarish tizimi. SVN-da barcha tarix markaziy serverda turadi. Git-da esa har bir dasturchining kompyuterida butun loyiha tarixi va reposining to\'liq nusxasi (kloni) bo\'ladi, bu esa internetsiz va tez ishlash imkonini beradi.',
      difficulty: 'Easy'
    },
    {
      id: 1002,
      question: 'git merge va git rebase farqi nimada?',
      answer: 'git merge - ikkita tarmoqni birlashtiradi va yangi "merge commit" yaratadi (tarixni chiziqli qilmaydi, lekin xavfsiz). git rebase - joriy tarmoqdagi commit-larni maqsadli tarmoqning oxiriga o\'tkazadi va chiziqli toza tarix yaratadi (tarixni qaytadan yozadi).',
      difficulty: 'Medium'
    },
    {
      id: 1003,
      question: 'git reset va git revert farqlari qanday?',
      answer: 'git reset commit-lar tarixini butunlay o\'chirib tashlaydi (orqaga qaytaradi, xavfli). git revert esa xatolik yuz bergan commit-ga teskari bo\'lgan yangi commit yaratadi, bu esa umumiy tarixni buzmaydi va jamoada ishlash uchun xavfsiz.',
      difficulty: 'Medium'
    },
    {
      id: 1004,
      question: 'Merge Conflict (Birlashish to\'qnashuvi) nima va u qanday hal qilinadi?',
      answer: 'Merge conflict ikkita dasturchi bitta faylning ayni bir qatoriga turli xil o\'zgarishlar kiritganda yuz beradi. Hal qilish: fayl ochiladi, Git qo\'ygan maxsus belgilar (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) topiladi, kerakli kod tanlanadi va ortiqchalari o\'chirilib, qaytadan commit qilinadi.',
      difficulty: 'Easy'
    },
    {
      id: 1005,
      question: 'git stash nima uchun ishlatiladi?',
      answer: 'git stash - joriy tarmoqdagi tugallanmagan va commit qilinmagan o\'zgarishlarni vaqtincha xotiraga saqlab, ishchi papkani tozalash imkonini beradi. Keyinchalik `git stash pop` orqali saqlangan o\'zgarishlarni qaytarib olish mumkin.',
      difficulty: 'Easy'
    },
    {
      id: 1006,
      question: 'git pull va git fetch farqi nima?',
      answer: 'git fetch faqat uzoqdagi (remote) o\'zgarishlarni yuklab oladi, lekin joriy kodingizga birlashtirmaydi. git pull esa fetch qiladi va ortidan avtomatik ravishda joriy tarmoqqa birlashtiradi (fetch + merge).',
      difficulty: 'Medium'
    },
    {
      id: 1007,
      question: 'git fork va git clone farqi nima?',
      answer: 'git fork - GitHub kabi platformalarda boshqa birovning loyihasidan o\'zingiz uchun to\'liq nusxa nusxalash (serverda). git clone - mavjud repositoriy nusxasini o\'z lokal kompyuteringizga yuklab olish.',
      difficulty: 'Easy'
    },
    {
      id: 1008,
      question: 'Amaliy savol: Bir nechta commits yozib yuborildi, lekin oxirgi commit matnida imloviy xato ketdi. Uni qanday tuzatish mumkin?',
      answer: 'Agar oxirgi commit hali serverga push qilinmagan bo\'lsa, `git commit --amend -m "Yangi to\'g\'ri matn"` buyrug\'i orqali oxirgi commit nomini osonlikcha o\'zgartirish mumkin.',
      difficulty: 'Medium'
    }
  ],
  security_jwt: [
    {
      id: 1101,
      question: 'Spring Security-da Authentication va Authorization farqi nimada?',
      answer: 'Authentication (Identifikatsiya) - tizimga kirayotgan foydalanuvchining shaxsini tasdiqlash (Kim u?). Authorization (Ruxsat berish) - tasdiqlangan foydalanuvchining tizimdagi huquqlarini tekshirish (U nima qila oladi?).',
      difficulty: 'Easy'
    },
    {
      id: 1102,
      question: 'JWT nima va u qanday qismlardan iborat?',
      answer: 'JWT (JSON Web Token) - xavfsiz ma\'lumot uzatish uchun ixcham va mustaqil token formatidir. U 3 qismdan iborat bo\'lib nuqta (.) bilan ajratiladi: Header (algoritm va tur), Payload (foydalanuvchi ma\'lumotlari - claims), Signature (token haqiqiyligini tekshirish uchun imzo).',
      difficulty: 'Medium'
    },
    {
      id: 1103,
      question: 'Sessiyaga asoslangan (Session-based) va Tokenga asoslangan (JWT) xavfsizlik farqi nima?',
      answer: 'Session-based tizimda server har bir foydalanuvchi sessiyasini o\'z xotirasida (RAM yoki DB) saqlaydi (stateful). JWT tizimida esa server hech narsani saqlamaydi (stateless). Barcha ma\'lumot token ichida bo\'ladi va har bir so\'rovda yuboriladi, bu esa gorizontal kengayishni osonlashtiradi.',
      difficulty: 'Medium'
    },
    {
      id: 1104,
      question: 'Spring Security Filter Chain nima?',
      answer: 'Filter Chain - kelayotgan har bir HTTP so\'rovni controller-ga yetib borguncha tekshiradigan filtrlar zanjiri (masalan, SecurityContextPersistenceFilter, UsernamePasswordAuthenticationFilter). Ular xavfsizlik qoidalarini bosqichma-bosqich qo\'llaydi.',
      difficulty: 'Hard'
    },
    {
      id: 1105,
      question: 'JWT xavfsizligida Refresh Token nima va u nega kerak?',
      answer: 'Access Token muddati xavfsizlik uchun odatda juda qisqa bo\'ladi (masalan, 15 daqiqa). Foydalanuvchi har safar tizimdan chiqib ketmasligi uchun muddati uzoqroq bo\'lgan Refresh Token ishlatiladi. Access Token tugagach, Refresh Token orqali yangi Access Token olinadi.',
      difficulty: 'Medium'
    },
    {
      id: 1106,
      question: 'CORS va CSRF nima?',
      answer: 'CORS (Cross-Origin Resource Sharing) - brauzerlar xavfsizligi bo\'lib, boshqa domain-dan kelgan so\'rovlarni bloklaydi. CSRF (Cross-Site Request Forgery) - foydalanuvchi nomidan uning ruxsatisiz so\'rovlar yuborish hujumi. JWT ishlatilganda stateless bo\'lgani uchun CSRF-dan tabiiy ravishda himoyalangan bo\'ladi (agar token cookie-da emas, localStorage-da saqlansa).',
      difficulty: 'Hard'
    },
    {
      id: 1107,
      question: 'BCrypt nima va u parollarni saqlashda nega ishlatiladi?',
      answer: 'BCrypt - parollarni xavfsiz saqlash uchun ishlatiladigan hashing funksiyasi. U parolni qaytarib bo\'lmaydigan qilib hashlaydi va har safar noyob "salt" (tuz) qo\'shadi. Bu "Rainbow table" hujumlariga qarshi juda mustahkam.',
      difficulty: 'Easy'
    },
    {
      id: 1108,
      question: 'Amaliy savol: JWT token o\'g\'irlansa nima qilish mumkin?',
      answer: 'JWT stateless bo\'lgani uchun uni serverda bekor qilish qiyin. Buning oldini olish uchun: 1. Token yashash muddatini juda qisqa qilish. 2. Shubhali holatlar yoki parolni o\'zgartirishda refresh token-larni bekor qilish. 3. Redis-da qora ro\'yxat (blacklist) tashkil etish.',
      difficulty: 'Hard'
    }
  ],
  docker: [
    {
      id: 1201,
      question: 'Docker nima va u Virtual Mashinalardan (VM) qanday farq qiladi?',
      answer: 'Docker - dasturlarni container-larda paketlash va ishga tushirish uchun platforma. VM-larda har bir loyiha uchun alohida to\'liq Operatsion Tizim (OS) talab etiladi (og\'ir). Docker container-lari esa ota OS yadrosini (kernel) baham ko\'radi, shuning uchun juda yengil va soniyalarda ishga tushadi.',
      difficulty: 'Easy'
    },
    {
      id: 1202,
      question: 'Dockerfile-da COPY va ADD buyruqlari farqi nimada?',
      answer: 'COPY faqat lokal fayllarni container ichiga ko\'chiradi (xavfsiz va tavsiya etiladi). ADD esa qo\'shimcha ravishda masofaviy URL-lardan fayl yuklashi va arxiv fayllarini (tar, zip) container ichida avtomatik ochishi (extract) mumkin.',
      difficulty: 'Medium'
    },
    {
      id: 1203,
      question: 'Docker Image va Container o\'rtasidagi farq nima?',
      answer: 'Docker Image - bu loyihani ishga tushirish uchun barcha kerakli fayl va sozlamalarni o\'z ichiga olgan o\'zgarmas shablon (klass kabi). Docker Container - ushbu Image-ning ishlayotgan nusxasi (ob\'ekt kabi).',
      difficulty: 'Easy'
    },
    {
      id: 1204,
      question: 'Docker Volumes nima uchun ishlatiladi?',
      answer: 'Container-lar o\'chirilganda ularning ichidagi barcha ma\'lumotlar ham o\'chib ketadi (ephemeral). Ma\'lumotlarni saqlab qolish va host tizim bilan ulashish uchun Docker Volumes (ma\'lumotlar ombori uchun juda muhim) ishlatiladi.',
      difficulty: 'Medium'
    },
    {
      id: 1205,
      question: 'Docker Compose nima?',
      answer: 'Docker Compose - bir nechta container-lardan iborat ko\'p-konteynerli ilovalarni (masalan, Spring Boot + PostgreSQL + Redis) bitta `docker-compose.yml` konfiguratsiya fayli orqali oson boshqarish va ishga tushirish imkonini beruvchi vosita.',
      difficulty: 'Easy'
    },
    {
      id: 1206,
      question: 'Dockerfile-da CMD va ENTRYPOINT farqi nimada?',
      answer: 'CMD container ishga tushganda bajariladigan standart buyruqni belgilaydi va uni ishga tushirishda osongina inkor qilish (overwrite) mumkin. ENTRYPOINT buyrug\'ini esa osongina o\'zgartirib bo\'lmaydi va container har doim shu buyruq bilan ishlaydi, CMD esa unga parametr sifatida xizmat qiladi.',
      difficulty: 'Hard'
    },
    {
      id: 1207,
      question: 'Multi-Stage Build (Ko\'p bosqichli qurilish) nima?',
      answer: 'Bu Dockerfile hajmini sezilarli darajada kamaytirish usuli. Birinchi bosqichda loyiha kompilyatsiya qilinadi (masalan, Maven yordamida jar hosil qilinadi) va ikkinchi bosqichda faqat hosil bo\'lgan kichik jar fayli minimal JRE image-ga joylanadi (Mavensiz).',
      difficulty: 'Hard'
    },
    {
      id: 1208,
      question: 'Amaliy savol: Ishlayotgan Docker container ichiga qanday kirish mumkin?',
      answer: 'Konteyner terminaliga kirish uchun `docker exec -it <container_name_or_id> /bin/bash` (yoki `/bin/sh`) buyrug\'idan foydalaniladi.',
      difficulty: 'Medium'
    }
  ],
  oracle_db: [
    {
      id: 1301,
      question: 'Oracle Database relyatsion arxitekturasining asosiy xususiyatlari qaysilar?',
      answer: 'Oracle - yuqori darajada himoyalangan, katta enterprise loyihalar uchun mo\'ljallangan tijorat relyatsion ma\'lumotlar bazasi. U yuqori darajadagi parallelizm, ma\'lumotlarni klasterlash (RAC), PL/SQL tillarini qo\'llab-quvvatlash va kuchli zaxiralash tizimlariga ega.',
      difficulty: 'Easy'
    },
    {
      id: 1302,
      question: 'PL/SQL nima?',
      answer: 'PL/SQL (Procedural Language/SQL) - Oracle Database-ning SQL tili ustiga qurilgan protsedurali kengaytmasi. U o\'zgaruvchilar, sikllar, shart operatorlari yordamida murakkab dasturlar, stored procedures, functions va trigger-lar yozish imkonini beradi.',
      difficulty: 'Medium'
    },
    {
      id: 1303,
      question: 'Oracle-da ROWNUM va ROW_NUMBER() farqi nima?',
      answer: 'ROWNUM - bu natija qaytayotgan vaqtda har bir qatorga dinamik beriladigan psevdo-ustun (ORDER BY-dan oldin ishlaydi). ROW_NUMBER() esa tahliliy funksiya bo\'lib, ma\'lum bir ustun bo\'yicha tartiblangan qatorlar tartib raqamini aniq belgilaydi.',
      difficulty: 'Medium'
    },
    {
      id: 1304,
      question: 'Tablespace va Datafile nima?',
      answer: 'Tablespace - Oracle-dagi mantiqiy ma\'lumotlar ombori birligi. Datafile esa operatsion tizimdagi jismoniy fayllardir. Bitta Tablespace o\'z ichiga bir yoki bir nechta Datafile-larni qamrab olishi mumkin.',
      difficulty: 'Hard'
    },
    {
      id: 1305,
      question: 'Oracle DUAL jadvali nima?',
      answer: 'DUAL - Oracle-da avtomat yaratiladigan va bitta qator, bitta ustundan iborat bo\'lgan maxsus dummy jadval. U tizim funksiyalarini (masalan, `SELECT SYSDATE FROM DUAL;`) yoki arifmetik hisob-kitoblarni tezkor tekshirish uchun ishlatiladi.',
      difficulty: 'Easy'
    },
    {
      id: 1306,
      question: 'Redo Log va Archive Log fayllari nima vazifani bajaradi?',
      answer: 'Redo Log - bazaga kiritilgan barcha o\'zgarishlarni darhol yozib boruvchi jismoniy fayllar (avariya holatida ma\'lumotni tiklash uchun). Archive Log esa to\'lib qolgan Redo Log fayllarining arxivlangan nusxalari bo\'lib, uzoq muddatli tiklashda xizmat qiladi.',
      difficulty: 'Hard'
    },
    {
      id: 1307,
      question: 'Oracle Database Partitioning (Bo\'limlarga ajratish) nima?',
      answer: 'Katta hajmdagi jadvallarni tezkor ishlashi uchun ularni mantiqiy qismlarga (masalan, yillar bo\'yicha bo\'limlarga) ajratish texnologiyasi. Bu qidiruv tezligini va boshqarishni juda osonlashtiradi.',
      difficulty: 'Medium'
    },
    {
      id: 1308,
      question: 'Amaliy savol: Oracle-da trigger yozishda `:NEW` va `:OLD` nimani anglatadi?',
      answer: 'Trigger ichida `:NEW` o\'zgarishdan keyingi yangi qiymatga ega qatorni anglatadi. `:OLD` esa o\'zgarishdan oldingi eski qiymatlarga ega qatorni anglatadi (INSERT-da faqat `:NEW`, DELETE-da faqat `:OLD` bo\'ladi).',
      difficulty: 'Medium'
    }
  ],
  microservices: [
    {
      id: 1401,
      question: 'Monolit va Mikroservis arxitekturasi farqi nimada?',
      answer: 'Monolit arxitekturada butun dastur (frontend, backend, DB) bitta kod bazasida va bitta loyiha sifatida yig\'iladi. Mikroservisda esa ilova kichik, bir-biridan mustaqil, o\'z ma\'lumotlar bazasiga ega bo\'lgan va tarmoq orqali aloqa qiluvchi alohida xizmatlarga bo\'linadi.',
      difficulty: 'Easy'
    },
    {
      id: 1402,
      question: 'Service Discovery (Eureka) nima va u nima uchun kerak?',
      answer: 'Mikroservislar dinamik ravishda turli xil IP va portlarda ishga tushishi mumkin. Service Discovery (masalan Netflix Eureka) har bir mikroservisning qayerda ishlayotganini (IP va portini) ro\'yxatga olib turuvchi reyestrdir. Boshqa servislar unga qarab kerakli servis manzilini topadi.',
      difficulty: 'Medium'
    },
    {
      id: 1403,
      question: 'API Gateway (Gateway) vazifasi nima?',
      answer: 'API Gateway - mijozlar (client) va ichki mikroservislar o\'rtasidagi yagona kirish nuqtasi. U kelayotgan so\'rovlarni kerakli servisga yo\'naltiradi (routing), avtorizatsiyani tekshiradi, log yozadi va yuklamalarni taqsimlaydi.',
      difficulty: 'Medium'
    },
    {
      id: 1404,
      question: 'Circuit Breaker pattern nima va Resilience4j nima uchun kerak?',
      answer: 'Agar biron bir mikroservis ishdan chiqsa, unga bog\'langan boshqa servislar ham so\'rov kutib bloklanib qolishi mumkin. Circuit Breaker (masalan Resilience4j) nosoz servisga so\'rov yuborishni vaqtincha to\'xtatib, o\'rniga tezkor "fallback" (zaxira) javobini qaytaradi va butun tizim qulashining oldini oladi.',
      difficulty: 'Hard'
    },
    {
      id: 1405,
      question: 'Saga Pattern nima?',
      answer: 'Mikroservislarda har bir servis o\'z bazasiga ega bo\'lgani uchun umumiy ACID tranzaksiyasini qo\'llab bo\'lmaydi. Saga Pattern - bir nechta mikroservislar bo\'ylab tranzaksiyalarni boshqarish usuli. Agar biror qadamda xatolik bo\'lsa, orqaga qaytarish uchun kompensatsion tranzaksiyalar ishga tushiriladi.',
      difficulty: 'Hard'
    },
    {
      id: 1406,
      question: 'Distributed Tracing (Taqsimlangan kuzatuv) nima?',
      answer: 'Bitta mijoz so\'rovi o\'nlab mikroservislar zanjiri bo\'ylab o\'tishi mumkin. Muammolarni va sekinlashishni aniqlash uchun har bir so\'rovga yagona Trace ID beriladi va uning yo\'li Zipkin yoki Sleuth yordamida vizual tarzda kuzatiladi.',
      difficulty: 'Medium'
    },
    {
      id: 1407,
      question: 'Mikroservislar orasidagi aloqa turlari qaysilar?',
      answer: '1. Sinxron aloqa - mijoz javobni kutib turadi (masalan, REST HTTP, gRPC). 2. Asinxron aloqa - xabar yuboriladi va javob kutilmaydi (masalan, xabarlar navbati Message Broker: Apache Kafka, RabbitMQ).',
      difficulty: 'Medium'
    },
    {
      id: 1408,
      question: 'Amaliy savol: Mikroservisda konfiguratsiyalarni markazlashgan holda qanday boshqarish mumkin?',
      answer: 'Buning uchun Spring Cloud Config Server-dan foydalaniladi. U barcha servislar sozlamalarini bitta Git reposida yoki markaziy serverda saqlab, servislarga ishga tushish vaqtida tarqatadi.',
      difficulty: 'Medium'
    }
  ],
  kafka: [
    {
      id: 1501,
      question: 'Apache Kafka nima va uning an\'anaviy Message Broker-lardan farqi nima?',
      answer: 'Apache Kafka - taqsimlangan, yuqori tezlikka ega ma\'lumotlar oqimini (Event Streaming) qayta ishlash platformasi. Farqi: an\'anaviy broker-lar (ActiveMQ) xabar o\'qilgach uni o\'chiradi. Kafka esa xabarlarni diskda ma\'lum muddatgacha saqlab turadi, shuning uchun ko\'plab iste\'molchilar bir xil xabarni qayta o\'qiy oladi.',
      difficulty: 'Medium'
    },
    {
      id: 1502,
      question: 'Kafka Topic va Partition nima?',
      answer: 'Topic (Mavzu) - xabarlar yuboriladigan mantiqiy kanal (jadval kabi). Partition (Bo\'lim) - gorizontal kengayish va yuqori tezlik uchun Topic-ning jismonan bo\'lingan qismlari bo\'lib, ular turli xil serverlarda (brokers) saqlanishi mumkin.',
      difficulty: 'Medium'
    },
    {
      id: 1503,
      question: 'Producer va Consumer farqi nima?',
      answer: 'Producer (Ishlab chiqaruvchi) - loyihadan xabarlarni generatsiya qilib Kafka Topic-lariga yuboruvchi qism. Consumer (Iste\'molchi) - Kafka-dagi xabarlarni doimiy o\'qib, qayta ishlovchi dasturiy qism.',
      difficulty: 'Easy'
    },
    {
      id: 1504,
      question: 'Consumer Group (Iste\'molchilar guruhi) nima uchun kerak?',
      answer: 'Consumer Group parallel ravishda xabarlarni o\'qishni ta\'minlaydi. Bitta guruh ichidagi bir nechta Consumer-lar bitta Topic-ning turli Partition-laridan xabarlarni taqsimlab o\'qiydi, bu esa o\'qish tezligini oshiradi.',
      difficulty: 'Hard'
    },
    {
      id: 1505,
      question: 'Kafka-da Message Retention (xabarlarni saqlash muddati) nima?',
      answer: 'Kafka-da xabarlar o\'qilgandan keyin ham o\'chib ketmaydi. Ular ma\'lum vaqt (muddati odatda 7 kun) yoki ma\'lum hajm bo\'yicha saqlanadi. Bu muddat tugagach, eski xabarlar avtomatik tozalab boriladi.',
      difficulty: 'Easy'
    },
    {
      id: 1506,
      question: 'ZooKeeper va KRaft farqi nima?',
      answer: 'An\'anaviy ravishda Apache Kafka brokerlarni muvofiqlashtirish va metadata saqlash uchun ZooKeeper-ga tayanar edi. Yangi arxitektura (KRaft) esa metadata boshqaruvini Kafka-ning o\'zi ichiga oladi, bu esa ZooKeeper-ga bo\'lgan ehtiyojni yo\'qotadi va tizimni tezlashtiradi.',
      difficulty: 'Hard'
    },
    {
      id: 1507,
      question: 'Idempotent Producer nima?',
      answer: 'Idempotent Producer - tarmoqdagi nosozliklar tufayli bir xil xabar qayta yuborilgan taqdirda ham, Kafka-da faqat bitta nusxa yozilishini kafolatlaydigan sozlama. Bu dublikat xabarlar tarqalishining oldini oladi.',
      difficulty: 'Hard'
    },
    {
      id: 1508,
      question: 'Amaliy savol: Kafka Consumer offset-ni qachon commit qilishi kerak?',
      answer: 'Offset - iste\'molchi qaysi xabargacha o\'qiganini bildiruvchi indeks. Xabarni to\'liq qayta ishlab bo\'lingandan keyin offset commit qilinishi shart (at-least-once yoki exactly-once ishlashi uchun). Agar avtomatik commit yoqilgan bo\'lsa (auto-commit), xabar to\'liq ishlanmasdan oldin xato yuz bersa ma\'lumot yo\'qotilishi mumkin.',
      difficulty: 'Hard'
    }
  ]
};
