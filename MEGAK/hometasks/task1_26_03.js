/*
    Prosta isnstrukcja warunkowa
*/
// const name = prompt('Jak się nazywasz?');
// const surname = prompt('Nazwisko, poproszę');
// const age = Number(prompt('Podaj swój wiek'));

// if (age >= 18) {
//     console.log(`${name} ${surname}`);
// }

/* 
    Prosty kalkulator
*/

// const a = Number(prompt('Podaj liczbę a'));
// const b = Number(prompt('Podaj liczbę b'));
// const operator = prompt('Podaj operator działania');
// let result = 0;

// if (operator === '-') {
//     result = a - b;
//     console.log(`Twoj wynik - to ${result}`);
// } else if (operator === '*') {
//     result = a * b;
//     console.log(`Twoj wynik - to ${result}`);
// } else if (operator === '/') {
//     result = a / b;
//     console.log(`Twoj wynik - to ${result}`);
// } else if (operator === '+') {
//     result = a + b;
//     console.log(`Twoj wynik - to ${result}`);
// } else {
//     console.log('Podałeś nieprawidłowe dane');
// }

/*
 Metoda Show text
*/

const text = prompt('Napisz jakiś tekst')

for (let i = 0; i < text.length; i++) {
    if (i % 2 !== 0) {
        const letter = text[i].toLowerCase();
        console.log(letter);        
    } else {
        const letter = text[i].toUpperCase();
        console.log(letter);  
    }
}