const fetch = require('node-fetch');

const url = 'https://danepubliczne.imgw.pl/api/data/synop';

const processWeatherData = async (data) => {
    const sorted = [...data].sort((a, b) => b.temperatura - a.temperatura);

    sorted.forEach((city) => {
        const {
            stacja: station,
            temperatura: temperature,
        } = city;

        console.log(station, temperature);
    });
};

const findTheWarmestPlace = async () => {
    try {
        const res = await fetch(url);

        const data = await res.json();
        await processWeatherData(data);
    } catch (err) {
        console.log(err, 'Error has occured!');
    }
};

findTheWarmestPlace();
