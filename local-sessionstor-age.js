
//*www.w3schools.com/html/html5_webstorage.asp

// !HTML Web Depolama nedir?
// ?Web depolama ile web uygulamaları, verileri kullanıcının tarayıcısında yerel olarak depolayabilir.

//? HTML5'ten önce, uygulama verilerinin her sunucu isteğinde yer alan çerezlerde saklanması gerekiyordu. Web depolaması daha güvenlidir ve büyük miktarda veri, web sitesi performansını etkilemeden yerel olarak depolanabilir.

// ?Web depolama, kaynak başınadır (etki alanı ve protokol başına). Tek bir kaynaktan gelen tüm sayfalar aynı verileri depolayabilir ve bunlara erişebilir.

// ?HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

// *window.localStorage- son kullanma tarihi olmayan verileri saklar
// *window.sessionStorage- bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur)



// !Web depolamayı kullanmadan önce localStorage ve sessionStorage için tarayıcı desteğini kontrol edin:

https: if (typeof Storage !== "undefined") {
  alert("Web Storage support..");
} else {
  alert("Sorry! No Web Storage support..");
}


// !Store(depolama)

localStorage.setItem("lastname", "Smith");
sessionStorage.setItem("lastname", "Smith");


//!geri alma,cagirma(Retrieve) 
localStorage.getItem("lastname")
sessionStorage.getItem("lastname")