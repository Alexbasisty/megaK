class ChildRecord {
    static listAll() {
        return [
            {
                id: 'cdsa',
                name: 'Ania',
                gift: 'Domek dla lalek',
            },
            {
                id: 'abcd',
                name: 'Piotrek',
                gift: 'Samochodzik',
            }
        ];
    }
}

module.exports = {
    ChildRecord,
}