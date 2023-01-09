import formatCoinToNumber from './formatCoinToNumber.js';
import formatDate from './formatDate.js';
export default function normalizeTransition(trans) {
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
//# sourceMappingURL=normalizeTransition.js.map