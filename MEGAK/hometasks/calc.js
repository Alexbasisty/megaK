class Calc {
    constructor () {
        this.a = Number(prompt('Podaj pierwszą liczbę'));
        this.b = Number(prompt('Podaj drugą liczbę'));

        if (Number.isNaN(this.a) || Number.isNaN(this.b)) {
            throw new Error('Not a number!')
        } else {
            try {
                this.showResults();                
            } catch (error) {
                console.log(error);
            } finally {
                console.log('Koniec!');
            }
        }

    }

    add() {
        return this.a + this.b;
    }

    devide() {
        if(this.b === 0) {
            throw new Error('Nie można dzielić na 0');
        } else {
            return this.a / this.b;
        }
    }

    subtract() {
        return this.a - this.b;
    }

    multiply() {
        return this.a * this.b;
    }

    showResults() {
        let devideResult = 0;
        try {
            devideResult = this.devide();
        } catch (error) {
            devideResult = error;
        }
        
        console.log(`
            Wyniki działania ${this.a} i ${this.b} to:
            - mnożenie: ${this.multiply()},
            - dziełenie: ${devideResult},
            - dodawanie: ${this.add()},
            - odejmowanie: ${this.subtract()}
        `);
    }
}

const calc = new Calc();