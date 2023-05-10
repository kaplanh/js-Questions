// 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)
​
const a = 'asd'
// console.log(Boolean(a))
​
var status1 = false
​
// if (status1) {
//   console.log('deneme')
// }
// console.log('deneme1')
​
// if (status1) {
//   console.log('deneme')
// } else {
//   console.log('deneme2')
// }
​
// status1 ? console.log('durum1') : console.log('durum2')
​
// let yas = prompt('Yaşınızı giriniz?')
// console.log(yas)
​
// if (Number(yas) < 18) {
//   console.log(`Yaşınız 18'den küçüktür.Yaşınız ${yas}'tir.`)
// } else {
//   console.log(`Yaşınız 18 yada 18'den büyüktür: ${yas}`)
// }
​
//  console.log(yas < 18 ? '18 yaşından küçük' : '18 yaşından büyük')
​
// 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,
​
// let dersNotu = +prompt('Ders notunu giriniz:')
​
// if (dersNotu < 0 || dersNotu > 100) {
//   console.log("Notunuz 100'den büyük 0'dan küçük olamaz")
// } else if (dersNotu > 90) {
//   console.log("Harfiniz AA'dır.")
// } else if (dersNotu > 80) {
//   console.log("Harfiniz AB'dır.")
// } else if (dersNotu > 70) {
//   console.log("Harfiniz BB'dır.")
// } else if (dersNotu > 60) {
//   console.log("Harfiniz BC'dır.")
// } else if (dersNotu > 50) {
//   console.log("Harfiniz CC'dır.")
// } else if (dersNotu > 40) {
//   console.log("Harfiniz CD'dır.")
// } else if (dersNotu > 30) {
//   console.log("Harfiniz DD'dır.")
// } else {
//   console.log("Harfiniz FF'dır.")
// }
​
// 3- Artık yıl sorusu
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat’ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.
​
// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.
​
// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.
​
// let yil = +prompt('yil giriniz')
​
// if (yil % 4 == 0 && yil % 100 != 0) {
//   console.log(`${yil} yılı artık yıldır.`)
// }
// else if (yil % 400 == 0) {
//   console.log(`${yil} yılı artık yıldır.`)
// }
// else {
//   console.log(`${yil} yılı artık yıl değildir.`)
// }
​
// yil % 100 != 0
​
// if ((yil % 4 == 0) && (yil % 100 != 0) || (yil % 400 == 0) ) {
//   console.log(`${yil} yılı artık yıldır.`)
// }
​
// else {
//   console.log(`${yil} yılı artık yıl değildir.`)
// }