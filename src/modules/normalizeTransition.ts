import formatCoinToNumber from './formatCoinToNumber.js';
import formatDate from './formatDate.js';

export {};

declare global {
   type StatusPaiment =
      | 'Paga'
      | 'Recusada pela operadora de cartão'
      | 'Aguardando pagamento'
      | 'Estornado';

   type FormPaiment = 'Cartão de Credito' | 'Boleto';

   interface InfoDatas {
      ID: number;
      Nome: string;
      Data: string;
      Status: StatusPaiment;
      Email: string;
      ['Valor (R$)']: string;
      ['Forma de Pagamento']: FormPaiment;
      ['Cliente Novo']: number;
   }

   interface Transition {
      id: number;
      name: string;
      date: string;
      status: StatusPaiment;
      email: string;
      coin: string;
      value: number | null;
      formPaiment: FormPaiment;
      newClient: boolean;
   }
}

export default function normalizeTransition(trans: InfoDatas) {
   return {
      id: trans.ID,
      name: trans.Nome,
      date: formatDate(trans.Data),
      status: trans.Status,
      email: trans.Email,
      coin: trans['Valor (R$)'],
      value: formatCoinToNumber(trans['Valor (R$)']),
      formPaiment: trans['Forma de Pagamento'],
      newClient: Boolean(trans['Cliente Novo']),
   };
}
