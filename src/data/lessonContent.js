export const lessonContent = {
  1: {
    0: {
      theory: `Java - Sun Microsystems (hozirgi Oracle) tomonidan 1995-yilda yaratilgan obyekt yo'naltirilgan dasturlash tili. Java platformadan mustaqil bo'lib, "Write Once, Run Anywhere" (bir marta yoz, hamma joyda ishga tushur) prinsipiga amal qiladi.

Java asosiy xususiyatlari:
- **Platformadan mustaqillik:** Java bytecode formatida kompilyatsiya qilinadi va har qanday platformada JVM orqali ishlaydi
- **Obyekt yo'naltirilgan:** Hamma narsa object (obyekt) sifatida qaraladi
- **Avtomatik xotira boshqaruvi:** Garbage Collection orqali avtomatik xotira tozalash
- **Kuchli tipizatsiya:** Compile-time va runtime da type checking
- **Multithreading:** Bir nechta thread'larni parallel ishga tushirish imkoniyati
- **Xavfsizlik:** Built-in security features

Java qo'llanish sohalari:
- Web applications (Spring Boot, Jakarta EE)
- Mobile applications (Android)
- Desktop applications (JavaFX)
- Big Data (Hadoop, Spark)
- Enterprise applications`,
      codeExamples: [
        {
          code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
          explanation: "Java dasturlarining asosiy tuzilishi. main method - dasturning kirish nuqtasi."
        },
        {
          code: `// Kompilyatsiya
javac HelloWorld.java

// Ishga tushurish
java HelloWorld`,
          explanation: "Java dasturini kompilyatsiya qilish va ishga tushurish."
        }
      ],
      exercises: [
        {
          task: "Hello World dasturini yarating va ishga tushuring",
          solution: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`
        },
        {
          task: "O'zingiz ism va familyangizni chiqaruvchi dastur yozing",
          solution: `public class MyInfo {
    public static void main(String[] args) {
        System.out.println("Ism: [Ismingiz]");
        System.out.println("Familya: [Familyangiz]");
    }
}`
        }
      ],
      keyPoints: ["Java platformadan mustaqil", "JVM bytecode ni mashina kodiga aylantiradi", "main method - dasturning kirish nuqtasi", "System.out.println() - consolega chiqarish"]
    },
    1: {
      theory: `Java platformasi 3 asosiy komponentdan iborat:

**JDK (Java Development Kit):**
- Dasturchilar uchun to'liq toolkit
- Kompilyator (javac), JVM, va boshqa vositalarni o'z ichiga oladi
- Dasturlash uchun kerak bo'ladigan barcha narsani o'z ichiga oladi

**JRE (Java Runtime Environment):**
- Java dasturlarini ishga tushirish uchun muhit
- JVM va Java class library'laridan iborat
- Dasturlash uchun emas, faqat ishga tushirish uchun

**JVM (Java Virtual Machine):**
- Java bytecode'ni mashina kodiga aylantiruvchi virtual mashina
- Har bir platformaga mos JVM mavjud
- Garbage Collection, Security, va boshqa xizmatlarni ta'minlaydi

Ishlash tartibi:
1. Source code (.java) → Compiler → Bytecode (.class)
2. Bytecode (.class) → JVM → Machine Code
3. Machine Code → Processor → Execution`,
      codeExamples: [
        {
          code: `// JDK o'rnatildi
java -version
javac -version

// JRE o'rnatildi
java -version`,
          explanation: "JDK va JRE versiyalarini tekshirish"
        },
        {
          code: `// JVM memory structure
// 1. Heap - object'lar saqlanadi
// 2. Stack - method call'lar va local variables
// 3. Method Area - class metadata
// 4. PC Register - current instruction
// 5. Native Method Stack - native method'lar`,
          explanation: "JVM memory structure tushuntirish"
        }
      ],
      exercises: [
        {
          task: "O'zingiz kompyuteringizda Java versiyasini tekshiring",
          solution: `Terminalda quyidagi buyruqni yozing:
java -version`
        },
        {
          task: "JDK, JRE va JVM o'rtasidagi farqni tushuntiring",
          solution: "JDK - dasturlash toolkit, JRE - ishga tushirish muhit, JVM - virtual mashina"
        }
      ],
      keyPoints: ["JDK = JRE + Development Tools", "JRE = JVM + Library", "JVM = bytecode interpreter", "Platformadan mustaqillik JVM orqali"]
    },
    2: {
      theory: `Java dasturlash uchun IDE (Integrated Development Environment) o'rnatish kerak. Eng mashhur IDE'lar:

**IntelliJ IDEA:**
- JetBrains tomonidan yaratilgan
- Professional va Community versiyalari bor
- Smart code completion, refactoring, debugging
- Maven va Gradle integratsiyasi

**VS Code:**
- Microsoft tomonidan yaratilgan
- Free va open-source
- Java Extension Pack orqali Java support
- Yengil va tez

**Eclipse:**
- Eclipse Foundation tomonidan
- Free va open-source
- Keng plugin ekosistemi

**NetBeans:**
- Apache tomonidan
- Free va open-source
- Java SE va EE support

O'rnatish jarayoni:
1. IntelliJ IDEA: jetbrains.com/idea/download
2. VS Code: code.visualstudio.com + Java Extension Pack
3. JDK o'rnatish: oracle.com/java/technologies/downloads/`,
      codeExamples: [
        {
          code: `// IntelliJ IDEA da yangi project yaratish:
// File → New → Project → Java
// JDK tanlash → Project nomi berish → Create

// VS Code da:
// Folder ochish → .java fayl yaratish
// Java Extension Pack o'rnatish`,
          explanation: "IDE da project yaratish"
        }
      ],
      exercises: [
        {
          task: "IntelliJ IDEA yoki VS Code o'rnating",
          solution: "IntelliJ IDEA: jetbrains.com/idea/download dan yuklab oling"
        },
        {
          task: "IDE da yangi Java project yarating",
          solution: "IntelliJ: File → New → Project → Java → Create"
        }
      ],
      keyPoints: ["IntelliJ IDEA - professional IDE", "VS Code - yengil editor", "JDK o'rnatish shart", "Extension'lar yordam"]
    },
    3: {
      theory: `Variable (o'zgaruvchi) - ma'lumot saqlash uchun ishlatiladigan konteyner. Java'da variable e'lon qilish:

**Syntax:**
type variableName = value;

**Variable turlari:**
- Local variable - method ichida e'lon qilinadi
- Instance variable - class ichida, method tashqarisida
- Static variable - class variable, barcha object'lar uchun umumiy

**Naming conventions:**
- Kichik harfdan boshlanadi
- CamelCase ishlatiladi (myVariable)
- Faqat harflar, raqamlar, $ va _ belgilari
- Kalit so'zlar ishlatilmaydi

**Variable e'lon qilish:**
int age = 25;
String name = "Ali";
double salary = 50000.50;
boolean isActive = true;

**Variable scope:**
- Local variable - faqat method ichida
- Instance variable - object ichida
- Static variable - class darajasida`,
      codeExamples: [
        {
          code: `public class Variables {
    // Instance variable
    int instanceVar = 10;
    
    // Static variable
    static int staticVar = 20;
    
    public static void main(String[] args) {
        // Local variable
        int localVar = 30;
        
        System.out.println("Local: " + localVar);
        System.out.println("Static: " + staticVar);
    }
}`,
          explanation: "Har turdagi variable e'lon qilish"
        },
        {
          code: `// Variable initialization
int age;           // Declaration
age = 25;          // Initialization

int score = 100;   // Declaration + initialization

// Multiple variables
int a = 1, b = 2, c = 3;`,
          explanation: "Variable initialization usullari"
        }
      ],
      exercises: [
        {
          task: "5 ta turli turdagi variable e'lon qiling va ularni chiqaring",
          solution: `int age = 25;
String name = "Ali";
double salary = 50000.50;
boolean isActive = true;
char grade = 'A';

System.out.println(age);
System.out.println(name);
System.out.println(salary);
System.out.println(isActive);
System.out.println(grade);`
        },
        {
          task: "O'zingiz ism, yosh, va shahringizni saqlaydigan variable'lar yarating",
          solution: `String name = "Ali";
int age = 25;
String city = "Toshkent";`
        }
      ],
      keyPoints: ["Variable - ma'lumot saqlash konteyneri", "Local, instance, static turlari", "Naming conventions - camelCase", "Scope - variable'ning foydalanish sohasi"]
    },
    4: {
      theory: `Java'da data turlari 2 asosiy guruhga bo'linadi:

**Primitive Data Types (8 ta):**
- **byte:** 8-bit, -128 to 127
- **short:** 16-bit, -32,768 to 32,767
- **int:** 32-bit, -2^31 to 2^31-1
- **long:** 64-bit, -2^63 to 2^63-1
- **float:** 32-bit, single precision
- **double:** 64-bit, double precision
- **char:** 16-bit, Unicode character
- **boolean:** true yoki false

**Reference Data Types:**
- **String:** Character sequence
- **Array:** Bir xil turdagi elementlar to'plami
- **Class:** User-defined types
- **Interface:** Abstract type
- **Enum:** Constant values

**Type conversion:**
- **Widening (implicit):** kichikdan kattaga (int → long)
- **Narrowing (explicit):** kattadan kichikga (long → int)`,
      codeExamples: [
        {
          code: `// Primitive types
byte b = 100;
short s = 1000;
int i = 100000;
long l = 1000000L;
float f = 3.14f;
double d = 3.14159;
char c = 'A';
boolean bool = true;

// Reference types
String str = "Hello";
int[] arr = {1, 2, 3};`,
          explanation: "Primitive va reference data turlari"
        },
        {
          code: `// Widening (implicit)
int i = 100;
long l = i;  // Automatic conversion

// Narrowing (explicit)
long l = 100L;
int i = (int) l;  // Manual casting`,
          explanation: "Type conversion"
        }
      ],
      exercises: [
        {
          task: "Har bir primitive data type uchun misol yarating",
          solution: `byte b = 100;
short s = 1000;
int i = 100000;
long l = 1000000L;
float f = 3.14f;
double d = 3.14159;
char c = 'A';
boolean bool = true;`
        },
        {
          task: "int ni double ga aylantiring",
          solution: `int i = 100;
double d = i;  // Implicit conversion`
        }
      ],
      keyPoints: ["8 ta primitive type", "Reference types - object'lar", "Widening - automatic", "Narrowing - manual casting"]
    },
    5: {
      theory: `Java'da input/output (I/O) Scanner class orqali amalga oshiriladi.

**Scanner class:**
- java.util package'dan keladi
- Foydalanuvchidan input olish uchun ishlatiladi
- Turli data turlarini o'qish imkoniyati

**Scanner method'lari:**
- nextInt() - integer o'qish
- nextDouble() - double o'qish
- nextLine() - string o'qish
- next() - word o'qish
- nextBoolean() - boolean o'qish

**Output:**
- System.out.print() - yangi qatorsiz chiqarish
- System.out.println() - yangi qator bilan chiqarish
- System.out.printf() - format bilan chiqarish

**Exception handling:**
- InputMismatchException - noto'g'ri input
- NoSuchElementException - input tugadi`,
      codeExamples: [
        {
          code: `import java.util.Scanner;

public class InputExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ismingizni kiriting: ");
        String name = scanner.nextLine();
        
        System.out.print("Yoshingizni kiriting: ");
        int age = scanner.nextInt();
        
        System.out.println("Ism: " + name);
        System.out.println("Yosh: " + age);
        
        scanner.close();
    }
}`,
          explanation: "Scanner bilan input olish"
        },
        {
          code: `// Output usullari
System.out.print("Hello ");      // Yangi qatorsiz
System.out.println("World");    // Yangi qator bilan
System.out.printf("Ism: %s, Yosh: %d", "Ali", 25);  // Format bilan`,
          explanation: "Output usullari"
        }
      ],
      exercises: [
        {
          task: "Foydalanuvchidan ism va yosh so'rang va chiqaring",
          solution: `Scanner scanner = new Scanner(System.in);
System.out.print("Ism: ");
String name = scanner.nextLine();
System.out.print("Yosh: ");
int age = scanner.nextInt();
System.out.println("Ism: " + name + ", Yosh: " + age);`
        },
        {
          task: "3 ta son oling va ularning yig'indisini chiqaring",
          solution: `Scanner scanner = new Scanner(System.in);
System.out.print("1-son: ");
int a = scanner.nextInt();
System.out.print("2-son: ");
int b = scanner.nextInt();
System.out.print("3-son: ");
int c = scanner.nextInt();
System.out.println("Yig'indi: " + (a + b + c));`
        }
      ],
      keyPoints: ["Scanner class - input olish", "nextLine(), nextInt() kabi method'lar", "System.out.println() - output", "Scanner.close() - resource tozalash"]
    },
    6: {
      theory: `Java'da operatorlar - operand'lar ustida amallarni bajaruvchi belgilar.

**Arifmetik operatorlar:**
- + (qo'shish)
- - (ayirish)
- * (ko'paytirish)
- / (bo'lish)
- % (modulus - qoldiq)

**Relational operatorlar:**
- == (teng)
- != (teng emas)
- > (katta)
- < (kichik)
- >= (katta yoki teng)
- <= (kichik yoki teng)

**Logical operatorlar:**
- && (AND)
- || (OR)
- ! (NOT)

**Bitwise operatorlar:**
- & (bitwise AND)
- | (bitwise OR)
- ^ (bitwise XOR)
- ~ (bitwise NOT)
- << (left shift)
- >> (right shift)

**Assignment operatorlar:**
- = (simple assignment)
- +=, -=, *=, /=, %= (compound assignment)

**Increment/Decrement:**
- ++ (increment)
- -- (decrement)
- Prefix (++a) va Postfix (a++)`,
      codeExamples: [
        {
          code: `int a = 10, b = 5;

// Arifmetik
int sum = a + b;      // 15
int diff = a - b;     // 5
int prod = a * b;     // 50
int quot = a / b;     // 2
int mod = a % b;      // 0

// Relational
boolean eq = a == b;  // false
boolean gt = a > b;   // true

// Logical
boolean and = (a > 5) && (b < 10);  // true
boolean or = (a > 15) || (b < 10); // true`,
          explanation: "Operator misollari"
        },
        {
          code: `// Increment/Decrement
int x = 5;
x++;      // x = 6 (postfix)
++x;      // x = 7 (prefix)

// Compound assignment
int y = 10;
y += 5;   // y = 15
y *= 2;   // y = 30`,
          explanation: "Increment/Decrement va compound assignment"
        }
      ],
      exercises: [
        {
          task: "2 ta sonning yig'indisi, ko'paytmasi va bo'linmasini hisoblang",
          solution: `int a = 10, b = 5;
int sum = a + b;
int prod = a * b;
int quot = a / b;`
        },
        {
          task: "Sonning juft yoki toq ekanini aniqlang",
          solution: `int num = 7;
if (num % 2 == 0) {
    System.out.println("Juft");
} else {
    System.out.println("Toq");
}`
        }
      ],
      keyPoints: ["Arifmetik, Relational, Logical operatorlar", "Increment/Decrement - prefix/postfix", "Compound assignment", "Operator precedence"]
    },
    7: {
      theory: `Java'da shartli operatorlar - shartlarga qarab kodni bajarish.

**if-else:**
if (condition) {
    // condition true bo'lsa
} else {
    // condition false bo'lsa
}

**if-else if-else:**
if (condition1) {
    // condition1 true
} else if (condition2) {
    // condition2 true
} else {
    // barcha false
}

**switch:**
switch (expression) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}

**Ternary operator:**
condition ? value1 : value2

**Comparison operators:**
- ==, !=, >, <, >=, <=
- equals() - object'lar uchun`,
      codeExamples: [
        {
          code: `int age = 18;

if (age >= 18) {
    System.out.println("Katta");
} else {
    System.out.println("Kichik");
}`,
          explanation: "if-else misoli"
        },
        {
          code: `int score = 85;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}`,
          explanation: "if-else if-else misoli"
        },
        {
          code: `int day = 3;

switch (day) {
    case 1:
        System.out.println("Dushanba");
        break;
    case 2:
        System.out.println("Seshanba");
        break;
    case 3:
        System.out.println("Chorshanba");
        break;
    default:
        System.out.println("Boshqa");
}`,
          explanation: "switch misoli"
        }
      ],
      exercises: [
        {
          task: "Sonning musbat, manfiy yoki 0 ekanini aniqlang",
          solution: `int num = -5;
if (num > 0) {
    System.out.println("Musbat");
} else if (num < 0) {
    System.out.println("Manfiy");
} else {
    System.out.println("Nol");
}`
        },
        {
          task: "Bahoga qarab letter grade aniqlang (90-90=A, 80-89=B, 70-79=C, <70=F)",
          solution: `int score = 85;
if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 70) {
    System.out.println("C");
} else {
    System.out.println("F");
}`
        }
      ],
      keyPoints: ["if-else - shartli bajarish", "switch - ko'p shartlar", "ternary operator - qisqa if", "break - switch'da muhim"]
    },
    8: {
      theory: `Java'da loops (sikllar) - kodni takrorlash uchun ishlatiladi.

**for loop:**
for (initialization; condition; increment) {
    // code
}

**while loop:**
while (condition) {
    // code
}

**do-while loop:**
do {
    // code
} while (condition);

**Enhanced for loop (for-each):**
for (type variable : array) {
    // code
}

**break va continue:**
- break - loop'dan chiqish
- continue - keyingi iteratsiyaga o'tish

**Loop selection:**
- for loop - iteratsiya soni ma'lum bo'lsa
- while loop - shart asosida
- do-while - kamida bir marta bajarish kerak bo'lsa`,
      codeExamples: [
        {
          code: `// for loop
for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}

// while loop
int i = 1;
while (i <= 10) {
    System.out.println(i);
    i++;
}

// do-while loop
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 10);`,
          explanation: "Loop turlari"
        },
        {
          code: `// Enhanced for loop
int[] arr = {1, 2, 3, 4, 5};
for (int num : arr) {
    System.out.println(num);
}

// break va continue
for (int i = 1; i <= 10; i++) {
    if (i == 5) break;    // 5 da to'xtaydi
    if (i % 2 == 0) continue;  // Juftlarni o'tkazadi
    System.out.println(i);
}`,
          explanation: "Enhanced for loop va break/continue"
        }
      ],
      exercises: [
        {
          task: "1 dan 10 gacha bo'lgan sonlarni chiqaring",
          solution: `for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}`
        },
        {
          task: "1 dan 100 gacha bo'lgan juft sonlarni chiqaring",
          solution: `for (int i = 2; i <= 100; i += 2) {
    System.out.println(i);
}`
        },
        {
          task: "Array elementlarini enhanced for loop bilan chiqaring",
          solution: `int[] arr = {10, 20, 30, 40, 50};
for (int num : arr) {
    System.out.println(num);
}`
        }
      ],
      keyPoints: ["for loop - ma'lum iteratsiya", "while loop - shart asosida", "do-while - kamida bir marta", "break/continue - loop nazorati"]
    },
    9: {
      theory: `Java'da method (funksiya) - kodni qayta ishlatish uchun blok.

**Method syntax:**
returnType methodName(parameters) {
    // method body
    return value;
}

**Method turlari:**
- **void method** - qiymat qaytarmaydi
- **return type method** - qiymat qaytaradi

**Parameterlar:**
- Parameter - method qabul qiladigan qiymat
- Argument - methodga beriladigan qiymat

**Method overloading:**
- Xuddi shu nomli method'lar, lekin boshqa parameterlar
- Compile-time polymorphism

**Static method:**
- Class method
- Object yaratmasdan chaqirish mumkin

**Instance method:**
- Object method
- Object yaratish kerak

**Method qurilmasi:**
1. Access modifier
2. Return type
3. Method name
4. Parameters
5. Method body`,
      codeExamples: [
        {
          code: `// Void method
public void sayHello() {
    System.out.println("Hello!");
}

// Return type method
public int add(int a, int b) {
    return a + b;
}

// Static method
public static void staticMethod() {
    System.out.println("Static method");
}

// Method overloading
public int add(int a, int b) {
    return a + b;
}

public double add(double a, double b) {
    return a + b;
}`,
          explanation: "Method turlari va overloading"
        },
        {
          code: `// Method chaqirish
public class MethodExample {
    public static void main(String[] args) {
        sayHello();  // Static method
        add(5, 3);  // Method chaqirish
    }
    
    public static void sayHello() {
        System.out.println("Hello!");
    }
    
    public static int add(int a, int b) {
        return a + b;
    }
}`,
          explanation: "Method chaqirish"
        }
      ],
      exercises: [
        {
          task: "2 ta sonni qo'shadigan method yarating",
          solution: `public static int add(int a, int b) {
    return a + b;
}`
        },
        {
          task: "Sonning kvadratini hisoblaydigan method yarating",
          solution: `public static int square(int num) {
    return num * num;
}`
        },
        {
          task: "Method overloading misoli yarating",
          solution: `public int add(int a, int b) {
    return a + b;
}

public double add(double a, double b) {
    return a + b;
}`
        }
      ],
      keyPoints: ["Method - kod qayta ishlatish", "void vs return type", "Overloading - bir necha versiya", "Static vs Instance"]
    },
    10: {
      theory: `Java'da array - bir xil turdagi elementlar to'plami.

**Array declaration:**
type[] arrayName = new type[size];
type[] arrayName = {value1, value2, ...};

**Array properties:**
- Fixed size (o'zgarmas)
- Same type elements
- Index 0 dan boshlanadi
- length property - array uzunligi

**Array turlari:**
- 1D array (bir o'lchamli)
- 2D array (ikki o'lchamli)
- Multi-dimensional array

**Array operations:**
- Access: array[index]
- Modify: array[index] = value
- Length: array.length
- Loop: for, enhanced for

**Array class method'lari:**
- Arrays.sort() - tartiblash
- Arrays.toString() - stringga aylantirish
- Arrays.fill() - to'ldirish
- Arrays.copyOf() - nusxa olish`,
      codeExamples: [
        {
          code: `// Array declaration
int[] numbers = new int[5];
int[] arr = {1, 2, 3, 4, 5};

// Array initialization
numbers[0] = 10;
numbers[1] = 20;

// Array access
int first = arr[0];
int length = arr.length;

// Array iteration
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Enhanced for loop
for (int num : arr) {
    System.out.println(num);
}`,
          explanation: "Array asosiy operatsiyalar"
        },
        {
          code: `// 2D array
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// 2D array access
int element = matrix[1][2];  // 6

// 2D array iteration
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}`,
          explanation: "2D array"
        },
        {
          code: `import java.util.Arrays;

// Array method'lari
int[] arr = {5, 2, 8, 1, 9};

// Sort
Arrays.sort(arr);

// Stringga aylantirish
String str = Arrays.toString(arr);

// Fill
Arrays.fill(arr, 0);

// Copy
int[] copy = Arrays.copyOf(arr, arr.length);`,
          explanation: "Arrays class method'lari"
        }
      ],
      exercises: [
        {
          task: "5 ta elementli array yarating va elementlarini chiqaring",
          solution: `int[] arr = {10, 20, 30, 40, 50};
for (int num : arr) {
    System.out.println(num);
}`
        },
        {
          task: "Array elementlarini yig'indisini hisoblang",
          solution: `int[] arr = {10, 20, 30, 40, 50};
int sum = 0;
for (int num : arr) {
    sum += num;
}
System.out.println("Yig'indi: " + sum);`
        },
        {
          task: "Arrayni tartiblang (ascending)",
          solution: `import java.util.Arrays;
int[] arr = {5, 2, 8, 1, 9};
Arrays.sort(arr);`
        }
      ],
      keyPoints: ["Array - bir xil turdagi elementlar", "Fixed size", "Index 0 dan boshlanadi", "Arrays class - utility method'lar"]
    },
    11: {
      theory: `Java'da String - character sequence (matn). String immutable (o'zgarmas).

**String creation:**
String str1 = "Hello";  // String literal
String str2 = new String("Hello");  // String object

**String properties:**
- Immutable - o'zgarmas
- String pool - memory optimization
- Unicode support

**String method'lari:**
- length() - uzunlik
- charAt() - character olish
- substring() - qism olish
- concat() - birlashtirish
- toUpperCase() / toLowerCase() - katta/kichik
- trim() - bo'sh joylarni o'chirish
- equals() - solishtirish
- indexOf() - index topish
- replace() - almashtirish
- split() - bo'lish

**StringBuilder:**
- Mutable (o'zgaruvchan)
- Efficient string manipulation
- append(), insert(), delete() method'lari

**StringBuffer:**
- Thread-safe
- Synchronized operations`,
      codeExamples: [
        {
          code: `String str = "Hello World";

// length
int len = str.length();  // 11

// charAt
char ch = str.charAt(0);  // 'H'

// substring
String sub = str.substring(0, 5);  // "Hello"

// toUpperCase
String upper = str.toUpperCase();  // "HELLO WORLD"

// trim
String trimmed = "  Hello  ".trim();  // "Hello"

// concat
String result = str.concat("!");  // "Hello World!"`,
          explanation: "String method'lari"
        },
        {
          code: `// equals vs ==
String s1 = "Hello";
String s2 = "Hello";
String s3 = new String("Hello");

s1 == s2;        // true (same reference)
s1 == s3;        // false (different reference)
s1.equals(s3);   // true (same content)

// StringBuilder
StringBuilder sb = new StringBuilder();
sb.append("Hello");
sb.append(" ");
sb.append("World");
String result = sb.toString();  // "Hello World"`,
          explanation: "String comparison va StringBuilder"
        }
      ],
      exercises: [
        {
          task: "String uzunligini toping",
          solution: `String str = "Hello World";
int len = str.length();
System.out.println("Uzunlik: " + len);`
        },
        {
          task: "Stringni katta harfga aylantiring",
          solution: `String str = "hello";
String upper = str.toUpperCase();
System.out.println(upper);`
        },
        {
          task: "Ikkita stringni birlashtiring",
          solution: `String s1 = "Hello";
String s2 = "World";
String result = s1.concat(" ").concat(s2);
System.out.println(result);`
        }
      ],
      keyPoints: ["String - immutable", "String pool - memory optimization", "StringBuilder - mutable", "equals() - content comparison"]
    },
    12: {
      theory: `Java'da Math class - matematik amallar uchun utility class.

**Math class method'lari:**
- abs() - absolute value
- round() - yaxlitlash
- ceil() - yuqoriga yaxlitlash
- floor() - pastga yaxlitlash
- max() / min() - katta/kichik
- pow() - daraja
- sqrt() - ildiz
- random() - random son

**Trigonometric:**
- sin(), cos(), tan()
- asin(), acos(), atan()

**Constants:**
- PI - 3.14159...
- E - 2.71828...

**Random class:**
- nextInt() - random integer
- nextDouble() - random double
- nextBoolean() - random boolean

**Random class:**
- java.util.Random package
- More control over random generation`,
      codeExamples: [
        {
          code: `import java.lang.Math;

// Absolute value
int abs = Math.abs(-10);  // 10

// Round
long rounded = Math.round(3.7);  // 4

// Ceil (yuqoriga)
double ceil = Math.ceil(3.2);  // 4.0

// Floor (pastga)
double floor = Math.floor(3.8);  // 3.0

// Max/Min
int max = Math.max(10, 20);  // 20
int min = Math.min(10, 20);  // 10

// Power
double pow = Math.pow(2, 3);  // 8.0

// Square root
double sqrt = Math.sqrt(16);  // 4.0

// Constants
double pi = Math.PI;  // 3.14159...
double e = Math.E;   // 2.71828...`,
          explanation: "Math class method'lari"
        },
        {
          code: `import java.util.Random;

// Random class
Random random = new Random();

int randomInt = random.nextInt(100);  // 0-99
double randomDouble = random.nextDouble();  // 0.0-1.0
boolean randomBool = random.nextBoolean();  // true/false

// Math.random()
double random = Math.random();  // 0.0-1.0
int randomNum = (int)(Math.random() * 100);  // 0-99`,
          explanation: "Random class va Math.random()"
        }
      ],
      exercises: [
        {
          task: "Sonning absolute value'sini toping",
          solution: `int num = -15;
int abs = Math.abs(num);
System.out.println("Absolute: " + abs);`
        },
        {
          task: "Sonning kvadrat ildizini hisoblang",
          solution: `double num = 16;
double sqrt = Math.sqrt(num);
System.out.println("Ildiz: " + sqrt);`
        },
        {
          task: "1 dan 100 gacha random son yarating",
          solution: `int randomNum = (int)(Math.random() * 100) + 1;
System.out.println("Random: " + randomNum);`
        }
      ],
      keyPoints: ["Math class - matematik amallar", "abs(), round(), ceil(), floor()", "pow(), sqrt()", "Random class - random sonlar"]
    },
    13: {
      theory: `Java'da type casting - bir turdagi qiymatni boshqa turga aylantirish.

**Widening (Implicit) Casting:**
- Kichik turdan katta turga
- Automatic conversion
- No data loss
- byte → short → int → long → float → double

**Narrowing (Explicit) Casting:**
- Katta turdan kichik turga
- Manual conversion required
- Possible data loss
- double → float → long → int → short → byte

**Syntax:**
// Implicit
int i = 100;
long l = i;

// Explicit
double d = 100.5;
int i = (int) d;

**Casting rules:**
- boolean boshqa turga aylantirilmaydi
- char dan int ga aylantiriladi (ASCII value)
- int dan char ga aylantiriladi (casting required)

**Numeric promotion:**
- byte, short, char → int
- int → long → float → double`,
      codeExamples: [
        {
          code: `// Widening (Implicit)
byte b = 100;
short s = b;      // byte → short
int i = s;        // short → int
long l = i;       // int → long
float f = l;      // long → float
double d = f;     // float → double

// Narrowing (Explicit)
double d = 100.5;
float f = (float) d;      // double → float
long l = (long) f;        // float → long
int i = (int) l;          // long → int
short s = (short) i;      // int → short
byte b = (byte) s;        // short → byte`,
          explanation: "Widening va Narrowing casting"
        },
        {
          code: `// Data loss example
double d = 100.99;
int i = (int) d;  // 100 (decimal qism yo'qoladi)

// Char to int
char c = 'A';
int ascii = (int) c;  // 65

// Int to char
int num = 65;
char ch = (char) num;  // 'A'`,
          explanation: "Data loss va char casting"
        }
      ],
      exercises: [
        {
          task: "double ni int ga aylantiring",
          solution: `double d = 100.5;
int i = (int) d;
System.out.println("Int: " + i);`
        },
        {
          task: "int ni double ga aylantiring",
          solution: `int i = 100;
double d = i;
System.out.println("Double: " + d);`
        },
        {
          task: "char ni int ga aylantiring",
          solution: `char c = 'A';
int ascii = (int) c;
System.out.println("ASCII: " + ascii);`
        }
      ],
      keyPoints: ["Widening - automatic, no data loss", "Narrowing - manual, possible data loss", "(type) syntax", "boolean casting mumkin emas"]
    }
  },
  2: {
    0: {
      theory: `Java'da Class va Object - OOP asoslari.

**Class:**
- Object'lar uchun blueprint/shablon
- Properties (fields) va behavior (methods)
- Reusable code

**Object:**
- Class instance
- Class'dan yaratilgan narsa
- Memory'da joy egallaydi

**Class declaration:**
class ClassName {
    // fields
    // methods
    // constructors
}

**Object creation:**
ClassName obj = new ClassName();

**Class components:**
- **Fields (Instance variables)** - object properties
- **Methods** - object behavior
- **Constructors** - object initialization
- **Blocks** - initialization blocks
- **Nested classes** - class ichida class

**Object lifecycle:**
1. Declaration
2. Instantiation (new keyword)
3. Initialization (constructor)
4. Usage
5. Garbage collection (no longer referenced)`,
      codeExamples: [
        {
          code: `class Car {
    // Fields
    String brand;
    String color;
    int year;
    
    // Constructor
    public Car(String brand, String color, int year) {
        this.brand = brand;
        this.color = color;
        this.year = year;
    }
    
    // Method
    public void display() {
        System.out.println(brand + " " + color + " " + year);
    }
}

// Object creation
Car myCar = new Car("Toyota", "Red", 2023);
myCar.display();  // Toyota Red 2023`,
          explanation: "Class va Object misoli"
        },
        {
          code: `// Multiple objects
Car car1 = new Car("Toyota", "Red", 2023);
Car car2 = new Car("BMW", "Blue", 2024);
Car car3 = new Car("Mercedes", "Black", 2022);

car1.display();  // Toyota Red 2023
car2.display();  // BMW Blue 2024
car3.display();  // Mercedes Black 2022

// Each object has its own state`,
          explanation: "Ko'p object'lar yaratish"
        }
      ],
      exercises: [
        {
          task: "Student class yarating (name, age, grade fields)",
          solution: `class Student {
    String name;
    int age;
    String grade;
    
    public Student(String name, int age, String grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}`
        },
        {
          task: "Student class'dan 2 ta object yarating",
          solution: `Student s1 = new Student("Ali", 20, "A");
Student s2 = new Student("Vali", 21, "B");`
        }
      ],
      keyPoints: ["Class - blueprint", "Object - instance", "new keyword - object creation", "this keyword - current object"]
    },
    1: {
      theory: `Java'da Constructor - object initialization uchun maxsus method.

**Constructor xususiyatlari:**
- Class nomi bilan bir xil
- Return type yo'q (hatto void ham yo'q)
- Object yaratilganda avtomatik chaqiriladi
- Overloading mumkin

**Constructor turlari:**
1. **Default constructor** - parameter yo'q
2. **Parameterized constructor** - parameter bor
3. **Copy constructor** - boshqa object'dan nusxa

**Constructor rules:**
- Class nomi bilan bir xil bo'lishi kerak
- Return type bo'lmasligi kerak
- Overloading mumkin
- Bir nechta constructor bo'lishi mumkin

**Constructor chaining:**
- this() - shu class'dagi boshqa constructor
- super() - parent class constructor

**Constructor vs Method:**
- Constructor - object initialization
- Method - behavior
- Constructor class nomi bilan bir xil
- Constructor return type yo'q`,
      codeExamples: [
        {
          code: `class Person {
    String name;
    int age;
    
    // Default constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }
    
    // Parameterized constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Copy constructor
    public Person(Person other) {
        this.name = other.name;
        this.age = other.age;
    }
}

// Usage
Person p1 = new Person();  // Default
Person p2 = new Person("Ali", 25);  // Parameterized
Person p3 = new Person(p2);  // Copy`,
          explanation: "Constructor turlari"
        },
        {
          code: `class Box {
    int width;
    int height;
    int depth;
    
    // Constructor chaining
    public Box() {
        this(10, 10, 10);  // Calls parameterized
    }
    
    public Box(int width, int height, int depth) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
}

Box b1 = new Box();  // Calls default, which calls parameterized
Box b2 = new Box(20, 20, 20);  // Direct parameterized`,
          explanation: "Constructor chaining"
        }
      ],
      exercises: [
        {
          task: "Book class yarating (title, author, price) va constructor qo'shing",
          solution: `class Book {
    String title;
    String author;
    double price;
    
    public Book(String title, String author, double price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}`
        },
        {
          task: "Default va parameterized constructor qo'shing",
          solution: `public Book() {
    this.title = "Unknown";
    this.author = "Unknown";
    this.price = 0.0;
}

public Book(String title, String author, double price) {
    this.title = title;
    this.author = author;
    this.price = price;
}`
        }
      ],
      keyPoints: ["Constructor - object initialization", "Default vs Parameterized", "Overloading mumkin", "this() - constructor chaining"]
    },
    2: {
      theory: `Java'da Encapsulation - data va method'ni bir class'da birlashtirish va data'ni himoya qilish.

**Encapsulation prinsipi:**
- Data (fields) - private
- Methods - public
- Access via getter/setter methods

**Access modifiers:**
- **private** - faqat class ichida
- **public** - hamma joyda
- **protected** - class va subclass'lar
- **default** - package ichida

**Getter method:**
- Field qiymatini olish
- getFieldName() naming convention
- Return type field type bilan bir xil

**Setter method:**
- Field qiymatini o'zgartirish
- setFieldName() naming convention
- void return type
- Validation qo'shish mumkin

**Encapsulation afzaliklari:**
- Data hiding
- Flexibility
- Reusability
- Easy testing`,
      codeExamples: [
        {
          code: `class BankAccount {
    // Private fields
    private String accountNumber;
    private double balance;
    
    // Constructor
    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    // Getter
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Setter
    public void setBalance(double balance) {
        if (balance >= 0) {  // Validation
            this.balance = balance;
        }
    }
    
    // Deposit method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    // Withdraw method
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}`,
          explanation: "Encapsulation misoli"
        },
        {
          code: `// Usage
BankAccount account = new BankAccount("123456", 1000.0);

// Getter
System.out.println(account.getBalance());  // 1000.0

// Setter
account.setBalance(1500.0);

// Methods
account.deposit(500.0);   // balance = 2000.0
account.withdraw(300.0);  // balance = 1700.0`,
          explanation: "Encapsulation usage"
        }
      ],
      exercises: [
        {
          task: "Person class yarating (private name, age fields va getter/setter)",
          solution: `class Person {
    private String name;
    private int age;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
}`
        },
        {
          task: "Validation qo'shing (age 0 dan katta bo'lishi kerak)",
          solution: `public void setAge(int age) {
    if (age >= 0) {
        this.age = age;
    } else {
        System.out.println("Yosh 0 dan katta bo'lishi kerak");
    }
}`
        }
      ],
      keyPoints: ["Encapsulation - data hiding", "Private fields, public methods", "Getter/Setter pattern", "Validation qo'shish mumkin"]
    },
    3: {
      theory: `Java'da Inheritance - bitta class'dan boshqa class'ga properties va method'lar o'tkazish.

**Inheritance turlari:**
- **Single inheritance** - bitta parent
- **Multilevel inheritance** - zanjirsimon
- **Hierarchical inheritance** - bitta parent, ko'p child
- **Multiple inheritance** - interface orqali (class'lar uchun yo'q)

**extends keyword:**
class Child extends Parent {
    // child class
}

**Inheritance terminologiyasi:**
- **Super class / Parent class** - asosiy class
- **Sub class / Child class** - voris class
- **Reusability** - code qayta ishlatish
- **Method overriding** - parent method'ni qayta yozish

**super keyword:**
- super() - parent constructor chaqirish
- super.field - parent field
- super.method() - parent method

**Method overriding:**
- Child class'da parent method'ni qayta yozish
- @Override annotation
- Same signature (name, parameters, return type)`,
      codeExamples: [
        {
          code: `// Parent class
class Animal {
    String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public void eat() {
        System.out.println(name + " eats");
    }
    
    public void sleep() {
        System.out.println(name + " sleeps");
    }
}

// Child class
class Dog extends Animal {
    String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Parent constructor
        this.breed = breed;
    }
    
    @Override
    public void eat() {
        System.out.println(name + " eats dog food");
    }
    
    public void bark() {
        System.out.println(name + " barks");
    }
}

// Usage
Dog dog = new Dog("Rex", "German Shepherd");
dog.eat();    // Rex eats dog food (overridden)
dog.sleep();  // Rex sleeps (inherited)
dog.bark();   // Rex barks (child method)`,
          explanation: "Inheritance misoli"
        },
        {
          code: `// Multilevel inheritance
class Grandparent {
    public void grandparentMethod() {
        System.out.println("Grandparent method");
    }
}

class Parent extends Grandparent {
    public void parentMethod() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    public void childMethod() {
        System.out.println("Child method");
    }
}

Child child = new Child();
child.grandparentMethod();  // Inherited from Grandparent
child.parentMethod();        // Inherited from Parent
child.childMethod();         // Own method`,
          explanation: "Multilevel inheritance"
        }
      ],
      exercises: [
        {
          task: "Vehicle class yarating (brand, model) va Car class (extends Vehicle)",
          solution: `class Vehicle {
    String brand;
    String model;
    
    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }
    
    public void start() {
        System.out.println(brand + " " + model + " starts");
    }
}

class Car extends Vehicle {
    int doors;
    
    public Car(String brand, String model, int doors) {
        super(brand, model);
        this.doors = doors;
    }
}`
        },
        {
          task: "start() method'ni override qiling",
          solution: `@Override
public void start() {
    System.out.println(brand + " " + model + " car starts with key");
}`
        }
      ],
      keyPoints: ["Inheritance - code reusability", "extends keyword", "super keyword - parent reference", "Method overriding - qayta yozish"]
    },
    4: {
      theory: `Java'da Polymorphism - bir necha shaklda bir xil narsani ifodalash.

**Polymorphism turlari:**
1. **Compile-time (Static)**
   - Method overloading
   - Operator overloading (Java'da yo'q)

2. **Runtime (Dynamic)**
   - Method overriding
   - Object reference

**Method Overloading:**
- Xuddi shu nomli method'lar
- Boshqa parameterlar (soni, turi, tartibi)
- Compile-time polymorphism

**Method Overriding:**
- Child class'da parent method'ni qayta yozish
- Xuddi shu signature (name, parameters)
- Runtime polymorphism

**Upcasting va Downcasting:**
- Upcasting: Child → Parent (implicit)
- Downcasting: Parent → Child (explicit)

**instanceof operator:**
- Object type'ni tekshirish
- Class hierarchy'da ishlatiladi`,
      codeExamples: [
        {
          code: `// Method Overloading
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

Calculator calc = new Calculator();
calc.add(5, 3);        // int version
calc.add(5.5, 3.5);    // double version
calc.add(5, 3, 2);      // three parameter version`,
          explanation: "Method overloading"
        },
        {
          code: `// Method Overriding
class Animal {
    public void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    @Override
    public void sound() {
        System.out.println("Cat meows");
    }
}

// Runtime polymorphism
Animal animal1 = new Dog();
Animal animal2 = new Cat();

animal1.sound();  // Dog barks
animal2.sound();  // Cat meows`,
          explanation: "Method overriding va runtime polymorphism"
        },
        {
          code: `// Upcasting and Downcasting
Animal animal = new Dog();  // Upcasting (implicit)
Dog dog = (Dog) animal;    // Downcasting (explicit)

// instanceof
if (animal instanceof Dog) {
    Dog d = (Dog) animal;
    d.bark();
}`,
          explanation: "Upcasting, Downcasting, instanceof"
        }
      ],
      exercises: [
        {
          task: "Shape class yarating va Rectangle, Circle class'larini extends qiling (area() method override)",
          solution: `class Shape {
    public double area() {
        return 0;
    }
}

class Rectangle extends Shape {
    double width, height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double area() {
        return width * height;
    }
}

class Circle extends Shape {
    double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}`
        },
        {
          task: "Shape class'dan object yarating va area() chaqiring",
          solution: `Shape shape1 = new Rectangle(5, 3);
Shape shape2 = new Circle(4);

System.out.println(shape1.area());  // 15.0
System.out.println(shape2.area());  // 50.265...`
        }
      ],
      keyPoints: ["Overloading - compile-time", "Overriding - runtime", "Upcasting - implicit", "Downcasting - explicit"]
    },
    5: {
      theory: `Java'da Abstraction - implementation details'ni yashirish, faqat funksionallikni ko'rsatish.

**Abstraction turlari:**
1. **Abstract class**
   - abstract keyword
   - Abstract va concrete method'lar
   - Partial abstraction
   - Extends orqali meros olish

2. **Interface**
   - interface keyword
   - Faqat abstract method'lar (Java 8 gacha)
   - Full abstraction
   - Implements orqali

**Abstract class:**
- abstract keyword bilan e'lon qilinadi
- Abstract method'lar bo'lishi mumkin
- Concrete method'lar bo'lishi mumkin
- Constructor bo'lishi mumkin
- Instance variables bo'lishi mumkin
- Bitta class bitta abstract class'ni extend qilishi mumkin

**Abstract method:**
- abstract keyword
- Body yo'q (faqat signature)
- Child class'da implementatsiya qilishi kerak

**Interface:**
- interface keyword
- Faqat abstract method'lar (Java 8 gacha)
- Default method'lar (Java 8+)
- Static method'lar (Java 8+)
- Ko'p interface'ni implement qilish mumkin`,
      codeExamples: [
        {
          code: `// Abstract class
abstract class Shape {
    String color;
    
    public Shape(String color) {
        this.color = color;
    }
    
    // Abstract method
    public abstract double area();
    
    // Concrete method
    public void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Rectangle extends Shape {
    double width, height;
    
    public Rectangle(String color, double width, double height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double area() {
        return width * height;
    }
}

// Abstract class object yaratib bo'lmaydi
// Shape shape = new Shape();  // ERROR
Shape rectangle = new Rectangle("Red", 5, 3);  // OK`,
          explanation: "Abstract class"
        },
        {
          code: `// Interface
interface Drawable {
    void draw();  // Abstract method
}

interface Colorable {
    void setColor(String color);
}

class Circle implements Drawable, Colorable {
    double radius;
    String color;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
    }
}

Circle circle = new Circle(5);
circle.draw();
circle.setColor("Red");`,
          explanation: "Interface"
        }
      ],
      exercises: [
        {
          task: "Animal abstract class yarating (abstract sound() method)",
          solution: `abstract class Animal {
    String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    public abstract void sound();
    
    public void sleep() {
        System.out.println(name + " sleeps");
    }
}`
        },
        {
          task: "Dog class yarating va Animal'dan extend qiling",
          solution: `class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void sound() {
        System.out.println(name + " barks");
    }
}`
        }
      ],
      keyPoints: ["Abstract class - partial abstraction", "Interface - full abstraction", "Abstract method - body yo'q", "Multiple interface implementatsiya"]
    },
    6: {
      theory: `Java'da Interface - contract, class'lar uchun shablon.

**Interface xususiyatlari:**
- interface keyword bilan e'lon qilinadi
- Faqat abstract method'lar (Java 8 gacha)
- Variables implicitly public static final
- Methods implicitly public abstract
- Multiple inheritance support

**Interface declaration:**
interface InterfaceName {
    // constants
    // abstract methods
    // default methods (Java 8+)
    // static methods (Java 8+)
}

**Interface implementation:**
class ClassName implements InterfaceName {
    // method implementations
}

**Multiple interfaces:**
class ClassName implements Interface1, Interface2 {
    // implementations
}

**Interface vs Abstract class:**
- Interface - full abstraction, multiple inheritance
- Abstract class - partial abstraction, single inheritance

**Java 8+ interface features:**
- Default methods - default implementation
- Static methods - utility methods
- Private methods (Java 9+)`,
      codeExamples: [
        {
          code: `// Interface declaration
interface Animal {
    void eat();
    void sleep();
    
    // Default method (Java 8+)
    default void move() {
        System.out.println("Animal moves");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("Animal interface");
    }
}

// Implementation
class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog eats");
    }
    
    @Override
    public void sleep() {
        System.out.println("Dog sleeps");
    }
    
    // move() method optional (default implementation)
}

Dog dog = new Dog();
dog.eat();    // Implemented
dog.sleep();  // Implemented
dog.move();   // Default implementation
Animal.info();  // Static method`,
          explanation: "Interface declaration va implementation"
        },
        {
          code: `// Multiple interfaces
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("Duck flies");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck swims");
    }
}

Duck duck = new Duck();
duck.fly();
duck.swim();`,
          explanation: "Multiple interfaces"
        }
      ],
      exercises: [
        {
          task: "Playable interface yarating (play() method)",
          solution: `interface Playable {
    void play();
}`
        },
        {
          task: "MusicPlayer class yarating va Playable implement qiling",
          solution: `class MusicPlayer implements Playable {
    @Override
    public void play() {
        System.out.println("Playing music");
    }
}`
        }
      ],
      keyPoints: ["Interface - contract", "implements keyword", "Multiple inheritance support", "Default methods (Java 8+)"]
    },
    7: {
      theory: `Java'da Access Modifiers - class, method, field'lar kirish darajasini belgilaydi.

**Access modifiers:**
1. **public** - hamma joydan kirish mumkin
2. **protected** - class, subclass, va package ichida
3. **default (package-private)** - faqat package ichida
4. **private** - faqat class ichida

**Visibility table:**
| Modifier | Class | Package | Subclass | World |
|----------|-------|---------|----------|-------|
| public    | Yes   | Yes     | Yes      | Yes   |
| protected | Yes   | Yes     | Yes      | No    |
| default   | Yes   | Yes     | No       | No    |
| private   | Yes   | No      | No       | No    |

**Usage guidelines:**
- **public** - API, public method'lar
- **protected** - subclass'lar uchun
- **default** - package ichida foydalanish
- **private** - implementation details

**Class modifiers:**
- **public** - hamma joydan kirish mumkin
- **default** - faqat package ichida
- **final** - extend qilib bo'lmaydi
- **abstract** - abstract class`,
      codeExamples: [
        {
          code: `public class AccessExample {
    public int publicVar = 1;
    protected int protectedVar = 2;
    int defaultVar = 3;
    private int privateVar = 4;
    
    public void publicMethod() {
        System.out.println("Public method");
    }
    
    protected void protectedMethod() {
        System.out.println("Protected method");
    }
    
    void defaultMethod() {
        System.out.println("Default method");
    }
    
    private void privateMethod() {
        System.out.println("Private method");
    }
}`,
          explanation: "Access modifiers misoli"
        },
        {
          code: `class Parent {
    protected int protectedField = 10;
    public int publicField = 20;
}

class Child extends Parent {
    public void accessFields() {
        // protected - accessible in subclass
        System.out.println(protectedField);
        
        // public - accessible everywhere
        System.out.println(publicField);
    }
}`,
          explanation: "Protected in subclass"
        }
      ],
      exercises: [
        {
          task: "BankAccount class yarating (private balance, public deposit/withdraw)",
          solution: `class BankAccount {
    private double balance;
    
    public BankAccount(double balance) {
        this.balance = balance;
    }
    
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
        }
    }
}`
        },
        {
          task: "protected method qo'shing (getBalance())",
          solution: `protected double getBalance() {
    return balance;
}`
        }
      ],
      keyPoints: ["public - hamma joy", "protected - class + subclass", "default - package", "private - class ichida"]
    },
    8: {
      theory: `Java'da static va final keywords - class va variable'lar uchun maxsus behavior.

**static keyword:**
- Class variable/method
- Object yaratmasdan chaqirish mumkin
- Barcha object'lar uchun umumiy
- Memory'da bitta nusxa

**static variable:**
- Class variable
- Barcha object'lar o'rtasida shared
- ClassName.variableName

**static method:**
- Class method
- Object yaratmasdan chaqirish mumkin
- Faqat static variable'larga access
- this keyword ishlatilmaydi

**static block:**
- Class yuklanganda bir marta ishlaydi
- Initialization uchun

**final keyword:**
- Variable - o'zgarmas (constant)
- Method - override qilib bo'lmaydi
- Class - extend qilib bo'lmaydi

**static final:**
- Constant class variable
- Convention: UPPER_CASE`,
      codeExamples: [
        {
          code: `class Counter {
    // Static variable
    static int count = 0;
    
    // Instance variable
    int instanceCount = 0;
    
    public Counter() {
        count++;         // Shared
        instanceCount++; // Per instance
    }
    
    // Static method
    public static int getCount() {
        return count;
    }
    
    // Instance method
    public int getInstanceCount() {
        return instanceCount;
    }
}

Counter c1 = new Counter();
Counter c2 = new Counter();
Counter c3 = new Counter();

System.out.println(Counter.getCount());  // 3 (shared)
System.out.println(c1.getInstanceCount());  // 1 (per instance)`,
          explanation: "static variable va method"
        },
        {
          code: `// static block
class Example {
    static int x;
    
    static {
        x = 10;
        System.out.println("Static block executed");
    }
    
    public Example() {
        System.out.println("Constructor executed");
    }
}

// Static block runs first, then constructor
Example e = new Example();

// final variable
final int MAX_SIZE = 100;
// MAX_SIZE = 200;  // ERROR - cannot change

// final method
final void finalMethod() {
    // Cannot be overridden in subclass
}`,
          explanation: "static block va final"
        }
      ],
      exercises: [
        {
          task: "static counter yarating object yaratilganda sanaydigan",
          solution: `class Counter {
    static int count = 0;
    
    public Counter() {
        count++;
    }
    
    public static int getCount() {
        return count;
    }
}`
        },
        {
          task: "final constant yarating (PI = 3.14159)",
          solution: `class MathConstants {
    public static final double PI = 3.14159;
}`
        }
      ],
      keyPoints: ["static - class level", "static variable - shared", "static method - object yaratmasdan chaqirish", "final - o'zgarmas"]
    },
    9: {
      theory: `Java'da this keyword - current object reference.

**this keyword:**
- Current object'ni reference qiladi
- Instance variable'lar uchun
- Method'lar uchun
- Constructor'lar uchun

**this qo'llash sohalari:**
1. **Instance variable shadowing:**
this.variableName

2. **Method chaining:**
return this;

3. **Constructor chaining:**
this(parameters)

4. **Method parameter sifatida:**
method(this)

**Variable shadowing:**
- Local variable instance variable'ni yashirsa
- this orqali instance variable'ga access

**this vs this():**
- this - current object reference
- this() - current class constructor`,
      codeExamples: [
        {
          code: `class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;  // this.name = instance variable
        this.age = age;    // this.age = instance variable
    }
    
    public Person() {
        this("Unknown", 0);  // Constructor chaining
    }
    
    public Person setName(String name) {
        this.name = name;
        return this;  // Method chaining
    }
    
    public Person setAge(int age) {
        this.age = age;
        return this;  // Method chaining
    }
}

// Method chaining
Person person = new Person();
person.setName("Ali").setAge(25);`,
          explanation: "this keyword qo'llash"
        },
        {
          code: `// Variable shadowing
class Example {
    int x = 10;
    
    public void method(int x) {
        System.out.println(x);      // Local variable
        System.out.println(this.x);  // Instance variable
    }
}

Example e = new Example();
e.method(20);  // 20, 10`,
          explanation: "Variable shadowing"
        }
      ],
      exercises: [
        {
          task: "Student class yarating (this keyword bilan)",
          solution: `class Student {
    String name;
    int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}`
        },
        {
          task: "Method chaining qo'shing (setName, setAge)",
          solution: `public Student setName(String name) {
    this.name = name;
    return this;
}

public Student setAge(int age) {
    this.age = age;
    return this;
}

// Usage
student.setName("Ali").setAge(20);`
        }
      ],
      keyPoints: ["this - current object", "Variable shadowing - this orqali", "Method chaining - return this", "Constructor chaining - this()"]
    },
    10: {
      theory: `Java'da super keyword - parent class reference.

**super keyword:**
- Parent class object'ni reference qiladi
- Parent class variable'lariga access
- Parent class method'larini chaqirish
- Parent class constructor'ni chaqirish

**super qo'llash sohalari:**
1. **Parent variable access:**
super.variableName

2. **Parent method chaqirish:**
super.methodName()

3. **Parent constructor chaqirish:**
super(parameters)

**super vs this:**
- super - parent class
- this - current class

**Constructor chaining:**
- super() - parent constructor
- this() - current class constructor
- Birinchi qatorda bo'lishi kerak

**Method hiding:**
- Static method'lar override qilinmaydi
- Super class static method'ni yashiradi`,
      codeExamples: [
        {
          code: `class Parent {
    String name = "Parent";
    
    public Parent() {
        System.out.println("Parent constructor");
    }
    
    public void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    String name = "Child";
    
    public Child() {
        super();  // Parent constructor
        System.out.println("Child constructor");
    }
    
    @Override
    public void display() {
        super.display();  // Parent method
        System.out.println("Child display");
    }
    
    public void showNames() {
        System.out.println(super.name);  // Parent name
        System.out.println(this.name);   // Child name
    }
}

Child child = new Child();
child.showNames();  // Parent, Child
child.display();   // Parent display, Child display`,
          explanation: "super keyword qo'llash"
        },
        {
          code: `// Constructor chaining
class Animal {
    String name;
    
    public Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    String breed;
    
    public Dog(String name, String breed) {
        super(name);  // Parent constructor
        this.breed = breed;
    }
}`,
          explanation: "Constructor chaining"
        }
      ],
      exercises: [
        {
          task: "Vehicle class yarating va Car class extend qiling (super ishlatib)",
          solution: `class Vehicle {
    String brand;
    
    public Vehicle(String brand) {
        this.brand = brand;
    }
}

class Car extends Vehicle {
    String model;
    
    public Car(String brand, String model) {
        super(brand);
        this.model = model;
    }
}`
        },
        {
          task: "Parent method'ni override qiling va super.method() chaqiring",
          solution: `@Override
public void display() {
    super.display();
    System.out.println("Additional child behavior");
}`
        }
      ],
      keyPoints: ["super - parent reference", "super() - parent constructor", "super.variable - parent field", "super.method() - parent method"]
    },
    11: {
      theory: `Java'da Method Chaining - ko'p method'ni ketma-ket chaqirish.

**Method Chaining:**
- Har bir method this qaytaradi
- Current object'ni reference qiladi
- Clean va readable code

**Chaining pattern:**
object.method1().method2().method3()

**Chaining talablari:**
- Method'lar this qaytarishi kerak
- Return type - current class type
- Method'lar instance method bo'lishi kerak

**Chaining afzaliklari:**
- Clean code
- Less code
- Fluent interface
- Builder pattern

**Builder pattern:**
- Complex object yaratish
- Method chaining orqali
- Readable code`,
      codeExamples: [
        {
          code: `class StringBuilder {
    private String str = "";
    
    public StringBuilder append(String s) {
        str += s;
        return this;  // Chaining
    }
    
    public StringBuilder prepend(String s) {
        str = s + str;
        return this;  // Chaining
    }
    
    public String build() {
        return str;
    }
}

// Method chaining
StringBuilder sb = new StringBuilder();
String result = sb.append("Hello")
                   .append(" ")
                   .append("World")
                   .build();
System.out.println(result);  // Hello World`,
          explanation: "Method chaining misoli"
        },
        {
          code: `// Builder pattern
class Person {
    String name;
    int age;
    String city;
    
    public Person setName(String name) {
        this.name = name;
        return this;
    }
    
    public Person setAge(int age) {
        this.age = age;
        return this;
    }
    
    public Person setCity(String city) {
        this.city = city;
        return this;
    }
}

Person person = new Person()
    .setName("Ali")
    .setAge(25)
    .setCity("Toshkent");`,
          explanation: "Builder pattern"
        }
      ],
      exercises: [
        {
          task: "Calculator class yarating method chaining bilan",
          solution: `class Calculator {
    private double result = 0;
    
    public Calculator add(double num) {
        result += num;
        return this;
    }
    
    public Calculator subtract(double num) {
        result -= num;
        return this;
    }
    
    public Calculator multiply(double num) {
        result *= num;
        return this;
    }
    
    public double getResult() {
        return result;
    }
}

// Usage
double result = new Calculator()
    .add(10)
    .multiply(2)
    .subtract(5)
    .getResult();  // 15`
        }
      ],
      keyPoints: ["Method chaining - this qaytarish", "Builder pattern - object yaratish", "Fluent interface", "Clean code"]
    },
    12: {
      theory: `Java'da Object class - barcha class'lar uchun super class.

**Object class method'lari:**
1. **toString()** - object string representation
2. **equals()** - object equality comparison
3. **hashCode()** - object hash code
4. **getClass()** - object class olish
5. **clone()** - object nusxa olish
6. **finalize()** - garbage collection oldin
7. **notify(), notifyAll(), wait()** - threading

**toString():**
- Object string representation
- Override qilish kerak
- Default: ClassName@HashCode

**equals():**
- Object equality comparison
- Override qilish kerak
- Default: reference comparison
- hashCode() bilan ham override qilish kerak

**hashCode():**
- Object hash code
- HashMap, HashSet uchun muhim
- equals() bilan consistency kerak

**equals() va hashCode() contract:**
- Agar equals() true bo'lsa, hashCode() ham teng bo'lishi kerak
- Agar equals() false bo'lsa, hashCode() teng yoki turlicha bo'lishi mumkin`,
      codeExamples: [
        {
          code: `class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + "}";
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Person person = (Person) obj;
        return age == person.age && name.equals(person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

Person p1 = new Person("Ali", 25);
Person p2 = new Person("Ali", 25);

System.out.println(p1);  // Person{name='Ali', age=25}
System.out.println(p1.equals(p2));  // true
System.out.println(p1.hashCode() == p2.hashCode());  // true`,
          explanation: "toString(), equals(), hashCode()"
        },
        {
          code: `import java.util.Objects;

// equals() va hashCode() yaxshi amaliyot
class Employee {
    private int id;
    private String name;
    
    public Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Employee employee = (Employee) o;
        return id == employee.id;
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}`,
          explanation: "equals() va hashCode() yaxshi amaliyot"
        }
      ],
      exercises: [
        {
          task: "Book class yarating toString() override bilan",
          solution: `class Book {
    String title;
    String author;
    
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    
    @Override
    public String toString() {
        return "Book{title='" + title + "', author='" + author + "'}";
    }
}`
        },
        {
          task: "equals() va hashCode() override qiling",
          solution: `@Override
public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Book book = (Book) o;
    return title.equals(book.title) && author.equals(book.author);
}

@Override
public int hashCode() {
    return Objects.hash(title, author);
}`
        }
      ],
      keyPoints: ["toString() - string representation", "equals() - object equality", "hashCode() - hash code", "equals/hashCode contract"]
    }
  },
  3: {
    0: {
      theory: `Java'da ArrayList - resizable array implementation.

**ArrayList xususiyatlari:**
- Dynamic size (o'zgaruvchan)
- Random access (O(1))
- Duplicate elements mumkin
- Null elements mumkin
- Ordered collection

**ArrayList declaration:**
ArrayList<Type> list = new ArrayList<>();

**ArrayList method'lari:**
- add() - element qo'shish
- get() - element olish
- set() - element o'zgartirish
- remove() - element o'chirish
- size() - o'lcham
- isEmpty() - bo'shmi
- contains() - element borligini tekshirish
- clear() - barchasini o'chirish
- indexOf() - index topish

**ArrayList vs Array:**
- ArrayList - dynamic size, rich API
- Array - fixed size, primitive support

**Performance:**
- Random access: O(1)
- Insert at end: O(1)
- Insert at middle: O(n)
- Delete: O(n)`,
      codeExamples: [
        {
          code: `import java.util.ArrayList;

// ArrayList yaratish
ArrayList<String> names = new ArrayList<>();

// Element qo'shish
names.add("Ali");
names.add("Vali");
names.add("Jamshid");

// Element olish
String first = names.get(0);  // "Ali"

// Element o'zgartirish
names.set(1, "Gani");  // Index 1

// Element o'chirish
names.remove("Jamshid");

// O'lcham
int size = names.size();  // 2

// Bo'shmi
boolean empty = names.isEmpty();  // false

// Borligini tekshirish
boolean contains = names.contains("Ali");  // true

// Index topish
int index = names.indexOf("Ali");  // 0

// Barchasini o'chirish
names.clear();`,
          explanation: "ArrayList asosiy operatsiyalar"
        },
        {
          code: `// Loop bilan ArrayList
ArrayList<Integer> numbers = new ArrayList<>();
for (int i = 1; i <= 10; i++) {
    numbers.add(i);
}

// For loop
for (int i = 0; i < numbers.size(); i++) {
    System.out.println(numbers.get(i));
}

// Enhanced for loop
for (int num : numbers) {
    System.out.println(num);
}

// Iterator
Iterator<Integer> iterator = numbers.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}`,
          explanation: "ArrayList iteratsiya"
        }
      ],
      exercises: [
        {
          task: "5 ta ismni saqlaydigan ArrayList yarating",
          solution: `ArrayList<String> names = new ArrayList<>();
names.add("Ali");
names.add("Vali");
names.add("Jamshid");
names.add("Gani");
names.add("Qodir");`
        },
        {
          task: "ArrayList elementlarini chiqaring",
          solution: `for (String name : names) {
    System.out.println(name);
}`
        },
        {
          task: "ArrayList'dan element o'chiring",
          solution: `names.remove("Jamshid");`
        }
      ],
      keyPoints: ["ArrayList - dynamic array", "Random access O(1)", "Rich API", "Ordered collection"]
    },
    1: {
      theory: `Java'da LinkedList - doubly linked list implementation.

**LinkedList xususiyatlari:**
- Doubly linked list
- Node based structure
- Efficient insertion/deletion
- Random access sekin (O(n))
- Duplicate va null elements mumkin

**LinkedList structure:**
- Har bir node: data + prev + next pointers
- Head va tail pointers
- Bidirectional traversal

**LinkedList method'lari:**
- add() - oxiriga qo'shish
- addFirst() - boshiga qo'shish
- addLast() - oxiriga qo'shish
- remove() - element o'chirish
- removeFirst() - boshidan o'chirish
- removeLast() - oxiridan o'chirish
- getFirst() - birinchi element
- getLast() - oxirgi element
- size() - o'lcham

**LinkedList vs ArrayList:**
- LinkedList - insertion/deletion tez, random access sekin
- ArrayList - random access tez, insertion/deletion sekin

**Performance:**
- Random access: O(n)
- Insert at head/tail: O(1)
- Insert at middle: O(n)
- Delete: O(n)`,
      codeExamples: [
        {
          code: `import java.util.LinkedList;

// LinkedList yaratish
LinkedList<String> list = new LinkedList<>();

// Element qo'shish
list.add("Ali");
list.addFirst("Vali");  // Boshiga
list.addLast("Jamshid");  // Oxiriga

// Element olish
String first = list.getFirst();  // "Vali"
String last = list.getLast();    // "Jamshid"

// Element o'chirish
list.removeFirst();  // Boshidan
list.removeLast();   // Oxiridan

// O'lcham
int size = list.size();  // 2

// Iterator
Iterator<String> iterator = list.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Reverse traversal
Iterator<String> descIterator = list.descendingIterator();
while (descIterator.hasNext()) {
    System.out.println(descIterator.next());
}`,
          explanation: "LinkedList asosiy operatsiyalar"
        },
        {
          code: `// LinkedList as Queue
LinkedList<Integer> queue = new LinkedList<>();
queue.add(1);
queue.add(2);
queue.add(3);

int front = queue.poll();  // 1 (remove first)
int peek = queue.peek();   // 2 (view first)

// LinkedList as Stack
LinkedList<Integer> stack = new LinkedList<>();
stack.push(1);
stack.push(2);
stack.push(3);

int top = stack.pop();   // 3 (remove last)
int peek = stack.peek();  // 2 (view last)`,
          explanation: "LinkedList as Queue va Stack"
        }
      ],
      exercises: [
        {
          task: "LinkedList yarating va elementlar qo'shing",
          solution: `LinkedList<String> list = new LinkedList<>();
list.add("Ali");
list.add("Vali");
list.add("Jamshid");`
        },
        {
          task: "Boshiga va oxiriga element qo'shing",
          solution: `list.addFirst("Gani");
list.addLast("Qodir");`
        },
        {
          task: "LinkedList'dan element o'chirish",
          solution: `list.removeFirst();
list.removeLast();`
        }
      ],
      keyPoints: ["LinkedList - doubly linked list", "Efficient insertion/deletion", "Slow random access", "Queue va Stack sifatida"]
    },
    2: {
      theory: `Java'da HashMap - key-value pairs saqlaydigan map implementation.

**HashMap xususiyatlari:**
- Key-value pairs
- Unique keys
- Duplicate values mumkin
- Null key va values mumkin (bitta null key)
- Unordered collection
- Fast lookups

**HashMap declaration:**
HashMap<KeyType, ValueType> map = new HashMap<>();

**HashMap method'lari:**
- put() - key-value qo'shish
- get() - value olish
- remove() - pair o'chirish
- containsKey() - key borligini tekshirish
- containsValue() - value borligini tekshirish
- size() - o'lcham
- isEmpty() - bo'shmi
- keySet() - barcha key'lar
- values() - barcha value'lar
- entrySet() - barcha entry'lar
- clear() - barchasini o'chirish

**HashMap ishlash prinsipi:**
- Hashing - key'ning hash code'ni hisoblash
- Bucket - hash code asosida joylash
- Collision handling - chaining yoki treeing
- Load factor - resizing trigger

**Performance:**
- Get/Put: O(1) average
- Remove: O(1) average`,
      codeExamples: [
        {
          code: `import java.util.HashMap;

// HashMap yaratish
HashMap<String, Integer> map = new HashMap<>();

// Element qo'shish
map.put("Ali", 25);
map.put("Vali", 30);
map.put("Jamshid", 28);

// Value olish
int age = map.get("Ali");  // 25

// Key borligini tekshirish
boolean hasKey = map.containsKey("Ali");  // true
boolean hasValue = map.containsValue(25);  // true

// Element o'chirish
map.remove("Vali");

// O'lcham
int size = map.size();  // 2

// Bo'shmi
boolean empty = map.isEmpty();  // false

// Barcha key'lar
for (String key : map.keySet()) {
    System.out.println(key + ": " + map.get(key));
}

// Barcha value'lar
for (int value : map.values()) {
    System.out.println(value);
}

// Entry'lar
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`,
          explanation: "HashMap asosiy operatsiyalar"
        },
        {
          code: `// HashMap with custom object
class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && name.equals(person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

HashMap<Person, String> map = new HashMap<>();
map.put(new Person("Ali", 25), "Toshkent");
map.put(new Person("Vali", 30), "Samarqand");`,
          explanation: "HashMap with custom object"
        }
      ],
      exercises: [
        {
          task: "HashMap yarating (String, Integer)",
          solution: `HashMap<String, Integer> map = new HashMap<>();
map.put("Ali", 25);
map.put("Vali", 30);
map.put("Jamshid", 28);`
        },
        {
          task: "HashMap'dan value olish",
          solution: `int age = map.get("Ali");`
        },
        {
          task: "HashMap elementlarini chiqaring",
          solution: `for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}`
        }
      ],
      keyPoints: ["HashMap - key-value pairs", "Unique keys", "Fast lookups O(1)", "equals() va hashCode() muhim"]
    },
    3: {
      theory: `Java'da HashSet - unique elements saqlaydigan set implementation.

**HashSet xususiyatlari:**
- Unique elements
- Duplicate elementlar qabul qilmaydi
- Null element mumkin (bitta)
- Unordered collection
- HashMap based implementation

**HashSet declaration:**
HashSet<Type> set = new HashSet<>();

**HashSet method'lari:**
- add() - element qo'shish
- remove() - element o'chirish
- contains() - element borligini tekshirish
- size() - o'lcham
- isEmpty() - bo'shmi
- clear() - barchasini o'chirish
- iterator() - iterator

**HashSet vs ArrayList:**
- HashSet - unique elements, unordered
- ArrayList - duplicate elements mumkin, ordered

**HashSet ishlash prinsipi:**
- HashMap orqali implementatsiya
- Element - key, value - dummy object (PRESENT)
- Hash code asosida element joylash

**Performance:**
- Add/Remove/Contains: O(1) average`,
      codeExamples: [
        {
          code: `import java.util.HashSet;

// HashSet yaratish
HashSet<String> names = new HashSet<>();

// Element qo'shish
names.add("Ali");
names.add("Vali");
names.add("Jamshid");
names.add("Ali");  // Duplicate - ignored

// Element borligini tekshirish
boolean contains = names.contains("Ali");  // true

// Element o'chirish
names.remove("Vali");

// O'lcham
int size = names.size();  // 2

// Bo'shmi
boolean empty = names.isEmpty();  // false

// Barcha elementlar
for (String name : names) {
    System.out.println(name);
}

// Iterator
Iterator<String> iterator = names.iterator();
while (iterator.hasNext()) {
    System.out.println(iterator.next());
}

// Barchasini o'chirish
names.clear();`,
          explanation: "HashSet asosiy operatsiyalar"
        },
        {
          code: `// HashSet with custom object
class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Person person = (Person) o;
        return age == person.age && name.equals(person.name);
    }
    
    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}

HashSet<Person> people = new HashSet<>();
people.add(new Person("Ali", 25));
people.add(new Person("Vali", 30));
people.add(new Person("Ali", 25));  // Duplicate - ignored`,
          explanation: "HashSet with custom object"
        }
      ],
      exercises: [
        {
          task: "HashSet yarating va elementlar qo'shing",
          solution: `HashSet<String> names = new HashSet<>();
names.add("Ali");
names.add("Vali");
names.add("Jamshid");`
        },
        {
          task: "HashSet elementlarini chiqaring",
          solution: `for (String name : names) {
    System.out.println(name);
}`
        },
        {
          task: "HashSet'dan element o'chirish",
          solution: `names.remove("Vali");`
        }
      ],
      keyPoints: ["HashSet - unique elements", "Duplicate qabul qilmaydi", "HashMap based", "equals() va hashCode() muhim"]
    },
    4: {
      theory: `Java'da Queue va Stack - LIFO va FIFO data structure'lar.

**Queue (FIFO - First In First Out):**
- Birinchi kirgan birinchi chiqadi
- add() - oxiriga qo'shish
- remove() - boshidan o'chirish
- peek() - boshini ko'rish

**Stack (LIFO - Last In First Out):**
- Oxirgi kirgan birinchi chiqadi
- push() - qo'shish
- pop() - o'chirish
- peek() - oxirgini ko'rish

**LinkedList as Queue:**
- add() - oxiriga qo'shish
- poll() - boshidan o'chirish
- peek() - boshini ko'rish

**LinkedList as Stack:**
- push() - oxiriga qo'shish
- pop() - oxiridan o'chirish
- peek() - oxirgini ko'rish

**Deque (Double Ended Queue):**
- Ikkala uchdan qo'shish/o'chirish
- addFirst(), addLast()
- removeFirst(), removeLast()`,
      codeExamples: [
        {
          code: `import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

// Queue (LinkedList orqali)
Queue<String> queue = new LinkedList<>();
queue.add("Ali");
queue.add("Vali");
queue.add("Jamshid");

String front = queue.poll();  // "Ali" (remove first)
String peek = queue.peek();   // "Vali" (view first)

// Stack
Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.push(3);

int top = stack.pop();   // 3 (remove last)
int peek = stack.peek();  // 2 (view last)

// Deque (LinkedList)
LinkedList<Integer> deque = new LinkedList<>();
deque.addFirst(1);
deque.addLast(2);
deque.addFirst(0);
deque.addLast(3);  // [0, 1, 2, 3]`,
          explanation: "Queue, Stack, Deque"
        },
        {
          code: `// Queue loop
while (!queue.isEmpty()) {
    System.out.println(queue.poll());
}

// Stack loop
while (!stack.isEmpty()) {
    System.out.println(stack.pop());
}

// Deque operations
deque.removeFirst();  // 0
deque.removeLast();   // 3
// Result: [1, 2]`,
          explanation: "Queue va Stack loop"
        }
      ],
      exercises: [
        {
          task: "Queue yarating va elementlar qo'shing",
          solution: `Queue<String> queue = new LinkedList<>();
queue.add("Ali");
queue.add("Vali");
queue.add("Jamshid");`
        },
        {
          task: "Queue elementlarini FIFO tartibida chiqaring",
          solution: `while (!queue.isEmpty()) {
    System.out.println(queue.poll());
}`
        },
        {
          task: "Stack yarating va elementlar qo'shing",
          solution: `Stack<Integer> stack = new Stack<>();
stack.push(1);
stack.push(2);
stack.push(3);`
        }
      ],
      keyPoints: ["Queue - FIFO", "Stack - LIFO", "LinkedList - Queue va Stack sifatida", "Deque - ikki uchdan"]
    },
    5: {
      theory: `Java'da Generics - type safety va code reusability.

**Generics xususiyatlari:**
- Compile-time type safety
- Code reusability
- Type casting yo'q
- Type parameter: <T>

**Generic class:**
class Box<T> {
    private T item;
    
    public void set(T item) {
        this.item = item;
    }
    
    public T get() {
        return item;
    }
}

**Generic method:**
public <T> void method(T param) {
    // code
}

**Generic interface:**
interface Container<T> {
    void add(T item);
    T get(int index);
}

**Type parameter naming:**
- T - Type
- E - Element
- K - Key
- V - Value
- N - Number

**Bounded Type Parameters:**
- <T extends Class> - upper bound
- <T super Class> - lower bound

**Wildcards:**
- <?> - unbounded
- <? extends T> - upper bounded
- <? super T> - lower bounded`,
      codeExamples: [
        {
          code: `// Generic class
class Box<T> {
    private T item;
    
    public Box(T item) {
        this.item = item;
    }
    
    public T get() {
        return item;
    }
    
    public void set(T item) {
        this.item = item;
    }
}

// Usage
Box<Integer> intBox = new Box<>(10);
Box<String> strBox = new Box<>("Hello");

int i = intBox.get();   // 10
String s = strBox.get(); // "Hello"`,
          explanation: "Generic class"
        },
        {
          code: `// Generic method
public <T> void printArray(T[] array) {
    for (T item : array) {
        System.out.println(item);
    }
}

Integer[] intArray = {1, 2, 3};
String[] strArray = {"A", "B", "C"};

printArray(intArray);  // 1, 2, 3
printArray(strArray);  // A, B, C

// Bounded type parameter
public <T extends Number> T max(T a, T b) {
    return (a.doubleValue() > b.doubleValue()) ? a : b;
}

max(10, 20);     // 20
max(1.5, 2.5);  // 2.5`,
          explanation: "Generic method va bounded type"
        }
      ],
      exercises: [
        {
          task: "Generic Pair class yarating (K, V)",
          solution: `class Pair<K, V> {
    private K key;
    private V value;
    
    public Pair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    
    public K getKey() {
        return key;
    }
    
    public V getValue() {
        return value;
    }
}`
        },
        {
          task: "Pair class'dan object yarating",
          solution: `Pair<String, Integer> pair = new Pair<>("Ali", 25);
System.out.println(pair.getKey());   // "Ali"
System.out.println(pair.getValue()); // 25`
        }
      ],
      keyPoints: ["Generics - type safety", "<T> type parameter", "Generic class/method/interface", "Bounded type parameters"]
    },
    6: {
      theory: `Java'da Exception Handling - runtime error'larni boshqarish.

**Exception hierarchy:**
- Throwable (base class)
  - Error (recoverable emas)
  - Exception (recoverable)
    - Checked Exception (compile-time)
    - Unchecked Exception (runtime)

**Checked Exception:**
- Compile-time handling shart
- try-catch yoki throws
- IOException, SQLException, etc.

**Unchecked Exception:**
- Runtime exception
- Handling shart emas
- NullPointerException, ArithmeticException, etc.

**try-catch-finally:**
try {
    // risky code
} catch (ExceptionType e) {
    // exception handling
} finally {
    // always executed
}

**throws keyword:**
- Exception yuborish
- Method signature'da e'lon qilinadi

**throw keyword:**
- Exception yaratish va throw qilish
- Custom exception uchun

**Custom Exception:**
- Extend Exception class
- Constructor qo'shish`,
      codeExamples: [
        {
          code: `// try-catch-finally
try {
    int result = 10 / 0;  // ArithmeticException
} catch (ArithmeticException e) {
    System.out.println("Bo'lish mumkin emas");
} finally {
    System.out.println("Always executed");
}

// Multiple catch blocks
try {
    int[] arr = new int[5];
    arr[10] = 100;  // ArrayIndexOutOfBoundsException
} catch (ArrayIndexOutOfBoundsException e) {
    System.out.println("Index out of bounds");
} catch (Exception e) {
    System.out.println("Other exception");
}`,
          explanation: "try-catch-finally"
        },
        {
          code: `// throws keyword
public void readFile() throws IOException {
    // code that may throw IOException
}

// throw keyword
public void validateAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Yosh 0 dan katta bo'lishi kerak");
    }
}

// Custom exception
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public void setAge(int age) throws InvalidAgeException {
    if (age < 0) {
        throw new InvalidAgeException("Yosh 0 dan katta bo'lishi kerak");
    }
}`,
          explanation: "throws, throw, custom exception"
        }
      ],
      exercises: [
        {
          task: "Division by zero exception'ni boshqaring",
          solution: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Bo'lish mumkin emas");
}`
        },
        {
          task: "Custom exception yarating (InvalidAgeException)",
          solution: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}`
        }
      ],
      keyPoints: ["try-catch-finally", "Checked vs Unchecked", "throws - exception yuborish", "throw - exception yaratish"]
    },
    7: {
      theory: `Java'da File I/O - fayllar bilan ishlash.

**File class:**
- java.io package
- Fayl va directory'lar bilan ishlash
- Absolute va relative path

**File method'lari:**
- exists() - fayl borligini tekshirish
- createNewFile() - yangi fayl yaratish
- delete() - fayl o'chirish
- getName() - fayl nomi
- getPath() - fayl yo'li
- isFile() - faylmi
- isDirectory() - directorymi
- list() - directory ichidagi fayllar

**FileReader/FileWriter:**
- Character based I/O
- Text fayllar uchun

**BufferedReader/BufferedWriter:**
- Buffered I/O
- Performance yaxshilash

**FileInputStream/FileOutputStream:**
- Byte based I/O
- Binary fayllar uchun

**Scanner with File:**
- Text fayllarni o'qish
- parse method'lari`,
      codeExamples: [
        {
          code: `import java.io.File;
import java.io.FileWriter;
import java.io.FileReader;
import java.io.BufferedReader;

// File yaratish
File file = new File("test.txt");
if (!file.exists()) {
    file.createNewFile();
}

// File yozish
FileWriter writer = new FileWriter(file);
writer.write("Hello, World!");
writer.close();

// File o'qish
FileReader reader = new FileReader(file);
BufferedReader br = new BufferedReader(reader);
String line;
while ((line = br.readLine()) != null) {
    System.out.println(line);
}
br.close();

// File o'chirish
file.delete();`,
          explanation: "File yozish va o'qish"
        },
        {
          code: `import java.io.File;

// File operations
File file = new File("test.txt");
System.out.println("Exists: " + file.exists());
System.out.println("Name: " + file.getName());
System.out.println("Path: " + file.getPath());
System.out.println("Is File: " + file.isFile());
System.out.println("Is Directory: " + file.isDirectory());

// Directory
File dir = new File("mydir");
dir.mkdir();  // Directory yaratish
String[] files = dir.list();  // Fayllar ro'yxati
for (String f : files) {
    System.out.println(f);
}
dir.delete();  // Directory o'chirish`,
          explanation: "File class operations"
        }
      ],
      exercises: [
        {
          task: "Text fayl yaratish va yozish",
          solution: `File file = new File("test.txt");
FileWriter writer = new FileWriter(file);
writer.write("Hello, World!");
writer.close();`
        },
        {
          task: "Fayldan o'qish",
          solution: `FileReader reader = new FileReader("test.txt");
BufferedReader br = new BufferedReader(reader);
String line = br.readLine();
System.out.println(line);
br.close();`
        }
      ],
      keyPoints: ["File class - fayl operatsiyalari", "FileWriter/FileReader - text I/O", "BufferedReader/Writer - buffered", "Scanner - parse"]
    },
    8: {
      theory: `Java'da Streams API - functional programming style'da collections bilan ishlash.

**Stream API xususiyatlari:**
- Java 8 da kiritildi
- Functional programming
- Declarative style
- Parallel processing

**Stream creation:**
- Collection.stream()
- Arrays.stream()
- Stream.of()
- IntStream.range()

**Stream operations:**
- filter() - filterlash
- map() - transformatsiya
- sorted() - tartiblash
- distinct() - dublikatlarni o'chirish
- limit() - elementlar soni
- skip() - elementlarni o'tkazib yuborish
- forEach() - iteratsiya
- collect() - result yig'ish
- reduce() - aggregation

**Terminal operations:**
- collect() - collectionga yig'ish
- forEach() - iteratsiya
- reduce() - bitta qiymatga
- count() - sonlash
- min(), max() - min/max
- anyMatch(), allMatch() - matching

**Optional:**
- null safety
- orElse() - default value
- orElseThrow() - exception`,
      codeExamples: [
        {
          code: `import java.util.*;
import java.util.stream.Collectors;

List<String> names = Arrays.asList("Ali", "Vali", "Jamshid", "Gani", "Qodir");

// Filter
List<String> filtered = names.stream()
    .filter(name -> name.startsWith("A"))
    .collect(Collectors.toList());

// Map
List<Integer> lengths = names.stream()
    .map(String::length)
    .collect(Collectors.toList());

// Sorted
List<String> sorted = names.stream()
    .sorted()
    .collect(Collectors.toList());

// Distinct
List<String> distinct = names.stream()
    .distinct()
    .collect(Collectors.toList());

// Limit
List<String> limited = names.stream()
    .limit(3)
    .collect(Collectors.toList());

// Reduce
String joined = names.stream()
    .reduce((a, b) -> a + ", " + b)
    .orElse("");`,
          explanation: "Stream operations"
        },
        {
          code: `// Parallel stream
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

int sum = numbers.parallelStream()
    .reduce(0, Integer::sum);

// Count
long count = names.stream().count();

// Min/Max
Optional<String> min = names.stream().min(String::compareTo);
Optional<String> max = names.stream().max(String::compareTo);

// Any match
boolean hasLongName = names.stream()
    .anyMatch(name -> name.length() > 5);

// All match
boolean allShort = names.stream()
    .allMatch(name -> name.length() < 10);

// Find first
Optional<String> first = names.stream()
    .filter(name -> name.startsWith("A"))
    .findFirst();`,
          explanation: "Parallel stream va terminal operations"
        }
      ],
      exercises: [
        {
          task: "List'dan juft sonlarni filterlang",
          solution: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
List<Integer> even = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());`
        },
        {
          task: "List elementlarini kvadratga oshiring",
          solution: `List<Integer> squared = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());`
        },
        {
          task: "List elementlarini tartiblang",
          solution: `List<Integer> sorted = numbers.stream()
    .sorted()
    .collect(Collectors.toList());`
        }
      ],
      keyPoints: ["Stream API - functional programming", "filter, map, sorted", "Terminal operations", "Optional - null safety"]
    },
    9: {
      theory: `Java'da Lambda Expressions - anonymous functionlar.

**Lambda syntax:**
(parameters) -> expression
(parameters) -> { statements }

**Lambda xususiyatlari:**
- Anonymous function
- Functional interface'lar uchun
- Concise syntax
- Functional programming

**Functional interface:**
- Bitta abstract method
- @FunctionalInterface annotation
- Predicate, Consumer, Supplier, Function

**Common functional interfaces:**
- Predicate<T> - boolean qaytaradi
- Consumer<T> - qabul qiladi, return yo'q
- Supplier<T> - qiymat beradi
- Function<T,R> - transformatsiya
- BiFunction<T,U,R> - ikki parameter

**Method references:**
- ClassName::staticMethod
- object::instanceMethod
- ClassName::new

**Lambda vs Anonymous class:**
- Lambda - concise, functional interface
- Anonymous class - verbose, multiple method'lar`,
      codeExamples: [
        {
          code: `// Lambda expressions
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);

// forEach with lambda
numbers.forEach(n -> System.out.println(n));

// filter with lambda
List<Integer> even = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// map with lambda
List<Integer> squared = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());

// sort with lambda
numbers.sort((a, b) -> b - a);  // Descending`,
          explanation: "Lambda expressions"
        },
        {
          code: `// Functional interfaces
// Predicate
Predicate<Integer> isEven = n -> n % 2 == 0;
System.out.println(isEven.test(4));  // true

// Consumer
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hello");  // Hello

// Supplier
Supplier<Double> random = () -> Math.random();
System.out.println(random.get());

// Function
Function<Integer, Integer> square = n -> n * n;
System.out.println(square.apply(5));  // 25

// Method references
List<String> names = Arrays.asList("Ali", "Vali", "Jamshid");
names.forEach(System.out::println);  // Method reference`,
          explanation: "Functional interfaces va method references"
        }
      ],
      exercises: [
        {
          task: "Lambda bilan list elementlarini chiqaring",
          solution: `List<String> names = Arrays.asList("Ali", "Vali", "Jamshid");
names.forEach(name -> System.out.println(name));`
        },
        {
          task: "Predicate bilan juft sonlarni filterlang",
          solution: `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
Predicate<Integer> isEven = n -> n % 2 == 0;
List<Integer> even = numbers.stream()
    .filter(isEven)
    .collect(Collectors.toList());`
        },
        {
          task: "Function bilan sonlarni kvadratga oshiring",
          solution: `Function<Integer, Integer> square = n -> n * n;
List<Integer> squared = numbers.stream()
    .map(square)
    .collect(Collectors.toList());`
        }
      ],
      keyPoints: ["Lambda - anonymous function", "Functional interface", "Predicate, Consumer, Supplier, Function", "Method references"]
    },
    10: {
      theory: `Java'da Comparator vs Comparable - sorting va comparison.

**Comparable interface:**
- java.lang.Comparable
- compareTo() method
- Natural ordering
- Bitta comparison criteria

**Comparator interface:**
- java.util.Comparator
- compare() method
- Multiple comparison criteria
- Custom sorting

**Comparable:**
class Person implements Comparable<Person> {
    @Override
    public int compareTo(Person other) {
        return this.age - other.age;
    }
}

**Comparator:**
Comparator<Person> byName = (p1, p2) -> p1.name.compareTo(p2.name);

**Sorting methods:**
- Collections.sort(list) - Comparable
- list.sort(comparator) - Comparator
- stream.sorted(comparator) - Stream

**Comparator chaining:**
- thenComparing() - multiple criteria
- reversed() - teskari tartiblash`,
      codeExamples: [
        {
          code: `import java.util.*;

// Comparable interface
class Person implements Comparable<Person> {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public int compareTo(Person other) {
        return this.age - other.age;  // Age comparison
    }
    
    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

List<Person> people = Arrays.asList(
    new Person("Ali", 25),
    new Person("Vali", 30),
    new Person("Jamshid", 20)
);

Collections.sort(people);  // Sort by age
System.out.println(people);  // Jamshid (20), Ali (25), Vali (30)`,
          explanation: "Comparable interface"
        },
        {
          code: `// Comparator interface
List<Person> people = Arrays.asList(
    new Person("Ali", 25),
    new Person("Vali", 30),
    new Person("Jamshid", 20)
);

// Sort by name
Comparator<Person> byName = (p1, p2) -> p1.name.compareTo(p2.name);
people.sort(byName);

// Sort by age (descending)
Comparator<Person> byAgeDesc = (p1, p2) -> p2.age - p1.age;
people.sort(byAgeDesc);

// Comparator chaining
Comparator<Person> byNameThenAge = Comparator
    .comparing((Person p) -> p.name)
    .thenComparing(p -> p.age);
people.sort(byNameThenAge);`,
          explanation: "Comparator interface"
        }
      ],
      exercises: [
        {
          task: "Student class yarating Comparable bilan (age bo'yicha)",
          solution: `class Student implements Comparable<Student> {
    String name;
    int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public int compareTo(Student other) {
        return this.age - other.age;
    }
}`
        },
        {
          task: "Comparator bilan name bo'yicha tartiblang",
          solution: `Comparator<Student> byName = (s1, s2) -> s1.name.compareTo(s2.name);
students.sort(byName);`
        }
      ],
      keyPoints: ["Comparable - natural ordering", "Comparator - custom sorting", "compareTo() - Comparable", "compare() - Comparator"]
    },
    11: {
      theory: `Java'da TreeSet & TreeMap - sorted collections.

**TreeSet:**
- Sorted set
- Red-Black tree implementation
- Unique elements
- Natural ordering yoki Comparator
- O(log n) operations

**TreeMap:**
- Sorted map
- Red-Black tree implementation
- Unique keys
- Natural ordering yoki Comparator
- O(log n) operations

**TreeSet vs HashSet:**
- TreeSet - sorted, O(log n)
- HashSet - unordered, O(1)

**TreeMap vs HashMap:**
- TreeMap - sorted, O(log n)
- HashMap - unordered, O(1)

**Sorted ordering:**
- Natural (Comparable)
- Custom (Comparator)
- Ascending yoki descending

**TreeSet method'lari:**
- first() - birinchi element
- last() - oxirgi element
- headSet() - boshidan set
- tailSet() - oxiridan set
- subSet() - oraliq set

**TreeMap method'lari:**
- firstKey(), lastKey()
- headMap(), tailMap()
- subMap()`,
      codeExamples: [
        {
          code: `import java.util.*;

// TreeSet
TreeSet<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(2);
numbers.add(8);
numbers.add(1);
numbers.add(5);  // Duplicate - ignored

System.out.println(numbers);  // [1, 2, 5, 8] (sorted)

// TreeMap
TreeMap<String, Integer> map = new TreeMap<>();
map.put("Ali", 25);
map.put("Vali", 30);
map.put("Jamshid", 28);
map.put("Gani", 22);

System.out.println(map);  // Sorted by key

// TreeSet with Comparator
TreeSet<Integer> descSet = new TreeSet<>(Collections.reverseOrder());
descSet.add(1);
descSet.add(2);
descSet.add(3);
System.out.println(descSet);  // [3, 2, 1] (descending)`,
          explanation: "TreeSet va TreeMap"
        },
        {
          code: `// TreeSet methods
TreeSet<Integer> set = new TreeSet<>();
set.addAll(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

int first = set.first();   // 1
int last = set.last();     // 10

// HeadSet (elements < 5)
Set<Integer> head = set.headSet(5);  // [1, 2, 3, 4]

// TailSet (elements >= 5)
Set<Integer> tail = set.tailSet(5);  // [5, 6, 7, 8, 9, 10]

// SubSet (elements between 3 and 7)
Set<Integer> sub = set.subSet(3, 7);  // [3, 4, 5, 6]

// TreeMap methods
TreeMap<String, Integer> map = new TreeMap<>();
map.put("A", 1);
map.put("B", 2);
map.put("C", 3);

String firstKey = map.firstKey();  // "A"
String lastKey = map.lastKey();    // "C"`,
          explanation: "TreeSet va TreeMap method'lari"
        }
      ],
      exercises: [
        {
          task: "TreeSet yarating va elementlar qo'shing",
          solution: `TreeSet<Integer> set = new TreeSet<>();
set.add(5);
set.add(2);
set.add(8);
set.add(1);
System.out.println(set);  // [1, 2, 5, 8] (sorted)`
        },
        {
          task: "TreeMap yarating va key-value pairs qo'shing",
          solution: `TreeMap<String, Integer> map = new TreeMap<>();
map.put("Ali", 25);
map.put("Vali", 30);
map.put("Jamshid", 28);`
        },
        {
          task: "TreeSet descending tartibda yarating",
          solution: `TreeSet<Integer> descSet = new TreeSet<>(Collections.reverseOrder());
descSet.add(1);
descSet.add(2);
descSet.add(3);`
        }
      ],
      keyPoints: ["TreeSet - sorted set", "TreeMap - sorted map", "Red-Black tree", "O(log n) operations", "Comparable/Comparator"]
    },
    12: {
      theory: `Java'da PriorityQueue - priority based queue.

**PriorityQueue xususiyatlari:**
- Priority based ordering
- Min-heap (default) yoki Max-heap
- Not thread-safe
- O(log n) operations

**PriorityQueue declaration:**
PriorityQueue<Type> queue = new PriorityQueue<>();
PriorityQueue<Type> queue = new PriorityQueue<>(Comparator.reverseOrder());

**PriorityQueue method'lari:**
- add() - element qo'shish
- poll() - priority element olish
- peek() - priority element ko'rish
- offer() - element qo'shish (return boolean)
- remove() - element o'chirish
- size() - o'lcham

**PriorityQueue vs Queue:**
- PriorityQueue - priority based
- Queue - FIFO

**Natural ordering:**
- Numbers - ascending
- Strings - alphabetical
- Objects - Comparable

**Custom comparator:**
- Custom priority
- Descending order
- Complex criteria`,
      codeExamples: [
        {
          code: `import java.util.*;

// Min-heap (default)
PriorityQueue<Integer> minHeap = new PriorityQueue<>();
minHeap.add(5);
minHeap.add(2);
minHeap.add(8);
minHeap.add(1);

System.out.println(minHeap.poll());  // 1 (smallest)
System.out.println(minHeap.poll());  // 2
System.out.println(minHeap.poll());  // 5

// Max-heap
PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(8);
maxHeap.add(1);

System.out.println(maxHeap.poll());  // 8 (largest)
System.out.println(maxHeap.poll());  // 5
System.out.println(maxHeap.poll());  // 2`,
          explanation: "Min-heap va Max-heap"
        },
        {
          code: `// Custom comparator
PriorityQueue<String> queue = new PriorityQueue<>(
    (a, b) -> b.compareTo(a)  // Descending alphabetical
);

queue.add("Ali");
queue.add("Vali");
queue.add("Jamshid");

System.out.println(queue.poll());  // Vali
System.out.println(queue.poll());  // Jamshid
System.out.println(queue.poll());  // Ali

// Custom object
class Task implements Comparable<Task> {
    String name;
    int priority;
    
    public Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
    
    @Override
    public int compareTo(Task other) {
        return this.priority - other.priority;  // Lower priority first
    }
}

PriorityQueue<Task> taskQueue = new PriorityQueue<>();
taskQueue.add(new Task("Task1", 3));
taskQueue.add(new Task("Task2", 1));
taskQueue.add(new Task("Task3", 2));

System.out.println(taskQueue.poll().name);  // Task2 (priority 1)
System.out.println(taskQueue.poll().name);  // Task3 (priority 2)`,
          explanation: "Custom comparator va object"
        }
      ],
      exercises: [
        {
          task: "PriorityQueue yarating (min-heap)",
          solution: `PriorityQueue<Integer> queue = new PriorityQueue<>();
queue.add(5);
queue.add(2);
queue.add(8);
queue.add(1);`
        },
        {
          task: "PriorityQueue elementlarini priority tartibida chiqaring",
          solution: `while (!queue.isEmpty()) {
    System.out.println(queue.poll());
}`
        },
        {
          task: "Max-heap PriorityQueue yarating",
          solution: `PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(8);`
        }
      ],
      keyPoints: ["PriorityQueue - priority based", "Min-heap (default)", "Max-heap (reverseOrder)", "Comparable/Comparator"]
    }
  },
  4: {
    0: {
      theory: `SQL (Structured Query Language) - relational database'lar bilan ishlash uchun query language.

**SQL turlari:**
- DDL (Data Definition Language) - structure yaratish
- DML (Data Manipulation Language) - data manipulatsiya
- DCL (Data Control Language) - access control
- TCL (Transaction Control Language) - transaction'lar

**Asosiy SQL buyruqlari:**
- SELECT - data olish
- INSERT - data qo'shish
- UPDATE - data o'zgartirish
- DELETE - data o'chirish
- CREATE - table yaratish
- DROP - table o'chirish
- ALTER - table o'zgartirish

**SELECT syntax:**
sql
SELECT column1, column2
FROM table_name
WHERE condition;

**WHERE clause:**
- Shartli filter
- Operators: =, !=, >, <, >=, <=, AND, OR, NOT
- LIKE - pattern matching
- IN - qiymatlar ro'yxati
- BETWEEN - oraliq

**ORDER BY:**
- Tartiblash
- ASC - ascending
- DESC - descending`,
      codeExamples: [
        {
          code: `-- SELECT
SELECT name, age, city
FROM students
WHERE age > 20;

-- INSERT
INSERT INTO students (name, age, city)
VALUES ('Ali', 25, 'Toshkent');

-- UPDATE
UPDATE students
SET age = 26
WHERE name = 'Ali';

-- DELETE
DELETE FROM students
WHERE age < 18;`,
          explanation: "Asosiy SQL buyruqlari"
        },
        {
          code: `-- WHERE clause operators
SELECT * FROM students
WHERE age >= 20 AND city = 'Toshkent';

SELECT * FROM students
WHERE age IN (20, 25, 30);

SELECT * FROM students
WHERE age BETWEEN 20 AND 30;

SELECT * FROM students
WHERE name LIKE 'A%';  -- A bilan boshlanadigan

-- ORDER BY
SELECT * FROM students
ORDER BY age DESC;  -- Katta dan kichik`,
          explanation: "WHERE va ORDER BY"
        }
      ],
      exercises: [
        {
          task: "Students table yaratish",
          solution: `CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    age INT,
    city VARCHAR(100)
);`
        },
        {
          task: "INSERT buyruqini yozing",
          solution: `INSERT INTO students (name, age, city)
VALUES ('Ali', 25, 'Toshkent');`
        },
        {
          task: "SELECT buyruqini yozing (20 yoshdan katta talabalar)",
          solution: `SELECT * FROM students
WHERE age > 20;`
        }
      ],
      keyPoints: ["SELECT - data olish", "INSERT - data qo'shish", "UPDATE - data o'zgartirish", "DELETE - data o'chirish"]
    },
    1: {
      theory: `SQL CRUD operatsiyalari - Create, Read, Update, Delete.

**CRUD turlari:**
- Create (INSERT) - yangi data yaratish
- Read (SELECT) - data olish
- Update (UPDATE) - mavjud data o'zgartirish
- Delete (DELETE) - data o'chirish

**INSERT syntax:**
sql
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

**INSERT variations:**
- Single row
- Multiple rows
- SELECT subquery

**UPDATE syntax:**
sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

**DELETE syntax:**
sql
DELETE FROM table_name
WHERE condition;

**WHERE muhimligi:**
- WHERE bo'lsa - barcha qatorlar o'chiriladi
- Shartni tekshirish kerak

**Transaction:**
- BEGIN TRANSACTION
- COMMIT - tasdiqlash
- ROLLBACK - bekor qilish`,
      codeExamples: [
        {
          code: `-- INSERT single row
INSERT INTO students (name, age, city)
VALUES ('Ali', 25, 'Toshkent');

-- INSERT multiple rows
INSERT INTO students (name, age, city)
VALUES 
    ('Vali', 30, 'Samarqand'),
    ('Jamshid', 28, 'Buxoro'),
    ('Gani', 22, 'Farg\'ona');

-- INSERT with SELECT
INSERT INTO students_archive (name, age, city)
SELECT name, age, city FROM students WHERE age > 25;`,
          explanation: "INSERT variations"
        },
        {
          code: `-- UPDATE single column
UPDATE students
SET age = 26
WHERE name = 'Ali';

-- UPDATE multiple columns
UPDATE students
SET age = 26, city = 'Samarkand'
WHERE name = 'Vali';

-- UPDATE with condition
UPDATE students
SET age = age + 1
WHERE city = 'Toshkent';

-- DELETE single row
DELETE FROM students
WHERE id = 1;

-- DELETE with condition
DELETE FROM students
WHERE age < 18;

-- DELETE all rows (dangerous)
DELETE FROM students;`,
          explanation: "UPDATE va DELETE"
        },
        {
          code: `-- Transaction
BEGIN TRANSACTION;

UPDATE students SET age = 26 WHERE id = 1;
UPDATE students SET age = 31 WHERE id = 2;

-- Tasdiqlash
COMMIT;

-- Yoki bekor qilish
-- ROLLBACK;`,
          explanation: "Transaction"
        }
      ],
      exercises: [
        {
          task: "INSERT buyruqini yozing (yangi student)",
          solution: `INSERT INTO students (name, age, city)
VALUES ('Qodir', 27, 'Navoi');`
        },
        {
          task: "UPDATE buyruqini yozing (age o'zgartirish)",
          solution: `UPDATE students
SET age = 28
WHERE name = 'Qodir';`
        },
        {
          task: "DELETE buyruqini yozing (id bo'yicha)",
          solution: `DELETE FROM students
WHERE id = 5;`
        }
      ],
      keyPoints: ["INSERT - data yaratish", "UPDATE - data o'zgartirish", "DELETE - data o'chirish", "WHERE - shart muhim"]
    },
    2: {
      theory: `SQL JOIN turlari - bir nechta table'dan data olish.

**JOIN turlari:**
- INNER JOIN - ikkala table'da mos kelgan row'lar
- LEFT JOIN - chap table'dan barcha, o'ngdan mos kelganlar
- RIGHT JOIN - o'ng table'dan barcha, chapdan mos kelganlar
- FULL OUTER JOIN - ikkala table'dan barcha row'lar
- CROSS JOIN - Cartesian product

**INNER JOIN syntax:**
sql
SELECT columns
FROM table1
INNER JOIN table2 ON table1.column = table2.column;

**LEFT JOIN syntax:**
sql
SELECT columns
FROM table1
LEFT JOIN table2 ON table1.column = table2.column;

**JOIN conditions:**
- ON - explicit join condition
- USING - common column
- WHERE - additional filter`,
      codeExamples: [
        {
          code: `-- INNER JOIN
SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;

-- LEFT JOIN
SELECT students.name, courses.course_name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;

-- RIGHT JOIN
SELECT students.name, courses.course_name
FROM students
RIGHT JOIN enrollments ON students.id = enrollments.student_id
RIGHT JOIN courses ON enrollments.course_id = courses.id;`,
          explanation: "JOIN turlari"
        },
        {
          code: `-- Self JOIN
SELECT s1.name, s2.name as classmate
FROM students s1
INNER JOIN students s2 ON s1.city = s2.city
WHERE s1.id != s2.id;

-- Multiple JOIN
SELECT s.name, c.course_name, t.teacher_name
FROM students s
INNER JOIN enrollments e ON s.id = e.student_id
INNER JOIN courses c ON e.course_id = c.id
INNER JOIN teachers t ON c.teacher_id = t.id;`,
          explanation: "Self JOIN va Multiple JOIN"
        }
      ],
      exercises: [
        {
          task: "students va courses table'larini INNER JOIN qiling",
          solution: `SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.id;`
        },
        {
          task: "LEFT JOIN bilan kurslari yo'q talabalarni ham chiqaring",
          solution: `SELECT students.name, courses.course_name
FROM students
LEFT JOIN enrollments ON students.id = enrollments.student_id
LEFT JOIN courses ON enrollments.course_id = courses.id;`
        }
      ],
      keyPoints: ["INNER JOIN - ikkala mos", "LEFT JOIN - chapdan barcha", "RIGHT JOIN - o'ngdan barcha", "ON - join condition"]
    },
    3: {
      theory: `MySQL va PostgreSQL - mashhur relational database'lar.

**MySQL:**
- Oracle tomonidan
- Open source
- Keng qo'llaniladi
- MyISAM, InnoDB storage engine

**PostgreSQL:**
- Open source
- Advanced features
- ACID compliance
- Rich data types

**Connection (JDBC):**
// MySQL
String url = "jdbc:mysql://localhost:3306/dbname";
String user = "username";
String password = "password";

// PostgreSQL
String url = "jdbc:postgresql://localhost:5432/dbname";
String user = "username";
String password = "password";

**JDBC Driver:**
- MySQL: com.mysql.cj.jdbc.Driver
- PostgreSQL: org.postgresql.Driver

**Connection pool:**
- HikariCP
- Apache DBCP
- C3P0

**Connection string components:**
- Protocol: jdbc:
- Subprotocol: mysql, postgresql
- Host: localhost
- Port: 3306 (MySQL), 5432 (PostgreSQL)
- Database name`,
      codeExamples: [
        {
          code: `// MySQL connection
import java.sql.*;

String url = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String password = "password";

Connection conn = DriverManager.getConnection(url, user, password);

// PostgreSQL connection
String url = "jdbc:postgresql://localhost:5432/mydb";
String user = "postgres";
String password = "password";

Connection conn = DriverManager.getConnection(url, user, password);`,
          explanation: "JDBC connection"
        },
        {
          code: `// HikariCP connection pool
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("root");
config.setPassword("password");
config.setMaximumPoolSize(10);

HikariDataSource ds = new HikariDataSource(config);
Connection conn = ds.getConnection();`,
          explanation: "HikariCP connection pool"
        }
      ],
      exercises: [
        {
          task: "MySQL JDBC connection yaratish",
          solution: `String url = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String password = "password";
Connection conn = DriverManager.getConnection(url, user, password);`
        },
        {
          task: "PostgreSQL JDBC connection yaratish",
          solution: `String url = "jdbc:postgresql://localhost:5432/mydb";
String user = "postgres";
String password = "password";
Connection conn = DriverManager.getConnection(url, user, password);`
        }
      ],
      keyPoints: ["MySQL - Oracle, open source", "PostgreSQL - advanced features", "JDBC - Java database connectivity", "Connection pool - performance"]
    },
    4: {
      theory: `JDBC (Java Database Connectivity) - Java'da database bilan ishlash uchun API.

**JDBC components:**
- DriverManager - connection yaratish
- Connection - database connection
- Statement - SQL buyruqlari
- ResultSet - query result
- PreparedStatement - parameterized query

**JDBC steps:**
1. Driver yuklash
2. Connection yaratish
3. Statement yaratish
4. Query bajarish
5. Result olish
6. Resource yopish

**Statement turlari:**
- Statement - simple SQL
- PreparedStatement - parameterized SQL
- CallableStatement - stored procedures

**PreparedStatement afzaliklari:**
- SQL injection'dan himoya
- Performance yaxshilash
- Parameter binding
- Reusable`,
      codeExamples: [
        {
          code: `import java.sql.*;

// JDBC connection
String url = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String password = "password";

Connection conn = DriverManager.getConnection(url, user, password);

// Statement
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

while (rs.next()) {
    int id = rs.getInt("id");
    String name = rs.getString("name");
    int age = rs.getInt("age");
    System.out.println(id + " " + name + " " + age);
}

rs.close();
stmt.close();
conn.close();`,
          explanation: "JDBC basic usage"
        },
        {
          code: `// PreparedStatement
String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);

pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
pstmt.executeUpdate();

pstmt.close();

// PreparedStatement with SELECT
String sql = "SELECT * FROM students WHERE age > ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 20);
ResultSet rs = pstmt.executeQuery();

while (rs.next()) {
    System.out.println(rs.getString("name"));
}

rs.close();
pstmt.close();`,
          explanation: "PreparedStatement"
        }
      ],
      exercises: [
        {
          task: "JDBC connection yaratish",
          solution: `String url = "jdbc:mysql://localhost:3306/mydb";
String user = "root";
String password = "password";
Connection conn = DriverManager.getConnection(url, user, password);`
        },
        {
          task: "PreparedStatement bilan INSERT yozing",
          solution: `String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
pstmt.executeUpdate();`
        },
        {
          task: "PreparedStatement bilan SELECT yozing",
          solution: `String sql = "SELECT * FROM students WHERE age > ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 20);
ResultSet rs = pstmt.executeQuery();`
        }
      ],
      keyPoints: ["JDBC - Java database connectivity", "DriverManager - connection", "Statement - simple SQL", "PreparedStatement - parameterized SQL"]
    },
    5: {
      theory: `JDBC CRUD - PreparedStatement bilan CRUD operatsiyalari.

**Create (INSERT):**
String sql = "INSERT INTO table (col1, col2) VALUES (?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, value1);
pstmt.setInt(2, value2);
pstmt.executeUpdate();

**Read (SELECT):**
String sql = "SELECT * FROM table WHERE condition";
PreparedStatement pstmt = conn.prepareStatement(sql);
ResultSet rs = pstmt.executeQuery();
while (rs.next()) {
    // process result
}

**Update:**
String sql = "UPDATE table SET col1 = ? WHERE condition";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, newValue);
pstmt.executeUpdate();

**Delete:**
String sql = "DELETE FROM table WHERE condition";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.executeUpdate();

**SQL injection himoyasi:**
- PreparedStatement avtomatik escaping
- Parameter binding
- XSS va SQL injection'dan himoya`,
      codeExamples: [
        {
          code: `// INSERT
String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
int rows = pstmt.executeUpdate();
System.out.println(rows + " row inserted");

// SELECT
String sql = "SELECT * FROM students WHERE age > ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 20);
ResultSet rs = pstmt.executeQuery();

while (rs.next()) {
    System.out.println(rs.getString("name"));
}

// UPDATE
String sql = "UPDATE students SET age = ? WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 26);
pstmt.setInt(2, 1);
pstmt.executeUpdate();

// DELETE
String sql = "DELETE FROM students WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 1);
pstmt.executeUpdate();`,
          explanation: "JDBC CRUD operations"
        },
        {
          code: `// Transaction with JDBC
conn.setAutoCommit(false);

try {
    // Multiple operations
    String sql1 = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
    PreparedStatement pstmt1 = conn.prepareStatement(sql1);
    pstmt1.setDouble(1, 100);
    pstmt1.setInt(2, 1);
    pstmt1.executeUpdate();

    String sql2 = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
    PreparedStatement pstmt2 = conn.prepareStatement(sql2);
    pstmt2.setDouble(1, 100);
    pstmt2.setInt(2, 2);
    pstmt2.executeUpdate();

    conn.commit();  // Commit
} catch (Exception e) {
    conn.rollback();  // Rollback
} finally {
    conn.setAutoCommit(true);
}`,
          explanation: "Transaction"
        }
      ],
      exercises: [
        {
          task: "PreparedStatement bilan INSERT yozing",
          solution: `String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
pstmt.executeUpdate();`
        },
        {
          task: "PreparedStatement bilan SELECT yozing",
          solution: `String sql = "SELECT * FROM students WHERE age > ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 20);
ResultSet rs = pstmt.executeQuery();`
        },
        {
          task: "PreparedStatement bilan UPDATE yozing",
          solution: `String sql = "UPDATE students SET age = ? WHERE id = ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 26);
pstmt.setInt(2, 1);
pstmt.executeUpdate();`
        }
      ],
      keyPoints: ["PreparedStatement - parameterized SQL", "SQL injection himoya", "Transaction - commit/rollback", "Resource yopish muhim"]
    },
    6: {
      theory: `PreparedStatement - parameterized SQL query'lar.

**PreparedStatement afzaliklari:**
- SQL injection'dan himoya
- Performance yaxshilash (pre-compiled)
- Parameter binding
- Reusable

**PreparedStatement yaratish:**
String sql = "INSERT INTO table (col1, col2) VALUES (?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);

**Parameter types:**
- setString() - String
- setInt() - int
- setDouble() - double
- setBoolean() - boolean
- setDate() - Date
- setObject() - Object

**SQL injection himoyasi:**
- User input to'g'ridirilmaydi
- Avtomatik escaping
- Parameter binding

**Performance:**
- Pre-compiled query
- Execution plan caching
- Reusable`,
      codeExamples: [
        {
          code: `// PreparedStatement with parameters
String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);

pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
int rows = pstmt.executeUpdate();

// Reusable
pstmt.setString(1, "Vali");
pstmt.setInt(2, 30);
pstmt.setString(3, "Samarqand");
pstmt.executeUpdate();

pstmt.close();`,
          explanation: "PreparedStatement usage"
        },
        {
          code: `// SQL injection example (bad practice)
String userInput = "Ali'; DROP TABLE students; --";
String sql = "INSERT INTO students (name) VALUES ('" + userInput + "')";
Statement stmt = conn.createStatement();
stmt.execute(sql);  // DANGEROUS!

// PreparedStatement (safe)
String sql = "INSERT INTO students (name) VALUES (?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, userInput);
pstmt.executeUpdate();  // SAFE`,
          explanation: "SQL injection himoyasi"
        }
      ],
      exercises: [
        {
          task: "PreparedStatement bilan INSERT yozing",
          solution: `String sql = "INSERT INTO students (name, age, city) VALUES (?, ?, ?)";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setString(1, "Ali");
pstmt.setInt(2, 25);
pstmt.setString(3, "Toshkent");
pstmt.executeUpdate();`
        },
        {
          task: "PreparedStatement bilan SELECT yozing (WHERE condition)",
          solution: `String sql = "SELECT * FROM students WHERE age > ?";
PreparedStatement pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, 20);
ResultSet rs = pstmt.executeQuery();`
        }
      ],
      keyPoints: ["PreparedStatement - parameterized SQL", "SQL injection himoya", "Pre-compiled query", "Reusable"]
    },
    7: {
      theory: `ACID properties - transaction'ning to'g'rilik xususiyatlari.

**ACID:**
- **A - Atomicity** - Hamma yoki hech narsa
- **C - Consistency** - Data izchillik
- **I - Isolation** - Transaction'lar izolyatsiya
- **D - Durability** - Data doimiyati

**Transaction commands:**
- BEGIN TRANSACTION - boshlash
- COMMIT - tasdiqlash
- ROLLBACK - bekor qilish
- SAVEPOINT - save point

**Transaction levels:**
- READ UNCOMMITTED
- READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE

**JDBC transaction:**
conn.setAutoCommit(false);
try {
    // operations
    conn.commit();
} catch (Exception e) {
    conn.rollback();
} finally {
    conn.setAutoCommit(true);
}

**Deadlock:**
- Ikki transaction bir-birini kutadi
- Infinite wait
- Avoid proper ordering`,
      codeExamples: [
        {
          code: `// JDBC transaction
conn.setAutoCommit(false);

try {
    // Operation 1
    String sql1 = "UPDATE accounts SET balance = balance - ? WHERE id = ?";
    PreparedStatement pstmt1 = conn.prepareStatement(sql1);
    pstmt1.setDouble(1, 100);
    pstmt1.setInt(2, 1);
    pstmt1.executeUpdate();

    // Operation 2
    String sql2 = "UPDATE accounts SET balance = balance + ? WHERE id = ?";
    PreparedStatement pstmt2 = conn.prepareStatement(sql2);
    pstmt2.setDouble(1, 100);
    pstmt2.setInt(2, 2);
    pstmt2.executeUpdate();

    conn.commit();  // Commit
    System.out.println("Transaction committed");
} catch (SQLException e) {
    conn.rollback();  // Rollback
    System.out.println("Transaction rolled back");
} finally {
    conn.setAutoCommit(true);
}`,
          explanation: "JDBC transaction"
        },
        {
          code: `// Savepoint
Savepoint savepoint = conn.setSavepoint("before_update");

try {
    // Operation
    conn.rollback(savepoint);  // Rollback to savepoint
} catch (SQLException e) {
    e.printStackTrace();
}

// Transaction level
conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);`,
          explanation: "Savepoint va transaction level"
        }
      ],
      exercises: [
        {
          task: "Transaction yaratish (2 ta update operation)",
          solution: `conn.setAutoCommit(false);
try {
    // Update 1
    // Update 2
    conn.commit();
} catch (Exception e) {
    conn.rollback();
} finally {
    conn.setAutoCommit(true);
}`
        },
        {
          task: "Rollback misolini yozing",
          solution: `catch (SQLException e) {
    conn.rollback();
    System.out.println("Transaction rolled back");
}`
        }
      ],
      keyPoints: ["ACID - Atomicity, Consistency, Isolation, Durability", "COMMIT - tasdiqlash", "ROLLBACK - bekor qilish", "Transaction levels"]
    },
    8: {
      theory: `Connection Pooling - database connection'ni boshqarish va qayta ishlatish.

**Connection Pool afzaliklari:**
- Performance yaxshilash
- Resource tejamkamlik
- Connection reuse
- Automatic management

**Connection Pool turlari:**
- HikariCP - eng tez
- Apache DBCP
- C3P0
- ViburDBCP

**HikariCP configuration:**
HikariConfig config = new HikariConfig();
config.setJdbcUrl(url);
config.setUsername(user);
config.setPassword(password);
config.setMaximumPoolSize(10);
config.setMinimumIdle(5);
config.setConnectionTimeout(30000);

**Pool parameters:**
- maximumPoolSize - maksimal connection
- minimumIdle - minimum idle connection
- connectionTimeout - connection timeout
- idleTimeout - idle connection timeout
- maxLifetime - connection maksimal umr

**Connection usage:**
HikariDataSource ds = new HikariDataSource(config);
Connection conn = ds.getConnection();
// use connection
conn.close();  // return to pool`,
      codeExamples: [
        {
          code: `import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

// HikariCP configuration
HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("root");
config.setPassword("password");
config.setMaximumPoolSize(10);
config.setMinimumIdle(5);
config.setConnectionTimeout(30000);
config.setIdleTimeout(600000);
config.setMaxLifetime(1800000);

HikariDataSource dataSource = new HikariDataSource(config);

// Get connection
Connection conn = dataSource.getConnection();
// Use connection
conn.close();  // Return to pool`,
          explanation: "HikariCP configuration"
        },
        {
          code: `// Apache DBCP
import org.apache.commons.dbcp2.BasicDataSource;

BasicDataSource ds = new BasicDataSource();
ds.setUrl("jdbc:mysql://localhost:3306/mydb");
ds.setUsername("root");
ds.setPassword("password");
ds.setInitialSize(5);
ds.setMaxTotal(20);
ds.setMaxIdle(10);
ds.setMinIdle(5);

Connection conn = ds.getConnection();
// Use connection
conn.close();  // Return to pool`,
          explanation: "Apache DBCP"
        }
      ],
      exercises: [
        {
          task: "HikariCP connection pool yaratish",
          solution: `HikariConfig config = new HikariConfig();
config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
config.setUsername("root");
config.setPassword("password");
config.setMaximumPoolSize(10);
HikariDataSource ds = new HikariDataSource(config);`
        },
        {
          task: "Connection pool'dan connection olish",
          solution: `Connection conn = ds.getConnection();
// Use connection
conn.close();`
        }
      ],
      keyPoints: ["Connection Pool - performance", "HikariCP - eng tez", "Resource reuse", "Automatic management"]
    }
  },
  5: {
    0: {
      theory: `Spring Core - Java framework'ning asosi, Dependency Injection (DI).

**Spring Core xususiyatlari:**
- IoC (Inversion of Control) container
- Dependency Injection
- Configuration management
- AOP (Aspect-Oriented Programming)

**IoC Container:**
- Bean lifecycle management
- Dependency injection
- Configuration

**Dependency Injection:**
- Constructor injection
- Setter injection
- Field injection
- Autowiring

**Bean:**
- Spring managed object
- Configuration
- Scope (singleton, prototype, request, session)

**Spring modules:**
- Core container
- Context module
- AOP module
- Aspects module`,
      codeExamples: [
        {
          code: `import org.springframework.context.annotation.*;
import org.springframework.stereotype.Component;

@Component
public class MyService {
    public void doSomething() {
        System.out.println("Service is working");
    }
}

// Configuration
@Configuration
@ComponentScan("com.example")
public class AppConfig {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = 
            new AnnotationConfigApplicationContext(AppConfig.class);
        MyService service = context.getBean(MyService.class);
        service.doSomething();
    }
}`,
          explanation: "Spring Core basic setup"
        },
        {
          code: `// Dependency Injection
@Service
public class UserService {
    private UserRepository userRepository;
    
    // Constructor injection
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

@Repository
public class UserRepository {
    public User findById(Long id) {
        return new User();
    }
}

// Configuration
@Configuration
public class AppConfig {
    @Bean
    public UserRepository userRepository() {
        return new UserRepository();
    }
    
    @Bean
    public UserService userService(UserRepository userRepository) {
        return new UserService(userRepository);
    }
}`,
          explanation: "Dependency Injection"
        }
      ],
      exercises: [
        {
          task: "@Component annotation bilan bean yaratish",
          solution: `@Component
public class MyService {
    public void doSomething() {
        System.out.println("Service is working");
    }
}`
        },
        {
          task: "@Autowired bilan dependency injection",
          solution: `@Service
public class UserService {
    private UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}`
        }
      ],
      keyPoints: ["IoC Container - bean management", "Dependency Injection - dependency supply", "@Component - bean annotation", "@Autowired - injection"]
    },
    1: {
      theory: `Spring Boot - Spring framework'ni tezro ishlatish uchun tool.

**Spring Boot xususiyatlari:**
- Auto-configuration
- Embedded server (Tomcat, Jetty)
- Starter dependencies
- Production-ready features
- Minimal configuration

**Spring Boot starters:**
- spring-boot-starter-web - web applications
- spring-boot-starter-data-jpa - database
- spring-boot-starter-security - security
- spring-boot-starter-test - testing

**@SpringBootApplication:**
- @Configuration
- @EnableAutoConfiguration
- @ComponentScan
- @EnableAutoConfiguration

**Application properties:**
- application.properties
- application.yml
- Environment-specific configuration

**Embedded server:**
- Tomcat (default)
- Jetty
- Undertow`,
      codeExamples: [
        {
          code: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// application.properties
server.port=8080
spring.datasource.url=jdbc:mysql://localhost:3306/mydb
spring.datasource.username=root
spring.datasource.password=password`,
          explanation: "Spring Boot basic setup"
        },
        {
          code: `// REST Controller
@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @GetMapping("/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.findById(id);
    }
    
    @PostMapping
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}

// Service
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    
    public List<User> findAll() {
        return userRepository.findAll();
    }
}`,
          explanation: "Spring Boot REST API"
        }
      ],
      exercises: [
        {
          task: "@SpringBootApplication annotation bilan main class yaratish",
          solution: `@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`
        },
        {
          task: "application.properties faylida port o'zgartirish",
          solution: `server.port=8080`
        }
      ],
      keyPoints: ["Spring Boot - auto-configuration", "Starter dependencies", "Embedded server", "@SpringBootApplication"]
    },
    2: {
      theory: `REST API - Representational State Transfer web service.

**REST principles:**
- Resource-based
- Stateless
- Cacheable
- Uniform interface
- Client-server architecture

**HTTP methods:**
- GET - resource olish
- POST - resource yaratish
- PUT - to'liq o'zgartirish
- PATCH - qisman o'zgartirish
- DELETE - resource o'chirish

**HTTP status codes:**
- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 404 Not Found
- 500 Internal Server Error

**RESTful endpoints:**
- GET /api/users - barcha user'lar
- GET /api/users/{id} - bitta user
- POST /api/users - yangi user
- PUT /api/users/{id} - user o'zgartirish
- DELETE /api/users/{id} - user o'chirish`,
      codeExamples: [
        {
          code: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.findAll();
        return ResponseEntity.ok(users);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(
        @PathVariable Long id
    ) {
        User user = userService.findById(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }
    
    @PostMapping
    public ResponseEntity<User> createUser(
        @RequestBody @Valid User user
    ) {
        User saved = userService.save(user);
        return ResponseEntity.status(201).body(saved);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(
        @PathVariable Long id,
        @RequestBody User user
    ) {
        User updated = userService.update(id, user);
        return ResponseEntity.ok(updated);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(
        @PathVariable Long id
    ) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}`,
          explanation: "REST Controller"
        },
        {
          code: `// Request body
public class User {
    private Long id;
    private String name;
    private String email;
    
    // Getters and Setters
}

// POST request body
{
    "name": "Ali",
    "email": "ali@example.com"
}

// PUT request body
{
    "name": "Ali Updated",
    "email": "ali.updated@example.com"
}`,
          explanation: "Request body format"
        }
      ],
      exercises: [
        {
          task: "@RestController bilan controller yaratish",
          solution: `@RestController
@RequestMapping("/api/users")
public class UserController {
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
}`
        },
        {
          task: "GET endpoint yaratish (user by id)",
          solution: `@GetMapping("/{id}")
public ResponseEntity<User> getUserById(@PathVariable Long id) {
    User user = userService.findById(id);
    return ResponseEntity.ok(user);
}`
        },
        {
          task: "POST endpoint yaratish (create user)",
          solution: `@PostMapping
public ResponseEntity<User> createUser(@RequestBody User user) {
    User saved = userService.save(user);
    return ResponseEntity.status(201).body(saved);
}`
        }
      ],
      keyPoints: ["REST - resource-based", "HTTP methods - GET, POST, PUT, DELETE", "Status codes - 200, 201, 404, 500", "@RestController"]
    },
    3: {
      theory: `Dependency Injection (DI) - dependency'ni tashqaridan berish.

**DI turlari:**
- Constructor injection
- Setter injection
- Field injection
- Method injection

**@Autowired:**
- Spring DI annotation
- Automatic dependency injection
- By type, by name, by qualifier

**@Qualifier:**
- Bean identification
- Multiple beans uchun
- Bean name specification

**@Component:**
- Bean annotation
- Auto-detection
- @Service, @Repository, @Controller

**Bean scope:**
- Singleton (default) - bitta instance
- Prototype - har request'da yangi instance
- Request - har HTTP request
- Session - har HTTP session`,
      codeExamples: [
        {
          code: `// Constructor injection (recommended)
@Service
public class UserService {
    private final UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Setter injection
@Service
public class UserService {
    private UserRepository userRepository;
    
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Field injection (not recommended)
@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
}`,
          explanation: "DI turlari"
        },
        {
          code: `// @Qualifier for multiple beans
@Repository
public class UserRepository {
    public User findById(Long id) {
        return new User();
    }
}

@Repository
public class CustomUserRepository {
    public User findById(Long id) {
        return new User();
    }
}

@Service
public class UserService {
    private UserRepository userRepository;
    
    @Autowired
    @Qualifier("customUserRepository")
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}

// Configuration
@Configuration
public class AppConfig {
    @Bean
    @Primary
    public UserRepository userRepository() {
        return new UserRepository();
    }
    
    @Bean
    public CustomUserRepository customUserRepository() {
        return new CustomUserRepository();
    }
}`,
          explanation: "@Qualifier va @Primary"
        }
      ],
      exercises: [
        {
          task: "Constructor injection bilan service yaratish",
          solution: `@Service
public class UserService {
    private final UserRepository userRepository;
    
    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}`
        },
        {
          task: "@Qualifier bilan bean selection",
          solution: `@Autowired
@Qualifier("userRepository")
private UserRepository userRepository;`
        }
      ],
      keyPoints: ["DI - dependency injection", "Constructor injection - recommended", "@Autowired - automatic injection", "@Qualifier - bean selection"]
    },
    4: {
      theory: `Hibernate/JPA - Object-Relational Mapping (ORM) framework.

**JPA (Java Persistence API):**
- Java standard for ORM
- Specification
- Hibernate implementation

**Hibernate:**
- ORM framework
- Database mapping
- Query generation

**Entity:**
- @Entity annotation
- @Id - primary key
- @GeneratedValue - auto generation
- @Column - column mapping

**Relationships:**
- @OneToOne
- @OneToMany
- @ManyToOne
- @ManyToMany

**Repository:**
- JpaRepository interface
- CRUD methods
- Query methods

**JPQL:**
- Java Persistence Query Language
- Object-oriented query
- Named queries`,
      codeExamples: [
        {
          code: `import javax.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    @Column
    private int age;
    
    // Getters and Setters
}

// Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
    List<User> findByAgeGreaterThan(int age);
}`,
          explanation: "Entity va Repository"
        },
        {
          code: `// OneToMany relationship
@Entity
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @OneToMany(mappedBy = "department")
    private List<Employee> employees;
    
    // Getters and Setters
}

@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    
    // Getters and Setters
}

// Repository with query
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByDepartmentId(Long departmentId);
}`,
          explanation: "Relationships"
        },
        {
          code: `// Custom query with @Query
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("SELECT u FROM User u WHERE u.age > :age")
    List<User> findByAgeGreaterThan(@Param("age") int age);
    
    @Query("SELECT u FROM User u WHERE u.name LIKE %:name%")
    List<User> findByNameContaining(@Param("name") String name);
}

// Native SQL query
@Query(value = "SELECT * FROM users WHERE age > :age", nativeQuery = true)
List<User> findUsersOlderThan(@Param("age") int age);`,
          explanation: "Custom queries"
        }
      ],
      exercises: [
        {
          task: "@Entity bilan User class yaratish",
          solution: `@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(unique = true, nullable = false)
    private String email;
    
    // Getters and Setters
}`
        },
        {
          task: "Repository interface yaratish",
          solution: `public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}`
        }
      ],
      keyPoints: ["JPA - Java Persistence API", "Hibernate - ORM implementation", "@Entity - table mapping", "Repository - CRUD methods"]
    },
    5: {
      theory: `Spring Validation - input validation uchun framework.

