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

// JS Variable
// var let const 
// var ==Global ve aynı isimde yazabilirsin.
var numberData=11;
var numberData=22;
console.log(numberData)

// ES6(2015)
// let ==Local ve aynı isimde yazamazsın.
let numberData2=33;
let numberData3=44;
numberData3=55;
console.log(numberData3)

// const ==Local ve aynı isimde yazamazsın ve sabit için kullanırız.
const numberData4=33;
const numberData5=44;
//numberData5=44; yazamazsınız.
console.log(numberData5)

// değişken adlanadırma (naming convensiton)
// camelCase kuralına
let _$degiskenAdi44="Merhabalar";
console.log(_$degiskenAdi44)

//yazamasınız 55degiskenAdi
//yazamasınız %degiskenAdi
//yazamasınız degiskenAdi
let degiskenAdi96üğşçö="Merhabalar96";
console.log(degiskenAdi96üğşçö);

// typeof
let data=true;
let dataTypeOf=typeof data
console.log(dataTypeOf);
data="Nasılsınız";
console.log(typeof data);
data=55;
console.log(typeof data);


// whoisting
firstWrite="Merhabalar99";
console.log(typeof firstWrite);
var firstWrite;

// variable initialization
let data44="Kelime";
console.log(data44);

// operator
let number1=11,number2=2;
console.log("Toplam =>"+ (number1+number2))
console.log("Çıkarma =>"+ (number1-number2))
console.log("Çarpma =>"+ (number1*number2))
console.log("Bölme =>"+ (number1/number2))
console.log("Kalan =>"+ (number1%number2))

// &&=VE ||=VEYA  ! DEĞİL  !=EŞİT DEĞİL

//ARTIRMA (+) AZALMA(-)
let counter=1;
//counter++;
//counter=counter+1;
counter+=1;
console.log(counter)
// ++ = 1 artır
// ++ = 1 artır
// ++ = 1 artır
// X++ ==> İşlemden sonra topla        (postfix increment)
// ++X ==> önce topla sonra işlem yap  (prefix increment)


// typeof
let data96=true;
// dizinin Türü nedir ?
console.log(typeof data96)

// instanceof
let dizi=["Malatya","Elazığ","Urfa"];
// dizinin Türü Array mi?
console.log(dizi instanceof Array); // output => true
console.log(dizi instanceof Object);// output => true
console.log(dizi instanceof Number);// output => false
console.log(dizi instanceof String);// output => false

// prompt
let userData=prompt("Lütfen birşeyler yazınız");
alert(userData);

// cast
let userData2=String(prompt("Lütfen birşeyler yazınız")) ;
alert(userData2);

let userData3=Number(prompt("Lütfen bir sayı yazınız")) ;
alert(Math.sqrt(userData3) );


// undefined
// NaN
// infinity
// new 
// this
// null
// Math