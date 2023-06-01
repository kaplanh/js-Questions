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

// ?3.ders
// ? Çarpım tablosu oluşturma

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${i}x${j} = ${i*j}`);
//     }
//     console.log("******");
// }

// ? Arsmstrong sayısı

//* 153 => 1**3 + 5**3 + 3**3 = 153 - bu armstrong sayısıdır

// let number = 975;
// let total = 0;
// let yuzlerBasamagi;
// let binlerBasamagi;

// let birlerBasamagi =  Math.floor((number%10)/1)
// console.log(birlerBasamagi);
// let onlarBasamagi = Math.trunc((number%100)/10);
// console.log(onlarBasamagi);

// yuzlerBasamagi = Math.floor((number%1000)/100)
// console.log(yuzlerBasamagi);

// * Alternatif Çözüm 1
//* Hüseyin Hocaya Armağan
// let number = prompt("Please enter a number")
for (let i = 0; i < number.length; i++) {
    console.log(`${i+1}. basamagi ` +  Math.floor((number%10**(i+1))/10**i));
}

//* Alternatif Çözüm 2
// let number = prompt("Lütfen bir sayı giriniz");
// let numberArray = [...number];
// console.log(numberArray);
// const newNumber = numberArray.reduce((sum, val) => sum + val ** 3, 0);
// if (number == newNumber) {
//     alert("Bu bir Amstrong rakamıdır");
// } else {
//     alert("Bu bir Amstrong rakamı değildir");
// }

// for (let i = 0; i < number.length; i++) {
//     total += number[i]**3 // string "1" olmasına rağmen küp alma işleminde number gibi işlem görür
// }
// if (total == number) {
//     console.log("This is armstrong number");
// }else{
//     console.log("This is not a armstrong number");
// }


// 3-Promp ile kullanıcıdan sayı istenecek. Daha sonra while döngüsüyle bu sayının 0'dan küçük olması veya 100'den büyük olması durumunda yeniden sayı istenecek. Kullanıcı 0-100 arasında sayı girene kadar döngü devam edecek.
// 4-Klavyeden Q vey q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde 0 ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.
// 5- Döngüler ile login check yapma. (Kullanıcı önce id girer, id yanlış ise tekrar id girilmesi istenir, id doğru ise parola istenir, parola için de aynı döngü devam eder. doğru bilmek için 3 hakkı vardır)
// -