**Validation annotations:**
- @NotNull - null bo'lmasligi
- @Size - uzunlik
- @Min - minimum qiymat
- @Max - maximum qiymat
- @Email - email format
- @Pattern - regex pattern
- @Valid - trigger validation

**@Valid:**
- Method parameter validation
- Automatic validation
- BindingResult

**Custom validation:**
- @Constraint
- Validator interface
- ConstraintValidator

**Validation groups:**
- Grouping validations
- Different validation rules`,
      codeExamples: [
        {
          code: `import javax.validation.constraints.*;
import org.springframework.validation.annotation.*;

public class User {
    @NotNull(message = "Name is required")
    @Size(min = 2, max = 50, message = "Name must be 2-50 characters")
    private String name;
    
    @NotNull(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;
    
    @Min(value = 18, message = "Age must be at least 18")
    @Max(value = 120, message = "Age must be at most 120")
    private int age;
    
    @Pattern(regexp = "^[A-Za-z0-9]+$", message = "Only alphanumeric")
    private String username;
    
    // Getters and Setters
}

// Controller validation
@RestController
@RequestMapping("/api/users")
public class UserController {
    @PostMapping
    public ResponseEntity<User> createUser(
        @Valid @RequestBody User user,
        BindingResult result
    ) {
        if (result.hasErrors()) {
            return ResponseEntity.badRequest().build();
        }
        User saved = userService.save(user);
        return ResponseEntity.status(201).body(saved);
    }
}`,
          explanation: "Validation annotations"
        },
        {
          code: `// Custom validation
@Target({ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = AgeValidator.class)
@Documented
public @interface Age {
    String message() default "Invalid age";
    int min() default 18;
    int max() default 120;
}

public class AgeValidator implements ConstraintValidator<Age, Integer> {
    @Override
    public boolean isValid(Integer age, ConstraintValidatorContext context) {
        if (age == null) {
            return true;
        }
        Age ageAnnotation = context.getConstraintAnnotation();
        return age >= ageAnnotation.min() && age <= ageAnnotation.max();
    }
}

// Usage
@Age(min = 21, max = 65)
private int age;`,
          explanation: "Custom validation"
        }
      ],
      exercises: [
        {
          task: "User class yaratish validation bilan",
          solution: `public class User {
    @NotNull
    @Size(min = 2, max = 50)
    private String name;
    
    @NotNull
    @Email
    private String email;
    
    @Min(18)
    private int age;
    
    // Getters and Setters
}`
        },
        {
          task: "@Valid bilan controller'da validation",
          solution: `@PostMapping
public ResponseEntity<User> createUser(
    @Valid @RequestBody User user,
    BindingResult result
) {
    if (result.hasErrors()) {
        return ResponseEntity.badRequest().build();
    }
    User saved = userService.save(user);
    return ResponseEntity.status(201).body(saved);
}`
        }
      ],
      keyPoints: ["@Valid - trigger validation", "Validation annotations - @NotNull, @Size, @Min, @Max", "BindingResult - validation errors"]
    },
    6: {
      theory: `Spring Security - authentication va authorization framework.

**Spring Security xususiyatlari:**
- Authentication - kim ekanligini tekshirish
- Authorization - nima qilish mumkin
- CSRF protection
- Session management
- Remember me

**Security configuration:**
- SecurityFilterChain
- AuthenticationManager
- UserDetailsService
- PasswordEncoder

**Authentication:**
- Form login
- Basic auth
- JWT (JSON Web Token)
- OAuth2

**Authorization:**
- Role-based
- Permission-based
- Method-level security
- URL-based

**@PreAuthorize:**
- Method-level security
- SpEL (Spring Expression Language)
- Role/permission checks`,
      codeExamples: [
        {
          code: `import org.springframework.security.config.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
    
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults())
            .formLogin(withDefaults());
        return http.build();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}`,
          explanation: "Security configuration"
        },
        {
          code: `// Method-level security
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/users")
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @PreAuthorize("hasAuthority('USER_WRITE')")
    @PostMapping("/users")
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}

