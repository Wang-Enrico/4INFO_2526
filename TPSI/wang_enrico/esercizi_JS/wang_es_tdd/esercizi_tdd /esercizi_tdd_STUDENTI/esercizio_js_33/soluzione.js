export const concatenateN = (s, n) => {
   //INSERISCI QUI IL TUO CODICE
   return n != 0 ? s.concat(s.repeat(n - 1)) : ''
};