import { Weapon } from './Weapon';

export default class Sword extends Weapon {
    public name: string;
    protected damageModifier: number;
    public damage: number;
    // private polishedDamageModifier: number;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
        this.name = name;
        this.baseDamage = damage;
    }
    setDamageModifier(modifier: number): number {
        // console.log(modifier);
        return this.damageModifier = modifier;
    }
    getDamage(): number {
        this.setDamageModifier(this.damageModifier);
        this.damage = this.baseDamage + this.damageModifier;
        // console.log('this.damage', this.damage);
        return parseFloat(this.damage.toFixed(2));
    }
    polish() {
        let polishedDamageModifier = this.damageModifier || parseFloat((this.getDamage() + Weapon.MODIFIER_CHANGE_RATE).toFixed(2));
        // console.log('this.damageModifier', this.damageModifier);
        // console.log('this.getDamage()', this.getDamage());
        // console.log('polishedDamageModifier', polishedDamageModifier);

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
