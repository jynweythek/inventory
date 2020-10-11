import { Weapon } from './Weapon';

export default class Bow extends Weapon {
    public name: string;
    private durabilityModifier: number;

    constructor(name, damage, durability, value, weight) {
        super(name, damage, durability, value, weight);
        this.name = name;
    }

    polish() {

    }
}
