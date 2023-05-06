// alert("deneme")

// Yorumlama
// <!-- --> HTML
// /* */  CSS
// //     JS
/*multiple Comment*/

// Çıktı 
// console.log("console");
// console.error("console error");
// console.warn("console warn");
// console.info("console info");

// alert("Pop-pup-1");
// window.alert("Pop-pup-2")

// document.writeln("<br/>Ekran44");
// window.document.writeln("<br/>Ekran23");

// "" => çift Tırnak
// '' => tek  Tırnak
// `` => Back Tick

// // JS Variable
// // var let const 
// // var ==Global ve aynı isimde yazabilirsin.
// var numberData=11;
// var numberData=22;
// console.log(numberData)

// // ES6(2015)
// // let ==Local ve aynı isimde yazamazsın.
// let numberData2=33;
// let numberData3=44;
// numberData3=55;
// console.log(numberData3)

// // const ==Local ve aynı isimde yazamazsın ve sabit için kullanırız.
// const numberData4=33;
// const numberData5=44;
// //numberData5=44; yazamazsınız.
// console.log(numberData5)

// // değişken adlanadırma (naming convensiton)
// // camelCase kuralına
// let _$degiskenAdi44="Merhabalar";
// console.log(_$degiskenAdi44)

// //yazamasınız 55degiskenAdi
// //yazamasınız %degiskenAdi
// //yazamasınız degiskenAdi
// let degiskenAdi96üğşçö="Merhabalar96";
// console.log(degiskenAdi96üğşçö);

// // typeof
// let data=true;
// let dataTypeOf=typeof data
// console.log(dataTypeOf);
// data="Nasılsınız";
// console.log(typeof data);
// data=55;
// console.log(typeof data);


// // whoisting
// firstWrite="Merhabalar99";
// console.log(typeof firstWrite);
// var firstWrite;

// // variable initialization
// let data44="Kelime";
// console.log(data44);

// // operator
// let number1=11,number2=2;
// console.log("Toplam =>"+ (number1+number2))
// console.log("Çıkarma =>"+ (number1-number2))
// console.log("Çarpma =>"+ (number1*number2))
// console.log("Bölme =>"+ (number1/number2))
// console.log("Kalan =>"+ (number1%number2))

// // &&=VE ||=VEYA  ! DEĞİL  !=EŞİT DEĞİL

// //ARTIRMA (+) AZALMA(-)
// let counter=1;
// //counter++;
// //counter=counter+1;
// counter+=1;
// console.log(counter)
// // ++ = 1 artır
// // ++ = 1 artır
// // ++ = 1 artır
// // X++ ==> İşlemden sonra topla        (postfix increment)
// // ++X ==> önce topla sonra işlem yap  (prefix increment)


// // typeof
// let data96=true;
// // dizinin Türü nedir ?
// console.log(typeof data96)

// // instanceof
// let dizi=["Malatya","Elazığ","Urfa"];
// // dizinin Türü Array mi?
// console.log(dizi instanceof Array); // output => true
// console.log(dizi instanceof Object);// output => true
// console.log(dizi instanceof Number);// output => false
// console.log(dizi instanceof String);// output => false

// // prompt
// let userData=prompt("Lütfen birşeyler yazınız");
// alert(userData);

// // cast
// let userData2=String(prompt("Lütfen birşeyler yazınız")) ;
// alert(userData2);

// let userData3=Number(prompt("Lütfen bir sayı yazınız")) ;
// alert(Math.sqrt(userData3) );

////////////////////////////////////////////////////////////////////
// undefined
// let username;
// console.log(username);

// // NaN
// console.log(4/4);
// console.log(4/"asd");

// // infinity
// console.log(5/0);

// new : doğmak
// null: ölmek
// zero: hayatta ama hiç bir şeyi kalmamış
// this: bu anlamaına objeyi işaretleme için kullanıyoruz.

////////////////////////////////////////////////////////////////////
// // Math
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.min(2,5,6,88,100,-500));
// console.log(Math.max(2,5,6,88,100,-500));

// console.log(Math.abs(-44));
// console.log(Math.sqrt( Math.abs(-25)));

// console.log(Math.pow(2,5));
// console.log(Math.pow(2,Math.sqrt( Math.abs(-25))));

// console.log(Math.ceil(7.1));
// console.log(Math.floor(6.9));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// //rastgele 
// console.log(Math.floor(Math.random()*9+1)); // 1<=X<=9


//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

