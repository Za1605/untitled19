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
//- додати цей блок в body.
document.body.appendChild(block);

//- клонувати його повністю, та додати клон в body.

const blockClone = box.cloneNode(true);
blockClone.salt.backgroundColor = 'green';
document.body.appendChild(blockClone);

//- Є масив:
const arr = ['Main', 'Products', 'About us', 'Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const ul = document.createElement('ul');
for (const value of arr) {
    const li = document.createElement('li');
    li.innerText = value;
    ul.appendChild('li');
}
document.body.appendChild(ul);

// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const course of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `TITLE: ${course.title} | DURATION: ${course.monthDuration}`
//     document.body.appendChild(div);
// }