// User details service
@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        return new User(user.getUsername(), user.getPassword(),
            AuthorityUtils.createAuthorityList(user.getRoles()));
    }
}`,
          explanation: "Method-level security"
        }
      ],
      exercises: [
        {
          task: "SecurityConfig yaratish basic auth bilan",
          solution: `@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
            )
            .httpBasic(withDefaults());
        return http.build();
    }
}`
        },
        {
          task: "@PreAuthorize bilan method security",
          solution: `@PreAuthorize("hasRole('ADMIN')")
@GetMapping("/admin/users")
public List<User> getAllUsers() {
    return userService.findAll();
}`
        }
      ],
      keyPoints: ["Spring Security - auth/authz", "Authentication - kim ekanlik", "Authorization - nima qilish mumkin", "@PreAuthorize - method security"]
    },
    7: {
      theory: `JWT (JSON Web Token) - stateless authentication token.

**JWT xususiyatlari:**
- Stateless authentication
- Self-contained token
- Base64 encoded
- Three parts: Header, Payload, Signature

**JWT structure:**
- Header - algorithm va token type
- Payload - claims (data)
- Signature - verification

**JWT benefits:**
- No server-side session storage
- Cross-domain support
- Mobile-friendly
- Scalable

**JWT vs Session:**
- JWT - stateless, client-side
- Session - stateful, server-side

