export class Warrior {
    constructor(
        public _name: string, 
        public _hitPoints: number, 
        public _hp: number) { }
    
    get name(): string {
        return this._name;
    }
    get hitpoints(): number {
        return this._hitPoints;
    }
    get hp(): number {
        return this._hp;
    }
    set hp(value: number) {
        this._hp = value;
    }

    levelUp(): void {
      this._hitPoints *= 1.1;
      this._hp *= 1.1;
    }
}