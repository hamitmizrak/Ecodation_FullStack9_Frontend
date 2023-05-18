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
// function returnsuzParametresiz() {
//     console.log("1-returnsuz Parametresiz")
// }
// returnsuzParametresiz();

// // 2
// function returnsuzParametreli(name) {
//     console.log("2- returnsuz Parametreli " + name)
// }
// returnsuzParametreli("Hamit");

// // 3
// function returnluParametresiz() {
//     return "3- returnlu Parametresiz";
// }
// let data3=returnluParametresiz();
// console.log(data3);

// // 4
// function returnluParametreli(name,surname) {
//     return "4- returnlu Parametreli "+String(name).toUpperCase()+" surname="+surname;
// }
// let data4=returnluParametreli("Hamit","Mızrak");
// console.log(data4);

////////
//normal, anonymous, arrowfunction, immediafunction

// PARAMETRESIZ (normal, anonymous, arrowfunction)
// 1-NORMAL PARAMETRESIZ 
// function normalParametresizFunction() {
//     console.log("Normal Function")
// }
// normalParametresizFunction();

// // 2-NORMAL PARAMETRELI
// function normalParametreliFunction(name) {
//     console.log("Normal Function "+String(name).substring(0,2).concat("***"))
// }
// normalParametreliFunction("Hamit");

// //////////////////////////////
// // 3-ANONYMOUS PARAMETRESIZ(Dikkat: değişken fonksiyonu üzerinde çağıracağız)
// let anonymousParametresizFunction= function () {
//     console.log("Anonymous Function ")
// }
// anonymousParametresizFunction();

// // 4-ANONYMOUS PARAMETRELI(Dikkat: değişken fonksiyonu üzerinde çağıracağız)
// let anonymousParametreliFunction= function (name) {
//     console.log("Anonymous Function "+String(name).substring(0,2).concat("***"))
// }
// anonymousParametreliFunction("Hamit");

// //////////////////////////////

// // 5-ARROW PARAMETRESIZ FUNCTION (Dikkat: değişken fonksiyonu üzerinde çağıracağız)
// let arrowParametresizFunction =  () => {
//     console.log("Arrow Function11 ")
// }
// arrowParametresizFunction();

// // 6-ARROW PARAMETRESIZ FUNCTION (Dikkat: değişken fonksiyonu üzerinde çağıracağız)
// // 6.1
// let arrowParametreliFunction1 =  (name) => {
//     console.log("Arrow Function22 "+String(name).substring(0,2).concat("***"))
// }
// arrowParametreliFunction1("Hamit");

// // 6.2
// let arrowParametreliFunction2 =  (name) => {
//      return "Arrow Function33 "+String(name).substring(0,2).concat("***");
// }
// let arrow2=arrowParametreliFunction2("Hamit");
// console.log(arrow2);

// // 6.3 Eğer 1 tane veri döneceksek {} yazmak zorunda değiliz. ancak bu return oluyor
// let arrowParametreliFunction3 =  (name) => "Arrow Function44 "+String(name).substring(0,2).concat("***");
// let arrow3=arrowParametreliFunction3("Hamit");
// console.log(arrow3)



/////////////////////////////////////////////////////////////////////////////////////////////////
// // condititonal
// // if else 
// let numberCon1 = 4;
// if (numberCon1 >= 10) {
//     console.log("10'dan büyüktür")
// } else {
//     console.log("10'dan küçüktür")
// }
// // ternary(kısayolu)
// let result = (numberCon1 >= 10) ? "10'dan büyüktür" : "10'dan küçüktür";
// console.log(result)

// // birden fazla karar
// let numberCon2 = 4;
// // 4 "4"
// if (numberCon2 == 1) { // 2 tane eşit olmasına bakılır. Türüne bakılmaz. number,string,boolean
//     console.log("1")
//     // 4 "4"
// } else if (numberCon2 === 2) { // 3 tane eşit olmasına bakılır. Türüne bakılır.
//     console.log("2")
// } else if (numberCon2 === 3) {
//     console.log("3")
// } else if (numberCon2 === 4) {
//     console.log("4")
// } else if (numberCon2 === 5) {
//     console.log("5")
// } else if (numberCon2 === 6) {
//     console.log("6")
// } else {
//     console.log("farklıdır")
// }

