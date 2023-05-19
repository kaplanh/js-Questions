// const n = 44;
// let toplam = 0;

// for (let i = 1; i <=n ; i++) {
//     toplam = toplam + i;

// }
// console.log(toplam);

// ----------

// for (let i = 1; i < 100; i++) {
//     if (i%3==0 && i%5==0) {
//         console.log("FizzBuzz");
//     }else if (i%3==0) {
//         console.log("fizz");
//     }else if(i%5==0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     }
// }

// ----------

// for (let i = 1; i <= 10; i++) {
// let sayi = Math.random()*100;
// console.log(`${i}. sayi :`, sayi);
// }

// ----

// let sayi = +prompt("sayi giriniz")

// let sayi = 128;

// let asalMi = sayi>=2;
// for (let i = 2; i < sayi; i++) {
//     if (sayi%i==0) {
//         asalMi = false;
//         console.log(i);
//         break
//     }
// }
// if (asalMi) {
//     console.log("asal");
// }else{
//     console.log("asal degil");
// }

// ----------------

// let sayi = +prompt("sayi giriniz")
// let faktoriyel = 1;

// for (let i = 1; i <= sayi; i++) {
//     faktoriyel *= i
// }
// console.log(faktoriyel);
// ------------

// let Id = "gumus";
// let parola = "123";

// let kullaniciId = prompt("ID'nizi giriniz")
// let kullaniciParola = prompt("sifrenizi giriniz")
// let kalanHak = 2;
// while (kalanHak>0) {
//     kullaniciId = prompt(`id giriniz. ${kalanHak}`)
//     kullaniciParola = prompt(`sifre giriniz. ${kalanHak}`)
//     // alert(`kalan hak ${kalanHak}`);

//     if (Id == kullaniciId && parola==kullaniciParola) {
//         console.log("giriş başarili");
//     }else if (Id == kullaniciId) {
//         console.log("id doğru ama parola yanlis");
//         kalanHak--;
//     }else if(parola == kullaniciParola){
//         console.log("parola doğru ama id yanlis");
//         kalanHak--;
//     }else{
//         console.log("hem id hem parola yanlis");
//         kalanHak--;
//     }
// }

// -------
// let count = 1;
// do {
//     number = +prompt("please enter the number. (0-100)")
//     count++;
//     console.log(`your number is ${number}`);
//     if (number<0 || number>100) {
//         console.log("Please enter the number correctly");
//     }else{
//         console.log("your number is correct");
//     }
// } while ((number<0 || number>100) && count<=3);

// --------------------
// let again = true
// while (again) {
//     const number = Math.round(Math.random()*100)
// // const number = 5;
// let userNumber;
// let count = 1
// let tryAgain =0;
// while (count<=5) {
//     userNumber = +prompt(`Please enter your guess. This is your ${count}. guess`)
//     if (userNumber<0 || userNumber>=0) {
//         if (userNumber == number) {
//             console.log(`Nice try. Your ${count}. guess is right`);
//             break;
//         }else{
//             console.log(`Please enter your guess again. Your ${count}. guess is wrong`);
//             count++;
//             if (userNumber> number) {
//                 console.log("Lower");
//             }else{
//                 console.log("Bigger");
//             }
//         }
//     }
//     else{
//         console.log(`Please enter NUMBER`);
//         count++
//     }
// }
//     console.log(`Number was ${number}`);
//     tryAgain = prompt("Press 1 to try again");
//     if (tryAgain == 1) {
//     }else{
//         console.log("See You Next Time");
//         again = false;
//     }
// }
// --------------

// (typeof (userNumber) == "number")

// //* Fibonacci sayısı 0 1 1 2 3 5 8 13 21 34

// let adet = +prompt("Kaç tane fibonacci sayisi istiyorsunuz")
// while (adet<= 0) {
//     adet = +prompt("0'dan büyük sayi girmeniz gerekiyor")
// }
// let kucukSayi = 0;
// let buyukSayi = 1;
// let toplamSayi;

// for (let i = 1; i <= adet; i++) {
//     console.log(kucukSayi);
//     toplamSayi = kucukSayi + buyukSayi;
//     kucukSayi = buyukSayi;
//     buyukSayi = toplamSayi;
// }

// -------------

// let kacinci = +prompt("Kacinci fibonacci sayisini istiyorsun")
let kacinci = 5;
while (kacinci <= 0) {
  kacinci = +prompt("0'dan büyük sayi girmeniz gerekiyor");
}
let kucukSayi1 = 0;
let buyukSayi1 = 5;
let toplamSayi1;

for (let i = 1; i <= kacinci; i++) {
  if (i == kacinci) {
    console.log(`${kacinci}. sayi ${kucukSayi1}`);
  }
  toplamSayi1 = kucukSayi1 + buyukSayi1;
  kucukSayi1 = buyukSayi1;
  buyukSayi1 = toplamSayi1;
}
