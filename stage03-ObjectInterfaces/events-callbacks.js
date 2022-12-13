"use strict";
// Exemplo 01
const button = document.querySelector('button');
function handleClick(event) {
    console.log(event.pageX);
}
// button?.addEventListener('pointerdown', handleClick);
function exampleActive(event) {
    if (event instanceof MouseEvent)
        console.log(event.pageX);
    if (event instanceof TouchEvent)
        console.log(event.touches[0].clientX);
}
// document.documentElement.addEventListener('mousedown', exampleActive);
// document.documentElement.addEventListener('touchstart', exampleActive);
// Exemplo 02
function handleClick02(event) {
    if (event.currentTarget instanceof HTMLElement)
        console.log(event.currentTarget.innerHTML);
}
// button?.addEventListener('click', handleClick02);
// Exercise
const btnMenu = document.getElementById('btn-menu');
const menu = document.querySelector('nav');
function activeMenu() {
    menu?.classList.toggle('__active-menu');
}
function handleActiveMenu(event) {
    const contentElement = event.currentTarget;
    activeMenu();
}
btnMenu?.addEventListener('pointerdown', handleActiveMenu);