//  Debug nasıl atılır (Hata ayıklama)
//  switch case
// switch (numberCon2) {
//     case 1:
//         console.log("1")
//         break;
//     case 2:
//         console.log("2")
//         break;
//     case 3:
//         console.log("3")
//         break;
//     case 4:
//         console.log("4")
//         break;
//     case 5:
//         console.log("5")
//         break;
//     case 6:
//         console.log("6")
//         break;
//     default:
//         console.log("farklıdır")
//         break;
// }

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal function ile yazınız)
// javascript ile negatif pozitif bulan algoritma ?

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

// Şimdiki zamanın saatine göre hesaplama yapan switch-case ile  JS code yazınız.
// (Dikkat: arrow function ile yazınız) Zaman için new Date().getHours() ile alabilirsiniz

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

/////////////////////////////////////////////////////////////////////////////////////////////////
// debug nasıl atılır?
// Loop, for, while, do-while
// console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);

// //FOR  i++;  i+=1;  i=i+1;
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log(sum);


// //WHILE  i++;  i+=1;  i=i+1;
// let sum2 = 0;
// let x=1;
// while (x <= 10) {
//     sum2 += x;
//     x++;
// }
// console.log(sum2)

// //DO-WHILE  i++;  i+=1;  i=i+1;
// let sum3 = 0;
// let y=1;
// do{
//     sum3 += y;
//     y++; 
// }while (y <= 10);
// console.log(sum3)

// ÖDEV 
//ÖDEV (if-else for break continue)
//Fonksiyonlarla
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
// 1.adım: kaç tane sayı var ?
// 2.adım: sayı toplamları var ?
// 3.adım: kaç tane tek  sayı var ?
// 4.adım: tek sayılar toplamı ?
// 5.adım: tek sayılar gösterelim ?
// 6.adım: kaç tane çift  sayı var ?
// 7.adım: çift sayılar toplamı ?
// 8.adım: çift sayılar gösterelim ?
// Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
// Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
// Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

let oddEven = () => {
    let number = Number(prompt("Lütfen sayı giriniz"));
    let counterNumber = 0, numberSum = 0;
    let evenCounter = 0, evenSum = 0;
    let oddCounter = 0, oddSum = 0;

    for (let index = 0; index <= number; index++) {
        if (index === 7) continue;
        if (number >= 101)
            break;

        numberSum += index;
        counterNumber++;
        if (index % 2 == 0) {//ÇİFT
            evenCounter++;
            evenSum += index;
        } else { //TEK
            oddCounter++;
            oddSum += index;
        }
    }
    console.log("Toplam sayısı: " + counterNumber);
    console.log("Çift sayısı: " + evenCounter);
    console.log("Çift sayısı toplamı: " + evenSum);
    console.log("Tek sayısı: " + oddCounter);
    console.log("Tek sayısı toplamı: " + oddSum);
} //end for
//oddEven()


//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.

// ÖDEV
// y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

// ÖDEV
// Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
// Formül: (derece*9/5)+32

// ÖDEV operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))


// ÖDEV: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

