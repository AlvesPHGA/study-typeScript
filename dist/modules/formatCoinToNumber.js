export default function formatCoinToNumber(coin) {
    const number = Number(coin.replaceAll('.', '').replace(',', '.'));
    return isNaN(number) ? null : number;
}
//# sourceMappingURL=formatCoinToNumber.js.map