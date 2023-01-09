import fetchDataAPI from './modules/fetch.js';
import normalizeTransition from './modules/normalizeTransition.js';
import Statistic from './modules/Statistic.js';
async function handleDataAPI() {
    const data = await fetchDataAPI('https://api.origamid.dev/json/transacoes.json');
    if (!data)
        return;
    const transitions = data.map(normalizeTransition);
    console.log(typeof transitions);
    templateStatistic(transitions);
    templateTableInfo(transitions);
}
function fillList(list, countainer) {
    const resList = document.querySelector(countainer);
    if (resList) {
        Object.keys(list).forEach((key) => {
            resList.innerHTML += `<p>${key}: ${list[key]}</p>`;
        });
    }
}
function templateStatistic(datas) {
    const transition = new Statistic(datas);
    fillList(transition.payment, '.payment');
    fillList(transition.status, '.status');
    const resTotal = document.querySelector('.statistic__total span');
    if (resTotal)
        resTotal.innerText = transition.total.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });
}
function templateTableInfo(datas) {
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