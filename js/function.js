'use strict';

// Псевдомасив (ARGUMENTS) - доступ до всіх аргументів ф-ції

function multiply() {
    let total = 1;

    for (const argument of arguments) { //перебираємо псевдомасив з переданих аргументів
        total *= argument;
    }

    return total;

}

console.log(multiply(2, 2));// можна передати довільну кількість аргументів
console.log(multiply(2, 2, 3));
console.log(multiply(2, 3, 4, 5));

//До псевдомасиву не можна застосовувати методи масиву.
//Щоб застосовувати методи псевдомасив треба перетворити

function fn() {
    const args = Array.from(arguments);
}

//або можна використати інший спрощений вигляд
function fn2(...args) {
    //змінна args буде містити повноцінний масив аргументів
}