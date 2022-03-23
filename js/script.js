'use strict';
let someText = 'Hello to me!';
const SOME_ANOTHER_TEXT = 'Hello to all Ukrainian people!';
let something = null;
let isItWorks = true;
console.log(someText.length);
console.log(someText);
console.log(SOME_ANOTHER_TEXT.length);
console.log(SOME_ANOTHER_TEXT);
console.log(someText.length, " type is: ", typeof someText.length);
console.log(typeof SOME_ANOTHER_TEXT);
console.log(typeof something);
console.log(typeof isItWorks);
alert(SOME_ANOTHER_TEXT);

const isHuman = confirm("Are you think puilo is crazy?");
alert(isHuman);

const whoIsPutin = prompt("Tell me who is Putin?");
alert("Putin - " + whoIsPutin);

//Number(variable) - приведення до числа
//Number.parseInt(variable) - перетворення рядка у число доки це можливо
// 12.46ufg73 -> 12
// Number.parseFloat(variable) - 12.46ufg73 -> 12.46
// Number.isNaN(variable) - true якщо не число
//при додаванні чисел з точками треба використовувати округлення
// без окреглення -> 0.17 + 0.24 = 0.41000000000000003
// (0.17+0.24).toFixed(2) = 0.41
//       Клас Math
//Math.floor(1.7) -> 1 найбільше ціле число
//Math.ceil(1.2) -> 2
//Math.round(1.2) -> 1  Math.round(1.5) -> 2
//Math.max(20, 10, 50, 40) -> 50 максимальне з чисел
//Math.min(20, 10, 50, 40) -> 10 мінімальне з чисел
//Math.pow(2, 4) -> 16 піднесення до ступеня
//Math.random() випадкове число від 0 до 1
//Math.random() * (10 - 1) + 1 псевдовипадкове від 0 до 10
//       Конкатенація
//"Welcome " + guestName + ", your room number is " + roomNumber + "!";
//`Welcome ${guestName}, your room number is ${roomNumber}!`;
// string.length - довжина рядка
// string.toLowerCase() -> нижній регістр
// string.toUpperCase() -> верхній регістр
// string.indexOf(fragment) повертае індекс першого входження, або -1
//  string.includes(fragment) вертає true або false. Чуттєвий до регістру
// fileName.endsWith(".js") true або false
// fileName.replace(".js", ".json") -> замінює фрагмент

// const cssFileNames = "styles.css, about.css, portfolio.css";
// const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
// console.log(minifiedCssFileNames) -> "styles.min.css, about.min.css, portfolio.min.css"

// string.slice (startIndex, endIndex) -> створює копію частини рядка згідно індексу

// Тернарний оператор
// const message = умова ? вираз1 (якщо true) : вираз2 (якщо false)