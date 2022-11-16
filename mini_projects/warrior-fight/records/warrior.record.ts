import { ValidationError } from "../utils/error";
import { v4 as uuid } from 'uuid';

export class WarriorRecord {
    public id?: string;
    public readonly name: string;
    public readonly power: number;
    public readonly defence: number;
    public readonly stamina: number;
    public readonly agility: number;
    public wins?: number;

    constructor(obj: WarriorRecord) {
        const {id, name, power, defence, stamina, agility, wins} = obj;

        const sum = [power, defence, stamina, agility, wins].reduce((prev, curr) => prev + curr, 0);
        if(sum !== 10) {
            throw new ValidationError(`Suma statystyk musi być 10, aktualnie jest to ${sum}`);
        }

        if(name.length < 3 && name.length > 50) {
            throw new ValidationError(`Imię musi posiadać od 3 do 50 znaków, aktualnie jest to ${name.length}`);
        }

        this.id = id;
        this.name = name;
        this.power = power;
        this.defence = defence;
        this.stamina = stamina;
        this.agility = agility;
        this.wins = wins;
    }

    async insert(): Promise<string> {
        if(!this.id) {
            this.id = uuid();
        }
    }

    async update(): Promise<void> {

    }

    static async getOne(id: string): Promise<WarriorRecord | null> {}

    static async listAll(): Promise<WarriorRecord[]> {}

    static async getTop(topCount: number): Promise<WarriorRecord[]> {}

}