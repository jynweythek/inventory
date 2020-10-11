import { Item } from './Item';

export class Weapon extends Item {
    public MODIFIER_CHANGE_RATE: number = .1;

    private readonly baseDamage: number = 1;
    private readonly baseDurability: number;
    private effectiveDurability: number;
    private damageModifier: number;
    private durabilityModifier: number;
    private damage: number;

    constructor(name, damage, durability, value, weight) {
        super(name, value, weight);
        this.baseDurability = durability;
        this.baseDamage = damage;
    }
    compareTo(other: Item): number {
        return super.compareTo(other);
    }
    toString(): string {
        return super.toString().concat(`Durability: ${this.getDurability()}%`);
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

        this.effectiveDurability -= this.MODIFIER_CHANGE_RATE;

        if (this.effectiveDurability <= 0) {
            console.log(`${DFLT_MESSAGE}\n${BRKS_MESSAGE}.`);
            return `${DFLT_MESSAGE}\n${BRKS_MESSAGE}.`;
        }
        console.log(DFLT_MESSAGE);
        return DFLT_MESSAGE;
    }
}

const weapon = new Weapon("hammer", 30.4219, 0.7893, 3000, 2.032);
weapon.use();
