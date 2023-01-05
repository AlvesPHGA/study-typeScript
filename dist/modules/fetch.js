export default async function fetchDataAPI(url) {
    try {
        const res = await fetch(url);
        if (!res.ok)
            throw new Error(`Houve algo de errado - ${res.status}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error);
        }
        return null;
    }
}
//# sourceMappingURL=fetch.js.map