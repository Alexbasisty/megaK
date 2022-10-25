class Test {
    constructor(public userName: string, public userGender: string) {}

    get name(): string {
        return this.userName;
    }

    set name(newName: string) {
        if (!['Bartek', 'Kuba'].includes(newName)) {
            throw new Error('Imię może być Bartek lub Kuba!')
        }

        this.userName = newName;
    }
}

