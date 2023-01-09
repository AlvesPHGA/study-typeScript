export default function formatDate(date) {
    const [itemDate, itemHours] = date.split(' ');
    const [day, month, year] = itemDate.split('/').map(Number);
    const [hour, minute] = itemHours.split(':').map(Number);
    return new Date(year, month - 1, day, hour, minute);
}
//# sourceMappingURL=formatDate.js.map