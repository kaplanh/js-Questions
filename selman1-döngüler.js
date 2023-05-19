// soru-1 1000 ile 2000 arasındaki 13 e bölümünden kalanı 3 olan sayıları konsola yazdırınız ?

// ?1.yol
// let a = [1, 2, 3, 4, 5]
// let sayac = 0

// for (let i = 1000; i < 2000; i++) {
//   if (i % 13 == 3) {
//     console.log(i)
//     sayac++
//   }
// }
// console.log(sayac)

// soru-2 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let sayac = 0
// let toplam = 0

// while (sayac < 5) {
//   let sayi = +prompt('Lütfen Bir sayı giriniz')
//   toplam += sayi

//   sayac++
// }

// console.log(toplam / sayac);

// soru-3 Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız ?(while)

// let durum = true
// let sum = 0

// while (durum) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     durum = false
//     continue
//   }

//   sum += sayi
// }

// console.log(sum)

// ?2.yol
// let durum1 = true
// let sum2 = 0

// while (durum1) {
//   let sayi = +prompt('Sayı giriniz')

//   if (sayi < 0) {

//     break
//   }

//   sum2 += sayi
// }

// console.log(sum2)

// soru-4 sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log(`${i}-FizzyBuzz`);
//   } else if (i % 3 == 0) {
//     console.log(`${i}-Fizzy`);
//   } else if (i % 5 == 0) {
//     console.log(`${i}-Buzz`);
//   } else {
//     console.log(i);
//   }
// }

// soru-5 Bir sayının(number) basamak sayısını yazdıran kodu yazınız ?(Math.floor)
// ?1.yol
// let a = prompt(`enter number`);
// console.log(`yor entered number ${a} is ${a.length} digits`);

// ?2.yol
// let sayi = prompt("Bir sayi giriniz");
// let count = 1;
// while (sayi / 10 > 1) {
//   count++;
//   sayi = Math.floor(sayi / 10);
// }
// console.log(count);

// ?3.yol
// let sayi = prompt("Sayinizi giriniz");
// let sayac = 1;
// for (let i = 0; ; i++) {
//   if (sayi / 10 >= 1) {
//     sayac++;
//     sayi = Math.floor(sayi / 10);
//   } else if (sayi / 10 < 1) {
//     break;
//   }
// }
// console.log(`Sayinizin basamak sayisi: ${sayac}`);

// soru-6 Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız ?  // 0 1 1 2 3 5 8 13
// ?1.yol
// let n = +prompt(`enter a number for fibonacci sequence`);
// let one = 0;
// let two = 0;
// let sum = 1;
// let res = "0";
// for (let i = 0; i <= n; i++) {
//   two = one;
//   one = sum;
//   res += " " + sum;
//   sum = one + two;
// }
// console.log(res);
// ?2.yol

// let adet = +prompt("Kaç tane fibonacci sayisi istiyorsunuz");
// while (adet <= 0) {
//   adet = +prompt("0'dan büyük sayi girmeniz gerekiyor");
// }
// let kucukSayi = 0;
// let buyukSayi = 1;
// let toplamSayi;
// let metin = "";

// for (let i = 1; i <= adet; i++) {
//   console.log(kucukSayi);
//   toplamSayi = kucukSayi + buyukSayi;
//   metin += " " + toplamSayi;
//   kucukSayi = buyukSayi;
//   buyukSayi = toplamSayi;
// }
// console.log(metin);

// soru-7 Aşağıdaki çıktıyı konsola yazdırınız

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// let stars = "";
// for (let i = 1; i < 6; i++) {
//   if (i != 1) {
//     stars += "\n";
//   }
//   for (let j = 1; j < 6; j++) {
//     stars += "* ";
//   }
// }
// console.log(stars);

// let stars = "";
// for (let i = 1; i < 6; i++) {
//   if (i != 1) {
//     stars += "\n";
//   }
//   for (let j = 1; j < i; j++) {
//     stars += "* ";
//   }
// }
// console.log(stars);

// let stars = "";
// for (let i = 6; i > 1; i--) {
//   if (i != 1) {
//     stars += "\n";
//   }
//   for (let j = 1; j < i; j++) {
//     stars += "* ";
//   }
// }
// console.log(stars);

// let stars = "";
// for (let i = 0; i < 5; i++) {
//   stars += "\n";
//   for (let j = 0; j < 5; j++) {
//     stars += "* ";
//   }
// }
// console.log(stars);

// soru-8 Aşağıdaki çıktıyı konsola yazdırınız ?

// 0
// 00
// 000
// 0000
// 00000
// 000000

// ?1.yol
// let sifir = "";
// for (let i = 1; i < 7; i++) {
//   sifir += "\n";
//   for (let j = 1; j <= i; j++) {
//     sifir += "0";
//   }
// }
// console.log(sifir);
// ?2.yol
// let count = 1;
// let str = "0";
// let nl = "\n";
// while (count <= 5) {
//   console.log(str + nl);
//   str += "0";
//   count++;
// }