**JWT libraries:**
- java-jwt (Auth0)
- jjwt (JSON Web Token support for Java)

**Security considerations:**
- Use HTTPS
- Short expiration
- Refresh tokens
- Validate signature`,
      codeExamples: [
        {
          code: `import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

// JWT generation
String secretKey = "mySecretKey";
Key key = Keys.hmacShaKeyFor(secretKey.getBytes());

String jwt = Jwts.builder()
    .setSubject("user123")
    .setIssuer("myapp")
    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
    .signWith(key, SignatureAlgorithm.HS256)
    .compact();

System.out.println(jwt);`,
          explanation: "JWT generation"
        },
        {
          code: `// JWT parsing and validation
try {
    Claims claims = Jwts.parserBuilder()
        .setSigningKey(key)
        .build()
        .parseClaimsJws(jwt)
        .getBody();
    
    String subject = claims.getSubject();
    String issuer = claims.getIssuer();
    Date expiration = claims.getExpiration();
    
    System.out.println("Subject: " + subject);
    System.out.println("Issuer: " + issuer);
} catch (JwtException e) {
    System.out.println("Invalid JWT");
}`,
          explanation: "JWT parsing and validation"
        }
      ],
      exercises: [
        {
          task: "JWT token yaratish",
          solution: `String jwt = Jwts.builder()
    .setSubject("user123")
    .setExpiration(new Date(System.currentTimeMillis() + 86400000))
    .signWith(key, SignatureAlgorithm.HS256)
    .compact();`
        },
        {
          task: "JWT token'ni validate qilish",
          solution: `Claims claims = Jwts.parserBuilder()
    .setSigningKey(key)
    .build()
    .parseClaimsJws(jwt)
    .getBody();`
        }
      ],
      keyPoints: ["JWT - stateless token", "Header, Payload, Signature", "Self-contained", "HTTPS required"]
    },
    8: {
      theory: `Swagger - API documentation tool.

