const goodMoodBtn = document.querySelector('.good-mood');
const badMoodBtn = document.querySelector('.bad-mood');

const goodMoodInfo = document.querySelector('.good-mood-info');
const badMoodInfo = document.querySelector('.bad-mood-info');

// const moodStorage = localStorage.getItem('mood');

// let { goodMoodCounter, badMoodCounter } = JSON.parse(moodStorage);

// const mood = {
//     goodMoodCounter,
//     badMoodCounter,
// }

let goodMoodCounter = Number(localStorage.getItem('goodMood'));
let badMoodCounter = Number(localStorage.getItem('badMood'));
goodMoodInfo.innerText = goodMoodCounter;
badMoodInfo.innerText = badMoodCounter;


goodMoodBtn.addEventListener('click', () => {
    goodMoodInfo.innerText = ++goodMoodCounter;

    localStorage.setItem('goodMood', String(goodMoodCounter));
});

badMoodBtn.addEventListener('click', () => {
    badMoodInfo.innerText = ++badMoodCounter;
    localStorage.setItem('badMood', String(badMoodCounter));
});

