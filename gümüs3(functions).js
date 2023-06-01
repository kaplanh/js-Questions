// //? Örnek => Sayının Pozitif veya Negatif olduğunu bulma
// //* Girilen sayının pozitif veya negatif olduğunu döndürür

// * Çözüm 1
// const positiveOrNegative = () =>{
//     const number = +prompt("Please enter a number")
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }
// positiveOrNegative()

// * Çözüm 2

// const positiveOrNegative2 = () =>{
//     const number = Math.floor(Math.random()*100-50)
//     console.log(number);
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }
// positiveOrNegative2()

// * Çözüm 3

// const positiveOrNegative = (number) =>{
//     const number = +prompt("Please enter a number")
//     if (number > 0) {
//         console.log("Positive");
//     } else if (number < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }
// positiveOrNegative(1)

// //? Örnek => Sayının tek mi çift mi olduğunu bulma
//  //* Girilen sayının tek mi çift mi olduğunu döndürür

// const oddOrEven = () =>{
//     const number = +prompt("Please enter a number")
//     if (number % 2 == 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }
// oddOrEven()

// //? Örnek => Haftanın gününü yazdırma(if else)
// //* Girilen sayının haftanın hangi gününe denk geldiğini döndürür

// const whichDay = () =>{
//     const number = +prompt("Please enter a number")

//     if (number == 1) {
//         console.log("Monday");
//     } else if (number == 2) {
//         console.log("Tuesday");
//     } else if (number == 3) {
//         console.log("Wednesday");
//     } else if (number == 4) {
//         console.log("Thursday");
//     } else if (number == 5) {
//         console.log("Friday");
//     } else if (number == 6) {
//         console.log("Saturday");
//     } else if (number == 7) {
//         console.log("Sunday");
//     } else {
//         console.log("Wrong number");
//     }
// }
// whichDay()

// //? Örnek => Login = Kullanıcı id ve şifre kontrolü
//  //* Girilen bilgilere göre girişin başarılı olup olmadığını döndürür

// const loginCheck = function (id, password) {
//     let userID = 123123;
//     let userPassword = 123123;

//     if (userID == id && userPassword == password) {
//         console.log("Login succesfull");
//     } else {
//         console.log("Login failed");
//     }
// }
// loginCheck(123123,123123)

// //? Örnek => 1'den n'ye kadar olan sayıların toplamını hesaplama
// //* Kullanıcının girdiği sayıya göre toplamını hesaplar

//     const total = function(number){
//         let sum = 0;
//         for (let i = 1; i <= number; i++) {
//             sum = sum + i;
//         }
//         console.log(sum);
//     }
// total(10)

// //? Örnek => Kullanicidan aldığı parametreler arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma
// //* Kullanıcının girdiği sayıya göre sonuc döndürür

// const numbers = function(parametre1,parametre2){
//     let sayac = 0;
//     let array = [];
//     for (let i = parametre1; i < parametre2; i++) {
//         if (i % 13 == 3) {
//             array.push(i)
//             console.log(array);
//             sayac++;
//         }
//     }
//     console.log(sayac);
// }
// numbers(100,150)

// //? Örnek => Aşagıdaki çıktıyı konsola yazdırma
// //* ilk for kaç basamak olacağını, içerideki for kaç satır olacağını belirliyor

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// const figure = (column, row) =>{
//     for (let i = 1; i <= column; i++) {
//         for (let j = 1; j <= row; j++) {
//             console.log(" * ");
//             document.getElementById("ilk").innerHTML += "* ";
//         }
//         console.log(`\n`);
//         document.getElementById("ilk").innerHTML += "<br>";
//     }
// }
// figure(5,5)
