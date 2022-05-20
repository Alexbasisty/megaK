const fetch = require('node-fetch');
const { appendFile } = require('fs').promises;
const { normalize, resolve } = require('path');

const url = 'https://danepubliczne.imgw.pl/api/data/synop';

const safeJoin = (base, target) => {
    const targetPath = `.${normalize(`/${target}`)}`;
    return resolve(base, targetPath);
};

const getDataFileName = (city) => safeJoin('./data', `${city}.txt`);

const processWeatherData = async (data, cityName) => {
    const station = data.find((stationData) => stationData.stacja === cityName);

    if (!station) {
        throw new Error('There is no such city in our API :(');
    }

    const {
        cisnienie: pressure,
        wilgotnosc_wzgledna: humidity,
        temperatura: temperature,
    } = station;

    const weatherInfo = `In ${cityName} there is ${temperature}°C, ${humidity}% of humidity and pressure of ${pressure} hPa.`;
    console.log(weatherInfo);

    const dateString = new Date().toLocaleString();

    await appendFile(getDataFileName(cityName), `${dateString}\n${weatherInfo}\n`);
};

const checkCityWeather = async (cityName) => {
    try {
        const res = await fetch(url);

        const data = await res.json();
        await processWeatherData(data, cityName);
    } catch (err) {
        console.log(err, 'Error has occured!');
    }
};

checkCityWeather(process.argv[2]);
