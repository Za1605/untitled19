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
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250