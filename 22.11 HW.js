//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let jun = ['java', 'js', 'react', true, 'cat', 'dog'];
console.log(jun);



//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
const book = {
    title:'POPO',
    pageCount: 200,
    genre:'roman'
};

const book1 = {
    title:'POPO',
    pageCount: 200,
    genre:'roman'
};

const book2 = {
    title:'POPO',
    pageCount: 200,
    genre:'roman'
};
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

const book11 = {

    title:'POPO',
    pageCount: 20,
    genre:'roman',
    authors:'TTTT'
};
const book12 = {

    title:'POPO',
    pageCount: 20,
    genre:'roman',
    authors:'TTTT'
};
const book13 = {

    title:'POPO',
    pageCount: 20,
    genre:'roman',
    authors:[
        {name:'petro', age:23}

    ],
};
console.log(book13.authors);

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача

const users1 = [

    {name: `Petro`, username: `Svanivach`, password:123},
    {name: `Sty`, username: `Fil`, password:124},
    {name: `Cro`, username: `Gir`, password:125},
    {name: `Ted`, username: `Ret`, password:126},
    {name: `Any`, username: `Div`, password:127},
    {name: `tuy`, username: `Syt`, password:127},
    {name: `Eri`, username: `Ber`, password:128},
    {name: `Stiv`, username: `Dni`, password:129},
    {name: `Kel`, username: `Sva`, password:145},
    {name: `Din`, username: `Chiy`, password:156},
];
console.log(users1[0].password);
console.log(users1[2].password);
console.log(users1[3].password);
console.log(users1[7].password);
console.log(users1[8].password);
console.log(users1[9].password);

//Логічні розгалуження:
   // - Є змінна х, якій ви надаєте довільне числове значення.
   // Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

const x = -3;

if (x!= 0){
    console.log('Вірно')
}
else {
    console.log('Невірно')
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 101;

if (time >=0 && time <=15){
    console.log('first part')
}
else if (time >=16 && time <=30){
    console.log('second part')
}
else if (time >= 31 && time <=45){
    console.log('third part' )
}
else if (time >= 46 && time <=60){
    console.log('four part')
}

else {
    console.log(false)
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day  = 23;

if (day >= 0 && day <=15 ){
    console.log('перша декада')
}else if(day> 15 && day <=31){
    console.log('Друга декада')
}else {
    alert('WRONG DAY')
    console.log('ERROR')
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
// (можна замість плану на день, назву дня англійською).

//const week = + prompt('enter number of week', 2);

//switch (week) {
    //case 1:
    // console.log('hello');
    // break;

    //case 2:
    // console.log('haha');
    // break;

    //case 3:
    // console.log('hohoho');
    // break;

    //case 4:
      //  console.log('hoffghhj');
     //   break;
    //case 5:
      //  console.log('ho34556');
      //  break;
   // case 6:
       // console.log('h2222');
       // break;
    //case 7:
     //   console.log('hohsdfsdgfdg');
       // break;

   // default:
     //   console.log('error')
//}
  //  - Користувач вводить або має два числа.
     //   Потрібно знайти та вивести максимальне число з тих двох .
 //       Також потрібно врахувати коли введені рівні числа.

 let number1 = 78;
let number2 = +prompt('enter number', 78);
if (number1=== number2){
    console.log('number is true')
}
else if (number1>number2){
    console.log('max is: ' +number1)}

else  {
    console.log('max is:' +number2)
    }

   // - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    //    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

