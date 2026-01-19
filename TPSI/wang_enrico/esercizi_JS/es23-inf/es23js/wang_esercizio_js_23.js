export const abbreviazione = (str) => {
    if (!str || typeof str !== "string") alert("Riempi campi");

    const words = str.trim().split(" ");
    if (words.length < 2) return "";

    const nome = words[0].toUpperCase() + words[0].slice(1).toLowerCase();
    const cognome = words[1].toUpperCase();

    return `${nome} ${cognome}.`;
};
const input = "Antonio Mancuso";
console.log(abbreviazione(input)); 