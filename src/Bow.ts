import { Weapon } from './Weapon';

export default class Bow extends Weapon {
    private afterPolishDurabilityModifier: number | undefined;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
    }

    private durabilityModIncrement = function(afterPolishDurabilityModifier: number) {
        return function() {
            return parseFloat((afterPolishDurabilityModifier += Weapon.MODIFIER_CHANGE_RATE).toFixed(2));
        }
    }

    private getAfterPolishDurabilityModifier = () => {
        return this.afterPolishDurabilityModifier || this.durabilityModifier;
    }

    polish() {
        let afterPolishDurabilityModifier = this.damageModifier;

        if (afterPolishDurabilityModifier + this.durability >= 1) {
            return;
        }

        let callIncrement = this.durabilityModIncrement(afterPolishDurabilityModifier);
        this.afterPolishDurabilityModifier = this.durabilityModifier = callIncrement();
        this.setDurabilityModifier(afterPolishDurabilityModifier);
    }
}
