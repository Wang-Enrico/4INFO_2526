export const protect_email = (email) => {
   if (!email ) alert("Riempire campi");

   const [username, domain] = email.split("@");
   if (!username || !domain) return "";

   return `${username}.@${domain}`;
};
const input = "enrico.wang@istitutoagnelli.it";
console.log(abbreviazione(input)); 