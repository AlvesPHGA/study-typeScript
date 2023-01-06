/**
 *  Receive string 1.000,00 and return number 1000.00
 */

export default function formatCoinToNumber(coin: string): number | null {
   const number = Number(coin.replaceAll('.', '').replace(',', '.'));
   return isNaN(number) ? null : number;
}
