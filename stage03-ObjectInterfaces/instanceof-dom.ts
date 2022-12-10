const links = document.querySelectorAll('.link');

function aviso() {
   alert('Hello world!');
}

function changeColor(element: HTMLAnchorElement) {
   element.style.color = 'red';
}

links.forEach((item) => {
   if (item instanceof HTMLAnchorElement) changeColor(item);

   if (item instanceof HTMLButtonElement) item.addEventListener('click', aviso);
});
