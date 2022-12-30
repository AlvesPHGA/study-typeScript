"use strict";
// Instaceof
const origamidLink = document.getElementById('origamid');
if (origamidLink instanceof HTMLAnchorElement) {
    origamidLink.href = origamidLink.href.replace('http://', 'https://');
}
// Interfaces do DOM
const components = document.querySelectorAll('.link');
function changeColorFont(element) {
    if (element instanceof HTMLAnchorElement)
        element.style.color = 'red';
    if (element instanceof HTMLButtonElement) {
        element.style.borderColor = 'blue';
        element.style.color = 'blue';
    }
}
components.forEach((component) => {
    if (component instanceof HTMLElement)
        changeColorFont(component);
});
// events & callbacks
const buttonEventsCallbacks = document.getElementById('buttonMenu');
const menuEventsCallbacks = document.querySelector('.eventsCallbacks__nav');
// function activeMenuEventsCallbacks() {
//    if (menuEventsCallbacks)
//       menuEventsCallbacks.classList.toggle('eventsCallbacks--active__menu');
// }
function handleEvent(event) {
    const btn = event.currentTarget;
    if (btn instanceof HTMLElement && menuEventsCallbacks) {
        const active = menuEventsCallbacks.classList.contains('eventsCallbacks--active__menu');
        if (active) {
            menuEventsCallbacks.classList.remove('eventsCallbacks--active__menu');
            btn.setAttribute('aria-expanded', 'false');
            btn.setAttribute('aria-label', 'Abrir Menu');
        }
        else {
            menuEventsCallbacks.classList.add('eventsCallbacks--active__menu');
            btn.setAttribute('aria-expanded', 'true');
            btn.setAttribute('aria-label', 'Fechar Menu');
        }
    }
}
buttonEventsCallbacks?.addEventListener('pointerdown', handleEvent);
// Generics
const contentGenerics = document.querySelector('.generics__contents');
async function fetchProduct_G(url) {
    const res = await fetch(url);
    return await res.json();
}
async function handleGenerics() {
    const data = await fetchProduct_G('https://api.origamid.dev/json/notebook.json');
    if (contentGenerics)
        contentGenerics.innerHTML = `
      <p>${data.nome}</p>
      <p>${data.preco}</p>
      <p>${data.descricao}</p>
   `;
}
handleGenerics();