**Swagger xususiyatlari:**
- Interactive API documentation
- API testing
- Client SDK generation
- OpenAPI specification

**Spring Boot Swagger:**
- springdoc-openapi
- Swagger UI
- OpenAPI 3.0

**Swagger annotations:**
- @Operation - endpoint description
- @Parameter - parameter description
- @ApiResponse - response description
- @Tag - endpoint grouping

**Swagger UI:**
- /swagger-ui/index.html
- Interactive testing
- Request/Response examples

**OpenAPI specification:**
- YAML or JSON format
- API contract
- Client generation`,
      codeExamples: [
        {
          code: `// pom.xml dependency
<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>1.6.14</version>
</dependency>

// application.properties
springdoc.api-docs.path=/api-docs
springdoc.swagger-ui.path=/swagger-ui.html`,
          explanation: "Swagger dependency"
        },
        {
          code: `import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Operation(summary = "Get all users", description = "Returns list of all users")
    @ApiResponse(responseCode = "200", description = "Successful")
    @ApiResponse(responseCode = "404", description = "Users not found")
    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }
    
    @Operation(summary = "Get user by ID", description = "Returns a single user")
    @GetMapping("/{id}")
    public User getUserById(
        @Parameter(description = "User ID") @PathVariable Long id
    ) {
        return userService.findById(id);
    }
}`,
          explanation: "Swagger annotations"
        }
      ],
      exercises: [
        {
          task: "Swagger dependency qo'shing",
          solution: `<dependency>
    <groupId>org.springdoc</groupId>
    <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
    <version>1.6.14</version>
