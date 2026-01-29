export const tronca_parola = (s, pos) => {

   return s.split(' ').slice(0, pos).join(' ');
};