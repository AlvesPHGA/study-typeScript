// Instaceof
const origamidLink = document.getElementById('origamid');

if (origamidLink instanceof HTMLAnchorElement) {
   origamidLink.href = origamidLink.href.replace('http://', 'https://');
}

// Interfaces do DOM
const components = document.querySelectorAll('.link');

function changeColorFont(element: HTMLElement) {
   if (element instanceof HTMLAnchorElement) element.style.color = 'red';

   if (element instanceof HTMLButtonElement) {
      element.style.borderColor = 'blue';
      element.style.color = 'blue';
   }
}

components.forEach((component) => {
   if (component instanceof HTMLElement) changeColorFont(component);
});
