export const invert_case = (str) => {
   //INSERISCI QUI IL TUO CODICE
   let result = "";
   for (let i = 0; i < str.length; i++) {
       let char = str[i];
       if (char >= 'A' && char <= 'Z') {
           result += char.toLowerCase();
       } else if (char >= 'a' && char <= 'z') {
           result += char.toUpperCase();
       } else {
           result += char;
       }
   }
   return result;
};