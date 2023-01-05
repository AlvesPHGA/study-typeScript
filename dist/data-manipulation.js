"use strict";
const tbody = document.querySelector('#tbody');
async function fetchInfo() {
    const res = await fetch('https://api.origamid.dev/json/transacoes.json');
    const data = await res.json();
    handleGetData(data);
}
fetchInfo();
async function handleGetData(data) {
    data.forEach((item) => {
        console.log(item.length);
    });
}
//# sourceMappingURL=data-manipulation.js.map