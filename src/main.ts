import fetchDataAPI from './modules/fetch.js';
import normalizeTransition from './modules/normalizeTransition.js';

async function handleDataAPI() {
   const data = await fetchDataAPI<InfoDatas[]>(
      'https://api.origamid.dev/json/transacoes.json',
   );

   if (!data) return;

   const transitions = data.map(normalizeTransition);
   console.log(transitions);
}

handleDataAPI();
