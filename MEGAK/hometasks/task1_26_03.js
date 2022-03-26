/*
    Prosta isnstrukcja warunkowa
*/
const name = prompt('Jak się nazywasz?');
const surname = prompt('Nazwisko, poproszę');
const age = Number(prompt('Podaj swój wiek'));

if (age >= 18) {
    console.log(`${name} ${surname}`);
}