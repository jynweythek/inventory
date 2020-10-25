import { Item } from './Item';

export class Weapon extends Item {
    static MODIFIER_CHANGE_RATE: number = .05;
    protected damage: number = 1;
    protected durability: number;
    protected damageModifier: number = Weapon.MODIFIER_CHANGE_RATE;
    protected durabilityModifier: number = Weapon.MODIFIER_CHANGE_RATE;
    private usedWeaponDurability: number = this.durability;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, value, weight);
        this.durability = durability;
        this.damage = damage;
    }

    compareTo(other: Item): number {
        return super.compareTo(other);
    }

    toString(): string {
        return super.toString().concat(`, Damage: ${this.getDamage()}, Durability: ${this.getDurability() * 100}%`);
    }

    setDamageModifier(modifier: number = .05): number {
        return this.damageModifier = modifier;
    }

    getDamage(): number {
        console.log(Number((this.damage + this.damageModifier).toFixed(2)));
        return Number((this.damage + this.damageModifier).toFixed(2));
    }

    setDurabilityModifier(modifier: number = .05): number {
        return this.durabilityModifier = modifier;
    }

    getDurability(): number {
        return this.durability + this.durabilityModifier;
    }

    calcEffectiveDurability(modifier: number): number {
        return this.getDurability() + this.setDurabilityModifier(modifier);
    }

    private getUsedWeaponDurability = () => {
        return this.usedWeaponDurability
            || this.calcEffectiveDurability(Weapon.MODIFIER_CHANGE_RATE) - Weapon.MODIFIER_CHANGE_RATE;
    }

    private durabilityDecrement = function(usedWeaponDurability: number) {
        return function() {
            return usedWeaponDurability -= Weapon.MODIFIER_CHANGE_RATE;
        }
    }

    use(): string {
        const DFLT_MESSAGE: string = `You use the ${this.name}, dealing ${this.getDamage().toFixed(2)} points of damage.`;
        const BRKS_MESSAGE: string = 'The hammer breaks';
        const BRKN_MESSAGE: string = 'You can\'t use the hammer, it is broken.';
        let usedWeaponDurability: number = this.getUsedWeaponDurability();

        if (usedWeaponDurability <= 0) {
            return BRKN_MESSAGE;
        }

        const callDecrement = this.durabilityDecrement(usedWeaponDurability);
        this.usedWeaponDurability = this.durability = callDecrement();

        if (usedWeaponDurability > 0) {
            return DFLT_MESSAGE;
        } else {
            return `${DFLT_MESSAGE}\n${BRKS_MESSAGE}.`;
        }
    }

    polish (): void {}
}
