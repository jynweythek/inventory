import { Weapon } from './Weapon';

export default class Sword extends Weapon {
    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
    }

    private damageIncrement = function(polishedDamageModifier: number) {
        return function() {
            return polishedDamageModifier += Weapon.MODIFIER_CHANGE_RATE;
        };
    };

    polish() {
        let polishedDamageModifier = this.damageModifier;

        if (polishedDamageModifier + Weapon.MODIFIER_CHANGE_RATE <= this.damage / 4) {
            let callIncrement = this.damageIncrement(polishedDamageModifier);
            return this.setDamageModifier(callIncrement());
        } else {
            return false;
        }
    }
}
