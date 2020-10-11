import { Weapon } from './Weapon';

export default class Sword extends Weapon {
    public name: string;
    protected damageModifier: number;

    constructor(name, damage, durability, value, weight) {
        super(name, damage, durability, value, weight);
        this.name = name;
        this.baseDamage = damage;
    }

    polish() {
        let polishedDamage = this.damageModifier || parseFloat((this.getDurability() - Weapon.MODIFIER_CHANGE_RATE).toFixed(2));

        if (polishedDamage >= this.baseDamage / 4) {
            return
        }

        let durabilityDecrement = function() {
            return function() {
                return polishedDamage -= Weapon.MODIFIER_CHANGE_RATE;
            }
        }
        let callIncrement = durabilityDecrement();
        this.damageModifier = callIncrement();
    }
}
