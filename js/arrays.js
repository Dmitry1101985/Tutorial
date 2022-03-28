'use strict';
const myArr = [1, 2, 3, 4, 5];// оголошення масиву
//console.log(myArr);
//console.log(myArr.length); -> довжина масиву
console.table(myArr); // виводить масив у вигляді таблиці у консолі
console.log(myArr.length - 1); // останній індекс масиву
for (let i = 0; i < myArr.length; i += 1){
    console.log(myArr[i]);
}

for (const element of myArr) {
    console.log(element);
}

//прості типи даних - копіювання значення
//об'єкти, складні типи даних - копіювання референсу на один й той самий об'єкт

const stringToSplit = "something new string";
const arrOfStrings = stringToSplit.split("");
console.log(arrOfStrings);//розділення строки на елементи в масив

console.log(myArr.join("*"));//об'єднує масив в строку з розділенням елементів заданим символом

console.log(arrOfStrings.indexOf("t"));// повертає індекс елементу масиву або -1

console.log(arrOfStrings.includes("t"));// перевіряє на наявність елемента, повертає true або false

myArr.pop();// видалення останнього елементу
myArr.push(6);// додавання останнього елементу
console.table(myArr);

myArr.shift();// видалення першого елементу
myArr.unshift(8);// додавання першого елементу
console.table(myArr);

//const newArr = myArr.slice(0, 2);-> повертає новий масив з частини масиву (початковий індекс, кінцевий індекс)
//const deletedEl = myArr.splice(0, 2); -> повертає масив видалених елементів (індекс першого елементу видалення, кількість)
//при цьому в старому масиві цих елементів не буде

myArr.splice(1, 0, 10, 20);// додаємо елементи, починаючи з заданого індексу
//(індекс, 0-без видалення, ел1, ел2, ...)
console.table(myArr);

myArr.splice(1, 2, 10, 20);//видалає два елемента, починаючи з індексу 1, додає два елемента
//кількість елементів, що видаляється та кількість елементів, що додається може відрізнятися.

const firstArr = [1, 2, 3, 4];
const secondArr = [5, 6, 7, 8];
const bothArr = firstArr.concat(secondArr); // поєднує два масиви
