//*********************/ ARRAY METHODS /********************/


const sayilar = [1, 50, 2, 41, 41, 84, 8, 35, 3];

const isimler = ['sezer', 'ali', 'hasan', 'ayse'];

const ogrenciler = [
    {id : 12, isim : "sezer", yas : 30, maas:2000},
    {id : 22, isim : "hasan", yas : 15, maas:2000},
    {id : 32, isim : "fatma", yas : 55, maas:2000},
    {id : 13, isim : "nuriye", yas : 19, maas:3000},
    {id : 92, isim : "kemal", yas : 45, maas:5000},
    {id : 15, isim : "mustafa", yas : 75, maas:2500},
    {id : 44, isim : "ceren", yas : 30, maas:4000}
];

//?================= FONKSİYON ÇEŞİTLERİ=======================?//

//! decleration
ahmet() // herhangi bir değişkene atanmadığı için öncesinde çalıştırılabilir
function ahmet () {
    console.log("***");
    
}

//! expression
const mehmet = function () {
    console.log("***");
    
}
mehmet()// değişkene atandığı için tanımlama öncesinde çalışmaz

//! arrow
const fatma = () => {
    console.log("***");
}
fatma()// değişkene atandığı için tanımlama öncesinde çalışmaz


//! ************** */METHODS*/*********** */

//? SHIFT
// let result =sayilar.shift() //ilk elemanı sildi
// console.log(result) //  sildiğini yazdırdı
// console.log(sayilar) // 1 silindi [50,2,41,41,84,8,35,3] kaldı

// let result2 = isimler.shift() //sezer silindi
// console.log(result2) // sezeri yazdırdı
// console.log(isimler)


// let result3 = ogrenciler.shift() // ilk sıradaki objeyi sildi
// console.log(result3) // sildiğini yazdırdı
// console.log(ogrenciler) // kalan 5 elemanlı dizi oldu




//?UNSHIFT

// let result4= sayilar.unshift(100)// arryin ilk elemanını olarak 100 ekledi
// console.log(result4); // arryain uzunluğunu gösterdi
// console.log(sayilar); // ilk elemanı 100 olan array oluştu


// let result5= isimler.unshift("Noah")
// console.log(result5); // ilk eleman hoah oldu
// console.log(isimler); // isimler araryinin uzunluğunu yazdırdı

// let result6 = ogrenciler.unshift({id : 46, isim : "BETÜL", yas : 39})
// console.log(result6);
// console.log(ogrenciler)

//?POP

// let result7 = sayilar.pop()// son elemanı siler
// console.log(result7) // sildiğini yazdırır 
// console.log(sayilar)


// let result8 = isimler.pop()// son elemanı siler
// console.log(result8)// sildiğini yazdırır 
// console.log(isimler)

// let result9 = ogrenciler.pop()
// console.log(result9)
// console.log(ogrenciler)

//? PUSH
// let result10= sayilar.push(2222) // sona eleman ekler
// console.log(result10) // dizinin eklendikten sonraki eleman sayısını gösterir
// console.log(sayilar) // son hali gösterir


// let result11 = isimler.push("Betül")
// console.log(result11)
// console.log(isimler)


// let result12= ogrenciler.push({id : 118, isim : "AZRA", yas : 11})// sona ekledi
// console.log(result12) // dizinin son eleman sayısını yazdırdı
// console.log(ogrenciler) // ekendikten sonra yeni array yazıldı

//?SLICE
// let result13 = sayilar.slice(1,5) // 1.index ile 5. index kadar olan kısmını al 5. index dahil değil
// console.log(result13) // istenen dilimi aldı [50,2,41,41]
// console.log(sayilar) // orjinal array değişmeden yazıldı


// let result14= isimler.slice(1,3)// 
// console.log(result14) //["ali", "hasan"]
// console.log(isimler)


//?SPLICE
// let result15 = sayilar.splice(2,4)//2. indexden başlayarak 4 eleman atar
// console.log(result15) // sildiklerini yazdırır
// console.log(sayilar) // yeni oluşan arrayi yazdırır



// let result16 = isimler.splice(2)// 2.indexden başla sonuna kadar sil
// console.log(result16)//sildiklerini yazdırır
// console.log(isimler)


// let result17 = ogrenciler.splice(2,5)
// console.log(result17)//sildiklerini yazdırır
// console.log(ogrenciler)



// let result18= sayilar.splice(3,0,100,200) //3. indexe git birşey silme 100 ve 200 elemmanlarını ekle
// console.log(result18) // birşey silmediği için boş arry yazdırır
// console.log(sayilar) //[1, 50, 2, 100, 200, 41, 41, 84, 8, 35, 3]



// let result19 = isimler.splice(2, "ali", "mehmet","aliye")
// console.log(result19) // hasan ve ayseyi çıkardı
// console.log(isimler) //['sezer', 'ali', 'mehmet', 'aliye', 'hasan', 'ayse'] yeni bu oluştu



//?FIND
// let result20= ogrenciler.find((item)=> console.log(item))//ogrenciler arryinin içindeki herbir itemi yani elemanı yazdırdı

// let result21 = ogrenciler.find((item) => item.id == 15)
// console.log(result21);
// console.log(ogrenciler);


//?fındIndex
// let result21= ogrenciler.findIndex((kisi)=> kisi.id==92)
// console.log(result21); // id si 92 olanın index numarasını buldu ve index numarasını yazdırdı
// console.log(ogrenciler);


//? Every

// let result22 = sayilar.every((item)=>item <85)
// console.log(result22);// her eleman 85 ten küçük ise true yzdırır

// let result23 = sayilar.every((item)=>item < 84)
// console.log(result23);// en az bir eleman 84 ten büyük veya eşit  ise false yzdırır

//? some

// let result23 = sayilar.some((item)=> item < 10)
// console.log(result23); //true

// let result24 = sayilar.some((item)=> item > 1000)
// console.log(result24); //false


//? INCLUDES 

// let result25 = isimler. includes("ali")
// console.log(result25); //true keysensitive olduğunu unutmayalım


// let result26 = isimler. includes("Ali")
// console.log(result26); //false keysensitive olduğunu unutmayalım


//? forEach

// let result27 = sayilar.forEach(function(i) {
//     console.log(i*5);
// })
// console.log(sayilar);



//? filter

// let result28 = ogrenciler.filter((item)=>item.id % 2==1)
// console.log(result28); //id si tek olanları listeleyip yazdırdı
// console.log(ogrenciler);


// let result29 = ogrenciler.filter((item)=>item.yas>=30)
// console.log(result29);// yaşı 30 a eşit ve 30dan büyük olanları yazdırdı



// let result30 = ogrenciler.find((item)=>item.yas>=30)
// console.log(result30);// yaşı 30 a eşit ve 30dan büyük olan ilk kişiyi yazdırdı

// let result30 = sayilar.filter((sayi)=> sayi>=20 && sayi<=30)
// console.log(result30); // bos array döndü çunku sartı sağlayan depğer yok


//?concat

// let result31= sayilar.concat(isimler)
// console.log(result31);//iki aray i birleştirip tek array yaptı

// let result32 = isimler.concat(sayilar, "serhat")
// console.log(result32);


//?MAP

// let result33 = sayilar.map((item)=> item*3)
// console.log(result33); //herbir elemanı 3 ile çarpıp yeni array oluşturdu
// console.log(sayilar);// orjinal array duruyor


//? Array From
// let ad = "sezer"
// let result34 = Array.from(ad)
// console.log(result34)


//? Array
// let result35 = Array(5,2)
// let result36 = Array(5)
// let result37 = Array(sayilar,2)

// console.log(result35)
// console.log(result36)
// console.log(result37) // sayılar 1. eleman 2 ikinci eleman


//? Array of

// let result38 = Array(5,2)
// let result39 = Array.of(5) //tek elemanlı array 
// let result40 = Array.of(5,2) //iki elemanlı array

// console.log(result38)
// console.log(result39)
// console.log(result40)


//? toString

// let result41 = isimler.toString()
// console.log(result41)
// console.log(isimler)



//? join