/////////////////////////////////////////////////////////////////////////////////////////////////
// GELECEK HAFTA
// number 
let number1 = 44;
// number1=44.23;
// console.log(number1);
// console.log(typeof  number1); // typeof
// console.log(4/"2");
// console.log(4/Number("2")); // cast: Dönüşüm
// console.log(4/0)
// //console.log(4/"asd")
// console.log(isNaN(16)) // isNaN : it is Not a Number eğer false dönerse sayıdır.
// //console.log(Math.sqrt( Math.abs(Number(prompt("Lütfen bir sayı giriniz"))))); //Monad: bir verinin çıktısı başlasının girdisiyse

// let bilimselGosterim=42000000;
// console.log(bilimselGosterim);
// let bilimselGosterim2=42E+6;
// console.log(bilimselGosterim2);

// // Sayı sistemleri (Tabana Çevirme)
// // Binary(2) = 0 ve 1
// let binary2=0b011; // 2'lik tabanadan 10 tabana çevirme(Bilgisayar 2 tabanda çalışır)
// console.log(binary2);

// // Octal(8) = 0,1,2,3,4,5,6,7
// let octal8=0o712; // 8'lik tabanadan 10 tabana çevirme
// console.log(octal8);

// // Decimal(10) = 0,1,2,3,4,5,6,7,8.9
// let decimal10=444; //Matematikte 10'luk tabana göre yazılır.(İnsanlar 2 tabanda çalışır)
// console.log(decimal10);

// // Hexadecima(16) = 0,1,2,3,4,5,6,7,8.9,a,b,c,d,e,f
// let hexadecimal10=0xa9f; // 16'lik tabanadan 10 tabana çevirme
// console.log(hexadecimal10);

/////////////////////////////////////////////////////////////////////////////////////////////////
// string 
// let vocabulary="Javascript Öğreniyorum Javascript ";
// console.log(vocabulary);
// console.log(typeof vocabulary);
// console.log(typeof String(4));

// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);
// console.log(vocabulary.toUpperCase());
// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("Javascript"));
// console.log(vocabulary.lastIndexOf("Javascript"));

// console.log(vocabulary.substring(11));
// console.log(vocabulary.substring(11).toUpperCase());
// console.log(vocabulary.substring(0,5));

// console.log(vocabulary.concat("sona ekler"));
// console.log(vocabulary.startsWith("Javascript"));
// console.log(vocabulary.endsWith(" "));
// console.log(vocabulary.replace(vocabulary,"değişti"));


// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
//let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
//console.log(userData.replace("xxxxxxx"),"javascript");
//console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

/////////////////////////////////////////////////////////////////////////////////////////////////
// function (normal, anonymous, arrowfunction, immediafunction)

// NORMAL FUNCTION
// 1
function returnsuzParametresiz() {
    console.log("1-returnsuz Parametresiz")
}
returnsuzParametresiz();


// 2
function returnsuzParametreli(name) {
    console.log("2- returnsuz Parametreli " + name)
}
returnsuzParametreli("Hamit");

// 3
function returnluParametresiz() {
    return "3- returnlu Parametresiz";
}
let data3=returnluParametresiz();
console.log(data3);

// 4
function returnluParametreli(name,surname) {
    return "4- returnlu Parametreli "+String(name).toUpperCase()+" surname="+surname;
}
let data4=returnluParametreli("Hamit","Mızrak");
console.log(data4);

////////
//normal, anonymous, arrowfunction, immediafunction

/////////////////////////////////////////////////////////////////////////////////////////////////
// condititonal
// Loop
// try catch ,exception handling
/////////////////////////////////////////////////////////////////////////////////////////////////
// todo list html5/css3/RD/bootstrap
// debug nasıl atılır?
// senkron , asenkron nedir
// monad nedir ?, function,
// call back function,
// promise function
// async await function
// dizi
// object
// DOM
// event
// listener
// local storage
// jquery nedir ?
// todo list html5/css3/RD/bootstrap/JS/jQuery
// todo list html5/css3/RD/bootstrap/JS/jQuery/jquery POST
// todo list html5/css3/RD/bootstrap/JS/jQuery/ Java, springDATA, springAPI
// +ES5

// araştırma ödevleri ?
// Senkron ile asenkron arasındaki farklar nelerdir ?
// Libraries ile Framework arasındaki farklar nelerdir ?
// Unicode Ascii codes nedir ?
// npm nedir ?
// webpack nedir ?
// live-server nedir ?
// babel nedir ?
// ecmascript nedir ?
// typescript nedir ?
// api nedir ?
// ajax nedir ?
// jquery post ?

// GİT / Linux codes ?
// sıfırdan bir bir UI pojesi yapacağız. Web site Frontend?

// 1.HAFTA Çalışma ara tatili ?

