//- створити блок,


//- клонувати його повністю, та додати клон в body.
let box = document.createElement(`div`);
//- додати йому класи wrap, collapse, alpha, beta
box.classList.add(`wrap`);
box.classList.add(`collaps`);
box.classList.add(`alpha`);
box.classList.add(`beta`);
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
box.style.backgroundColor= `blue`;
box.style.fontSize= `13`;
box.style.color= `red`;
box.innerText = 'hohoho';
//- додати цей блок в body.
document.body.appendChild(box);

//- клонувати його повністю, та додати клон в body.

const blockClone = box.cloneNode(true);
blockClone.salt.backgroundColor = 'yellow';
document.body.appendChild(blockClone);

//- Є масив:
const arr = ['Main', 'Products', 'About us', 'Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const ul = document.createElement('ul');
for (const item of arr) {
    const li = document.createElement('li');
    li.innerText = item;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `TITLE: ${course.title} | DURATION: ${course.monthDuration}`
//     document.body.appendChild(div);
// }
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${course.title} - ${course.monthDuration}`
    document.body.appendChild(div);

}

//- Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.