// let result42 = isimler.join() //sezer,ali,hasan,ayse
// let result43 = isimler.join("") //sezeralihasanayse
// let result44 = isimler.join(" ") // sezer ali hasan ayse
// let result45 = isimler.join("-") // sezer-ali-hasan-ayse
// console.log(result42)
// console.log(result43)
// console.log(result44)
// console.log(result45)
// console.log(isimler)



//? SORT
// let result46=sayilar.sort()
// console.log(result46) // ASCIYE GÖRE SIRALADI [1, 2, 3, 35, 41, 41, 50, 8, 84]
// let result47= sayilar.sort((a,b)=>a-b)
// let result48= sayilar.sort((a,b)=>b-a)
// console.log(result47) // KÜÇÜKTEN BÜYÜĞE SIRALADI [1, 2, 3, 8, 35, 41, 41, 50, 84]
// console.log(result48) // BÜYÜKTEN BÜYÜĞE SIRALADI [84, 50, 41, 41, 35, 8, 3, 2, 1]
// console.log(sayilar) // esas dizi değişti


//? REVERSE
// let result49 = sayilar.reverse()
// let result50 =isimler.reverse() // ters cevirdi
// console.log(result49)
// console.log(result50)
// console.log(sayilar)// orjinal değişti
// console.log(isimler)

//? REDUCE

// let result51= sayilar.reduce((x,y)=> (x + y),0)
// let result52= sayilar.reduce((x,y)=> (x * y),1)
// console.log(result51) // sayılar dizisindeki bütün elemanları topladı
// console.log(result52) // sayılar dizisindeki bütün elemanları çarptı

// ogrencilerin yasları toplamını bulunuz

//* 1. yol
// let sepet = 0

// for (let i = 0; i < ogrenciler.length; i++) {
//     sepet+= ogrenciler[i].yas;
  
    
// }

// console.log(sepet)

//*2. yol
// let yas = ogrenciler.map((ogrenci)=>ogrenci.yas)
// console.log(yas) // yaşlardan oluşan arry oluştu [30, 15, 55, 19, 45, 75, 30]

// let toplam = yas.reduce((a,b)=>a+b) // oluşan arrydeki yaşları topladı
// console.log(toplam)
// console.log(toplam/yas.length) // yaşların ortalamasını buldu


//? id si çift yası 40tan büyük olan kişilerin maaşlarının toplamını bulunuz

let istenenMaas= ogrenciler.filter((ogrenci)=>(ogrenci.id % 2===0) && ogrenci.yas>40).reduce((x,y)=>x+y.maas,0)

console.log(istenenMaas)   














// *=========================================================================================================================================

let yas = ogrenciler.reduce((i, v) => i + v.yas,0);
console.log(yas);
const ogrenciler2 = [
  { id: 12, isim: "sezer", yas: 30, maas: 20000 },
  { id: 22, isim: "hasan", yas: 15, maas: 40000 },
  { id: 32, isim: "fatma", yas: 55, maas: 20000 },
  { id: 13, isim: "nuriye", yas: 19, maas: 45000 },
  { id: 92, isim: "kemal", yas: 45, maas: 80000 },
  { id: 15, isim: "mustafa", yas: 75, maas: 70000 },
  { id: 44, isim: "ceren", yas: 30, maas: 50000 },
];
let maasToplam = ogrenciler2.filter((v) => v.id % 2 == 0 && v.yas > 40).reduce((i, v) => (i + v.maas), 0)
console.log(maasToplam);

// let sonuc = sayilar.shift();    //Dizinin ilk öğesini kaldırır.
// console.log(sonuc);             //Çıkarttığı elemanı dönderdi.
// console.log(sayilar);           //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.unshift(2222);  //Dizinin başına yeni değerler eklemek için kullanılır.
// console.log(sonuc);                 //Dizinin eleman sayısını(length) gösterir.
// console.log(sayilar);               //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.pop();      // Dizinin son öğesini kaldırır.
// console.log(sonuc);             //Çıkarttığı elemanı dönderdi.
// console.log(sayilar);           //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.push(3333);     //Dizinin sonuna eleman eklemek için kullanılır.
// console.log(sonuc);                 //Dizinin eleman sayısını(length) gösterir
// console.log(sayilar);               //Kaynak Dizi Bozuldu.

