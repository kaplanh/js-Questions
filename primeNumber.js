/? ODEV1: Girilen bir sayinin Asal olup olmadigini yazdiran kodu
//? for dongulerini kullanarak yaziniz.

//* NOT:
//* 1 ve kendisinden başka böleni olmayan sayılar ASAL sayılardır.
//* Eğer girilen sayı, herhangi bir sayıya tam bölünüyorsa diğer sayıları kontrol etmeye gerek yoktur. ASAL DEĞİL diyebiliriz.
//* break deyimi ile dongu bir koşul gerçekleştiğinde kırılabilir.
// ?1.yol

// let sayi = prompt("Enter a number");

// if (sayi == 2) {
//   console.log(`${sayi} asaldir`);
// } else if (sayi == 1) {
//   console.log(`${sayi} asal degildir`);
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       console.log(`${sayi} asal degildir`);
//       break;
//     } else {
//       console.log(`${sayi} asaldir`);
//       break;
//     }
//   }
// }

// ?2.yol
// let sayi = +prompt("Enter a number");
// let sayac = 0;

// if (sayi == 1) {
//   sayac += 1;
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       sayac += 1;
//     } else {
//       sayac = sayac;
//     }
//   }
// }

// console.log(sayac ? "Asal degil" : "Asal");

// ?3.yol

// const sayi = +prompt("Pozitif Bir Sayiyi Giriniz: ");
// let flag = true;

// if (sayi == 1) {
//   flag = false;
// } else {
//   for (let i = 2; i < sayi; i++) {
//     if (sayi % i == 0) {
//       flag = false;
//       break;
//     }
//   }
// }

// console.log(flag ? "Asal" : "Asal degil");

// ?4.yol
// let isPrime = +prompt("Please enter the number");
// let count = 0;
// for (let i = 2; i < isPrime; i++) {
//   if (isPrime % i == 0) {
//     count += 1;
//     break;
//   }
// }
// console.log(
//   isPrime <= 1 ? "Hic Asal değil" : count > 0 ? "Asal degil" : "Asal"
// );
