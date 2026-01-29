export const capitalize_all = (str) => {
   //INSERISCI QUI IL TUO CODICE
   return str.split(' ').map(word => {
         return word.charAt(0).toUpperCase() + word.slice(1);
   }).join(' ');  
}