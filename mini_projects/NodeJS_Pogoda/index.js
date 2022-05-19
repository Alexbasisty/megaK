const fetch = require('node-fetch');

const url = 'https://danepubliczne.imgw.pl/api/data/synop';

const cityName = process.argv[2];

const processWeatherData = (data) => {
    const station = data.find((stationData) => stationData.stacja === cityName);

    if (!station) {
        return console.log('Takiego miasta nasze API nie przewidziało :(');
    }

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature,
    } = station;

    const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa.`;

    return console.log(weatherInfo);
};

fetch(url)
    .then((r) => r.json())
    .then(processWeatherData);
