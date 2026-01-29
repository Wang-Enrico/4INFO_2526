export const special_concat = (str1, str2) => {
   //INSERISCI QUI IL TUO CODICE
   return str1.includes(' ') || str2.includes(' ') || str1 == '' || str2 == '' ? 'parole non adatte' : `${str2.slice(0,2) + str1.slice(2) + str1.slice(0,2) + str2.slice(2)}`
};