//! diziler

//? soru 1: bir dizideki sayıların ortalamasını bulan fonksiyonu yazınız?

// const numbers = [1, 2, 3, 45, 65];

// *klasik for ile
// let sum = 0
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     sum +=element
// }

// console.log(sum/numbers.length);

// *forEach ile
// let sum =0
// numbers.forEach((e) => {
//     sum+=e
// })
// console.log(sum / numbers.length);

// *map ile
// let result = 0;
// const arr2 = numbers.map((v) => (result += v)/numbers.length);
// console.log(result);

//*reduce ile
// let a = numbers.reduce((acc, curr, i, arr) => {
//     return acc+curr
// }, 0)
// console.log(a);
// *yada baslangic degeri
// let a = numbers.reduce((acc, curr, i, arr) => {
//   return acc + curr;
// });
// console.log(a);

// soru 2: Bir parağraftaki sesliharflerin sayısını bulan fonksiyonu yazınız?
// const parag = 'ali ata bak'

// soru 3: Bir dizideki en büyük sayıyı bulan fonksiyonu yazınız?
// const numbers = [1, 2, 3, 45, 65, 11, 22];
// *sort ile
// const maxNumber = numbers.sort((a, b) => b - a)
// console.log(maxNumber[0]);
// *foreach ile

// function max(arr) {
//   let biggest = arr[0];
//   arr.forEach((item) => {
//     if (item > biggest) {
//       biggest = item;
//     }
//   });
//   return biggest;
// }
// const array = [45, 6, 18, 26, 19, 79, 25, 14];
// console.log(max(array));
// soru 4: Bir cümleyi alın ve kelimeleri ters sırayla birleştirerek yeni bir cümle oluşturun.

// soru 5: Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// soru 6: Soru: Bir dizi içerisindeki sayıların karesini alarak her bir sayıyı konsola yazdırın.

// soru 7: Soru: Bir dizi içerisindeki sayıların karesini alarak yeni bir dizi oluşturun. Ardından, bu yeni dizideki çift sayıları filtreleyerek sadece çift sayıları içeren bir başka dizi oluşturun.
