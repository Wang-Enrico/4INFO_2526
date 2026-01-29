export const tronca = (s, n) => {
    //INSERISCI QUI IL TUO CODICE
    return s.length < n ? s : s.slice(0, n) + '...';
};