</dependency>`
        },
        {
          task: "@Operation annotation bilan endpoint'ni document qiling",
          solution: `@Operation(summary = "Get all users", description = "Returns list of all users")
@GetMapping
public List<User> getAllUsers() {
    return userService.findAll();
}`
        }
      ],
      keyPoints: ["Swagger - API documentation", "springdoc-openapi", "@Operation annotation", "/swagger-ui.html"]
    },
    9: {
      theory: `Testing - unit va integration testing.

**Testing turlari:**
- Unit testing - bitta component
- Integration testing - ko'p component
- End-to-end testing - to'liq flow

**JUnit 5:**
- @Test - test method
- @BeforeEach - har test oldin
- @AfterEach - har test keyin
- @BeforeAll - barcha test oldin
- @AfterAll - barcha test keyin

**Assertions:**
- assertEquals()
- assertTrue()
- assertFalse()
- assertNull()
- assertNotNull()

**Mockito:**
- Mock object'lar
- when().thenReturn()
- verify()
- @Mock, @InjectMocks

**Spring Boot Test:**
- @SpringBootTest
- @WebMvcTest
- @DataJpaTest
- @MockBean`,
      codeExamples: [
        {
          code: `import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {
    private Calculator calculator;
    
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
    }
    
    @Test
    void testAdd() {
        int result = calculator.add(5, 3);
        assertEquals(8, result);
    }
    
    @Test
    void testSubtract() {
        int result = calculator.subtract(5, 3);
        assertEquals(2, result);
    }
}`,
          explanation: "JUnit 5 basic test"
        },
        {
          code: `import org.mockito.*;
