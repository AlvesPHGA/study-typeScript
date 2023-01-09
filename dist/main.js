import fetchDataAPI from './modules/fetch.js';
import normalizeTransition from './modules/normalizeTransition.js';
async function handleDataAPI() {
    const data = await fetchDataAPI('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transitions = data.map(normalizeTransition);
    console.log(typeof transitions);
    templateAPP(transitions);
}
function templateAPP(datas) {
    const tbody = document.querySelector('#tbody');
    if (!tbody)
        return;
    datas.forEach(({ id, name, email, coin, formPaiment, status }) => {
        tbody.innerHTML += `
         <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>R$ ${coin}</td>
            <td>${formPaiment}</td>
            <td>${status}</td>
         </tr>
      `;
    });
}
handleDataAPI();
//# sourceMappingURL=main.js.map