// .slice() → Kendisine parametre olarak verilen dizi aralığında bulunan değerleri kopyalar ve yeni bir dizi oluşturarak geri döndürür.
// let sonuc = sayilar.slice(1, 5);        //1. index dahi --- 5. index dahil değil
// console.log(sonuc);                     //Yeni dizi oluşturdu
// console.log(sayilar);                   //Kaynak Dizi Bozulmadı

// .splice() → Diziden elemanları kaldırır, değiştirir veya çıkan elemanın yerine eleman ekler.

// let sonuc = sayilar.splice(2, 4);       //2. indexten itibaren 4 eleman sil
// let sonuc = sayilar.splice(2);      //2. indexten itibaren sil.
// console.log(sonuc);                     //Yeni dizi oluşturdu
// console.log(sayilar);                   //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.splice(2, 0, 11111, 22222);   //2. indexi SİLME ve 1111, 22222 SOL TARAFA ekle
// console.log(sonuc);
// console.log(sayilar);                             //Kaynak Dizi Bozuldu.

// let sonuc = sayilar.splice(2, 1, 11111, 22222);     //2. indexi SİL ve 1111, 22222 ekle
// console.log(sonuc);
// console.log(sayilar);                               //Kaynak Dizi Bozuldu.

// .find() → Dizi elemanlarını bir döngüye alıp sırasıyla her bir dizi elemanını belirlediğimiz bir koşula tabi tutup ilk koşulu sağlayan dizi elemanını bulmak için kullanabiliriz.

// let sonuc = ogrenciler.find(kisi => kisi.id === 32); //ogrenciler dizisindeki 32 id li değeri getir
// console.log(sonuc);
// console.log(ogrenciler);                             //Kaynak Dizi Bozulmadı

// .findIndex() → Dizi elemanlarını bir döngüye alıp sırasıyla her bir dizi elemanını belirlediğimiz bir koşula tabi tutup ilk koşulu sağlayan dizi elemanının indeks numarasını bulmak için kullanabiliriz.

// let sonuc = ogrenciler.findIndex(kisi => kisi.id === 92);  //index numarasını buldu
// console.log(sonuc);
// console.log(ogrenciler);                                   //Kaynak Dizi Bozulmadı

// .every() → Belirli bir dizi içerisinde vereceğimiz koşula, tüm elemanların uyup uymadığını kontrol eder. Testi geçerse true değerini döndürür.

// let sonuc = sayilar.every(sayi => sayi < 85);   //herbir elemanı tek tek şartı sağlıyor mu diye kontrol ediyor(true -- false  döner)
// console.log(sonuc);
// console.log(sayilar);                           //Kaynak Dizi Bozulmadı

// .some() → Belirli bir dizi içerisinde vereceğimiz koşula, herhangi bir (bazı) elemanların uyup uymadığını kontrol eder. Testi geçerse true değerini döndürür.

// let sonuc = sayilar.some(sayi => sayi < 10);    //Bir tane bile bu şarta uyan varsa sonuc true olur
// console.log(sonuc);
// console.log(sayilar);                           //Kaynak Dizi Bozulmadı

// .includes() → Dizinin öğeyi içerip içermediğini kontrol eder.

// let sonuc = isimler.includes('sezer');      //isimler dizisinde 'sezer' varsa true yoksa false
// console.log(sonuc);
// console.log(isimler);                       //Kaynak Dizi Bozulmadı

// .forEach() → Dizi içindeki indexler arasında dolaşmamızı sağlar. Return yapmaz.

//  let sonuc = sayilar.forEach(function(sayi){        // İçine fonksiyon alabiliyor(map fonk. almıyor)
//     console.log(sayi * 2)
//  });
//  console.log(sayilar);                               //Kaynak Dizi Bozulmadı

// .filter() → Dizideki öğeleri belirli bir koşula göre filtreler. Filtrelenen öğeler varsa geriye döndürülür, yoksa boş bir dizi geriye döner.