/////////////////////////////////////////////////////////////////////////////////////////////////
// debug nasıl atılır ?
// try catch (Exception Handling)
let tryCatchTutorials = () => {
    // Global variable (var)
    // Local variable (let-const)
    try {
        var number = Number(prompt("Lütfen bir sayı giriniz")); //syntax error
        number = number ** 2;// Math.pow(number,2)
        window.alertx(number);
        console.log("Çalışmayacak alan " + number);
        console.log("Mecburi çalışacak alan-1");
    } catch (error) {
        console.error("Hata mesajı-1: " + error.name);   // Type veriyor
        console.error("Hata mesajı-2: " + error.message);// type vermiyor hata mesajını veriyor
        console.error("Hata mesajı-3: " + error);
    } finally {
        console.info("Mecburi çalışacak alan-2");
    }
    console.log("Çalışacak alan " + number);

    // throw Kullanımı: 
    // bazen zorlayarak sisteme hata oluşmasını isteriz
    let passwd = Number(prompt("Lütfen şifrenizi giriniz"));
    if (passwd !== 4444) {
        throw "401 unAuthorized (Yetkisiz Giriş)"
    } else {
        alert("Admin Girişi")
    }
}
//tryCatchTutorials()
/////////////////////////////////////////////////////////////////////////////////////////////////
// dizi
let arrayTutorials = () => {
    let array = [44, 33, 11, 22, true, "array", 44.23];
    console.log(array);
    console.log(typeof array);
    console.log(array[0]);
    console.log(array[3]);
    console.log(array[array.length - 1]);

    array.push(66);
    console.log(array);

    array.unshift(99);
    console.log(array);

    array.pop();
    console.log(array);

    array.shift();
    console.log(array);

    array.sort();
    console.log("SORT Küçükten Büyüğe  " + array);

    array.reverse();
    console.log("REVERSE " + array);

    array.sort().reverse();
    console.log("SORT.REVERSE  Büyükten Küçüğe   " + array);
}
//arrayTutorials();

////////////////////
// dizi dönen fonksiyon
let arrayDataSet = () => {
    let numberData = [];
    for (let i = 0; i <= 4; i++) {
        numberData[i] = Math.floor(Math.random() * 9 + 1);
    }
    return numberData;
}

let arrayTutorials2 = function () {
    //console.log(arrayDataSet());
    let array = arrayDataSet();

    console.log("1-*************");
    // 1.YOL iterative for
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    console.log("2-*************");
    // 2.YOL  for in
    for (let temp in array) {
        console.log(temp + " => " + array[temp]);
        console.log(`${temp} => ${array[temp]}`);
    }

    console.log("3-*************");
    // 3.YOL  for of
    for (let temp of array) {
        console.log(temp);
    }

    // Anonymous Function (ForEach)
    console.log("4-*************");
    // 4.YOL forEach => value, index, array
    array.forEach(function (value, index, array) {
        console.log(`${index} => ${value}`);
        //console.log(array);
    });

    // Arrow Function (ForEach)
    // Escape Character (\)
    console.log("\n5-*************");
    // 5.YOL forEach => value, index, array
    array.forEach((value, index, array) => {
        console.log(`${index} => ${value}`);
        //console.log(array);
    });

}
//arrayTutorials2();

/////// 
let arrayTutorials3 = function () {
    let array = arrayDataSet();
    array.sort();

    console.log("*** toString => string çevir ***")
    // toString(dizi=> string'e çevirmek)
    // toString(): string;
    let result1 = array.toString().substring(0, 4);
    console.log(result1);

    console.log("*** join => string'e çevir ***")
    // join(birleştirmek): diziyi => String'e çeviriyor 
    // ancak sonuna istediğimiz bir simge varsa ekliyor
    // join(separator?: string): string;
    let result2 = array.join(" "); //array.join("*");
    console.log(result2);

    console.log("*** split => string'i boşluktan arındır ***")
    // split(ayırmak): Dikkat (string olan verilerde kullanıyoruz). 
    // split(separator?: string): string[];
    let kelime = "merhabalar nasıl gidiyor";
    let result4 = kelime.split(" ");
    console.log(result4);

    // "merhabalar nasıl gidiyor" bu String yapıyı boşluklardan arındırarark 
    // her bir elemanı dizi elemanı yapın
    // öncelikle String'i boşluklardan arındırın. 
    // buradaki her bir eleman dizi olarak atayın.
    let result5 = array.toString().split(" ");
    console.log(result5);

    console.log("*** slice: ekle ***")
    // slice(dilim)
    // slice(start?:number, end?:number): T[];)
    let result6 = array.slice(2); // 2.indisten itibaren kopyala dizi dönderdi
    console.log(result6);

    // 0: başlama
    // 2:bitiş
    let result7 = array.slice(0, 2); // 0<=X<2 aradaki değerleri kopyaladı dizi dönderdi
    console.log(result7);
}
//arrayTutorials3()

