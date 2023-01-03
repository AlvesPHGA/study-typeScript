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
// functions
const contentFunction = document.querySelector('.functions__content');
function template(result) {
    if (contentFunction)
        contentFunction.innerHTML += `
      ${result}
   `;
}
function handleNumberString_F(data) {
    let result;
    if (typeof data === 'number') {
        result = Math.ceil(data);
        template(result);
    }
    else {
        result = Math.ceil(Number(data));
        template(result);
    }
    return result;
}
handleNumberString_F('12.5');
handleNumberString_F(123.9);
// Type Guards
const contentTG = document.querySelector('.typeGuard .content');
async function fetch_TG() {
    const res = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await res.json();
    handleData_TG(data);
}
fetch_TG();
function isInfoCourse_TG(value) {
    if (value &&
        typeof value === 'object' &&
        'nome' in value &&
        'horas' in value &&
        'tags' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleData_TG(value) {
    if (Array.isArray(value)) {
        value.filter(isInfoCourse_TG).forEach((course) => {
            if (contentTG)
                contentTG.innerHTML += `
        <h3 class="content__name">${course.nome}</h3>
        <ul class="listInfo">
           <li class="listInfo__item">
              <span class="listInfo__label">Horas: </span>${course.horas}
           </li>
           <li class="listInfo__item">
              <span class="listInfo__label">Tags: </span>${course.tags.join(', ')}
           </li>
        </ul>
        `;
        });
    }
}
window.UserData = {};
const form_FE = document.querySelector('.form');
const input_FE = form_FE?.querySelectorAll('input');
function isTG(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('name' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function validJSON(str) {
    try {
        JSON.parse(str);
    }
    catch (error) {
        return false;
    }
    return true;
}
function loadLocalStorage_FE() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const userData = JSON.parse(localUserData);
        if (isTG(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
function handleForm({ target }) {
    if (target instanceof HTMLInputElement)
        window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
}
form_FE?.addEventListener('keyup', handleForm);
