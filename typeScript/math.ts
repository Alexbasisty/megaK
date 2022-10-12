// enum TwoNumbersSign {
//     Add,
//     Subtract,
//     Multiply,
//     Devide,
// }

// interface TwoNumbersOpaeration {
//     a: number | string;
//     b: number | string;
//     sign?: TwoNumbersSign;
// }

// enum OneNumberSign {
//     Inc,
//     Dec,
// }

// interface OneNumberOpaeration {
//     a: number | string;
//     sign?: OneNumberSign;
// }

// type CorrectType = TwoNumbersOpaeration | OneNumberOpaeration;

// const a: CorrectType = {
//   a: 1,
//   b: 2,
//   sign: TwoNumbersSign.Add,
// };

// const b: CorrectType = {
//   a: 1,
//   b: 2,
// };

// const c: CorrectType = {
//   a: '1',
//   b: '2',
//   sign: TwoNumbersSign.Subtract,
// };

// const d: CorrectType = {
//   a: 1,
//   sign: OneNumberSign.Dec,
// };

// function calc({a, b, sign}: TwoNumbersOpaeration) {
//     switch (sign) {
//         case TwoNumbersSign.Add:
//             console.log(Number(a) + Number(b));
//             break;
//         case TwoNumbersSign.Subtract:
//             console.log(Number(a) - Number(b));
//             break;
//         case TwoNumbersSign.Multiply:
//         console.log(Number(a) * Number(b));
//             break;
//         case TwoNumbersSign.Devide:
//             console.log(Number(a) / Number(b));
//             break;
    
//         default:
//             break;
//     }
// }
// calc(a);
// calc(c);