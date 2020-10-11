import { Item } from './Item';

export class Weapon extends Item {
    static MODIFIER_CHANGE_RATE: number = 10;

    protected baseDamage: number = 1;
    private readonly baseDurability: number;
    private effectiveDurability: number;
    protected damageModifier: number;
    private durabilityModifier: number;
    private damage: number;
    private usedWeaponDurability: number;

    constructor(name, damage, durability, value, weight) {
        super(name, value, weight);
        this.baseDurability = durability;
        this.baseDamage = damage;
    }
    compareTo(other: Item): number {
        return super.compareTo(other);
    }
    toString(): string {
        // console.log(super.toString().concat(`, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`));
        return super.toString().concat(`, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}%`);
    }
    setDamageModifier(modifier): number {
        return this.damageModifier = modifier;
    }
    getDamage(): number {
        this.setDamageModifier(.05);
        this.damage = this.baseDamage + this.damageModifier;
        return parseFloat(this.damage.toFixed(2));
    }
    setDurabilityModifier(modifier): number {
        return this.durabilityModifier = modifier;
    }
    getDurability(): number {
        this.setDurabilityModifier(.05);
        this.effectiveDurability = (this.baseDurability + this.durabilityModifier) * 100;
        return this.effectiveDurability;
    }
    use(): string {
        const DFLT_MESSAGE: string = `You use the ${this.name}, dealing ${this.getDamage()} points of damage.`;
        const BRKS_MESSAGE: string = 'The hammer breaks';
        const BRKN_MESSAGE: string = 'You can\'t use the hammer, it is broken.';
        let usedWeaponDurability = this.usedWeaponDurability || parseFloat((this.getDurability() - Weapon.MODIFIER_CHANGE_RATE).toFixed(2));

        if (usedWeaponDurability <= 0) {
            console.log('You can\'t use the hammer, it is broken.');
            return BRKN_MESSAGE;
        }

        let durabilityDecrement = function() {
            return function() {
                return usedWeaponDurability -= Weapon.MODIFIER_CHANGE_RATE;
            }
        }
        let callDecrement = durabilityDecrement();
        this.usedWeaponDurability = callDecrement();

        if (usedWeaponDurability >= 0) {
            console.log(DFLT_MESSAGE);
            return DFLT_MESSAGE;
        } else {
            console.log(`${DFLT_MESSAGE}\n${BRKS_MESSAGE}.`);
            return `${DFLT_MESSAGE}\n${BRKS_MESSAGE}.`;
        }
    }
}
