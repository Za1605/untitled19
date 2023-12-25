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
