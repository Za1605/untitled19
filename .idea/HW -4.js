//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function calc (a,b) {
    return  a*b;

}
console.log(calc(10,5));
//- створити функцію яка обчислює та повертає площу кола з радіусом r

function sos (r) {
    return Math.PI* Math.pow(r,2)
}
console.log(sos(5));
//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function sCilindr(r,h) {
    return 2 * Math.PI * r *(r+h)
}
console.log(sCilindr(2,10));
//- створити функцію яка приймає масив та виводить кожен його елемент

let arr222 = ['34', 78, 'hfjhfjk', 'ndnnd'];
function arr1(arr) {
    for (const item of arr) {
console.log(item);
    }
}
arr1(arr222);
//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

function pCreator(text) {
    document.write(`<p> ${text} </p>`);
}
pCreator('hohohohoh');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function ulCreate(text) {
    document.write(`
    <ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
ulCreate('you welkome');
//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function twoArg(text, count) {
    document.write(`<ul>`)
    for (let i=0; i<count; i++){
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`)

    }
twoArg(`hahaha`,3);
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const arr12 = [12,56,'hello', 'akk', true];

function fooArr12(arr) {
    document.write(`<ul>`)
    for (const item of arr) {
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ul>`)
}
fooArr12(arr12);
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

const keys = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function objArr(arr) {
    for (const user of arr) {
        document.write(`<div> ${user.id} ${user.name} ${user.age}</div>`)
    }
}
objArr(keys);
//- створити функцію яка повертає найменьше число з масиву
const arrNum1 = [234, 987, 12, 56, 8,5];

function arrMin(arr) {
    let result = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (result> arr[i]){
            result = arr[i];
        }

    }
    return result;
}
console.log(arrMin(arrNum1));
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sumNumber(arr) {
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result;
}

console.log(sumNumber([10, 3,22,2,33]));


//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2) {
    const num1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = num1;
    return arr;
}
 console.log(swap([11,22,33,44],0,1));
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250