// let sonuc = ogrenciler.filter(function(kisi){
//     return kisi.id % 2 === 1;
// });
// console.log(sonuc);
// console.log(ogrenciler);

// .concat() → İki veya daha fazla diziyi yeni bir dizide birleştirir.

// let sonuc = sayilar.concat(isimler);
// console.log(sonuc);
// console.log(sayilar);
// console.log(isimler);

// .map() → kendisine parametre olarak gönderilen dizinin her bir elemanını belirlenen bir işleme tabi tutup, yeni bir dizi meydana getirir.

// let sonuc = sayilar.map(topla => topla * 3);    //Yeni dizi oluşturdu.
// console.log(sonuc);
// console.log(sayilar);                           //Kaynak dizi bozulmadı

// Array.from() → Dizi benzeri yenilenebilir bir nesneden yeni bir dizi oluşturur.

// let sonuc = Array.from(sayilar);
// console.log(sonuc);
// console.log(sayilar);

// let ad = "sezer"
// let yeni = Array.from(ad);
// console.log(yeni);

// Array() → Bu method ile yeni bir dizi oluşturabilirsiniz ancak tek bir parametre gönderirseniz ve bu bir sayı ise dizi oluşturulmaz gönderdiğiniz sayı boyutunda elemanları boş bir dizi oluşturulur.

// let sonuc1 = Array(5, 2);
// let sonuc2 = Array(5);                  // 5 elemanlı boş dizi oluşturdu
// let sonuc3 = Array(sayilar, 2);
// console.log(sonuc1);
// console.log(sonuc2);
// console.log(sonuc3);
// console.log(sayilar);

// Array.of() → Bu method ile yeni bir dizi oluşturabilirsiniz artı olarak tek bir parametre gönderseniz ve bu bir sayı dahi olsa , o elemanın bulunduğu bir dizi oluştulur.

// let sonuc4 = Array.of(5,2);
// let sonuc5 = Array.of(5);                   // Elemanı 5 olan yeni bir dizi oluşturdu
// let sonuc6 = Array.of(sayilar, 2);
// console.log(sonuc4);
// console.log(sonuc5);
// console.log(sonuc6);
// console.log(sayilar);

// .toString() → Diziyi string’e dönüştürür.

// let sonuc = isimler.toString();
// console.log(sonuc);
// console.log(isimler);

// .join() → Virgülle veya birtilen herhangi bir ayraçla ayrılmış dizi öğelerinden oluşan yeni bir string döndürür.

// let sonuc1 = isimler.join();
// let sonuc2 = isimler.join("");
// let sonuc3 = isimler.join(" ");
// let sonuc4 = isimler.join("-");
// console.log(sonuc1);
// console.log(sonuc2);
// console.log(sonuc3);
// console.log(sonuc4);
// console.log(isimler);

// .sort() → Bir dizinin öğelerini artan UTF-16 düzeninde sıralar.

// let sonuc = sayilar.sort();         // İlk rakamlara göre küçükten büyüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);

// let sonuc = sayilar.sort((a, b) => a - b);      //Küçükten büyüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);                           // Kaynak dizi bozuldu

// let sonuc = sayilar.sort((a, b) => b - a);      //Büyükten küçüğe sıraladı
// console.log(sonuc);
// console.log(sayilar);                            // Kaynak dizi bozuldu

// let sonuc = isimler.sort();         // a - z ye sıraladı.
// console.log(sonuc);
// console.log(isimler);               // Kaynak dizi bozuldu

// .reverse() → Diziyi tersine çevirir. İlk index sonuncu, sonuncu index ise ilk index olur.

// let sonuc = sayilar.reverse()           // sayilar dizisini ters çevirdi
// console.log(sonuc);
// console.log(sayilar);                   // Kaynak dizi bozuldu

// let sonuc = isimler.reverse();
// console.log(sonuc);
// console.log(isimler);

// .reduce() → Dizinin her değeri için bir fonksiyon yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

// let sonuc = sayilar.reduce((a, b) => a + b);    //Dizideki sayıları topla
// console.log(sonuc);
// console.log(sayilar);
