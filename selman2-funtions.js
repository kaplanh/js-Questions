// *1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit

// console.log(calFahrenheit(30))

// // output: 86

// function calFahrenheit(deg) {
//   let fahr = (deg * 9) / 5 + 32

//   return fahr
// }

//* 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?
// console.log(reverseString('hello world')) // output: dlrow olleh

// let str = 'hello world'

// console.log(reverseString('hello world'))

// function reverseString(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   return newStr
// }

//* 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?

// const string = 'alila'

// console.log(isPalindrome(string)) // output: true

// function isPalindrome(str) {
//   let newStr = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i]
//   }

//   if (str == newStr) {
//     return true
//   } else {
//     return false
//   }
// }

//* 4- Belirli bir string ifadenin içindeki sesli harfleri bulan fonksiyonu yazınız?(includes)

// console.log(findVowels('hello world')) // output: eoo

// ?1.yol includes('str') varsa true/ yoksa false
// const findVowels = (str) => {
//   let vowels = "aeıioöuü";
//   let newVowels = "";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       newVowels += str[i];
//     }
//   }
//   return newVowels;
// };

// console.log(findVowels("hello world"));

// ?2.yol indexOf('str') varsa index numarasi/ yoksa -1 döndürür
// const findVowels = (str) => {
//   let vowels = "aeıioöuü";
//   let newVowels = "";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) !== -1) {
//       newVowels += str[i];
//     }
//   }
//   return newVowels;
// };

// console.log(findVowels("hello world"));

//* 5- Belirli bir sayının tam bölenlerinin toplamını bulan fonksiyonu yazınız?
// console.log(sumOfDivisors(12)) //12 6 4 3 2 1  output: 28
// ?tam bölenlerinin toplami
// const sumOfDivisors = (num) => {
//   sum = 0;
//   for (i = 0; i <= num; i++)
//     if (num % i == 0) {
//       sum += i;
//     }
//   return sum;
// };
// console.log(sumOfDivisors(12));

// ?tam bölenlerinin bir listesi

// const sumOfDivisors = (num) => {
//   list = [];
//   for (i = 0; i <= num; i++)
//     if (num % i == 0) {
//       list.push(i);
//     }
//   return list;
// };
// console.log(sumOfDivisors(12));

// *6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız?
// console.log(isPrime(7)) // output: true
// const isPrime = (num) => {
//   let count = 0;
//   if (num == 0) {
//     count++;
//   } else if (num == 1) {
//     count++;
//   } else {
//     for (i = 2; i < num; i++) {
//       if (num % i == 0) {
//         count++;
//       } else {
//         count = count;
//       }
//     }
//   }
//   let mesaj = count == 0 ? `${num} Asaldir` : `${num} Asal degildir`;
//   return mesaj;
// };

// console.log(isPrime(7));
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(25));
//* 7- Bir sayının faktöriyelini hesaplayan bir fonksiyon yazınız.
// console.log(factorial(5)) // output: 120
// const factorial = (num) => {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };
// const number = +prompt("num: ");
// number < 0
//   ? alert("Number should be bigger zero")
//   : console.log(`factorial(${number}) = ${factorial(number)}`);

// 8- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.
// console.log(findMax([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 9

// 9- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.
// console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9])) // output: 45

// 10-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız.

// console.log(findWordCount('hello world')) // output: 2

// 11- Girilen bir sayının pozitif çarpanlarını bulan bir fonksiyon yazınız
// console.log(findPositiveDivisors(12)) // output: [1, 2, 3, 4, 6, 12]

//* 12-girilen bir cümlenin kelimelerinin bas harflerini büyük yapma
// let str1 = " Hello, how ist it going?";
// let str2 = str1.trim().split(" ");
// console.log(str2);
// let str3 = " ";
// for (i = 0; i < str2.length; i++) {
//   str3 += str2[i][0].toLocaleUpperCase() + str2[i].slice(1) + " ";
// }
// console.log(str3);
