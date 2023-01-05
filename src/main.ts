import fetchDataAPI from './modules/fetch.js';

type StatusPag = 'Paga' | 'Recusada pela operadora de cartão';
type FormaPag = 'Cartão de Credito' | 'Boleto';

interface InfoDatas {
   ID: number;
   Nome: string;
   Status: StatusPag;
   Email: string;
   ['Valor (R$)']: string;
   ['Forma de Pagamento']: FormaPag;
   ['Cliente Novo']: number;
}

function tamplate(datas: InfoDatas) {
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
   const data = await fetchDataAPI<InfoDatas[]>(
      'https://api.origamid.dev/json/transacoes.json',
   );

   if (data) {
      data.forEach((item) => {
         tamplate(item);
      });
   }
}

handleDataAPI();
