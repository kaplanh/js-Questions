// !====================QUESTIONS=====================
// console.log("Hello World!");
// 1-Sayının Pozitif veya Negatif olduğunu bulma // if else
// 2-Sayının tek mi çift mi olduğunu bulma //if else
// 3-Haftanın gününü yazdırma(if else)
// 4-Ehliyet alabiliyor mu? // koşullar yaşın 18'den büyük olması ve araba sürmeyi bilip bilmemesi
// 5-Login = Kullanıcı id ve şifre kontrolü // if else
// 6-Login = Kullanıcı id ve şifre kontrolü(iç içe koşullar) // id doğru girerse passwordu istesin
// 7-Hesap makinesi yapımı if else
// 8-Switch case ile haftanın gününü yazdırma

// !===============SOLITIONS===================
//?1- Sayının pozitif mi yoksa negatif mi olduğunu bulan program;
// let number = 0;

// if (number>0) {
//     console.log("number is positive");
// }else if (number<0) {
//     console.log("number is negative");
// }else{
//     console.log("number is zero");
// }

// ?2-Sayının tek mi çift mi olduğunu bulma //if else
// const number = 4;

// if (number%2==0) {
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }

//?3- Girilen sayının haftanın hangi gününe denk geldiğini döndüren program;
// const number = +prompt("please enter your number")

// if (number==1) {
//     console.log("pazartesi");
// } else if (number==2) {
//     console.log("sali");
// } else if (number==3) {
//     console.log("carsamba");
// }else if (number==4) {
//     console.log("persembe");
// }else if (number==5) {
//     console.log("cuma");
// }else if (number==6) {
//     console.log("cumartesi");
// }else if (number==7) {
//     console.log("pazar");
// }else{
//     console.log("please enter your number correctly");
// }

//?4- Yaşına ve araba sürebilip süremediğine göre ehliyet alıp alamayacağını döndüren program

// let age = +prompt("please enter your age")
// let canDrive = +prompt("Can you drive? \nPress 1 to 'Yes' \nPress 0 to 'No");

// if (age>=18 && canDrive==true) {
//     console.log("get a license");
// }else if (age>=18 && canDrive==false) {
//     console.log("you have learn to drive");
// }else if (age<18 && canDrive==true) {
//     console.log("You are to young. sabrett");
// }else{
//     console.log(":) :) :) ");
// }

//?5- Kullacının girdiği id ve parolaya göre login check yapan program

// const id = 123123;
// const password = 123123;

// const userID = +prompt("please enter your id")
// const userPassword = +prompt("Please enter your password")

// if (userID==id && userPassword==password) {
//     console.log("login succesfull");
// }else if (userID==id && userPassword!=password) {
//     console.log("id is correct, password is wrong");
// }else if (userID!=id && userPassword==password) {
//     console.log("id is wrong, password is correct");
// }else{
//     console.log("login failed");
// }

//?6- Kullacının girdiği id ve parolaya göre login check yapan program (İç içe koşullu)

// let realId = 123123;
// let realPassword = 123123;

// let id = +prompt("please enter your id")
// let password;

// if (realId==id) {
//     console.log("id is correct");
//     password = +prompt("Please enter your password");
//     if (realPassword==password) {
//         console.log("password is correct");
//         console.log("Login succesfull");
//     }else{
//         console.log("password is wrong");
//     }
// }else {
//     console.log("wrong id.");
// }

//?7-Hesap makinesi uygulaması

// let calculate = +prompt("Press '+' to add \nPress '-' to subs \nPress '*' multi\nPress '/' to division")
// let number1 = +prompt("Please enter a number1")
// let number2 = +prompt("Please enter a number2")

// if (calculate=='+') {
//     console.log(number1+number1);
// }else if (calculate=='-') {
//     console.log(number1-number2);
// }else if (calculate=='*') {
//     console.log(number1*number2);
// }else if (calculate=='/') {
//     console.log(number1/number2);
// }else{
//     console.log("please enter your calculate correctly");
// }

// ?8-Switch case ile haftanın gününü yazdırma

// const kacinci = +prompt("Gün:");
// let gün = "";

// switch (kacinci) {
//   case 1:
//     gün = "pazartesi";
//     break;
//   case 2:
//     gün = "sali";
//     break;
//   case 3:
//     gün = "carsamba";
//     break;
//   case 4:
//     gün = "persembe";
//     break;
//   case 5:
//     gün = "cuma";
//     break;
//   case 6:
//     gün = "cumartesi";
//     break;
//   case 7:
//     gün = "pazar";
//     break;

//   default:
//     alert("Lütfen 1-7 arasinda bir deger seciniz");
//     gün = "";
//     break;
// }
// console.log(gün);
