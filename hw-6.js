//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let var1= 'hello world';
console.log(var1.length);

let var2 = 'hello world';
console.log(var2.length);

let var3 = 'javascript is cool';
console.log(var3.length);
//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'


let var4 = 'hello world';
let upper = var4.toUpperCase();
console.log(upper);

let var5 = 'lorem ipsum';
let upper1 = var5.toUpperCase();
console.log(upper1);

let var6 = 'lorem ipsum';
let upper2 = var6.toUpperCase();
console.log(upper2);



//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let var7 = 'lorem ipsum';
let upper3 = var7.toLowerCase();
console.log(upper3);

let var8 = 'HELLO WORLD';
let upper4 = var8.toLowerCase();
console.log(upper4);

let var9 = 'HELLO WORLD';
let upper5 = var9.toLowerCase();
console.log(upper5);
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let dirty1 = str.trim();
console.log(dirty1);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    //let str = 'Ревуть воли як ясла повні';
//let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str11 = 'Ревуть воли як ясла повні';
 const stringToarray  = (str)=> str.split(' ');

 const str12 = stringToarray(str11);
 console.log(str12);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numb = [10,8,-7,55,987,-1011,0,1050,0];

let numb1 = numb.map((num) => num.toString());

console.log(numb1);
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
 //   let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNew = nums.sort(function (a,b) {
 return a-b
});
console.log(sortNew);

const sortNew1 = nums.sort(function (a,b){
 return b-a
});
console.log(sortNew1);

//- є масив
//let coursesAndDurationArray = [
  //  {title: 'JavaScript Complex', monthDuration: 5},
  //  {title: 'Java Complex', monthDuration: 6},
    //{title: 'Python Complex', monthDuration: 6},
    //{title: 'QA Complex', monthDuration: 4},
   // {title: 'FullStack', monthDuration: 7},
    //{title: 'Frontend', monthDuration: 4}
//];


//-- відсортувати його за спаданням за monthDuration
//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
{title: 'Python Complex', monthDuration: 6},
{title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
{title: 'Frontend', monthDuration: 4}
];

const arrstudy = coursesAndDurationArray.sort(function (a1,a2 ) {
 return a2.monthDuration - a1.monthDuration
});
console.log(arrstudy);


const studLeng = coursesAndDurationArray.filter((item)=> item.monthDuration > 5);
console.log(studLeng);
  //  описати колоду карт (від 6 до туза без джокерів)
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше

//{
   // cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
     //   value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    //color:'', // 'red','black'
//}



   // Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
  //  spades:[],
     //   diamonds:[],
   // hearts:[],
    //clubs:[]
//}

  //  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker