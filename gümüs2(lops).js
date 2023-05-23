// 9-1'den n'ye kadar olan sayıların toplamını hesaplama
// 10-3'e tam bölünenlere fizz, 5'e tam bölünenlere buzz yazdırma 15'e bölünene fizzbuzz
// 11-1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma

//Negatif sayi girilene kadar girdigi sayilari toplama
// 12-benzin istasyonu uygulaması
// 13-atm uygulaması
// 14-Beden kitle endeksini hesaplama
// 15-Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)
// 16-Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)
// 17-Fibonacci Dizisi oluşturma// 9-1'den n'ye kadar olan sayıların toplamını hesaplama
// 10-3'e tam bölünenlere fizz, 5'e tam bölünenlere buzz yazdırma 15'e bölünene fizzbuzz
// 11-1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma
// 12-benzin istasyonu uygulaması
// 13-atm uygulaması
// 14-Beden kitle endeksini hesaplama
// 15-Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)
// 16-Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)
// 17-Fibonacci Dizisi oluşturma

//? 9- 1'den n'ye kadar olan sayıların toplamını hesaplama
// const num = +prompt("num:");
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }

// console.log(sum);

//? 10-3'e tam bölünenlere fizz, 5'e tam bölünenlere buzz yazdırma 15'e bölünene fizzbuzz

// let number = +prompt("please enter a number");

// for (let i = 1; i < number; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 == 0) {
//     console.log(Fizz);
//   } else if (i % 5 == 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// ?11-500 ile 1250 arasındaki 13 e bölümünden kalanı 3 olan sayıları yazdırma

// const number1 = 500;
// const number2 = 1250;
// let count = 0;

//     for (let i = number1; i <= number2 ; i++) {
//         if (i%13==3) {
//             console.log(i);
//             count++
//         }
//     }
//     console.log(`There are ${count} value`);

//? Negatif sayı girilene kadar girdiği sayıları toplama

// let sum = 0;
// let number = +prompt("bir sayi giriniz");
// while (number >= 0) {
//     sum += number;
//     number = +prompt("bir sayi giriniz");
// }
// console.log(sum);

//* Alternatif çözüm

// let total = 0
// let num;
// do {
//     num = +prompt("bir sayi giriniz");
//     if (total<=total+num) {
//         total = total + num
//     }else{
//         break
//     }
// } while ("mustafa");
// console.log(total);

// //? Aşagıdaki çıktıyı konsola yazdırma

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// for (let i = 1;  i<6 ; i++) {
//     for (let j = 1; j <6 ; j++) {
//         console.log("* ");
//                     document.getElementById("ilk").innerHTML += "* ";
//     }
// console.log("\n");
//         document.getElementById("ilk").innerHTML += "<br>";
// }

// * Alternati çözüm
// let x =""
// for (let i = 1; i < 6 ; i++) {
//     if (i!=1) {
//         x+="\n"
//     }
//     for (let j = 1; j < 6; j++) {
//         x += "* ";
//     }
// }
// console.log(x);

// //?Aşagıdaki çıktıyı konsola yazdırma

//* 0
//* 00
//* 000
//* 0000
//* 00000
//* 000000

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= i; j++) {
//                     document.getElementById("ilk").innerHTML += (" 0 " + " 0 ");
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }
// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 10; j++) {
//                     document.getElementById("ilk").innerHTML += "0 ";
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }
// for (let i = 1; i <= 2; i++) {
//     for (let j = 1; j <= 30; j++) {
//                     document.getElementById("ilk").innerHTML += "0 ";
//     }
//         document.getElementById("ilk").innerHTML += "<br>";
// }
