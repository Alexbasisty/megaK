/* eslint-disable no-unused-vars */
/*
 Zadanie 1,  + - * /
*/

const calc = (num1, num2) => {
  if (typeof num1 !== "number" && typeof num2 !== "number") {
    console.log("Błędne padane liczby!");
  } else {
    const add = num1 + num2;
    const substract = num1 - num2;
    const multiply = num1 * num2;
    const devide = num1 / num2;

    console.log(`
            Wyniki dla numerów ${num1} i ${num2} to:
            Dodawanie: ${add},
            Odejmowanie: ${substract},
            Mnożenie: ${multiply},
            Dzielenie: ${devide},
        `);
  }
};

// const numA = Number(prompt('Podaj pierwszą liczbę'));
// const numB = Number(prompt('Podaj drugą liczbę'));

// calc(numA, numB);

/*
 Zadanie 2
*/

const odd = (num) => num;
const even = (num) => num * 2;

const checkNumber = (num) => {
  // eslint-disable-next-line use-isnan
  if (typeof num !== "number" || num == NaN) {
    console.log("Liczba nie jest numerem");
    return;
  }
  if (num % 2 === 0) {
    return even(num);
  } else {
    return odd(num);
  }
};

const number = Number(prompt("Podaj liczbę"));

console.log(checkNumber(number));

