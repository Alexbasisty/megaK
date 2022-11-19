import { WarriorRecord } from "../records/warrior.record";

export const fight = (warrior1: WarriorRecord, warrior2: WarriorRecord): {
    log: string[];
    winner: WarriorRecord;
} => {
    const log: string[] = [];

    const warrior1Obj = {
        hp: warrior1.stamina * 10,
        dp: warrior1.defence,
        warrior: warrior1,
    };

    const warrior2Obj = {
        hp: warrior2.stamina * 10,
        dp: warrior2.defence,
        warrior: warrior2,
    };

    let atacker = warrior1Obj;
    let defender = warrior2Obj;

    do {
        const atackStrengh = atacker.warrior.power;

        log.push(`${atacker.warrior.name} atakuje ${defender.warrior.name} silą ${atackStrengh}.`);

        if(defender.dp + defender.warrior.agility > atackStrengh) {
            log.push(`${defender.warrior.name} broni się przed ${atacker.warrior.name}.`);

            defender.dp -= atackStrengh;

            if(defender.dp < 0) {
                log.push(`${atacker.warrior.name} przełamał obronę ${defender.warrior.name} zadając mu ${-defender.dp} obrażeń.`);

                defender.hp += defender.dp
            }
        } else {
            log.push(`${atacker.warrior.name} zadał ${atackStrengh} obrażeń ${defender.warrior.name}.`);

            defender.hp -= atackStrengh;
        }

        [defender, atacker] = [atacker, defender];
    } while (defender.hp > 0);

    const winner = defender.warrior;

    log.push(`${winner.name} zwyciężył`);

    return {
        log,
        winner,
    };
}