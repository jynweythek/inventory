import { Weapon } from './Weapon';

export default class Bow extends Weapon {
    public name: string;
    public durability: number;
    protected durabilityModifier: number;
    private afterPolishDurabilityModifier: number;
    protected effectiveDurability: number;

    constructor(name: string, damage: number, durability: number, value: number, weight: number) {
        super(name, damage, durability, value, weight);
        this.name = name;
        this.durability = durability;
    }

    setDurabilityModifier(modifier: number): number {
        return super.setDurabilityModifier(modifier);
    }

    getDurability(modifier?: number): number {
        return super.getDurability(modifier);
    }

    polish() {
        let afterPolishDurabilityModifier = this.afterPolishDurabilityModifier || parseFloat((this.getDurability(-.3) - Weapon.MODIFIER_CHANGE_RATE).toFixed(2));

        let durabilityIncrement = function() {
            return function() {
                return parseFloat((afterPolishDurabilityModifier += Weapon.MODIFIER_CHANGE_RATE).toFixed(2));
            }
        }
        let callIncrement = durabilityIncrement();
        this.afterPolishDurabilityModifier = callIncrement();
    }
}