let arrayTutorials4 = function () {
    let array = arrayDataSet();
    console.log(array);
    // NOT: splice diziyi etkiler yeni değerler üzerinden çalışma yapar.
    console.log("*** Splice: ekleme ve silme ***")
    // başlama:1 (dahil)
    // sil:2
    let result1 = array.splice(1, 2)
    console.log(array);

    // başlama:2 (dahil)
    // sil:0 (silmiyoruz)
    // ekle
    let result2 = array.splice(2, 0, "yeni")
    console.log(array);

    let result3 = array.splice(0, 2, "yeni44")
    console.log(array);
}
//arrayTutorials4()

/////// 
let arrayTutorials5 = function () {
    let array = arrayDataSet();

    // forEach(döngü)
    // Diziyi etkilemiyor
    // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
    console.log("*** ForEach *****");
    let donguData = array.forEach((value, index, array) => {
        console.log(`${index} => ${value}`);
    });


    // filter ( filtreleme )
    // Diziyi etkilemiyor
    // filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    console.log("*** Filter *****");
    let filterData =
        array.filter((value, index, array) => {
            //console.log(`${index} => ${value}`);
            return value % 2 == 0
        }).forEach((value, index, array) => {
            console.log(`${index} => ${value}`);
        });

    // map(eşleme)
    // Diziyi etkilemiyor
    // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
    console.log("*** Filter *****");
    let eslemeData = array.map((value, index, array) => {
        return Math.pow(value, 2);
    }).forEach((value, index, array) => {
        console.log(`${index} => ${value}`);
    });

    // fill(dilim)
    // Dikkat dizi üzerinden manipülasyon sağlıyor diziyi etkiliyor
    // fill(value: T, start?: number, end?: number): this;
    console.log("*** Fill *****");
    let doldurData = array.fill(3);
    console.log(doldurData);
    let doldurData2 = array.fill(0, 2, 4);
    console.log(doldurData2)
}
//arrayTutorials5()

/////////////////////////////////////////////////////////////////////////////////////////////////
// senkron , asenkron nedir
// monad nedir ?, function,
// call back function

// MONAD FUNCTION
let birinci = (number) => {
    number = number ** 2;// Math.pow(number,2)
    return number;
}

let ikinci = () => {
    let number = Number(prompt("Lütfen bir sayı giriniz")); //syntax error
    let result = birinci(number)
    console.log(result);
}
//ikinci();

// CALLBACK FUNCTION (Hell)
// CallBack Güvenmiyoruz Neden ?
// 1-) Beklediğimiz zamandan erken gelebilir. Sonuç doğru olmaz o zaman
// 2-) Parametreleri gönderemeyebilir.
// 3-) Sebebsiz dallanmalar olabilir.
// Sadece bu sebeblerde bile olsa Promise veya Async/Await kullanmalıyız.
let ucuncu = (number) => {
    number = number ** 2;// Math.pow(number,2)
    return number;
}

let dorduncu = (callBackFunction) => {
    let number = Number(prompt("Lütfen bir sayı giriniz")); //syntax error
    // diğer fonksiyonun adını bilmeyebilirim. bundan dolayı = callBackFunction yazdım 
    let result = callBackFunction(number)
    console.log(result);
}
//dorduncu(ucuncu)

/////////////////////////////////////////////////////////////////////////////////////////////////
// setInterval: fonkiyonunun çalışmasını bekliyor.
// setInterval => 1.YOL
let customer1 = () => {
    //setInterval(callbackfnc(),ms)
    setInterval(function () {
        alert("1.müşteri");
    }, 3000);
}
let customer2 = () => { alert("2.müşteri"); }

//customer1()
//customer2()

///////////////////////////////// 
// setInterval => 2.YOL
let customer3 = () => {
    //setInterval(callbackfnc(),ms)
    setInterval(() => {
        alert("3.müşteri");
    }, 3000);
}
let customer4 = () => { alert("4.müşteri"); }

//customer3()
//customer4()


