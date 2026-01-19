const inputColonne = document.getElementById("colonne");
const btnGenera = document.getElementById("genera");
const tabella = document.getElementById("pitagorica");

const inputNumero = document.getElementById("numero");
const btnMultipli = document.getElementById("multipli");
const btnDivisori = document.getElementById("divisori");

// CREA LA TAVOLA PITAGORICA
btnGenera.addEventListener("click", generaTabella);
btnMultipli.addEventListener("click", evidenziaMultipli);
btnDivisori.addEventListener("click", evidenziaDivisori);

function generaTabella() {
const n = parseInt(inputColonne.value);

if (inputColonne.value === "" || n < 4 || n > 12) {
alert("Inserisci un numero valido tra 4 e 12!");
return;
}



// Prima riga (intestazioni colonne)
const trIntestazione = document.createElement("tr");
const tdVuoto = document.createElement("td");
trIntestazione.appendChild(tdVuoto);

for (let i = 1; i <= n; i++) {
const td = document.createElement("td");
td.textContent = i;
td.classList.add("header");
trIntestazione.appendChild(td);
}

tabella.appendChild(trIntestazione);

// Righe successive
for (let i = 1; i <= n; i++) {
const tr = document.createElement("tr");

const tdHeader = document.createElement("td");
tdHeader.textContent = i;
tdHeader.classList.add("header");
tr.appendChild(tdHeader);

for (let j = 1; j <= n; j++) {
const td = document.createElement("td");
td.textContent = i * j;
tr.appendChild(td);
}

tabella.appendChild(tr);
}
}

function evidenziaMultipli() {
const num = parseInt(inputNumero.value);

if (inputNumero.value === "" || num <= 0) {
alert("Inserisci un numero maggiore di 0!");
return;
}

resetColori();
//multipli
const celle = tabella.getElementsByTagName("td");
for (let i = 0; i < celle.length; i++) {
const val = parseInt(celle[i].textContent);
if (val % num === 0) {
celle[i].classList.add("multiplo");
}
}
}

function evidenziaDivisori() {
const num = parseInt(inputNumero.value);

if (inputNumero.value === "" || num <= 0) {
alert("Inserisci un numero maggiore di 0!");
return;
}

resetColori();
//divisori del numero
const celle = tabella.getElementsByTagName("td");
for (let i = 0; i < celle.length; i++) {
const val = parseInt(celle[i].textContent);
if (num % val === 0) {
celle[i].classList.add("divisore");
}
}
}

function resetColori() {
const celle = tabella.getElementsByTagName("td");
for (let i = 0; i < celle.length; i++) {
celle[i].classList.remove("multiplo");
celle[i].classList.remove("divisore");
}
}