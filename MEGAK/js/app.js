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

