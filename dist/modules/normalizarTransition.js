export default function normalizeTransition(trans) {
    return {
        id: trans.ID,
        name: trans.Nome,
        date: trans.Data,
        status: trans.Status,
        email: trans.Email,
        coin: trans['Valor (R$)'],
        value: 0,
        payment: trans['Forma de Pagamento'],
        newClient: Boolean(trans['Cliente Novo']),
    };
}
//# sourceMappingURL=normalizarTransition.js.map