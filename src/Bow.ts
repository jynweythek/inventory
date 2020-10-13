import { Weapon } from './Weapon';

export default class Bow extends Weapon {
    public name: string;
    protected durabilityModifier: number;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
        this.name = name;
        // this.durabilityModifier =
    }

    polish() {

    }
}
