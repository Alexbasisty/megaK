const goodMoodBtn = document.querySelector('.good-mood');
const badMoodBtn = document.querySelector('.bad-mood');

const goodMoodInfo = document.querySelector('.good-mood-info');
const badMoodInfo = document.querySelector('.bad-mood-info');

const mood = localStorage.getItem('mood');

if(!mood) {
    const mood = {
        goodMoodCounter: 0,
        badMoodCounter: 0,
    }

    localStorage.setItem('mood', JSON.stringify(mood))
}

let { goodMoodCounter, badMoodCounter } = JSON.parse(localStorage.getItem('mood'));

goodMoodInfo.innerText = goodMoodCounter;
badMoodInfo.innerText = badMoodCounter;


goodMoodBtn.addEventListener('click', () => {
    goodMoodInfo.innerText = ++goodMoodCounter;

    const mood = {
        goodMoodCounter,
        badMoodCounter,
    }

    localStorage.setItem('mood', JSON.stringify(mood));
});

badMoodBtn.addEventListener('click', () => {
    badMoodInfo.innerText = ++badMoodCounter;
    
    const mood = {
        goodMoodCounter,
        badMoodCounter,
    }

    console.log(badMoodCounter);

    localStorage.setItem('mood', JSON.stringify(mood));
});

const addBtn = document.querySelector('.add');
const showNum = document.querySelector('.numb');

addBtn.addEventListener('click', () => {
    const arr = JSON.parse(localStorage.getItem('arr')) || [];
    const num = Number(prompt('Podaj liczbe!'));
    let res = 0;

    arr.push(num);

    console.log(arr);

    localStorage.setItem('arr', JSON.stringify(arr));

    arr.forEach(elem => {
        res += elem;
    });


    console.log(res);
    showNum.innerText = res;
});
