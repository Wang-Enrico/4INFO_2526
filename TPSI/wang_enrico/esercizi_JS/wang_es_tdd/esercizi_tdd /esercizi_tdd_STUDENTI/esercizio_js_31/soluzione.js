export const trovaParole = (frase) => {
    return frase.includes("coding") || frase.includes("creativo") ? frase : "parole non trovate";
};