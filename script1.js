//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr = [1, 2, 3, '4', '5', 6, true, '8', 9, false]

function average(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }
    return sum / count;
}

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

function doMath(x, znak, y) {
    switch (znak) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y === 0) {
                return 'На нуль ділити не можна!';
            } else {
                return x / y;
            }
        case '%':
            return x % y;
        case '^':
            return x ** y;
        default:
            return 'Невірний знак!';
    }
}

const x = prompt('Введіть перше число');
const y = prompt('Введіть друге число');
const znak = prompt('Введіть знак математичної дії');

alert(doMath(+x, znak, +y));

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function fillArray() {
    const arr = [];
    const length = +prompt('Введіть довжину основного масиву');
    const innerLength = +prompt('Введіть довжину внутрішніх масивів');
    for (let i = 0; i < length; i++) {
        arr[i] = [];
        for (let j = 0; j < innerLength; j++) {
            arr[i][j] = prompt('Введіть значення елемента');
        }
    }
    return arr;
}

fillArray();

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let str = prompt('Введіть рядок');
let arr2 = prompt('Введіть символи через кому').split(',');

function deleteSymbols(str, arr) {
    for (let i = 0; i < arr.length; i++) {
        str = str.replaceAll(arr[i], '');
    }
    return str;
}

alert(deleteSymbols(str, arr2));