import static org.mockito.Mockito.*;

class UserServiceTest {
    @Mock
    private UserRepository userRepository;
    
    @InjectMocks
    private UserService userService;
    
    @Test
    void testFindById() {
        User user = new User("Ali", 25);
        when(userRepository.findById(1L)).thenReturn(Optional.of(user));
        
        User result = userService.findById(1L);
        
        assertEquals("Ali", result.getName());
        verify(userRepository).findById(1L);
    }
}`,
          explanation: "Mockito test"
        },
        {
          code: `@SpringBootTest
@AutoConfigureMockMvc
class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;
    
    @Test
    void testGetAllUsers() throws Exception {
        mockMvc.perform(get("/api/users"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$[0].name").value("Ali"));
    }
}`,
          explanation: "Spring Boot test"
        }
      ],
      exercises: [
        {
          task: "JUnit test yozing",
          solution: `@Test
void testAdd() {
    Calculator calc = new Calculator();
    int result = calc.add(5, 3);
    assertEquals(8, result);
}`
        },
        {
          task: "Mockito bilan mock object yarating",
          solution: `@Mock
private UserRepository userRepository;

@Test
void testFindById() {
    when(userRepository.findById(1L)).thenReturn(Optional.of(user));
}`
        }
      ],
      keyPoints: ["JUnit 5 - testing framework", "Mockito - mocking", "@SpringBootTest - integration test", "Assertions - validation"]
    },
    10: {
      theory: `Spring Boot Actuator - application monitoring.

**Actuator xususiyatlari:**
- Production-ready features
- Health checks
- Metrics
- HTTP endpoints

**Actuator endpoints:**
- /actuator/health - application health
- /actuator/info - application info
- /actuator/metrics - application metrics
- /actuator/env - environment properties
- /actuator/loggers - logger configuration

**Health indicators:**
- Database health
- Disk space health
- Redis health
- Custom health indicators

**Metrics:**
- JVM metrics
- HTTP metrics
- Database metrics
- Custom metrics

**Security:**
- Endpoint protection
- Role-based access`,
      codeExamples: [
        {
          code: `// pom.xml dependency
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>

// application.properties
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always`,
          explanation: "Actuator dependency"
        },
        {
          code: `// Custom health indicator
@Component
public class CustomHealthIndicator implements HealthIndicator {
    @Override
    public Health health() {
        // Custom health check logic
        boolean isHealthy = checkHealth();
        
        if (isHealthy) {
            return Health.up().withDetail("service", "running").build();
        } else {
            return Health.down().withDetail("error", "Service unavailable").build();
        }
    }
    
    private boolean checkHealth() {
        return true;
    }
}`,
          explanation: "Custom health indicator"
        }
      ],
      exercises: [
        {
          task: "Actuator dependency qo'shing",
          solution: `<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
</dependency>`
        },
        {
          task: "/actuator/health endpoint'ni enable qiling",
          solution: `management.endpoints.web.exposure.include=health`
        }
      ],
      keyPoints: ["Actuator - monitoring", "/actuator/health", "Health indicators", "Metrics"]
    },
    11: {
      theory: `Profile management - environment-specific configuration.

**Profiles:**
- Development
- Testing
- Production
- Custom profiles

**Profile activation:**
- application-{profile}.properties
- @Profile annotation
- Command line argument
- Environment variable

**Profile-specific properties:**
- application-dev.properties
- application-test.properties
- application-prod.properties

**@Profile annotation:**
- Component level
- Configuration level
- Bean level

**Profile selection:**
- spring.profiles.active=dev
- SpringApplication.setAdditionalProfiles()`,
      codeExamples: [
        {
          code: `// application-dev.properties
spring.datasource.url=jdbc:mysql://localhost:3306/dev_db
server.port=8080

// application-prod.properties
spring.datasource.url=jdbc:mysql://prod-server:3306/prod_db
server.port=80

// application.properties
spring.profiles.active=dev`,
          explanation: "Profile-specific properties"
        },
        {
          code: `// @Profile annotation
@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource devDataSource() {
        return new HikariDataSource();
    }
}

