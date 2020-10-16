import { Weapon } from './Weapon';

export default class Sword extends Weapon {
    public name: string;
    protected damageModifier: number;
    public damage: number;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
        this.name = name;
        this.baseDamage = damage;
    }

    setDamageModifier(modifier: number): number {
        return this.damageModifier = modifier;
    }

    getDamage(): number {
        this.setDamageModifier(this.damageModifier);
        this.damage = this.baseDamage + this.damageModifier;
        return parseFloat(this.damage.toFixed(2));
    }

    polish() {
        let polishedDamageModifier = this.damageModifier || parseFloat((this.getDamage() + Weapon.MODIFIER_CHANGE_RATE).toFixed(2));

        if (polishedDamageModifier <= this.baseDamage / 4) {
            let durabilityDecrement = function() {
                return function() {
                    return polishedDamageModifier += Weapon.MODIFIER_CHANGE_RATE;
                };
            };
            let callIncrement = durabilityDecrement();
            this.setDamageModifier(callIncrement());
        } else {
            return;
        }
    }
}
