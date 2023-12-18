//- створити блок,
    //- додати йому класи wrap, collapse, alpha, beta
//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
//- додати цей блок в body.
//- клонувати його повністю, та додати клон в body.
let div = document.createElement(`div`);

div.classList.add(`wrap`);
div.classList.add(`collaps`);
div.classList.add(`alpha`);
div.classList.add(`beta`);

iv.style.backgroundColor= `blue`;
div.style.fontSize= `13`;
div.style.color= `red`;

document.body.appendChild(`div`);