@Configuration
@Profile("prod")
public class ProdConfig {
    @Bean
    public DataSource prodDataSource() {
        return new HikariDataSource();
    }
}

// Profile activation
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        app.setAdditionalProfiles("dev");
        app.run(args);
    }
}`,
          explanation: "@Profile annotation"
        }
      ],
      exercises: [
        {
          task: "application-dev.properties fayl yarating",
          solution: `spring.datasource.url=jdbc:mysql://localhost:3306/dev_db
server.port=8080`
        },
        {
          task: "@Profile annotation bilan bean yarating",
          solution: `@Configuration
@Profile("dev")
public class DevConfig {
    @Bean
    public DataSource devDataSource() {
        return new HikariDataSource();
    }
}`
        }
      ],
      keyPoints: ["Profiles - environment-specific", "application-{profile}.properties", "@Profile annotation", "spring.profiles.active"]
    },
    12: {
      theory: `Caching - performance optimization.

**Caching xususiyatlari:**
- Performance improvement
- Reduced database load
- Faster response time

**Spring Cache:**
- @Cacheable - cache result
- @CachePut - update cache
- @CacheEvict - remove from cache
- @Caching - multiple cache operations

**Cache providers:**
- Ehcache
- Hazelcast
- Redis
- Caffeine
- Simple (in-memory)

**@Cacheable:**
- key generation
- condition
- unless
- cache names

**Cache configuration:**
- @EnableCaching
- CacheManager
- TTL (Time To Live)`,
      codeExamples: [
        {
          code: `// pom.xml dependency
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

// Configuration
@Configuration
@EnableCaching
public class CacheConfig {
    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(Caffeine.newBuilder()
            .expireAfterWrite(10, TimeUnit.MINUTES));
        return cacheManager;
    }
}`,
          explanation: "Cache configuration"
        },
        {
          code: `@Service
public class UserService {
    
    @Cacheable(value = "users", key = "#id")
    public User findById(Long id) {
        // Database query
        return userRepository.findById(id);
    }
    
    @CachePut(value = "users", key = "#user.id")
    public User update(User user) {
        return userRepository.save(user);
    }
    
    @CacheEvict(value = "users", key = "#id")
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    
    @CacheEvict(value = "users", allEntries = true)
    public void clearCache() {
        // Clear all cache
    }
}`,
          explanation: "Cache annotations"
        }
      ],
      exercises: [
        {
          task: "@Cacheable annotation bilan method yozing",
          solution: `@Cacheable(value = "users", key = "#id")
public User findById(Long id) {
    return userRepository.findById(id);
}`
        },
        {
          task: "@CacheEvict bilan cache tozalash",
          solution: `@CacheEvict(value = "users", allEntries = true)
public void clearCache() {
    // Clear all cache
}`
        }
      ],
      keyPoints: ["Caching - performance", "@Cacheable - cache result", "@CachePut - update cache", "@CacheEvict - remove cache"]
    },
    13: {
      theory: `Async processing - non-blocking operations.

**Async xususiyatlari:**
- Non-blocking operations
- Parallel execution
- Improved performance
- Better resource utilization

**@Async annotation:**
- Async method execution
- Separate thread
- Future return type

**Async configuration:**
- @EnableAsync
- TaskExecutor
- Thread pool configuration

**CompletableFuture:**
- Async computation
- Chaining operations
- Exception handling

**Async use cases:**
- Email sending
- File processing
- External API calls
- Long-running tasks`,
      codeExamples: [
        {
          code: `// Configuration
@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean
    public TaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.setQueueCapacity(100);
        executor.initialize();
        return executor;
    }
}

// Async service
@Service
public class EmailService {
    
    @Async
    public void sendEmail(String to, String subject, String body) {
        // Send email in separate thread
        System.out.println("Sending email to: " + to);
    }
}`,
          explanation: "Async configuration and service"
        },
        {
          code: `// CompletableFuture
@Service
public class DataService {
    
    @Async
    public CompletableFuture<String> fetchData(String id) {
        // Simulate long operation
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return CompletableFuture.completedFuture("Data for " + id);
    }
}

// Usage
CompletableFuture<String> future = dataService.fetchData("123");
future.thenAccept(data -> System.out.println("Received: " + data));`,
          explanation: "CompletableFuture"
        }
      ],
      exercises: [
        {
          task: "@EnableAsync bilan async configuration yarating",
          solution: `@Configuration
@EnableAsync
public class AsyncConfig {
    @Bean
    public TaskExecutor taskExecutor() {
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        executor.setCorePoolSize(5);
        executor.setMaxPoolSize(10);
        executor.initialize();
        return executor;
    }
}`
        },
        {
          task: "@Async bilan async method yozing",
          solution: `@Async
public CompletableFuture<String> fetchData(String id) {
    return CompletableFuture.completedFuture("Data for " + id);
}`
        }
      ],
      keyPoints: ["Async - non-blocking", "@EnableAsync - enable async", "@Async - async method", "CompletableFuture - async result"]
    }
  }
}
