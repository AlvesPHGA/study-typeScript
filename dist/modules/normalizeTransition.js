import formatCoinToNumber from './formatCoinToNumber.js';
export default function normalizeTransition(trans) {
    return {
        id: trans.ID,
        name: trans.Nome,
        date: trans.Data,
        status: trans.Status,
        email: trans.Email,
        coin: formatCoinToNumber(trans['Valor (R$)']),
        value: 0,
        formPaiment: trans['Forma de Pagamento'],
        newClient: Boolean(trans['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizeTransition.js.map