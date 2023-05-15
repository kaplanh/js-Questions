// * ============================================
// *            Tahmin oyunu-1.yol
// * ============================================

// console.log("OYUN BASLASIN");

// let devam;
// do {
//   let hak = 3;
//   const rasgeleSayi = Math.floor(Math.random() * 100 + 1);
//   // console.log(rasgeleSayi);

//   do {
//     const tahmin = Number(prompt("Lütfen 0-100 arasinda bir sayi giriniz:"));
//     hak -= 1;
//     if (tahmin === rasgeleSayi) {
//       console.log(`Tebrikler ${3 - hak}. denemede bildiniz.🥳`);
//       break;
//     } else {
//       console.log(`Dikkat ${hak} hakkiniz kaldi`);
//       if (tahmin < rasgeleSayi) {
//         console.log("ARTTIR ⬆️");
//       } else {
//         console.log("AZALT ⬇️");
//       }
//     }
//   } while (hak > 0);

//   if (hak === 0) {
//     console.log("Üzgünüz oyunu kaybettiniz 😔");
//   }

//   devam = prompt("Yeniden oynamak ister misiniz e/h?");
// } while (devam == "e" || devam == "E");

// console.log("Yine bekleriz");

let tekrarOyna;

do {
  console.log("HAYDI BASLAYALIM");
  let hak = 5;
  // const cevap = Math.floor(Math.random() * 100 + 1);
  const cevap = 44;

  do {
    const tahmin = Number(prompt("Lütfen 0-100 arasinda bir sayi gir:"));
    hak -= 1;
    if (tahmin === cevap) {
      console.log(`Tebrikler bildin. zihin okuyucu musun.🥳`);
      break;
    } else {
      if (tahmin < cevap) {
        console.log("ARTTIR ⬆");
      } else {
        console.log("AZALT ⬇");
      }
    }
  } while (hak > 0);

  if (tahmin === cevap && hak === 0) {
    console.log("Üzgünüm kaybettin 😢");
  }

  tekrarOyna = prompt("Tekrar oynamak ister misin E/H?");
} while (tekrarOyna == "E");

console.log("Bulmadan birakip gidecek misin?🔙");

// * ============================================
// *            Tahmin oyunu .yol
// * ============================================

// let answer;
// let i=0;
// let computer=Math.round(Math.random()*100);
// while (true){
//     while (i<7){
//         let user=+prompt("Please enter  a number between 0-100");
//         if (computer===user){
//             console.log("Mastermind")
//             break
//         } else if (user<computer){
//             console.log("Your number is lower than computer, increase your number")
//             i++
//             continue
//         } else {
//             console.log("Your number is greater than computer, decrease your number")
//             i++
//             continue
//         }
//     }
//     if (i<7) {
//         console.log("You have found secret number ")
//         answer=prompt("Do you wanna play agein 'Y' or 'N'").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }else {
//             console.log(` You have lost . computer's number ${computer}`)
//             answer=prompt("Do you wanna play agein'Y' or 'N' ").toUpperCase()
//         if (answer==="Y") {
//             console.log("Great")
//             computer=Math.round(Math.random()*100);
//             i=0;
//             continue
//         } else {
//             console.log("Have a nice day")
//             break
//         }
//     }