/////////////////////////////////////////////////////////////////////////////////////////////////
// 1-) CallBackFnc 
// Kullanıcıdan alınan sayıyı mutlak değere çeviren aalgoritma ?
let data1 = (number) => {
    let result = Math.abs(number);
    alert(result)
}

let data2 = (callbackfnc) => {
    let number = Number(prompt("Lütfen bir sayı giriniz"));
    callbackfnc(number)
}
// Dikkat: Functionda kullandığımız parantezi kullanmıyoruz. () 
//data2(data1);


// 2-) Promise 
// Kullanıcıdan alınan sayıyı mutlak değere çeviren algoritma ?
// resolved: olumlu sonuçlanmış
// rejected: olumsuz sonuçlanmış
// pending: bekleme

// 1.Gösterim Promise 
let promisefnc = new Promise((resolve, reject) => {
    // JS senkron çalışır.
    // promise: ya resolve döner yada reject
    resolve("olumlu sonuçlandı");
    //reject("olumsuz sonuçlandı")
});
//console.log(promisefnc)

// 1.Gösterim Promise 
let promisefnc2 = new Promise((resolve, reject) => {
    // JS senkron çalışır.
    // promise: ya resolve döner yada reject
    resolve("olumlu sonuçlandı");
    //reject("olumsuz sonuçlandı")
}).then().then().then(() => { }).catch(() => { });
//console.log(promisefnc2)

// then:  eğer promise'dan bir sonuç dönerse çalışır
// catch: eğer promise'dan bir sonuç dönmezse çalışır. 
promisefnc2.then().catch();

// catch: (Dikkat: 1 tane catch vardır)
promisefnc2.then().then().then().catch();

promisefnc2.then(() => {

}).catch((error) => {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
});

// Callbackfunction (ES6)
// Promise (ES7)
// Async/await (ES8)

// eğer Promise'da;
// resolve => then() düşer
// reject  => catch() düşer
// Kullanıcı 
// resolve ve reject sonuç => then
// then hata => catch
let promisefnc3 = new Promise((resolve, reject) => {
    let status = 200;
    if (status === 200)
        return resolve("EVET");
    else
        return reject("HAYIR");
}).then(() => {
    //consolex.log("YES");
    //console.log("YES");
}).catch((err) => {
    console.error(err)
    //console.error(err.name)
    //console.error(err.message)
});
//console.log(promisefnc3)

// promise function (ES7)
// async/await function (ES8)
let asynAwaitfnc1 = async () => {
    try {
        let status = 200;
        // 1.YOL
        // if (status === 200)
        //     return "EVET";
        // else
        //     return "HAYIR";

        // 2.YOL
        // Ternary
        const result1 = await (status === 200) ? "EVET" : "HAYIR";

        // 3.YOL
        // ternary alternative: 200 eşitse true değilse false
        const result2 = status === 200 && "EVET";
        console.log(result2)
    } catch (error) {
        console.err(error)
    }
};
//asynAwaitfnc1();

// Örnekler
/////////////////////////////////////////////////////////////////////////////////////////////////
// object
let obj1 = {};
let arr = [];
// console.log(arr);
// console.log(typeof arr);
// console.log(obj1);
// console.log(typeof obj1);
///////////arr
// let person1={
//     "name":"Öğrenci adı",
//     "surname":"Öğrenci soyadı",
//     "isLogin":true,
//     number:25,
//     "data1":function(number){
//         console.log(`data:${Math.sqrt(number)}`);
//         return `data1: ${Math.sqrt(number)}`;
//     },
//     "data2":function(){
//         // obje içide veri kullanmak istiyorsan objeyi işaretlemen gerekiyor
//         return `data2: ${Math.sqrt(this.number)}`;
//     },
//     "java":{
//         "techName":"JavaSe",
//         "year":"25"
//     }
// };
// console.log(person1);
// console.log(person1.name.toUpperCase());
// console.log(person1.isLogin&&"sign");
// console.log(person1.java.techName);
// console.log(person1.data1(16));
// console.log(person1.data2());
// console.log("***************");

