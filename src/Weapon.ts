import { Item } from './Item';

export class Weapon extends Item {
    MODIFIER_CHANGE_RATE: number = .1

    private baseDamage: number = 1;
    private baseDurability: number;
    private effectiveDurability: number;
    damageModifier: number;
    durabilityModifier: number;
    damage: number;

    constructor(name, damage, durability, value, weight) {
        super(name, value, weight);
    }
    compareTo(other: Item): number {
        return super.compareTo(other);
    }
    toString(): string {
        return super.toString().concat(`Durability: ${this.getDurability() * 100}%`);
    }
    setDamageModifier(modifier): number {
        return this.damageModifier = this.baseDamage + modifier;
    }
    getDamage(): number {
        return this.damage = this.baseDamage + this.damageModifier;
    }
    setDurabilityModifier(modifier): number {
        return this.durabilityModifier = this.baseDurability + modifier;
    }
    getDurability(): number {
        this.effectiveDurability = this.baseDurability + this.durabilityModifier;
        return this.effectiveDurability;
    }
    use(): string {
        this.effectiveDurability -= this.MODIFIER_CHANGE_RATE;
        if (this.effectiveDurability <= 0) {

        }
        return `You use the ${this.name}, dealing ${this.getDurability() * 100} points of damage.`;
    }
}
