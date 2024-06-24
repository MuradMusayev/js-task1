// Task-01
// Konsola mesaj verin: «My name is Murad».

console.log("My name is Murad");

///////////////////////////////////////////////////////////

// Task-02
// Adı name və adınızın mənimsədildiyi sabit dəyişən təyin edin.
// Bu dəyişənin dəyərini konsolda göstərin.

const name = "Murad";
console.log(name);

////////////////////////////////////////////////////////

// Task-03
// Bu adlardan hansının dəyişən üçün istifadə oluna biləcəyini göstərin.
// Birdən çox variant seçin.

// 2user
// c@rt
// person
// title color
// console
// $add

console.log("person, console, $add");

///////////////////////////////////////////////////////////////////

// Task-04
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın
// Kitab mağazasındaki kitabın qiyməti bookPrice dəyişənində
// və depodaki kitab sayı bookAmount dəyişənində saxlanılır.
// Depodaki bütün kitabların ümumi dəyərini konsola çıxarın.
// =>let bookPrice = 750;
// =>let bookAmount = 14;

let bookPrice = 750;
let bookAmount = 14;
let overallPrice = bookPrice * bookAmount;
console.log(overallPrice);

/////////////////////////////////////////////////////////////////////

// Task-05
// Dəyişən dəyərini saniyə metrə çevirin və onu konsola çıxarın.
// kmhSpeed ​​dəyişəni avtomobilin sürətinin «saatda kilometrlərlə»
// dəyərini saxlayır. msSpeed ​​dəyişəni təyin edin və
// ona eyni sürət dəyərini «saniyədə metrə» çevirərək yazın.
// msSpeed dəyişəninin dəyərini konsola çıxarın.
// =>let kmhSpeed = 75;

let kmhSpeed = 75;
let msSpeed = (kmhSpeed * 5) / 18;
console.log(msSpeed);

/////////////////////////////////////////////////////////////////////

// Task-06
// İstifadəçinin doğum tarixini soruşan və bu günə qədər yaşadığı
// günlərin sayını göstərən proqram yazın.

let bornDate = prompt("Enter Your Born Year");
let age = 2024 - bornDate;
let days = age * 365;
console.log(days);

///////////////////////////////////////////////////////////////////

// Task-07
// Ədədlər üzərində əməliyyatları yerinə yetirin.
// num dəyişənində iki rəqəmli ədəd saxlanılır.
// Bele proqram yazın:
// - Bu ədədin beşinci dərəcə qüvvətə qaldırılmış vəziyyətini.
// - 3-ə bölünmədən qalan bu ədədin qalığını.

let num = 15;
console.log(num ** 5);
console.log(num % 3);

/////////////////////////////////////////////////////////////////////

// Task-08
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName].
// Tanışlığımıza çox şadam!”
// firstName dəyişənində istifadəçinin adı,
// lastName — dəyişənində isə soyadı saxlanır.
// Konsola bu növ mesaj çıxarın “Sizin adınız [firstName] [lastName]. Tanışlığımıza çox şadam!”
// =>let firstName = 'Alan';
// =>let lastName = 'Turing';

let firstName = "Murad";
let lastName = "Musayev";

console.log(
  "Sizin adınız " +
    `${firstName}` +
    " " +
    `${lastName}` +
    ". Tanışlığımıza çox şadam!"
);

//////////////////////////////////////////////////////////////////////////////////////////////////

// Task-09
// Şablon mətnlərdən istifadə edərək,
// konsola “Sizi bir daha görməyimizə şadıq, [firstName] [lastName]”.
// firstName dəyişənində istifadəçinin adı, lastName — dəyişənində isə soyadı saxlanır.\

console.log(
  "Sizi bir daha görməyimizə şadıq, " + `${firstName}` + " " + `${lastName}`
);

//////////////////////////////////////////////////////////////////////////////////////////////////

// Task-10
// Addaki hərflərin sayını konsola çıxarın.
// fullName dəyişənində istifadəçinin tam adı saxlanılır. Addaki hərflərin sayını konsola çıxarın.
// Probel hərf olaraq sayılmır.
// let fullName = "Murad Orucov"

let fullName = "Murad Orucov";
console.log(fullName.length - 1);

//////////////////////////////////////////////////////////////////////////////////////

// Task-11
// İstifadəçinin ad soyadının baş hərflərini konsola çıxaran proqram yazın.
// İstifadəçinin adını və soyadını boşluqlarla ayıraraq fullName dəyişəninə yazın.
// fullName dəyişəninin dəyərindən istifadə edərək istifadəçinin baş hərflərini
// konsola çıxaran proqram yazın.

let FullName = "Murad Musayev";
let spaceIndex = FullName.indexOf(" ");
console.log(FullName[0], FullName[spaceIndex + 1]);

///////////////////////////////////////////////////////////////////////////////////////////

// Task-12
// İstifadəçidən tam adını daxil etməyini istəyin və soyadı ilə adının yerini dəyişin.
// İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin.
// Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

let getFullName = prompt("Enter Your Full Name - Name Surname");
let getSpace = getFullName.indexOf(" ");
let FIRSTNAME = getFullName.slice(0, getSpace);
let LASTNAME = getFullName.slice(getSpace + 1);
console.log(LASTNAME + " " + FIRSTNAME);

//////////////////////////////////////////////////////////////////////////

// Task-13
// İstifadəçidən adını daxil etməsini istəyin.
// Konsola "Salam, [ad]!" formatında salamlama mesajı çıxarın.

let getFirstName = prompt("Enter Your Name");
console.log("Salam, " + getFirstName);

//////////////////////////////////////////////////////////////////

// Task-14
// İstifadəçidən iki ayrı prompt əmri ilə iki ədəd daxil etməsini istəyin.
// Bu ədədlərin toplama, çıxma, vurma və bölməsinin nəticələrin konsola
// alt-alta 4 sətir olaraq çıxarın.

let firstNumber = prompt("Enter First Number");
let secondNumber = prompt("Enter Second Number");

let a = parseInt(firstNumber);
let b = parseInt(secondNumber);

let sum = a + b;
let minus = a - b;
let mul = a * b;
let devide = a / b;

console.log(sum + "\n" + minus + "\n" + mul + "\n" + devide);

////////////////////////////////////////////////////////////////////////////

// Task-15
// 12345 və 98765 ədədlərinin hasilindən alınan nəticənin 6-cı rəqəmini tapan proqram yazın

let number1 = 12345;
let number2 = 98765;
let total = number1 * number2;
let numberAsString = total.toString();
console.log(numberAsString[5])