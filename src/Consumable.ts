import { Item } from './Item';

export default class Consumable extends Item {
    private consumed: boolean = false;
    protected spoiled: boolean | undefined;

    constructor(name: string, value: number, weight: number, spoiled: boolean | undefined) {
        super(name, value, weight);
        this.spoiled = spoiled;
    }

    isConsumed(): boolean {
        return <boolean>this.consumed;
    }

    isSpoiled(): boolean {
        return <boolean>this.spoiled;
    }

    setConsumed(consumed: boolean) {
        this.consumed = consumed;
    }

    use() {
        return this.eat();
    }

    eat(): string {
        const DFLT_MESSAGE: string = `You eat the ${this.name}.`;
        const SICK_MESSAGE: string = 'You feel sick.';

        if (this.isConsumed()) {
            return `There is nothing left of the ${this.name} to consume.`;
        }

        if (this.isSpoiled()) {
            return `${DFLT_MESSAGE}\n${SICK_MESSAGE}`;
        } else {
            return `${DFLT_MESSAGE}`;
        }
    }
}
