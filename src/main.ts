import { CountList } from './modules/countBy.js';
import fetchDataAPI from './modules/fetch.js';
import normalizeTransition from './modules/normalizeTransition.js';
import Statistic from './modules/Statistic.js';

async function handleDataAPI() {
   const data = await fetchDataAPI<InfoDatas[]>(
      'https://api.origamid.dev/json/transacoes.json',
   );

   if (!data) return;

   const transitions = data.map(normalizeTransition);
   console.log(typeof transitions);

   templateStatistic(transitions);
   templateTableInfo(transitions);
}

function fillList(list: CountList, countainer: string) {
   const resList = document.querySelector(countainer);

   if (resList) {
      Object.keys(list).forEach((key) => {
         resList.innerHTML += `<p>${key}: ${list[key]}</p>`;
      });
   }
}

function templateStatistic(datas: Transition[]): void {
   const transition = new Statistic(datas);

   fillList(transition.payment, '.payment');
   fillList(transition.status, '.status');

   const resTotal = document.querySelector<HTMLElement>(
      '.statistic__total span',
   );

   if (resTotal)
      resTotal.innerText = transition.total.toLocaleString('pt-BR', {
         style: 'currency',
         currency: 'BRL',
      });

   const dayBest = document.querySelector<HTMLElement>('.dayBest span');
   if (dayBest) dayBest.innerText = transition.dayBest[0];
}

function templateTableInfo(datas: Transition[]): void {
   const tbody = document.querySelector('#tbody');

   if (!tbody) return;

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
