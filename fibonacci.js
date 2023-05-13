let kacinciFibonacciSayisi = +prompt(
  "Kacinci fibonacci sayisini bilmek istiyorsunuz?"
);
let ilkSayi = 0;
let ikinciSayi = 1;
let ilkIkiSayininToplamiOlanUcuncuSayi;
if (kacinciFibonacciSayisi == 1) {
  console.log(`${kacinciFibonacciSayisi}. fibonacci sayisi = ${ilkSayi}`);
} else if (kacinciFibonacciSayisi == 2) {
  console.log(`${kacinciFibonacciSayisi}. fibonacci sayisi = ${ikinciSayi}`);
} else {
  for (let i = 2; i <= kacinciFibonacciSayisi; i++) {
    ilkIkiSayininToplamiOlanUcuncuSayi = ilkSayi + ikinciSayi;
    ilkSayi = ikinciSayi;
    ikinciSayi = ilkIkiSayininToplamiOlanUcuncuSayi;
  }
  console.log(`${kacinciFibonacciSayisi}. fibonacci sayisi = ${ilkSayi}`);
}
// Fibonacci dizisi bir sayı dizisidir ve {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, …} şeklinde devam eden sonsuz sayılardan oluşur. Dizi, İtalyan matematikçi Leonardo Fibonacci'nin 1202 yılında yazdığı Liber Abaci (Hesap Kitabı) adlı kitabındaki bir problemin cevabıdır
function Fibonacci(num) {
  let before = 0;
  let actual = 1;
  let next = 1;

  if (num == 0) {
    next = 0;
  } else if (num == 1) {
    next = 1;
  } else {
    for (let i = 2; i < num; i++) {
      console.log(next);
      before = actual + next;
      actual = next;
      next = before;
    }
  }
}

Fibonacci(5);