// // Obje verileri ekrandan yazdırmak
// for( let key in person1 ){
// document.write(`${key} =>${person1[key]}  <br/>`)
// }
// console.log("***************");

// // Obje literal: objede daha sonra eklenencek özellikleri göstermek
// person1.schoolName="Anadolu";
// console.log(person1.schoolName);
// document.write(`${person1.schoolName} <br/>`)
// console.log("***************");

// // object nested naming
// console.log(person1);
// console.log(person1.name);
// console.log(person1["name"]);
// console.log(person1.java.techName);
// console.log(person1["java"]["techName"]);
// console.log("***************");

// object constructor
// objede this ile attributelara erişiyoruz.
let person2 = function (name, surname) {
    this.name = name;
    this.surname = surname;
    console.log(this);
}

// // hatırlatma: new hafıza yer açmak için kullanıyoruz.
// // new Promise()  ve object constructur
// let result2 = new person2("ADI44", "SOYADI44");
// console.log("***************");

// // hasOwnProperty: objedeki Key(attributes) emin olmak için
// console.log("result2 objesinde böyle bir attribute var mı ?" + result2.hasOwnProperty("name"));
// console.log("***************");

// // built-in-constructor: sisteme kendi yazdığımız fonksiyonu ekleme
// // sayının küpü alan built-in-constructor
// //String.prototype.hamitMizrakCupe
// let hamitMizrakCupe = (number) => {
//     const temp= Number(Math.pow(number, 3));
//     alert(temp);
//     return temp;
// }
// console.log(hamitMizrakCupe(3));

// String.prototype.hamitMizrakCupe=(number) => {
//     const temp= Number(Math.pow(number, 3));
//     alert(temp);
//     return temp;
// }
// let studentValue = "".hamitMizrakCupe(4);

// verilen bir sayının mutkağını bulan built-in-constructor yazınız ?

/////////////////////////////////////////////////////////////////////////////////////////////////

// event: olay ( bir işlem sonucunda çalışan)
// let onClickDeneme = () => {
//     console.log("Clicked ! ")
// }

/////////////////////////////////////////////////////////////////////////////////////////////////

// // listener
// //addEventListener(event,callbackfnc);
// let listenerData=document.getElementById('param1');
// // DİKKAT: on başına yazmıyorsunuz. => click, dblclick, mouseover
// listenerData.addEventListener("dblclick",function(e){alert("Tıklandı "+e.preventDefault)});
// // preventDefault: Browsera diyor ki sen bir şey yapma.

/////////////////////////////////////////////////////////////////////////////////////////////////

// DOM
// local storage, session storage
// jquery nedir ?
// PROJECT-1 ==> KDV Hesaplama html5/css3/RD/bootstrap/jQuery (localStorage ile)
// PROJECT-2 ==> jQuery Java Post.

// Git / Linux Codes

// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma




/////////////////////////////////////////////////////////////////////////////////////////////////
// ARA TATİL
// PROJECT-3 ==> TODO LIST
// Todo-List html5/css3/RD/bootstrap
// Todo-List html5/css3/RD/bootstrap/JS/jQuery
// Todo-List html5/css3/RD/bootstrap/JS/jQuery/jquery POST
// Todo-List html5/css3/RD/bootstrap/JS/jQuery/ Java, springDATA, springAPI

// +ES5, ES6 nedir örnekler üzerinde çalışacak
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

// interpreter nedir ?
// compiler nedir ?
// DRY nedir ?
// KISS nedir
// YAGNI nedir
// Dummy Code  nedir
// Clean Code nedir
// Monad nedir
// SOLID
// JDK nedir
// JRE nedir
// JVM nedir
// JIT nedir
// Decoder / Encoder nedir
// Java özellikleri nelerdir
// SQL nedir

// GİT / Linux codes ?
// sıfırdan bir bir UI pojesi yapacağız. Web site Frontend?

// 1.HAFTA Çalışma ara tatili ?

// Blog html5/css3/RD/bootstrap Java-Spring  Projemizde Backend/(Frontend) Blog/React

