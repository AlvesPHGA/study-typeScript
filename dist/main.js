import fetchDataAPI from './modules/fetch.js';
function tamplate(datas) {
    const tbody = document.querySelector('#tbody');
    if (tbody) {
        tbody.innerHTML += `
         <tr>
            <td>${datas.ID}</td>
            <td>${datas.Nome}</td>
            <td>${datas.Email}</td>
            <td>${datas['Valor (R$)']}</td>
            <td>${datas['Forma de Pagamento']}</td>
            <td>${datas.Status}</td>
         </tr>
      `;
    }
}
async function handleDataAPI() {
    const data = await fetchDataAPI('https://api.origamid.dev/json/transacoes.json');
    if (data) {
        data.forEach((item) => {
            tamplate(item);
        });
    }
}
handleDataAPI();
//# sourceMappingURL=main.js.map