export default class Consumable {
    name: string;
    consumed: boolean;
    spoiled: boolean;

    constructor(name: string, consumed: boolean = false, spoiled: boolean) {
        this.name = name;
        this.consumed = consumed;
        this.spoiled = spoiled;
    }

    use() {
        if (!this.consumed && !this.spoiled) {
            return this.eat();
        }
    }
    eat() {
        const DFLT_MESSAGE: string = `You eat the ${this.name}.`;
        const SICK_MESSAGE: string = 'You feel sick.';

        if (this.consumed) {
            return `There is nothing left of the ${this.name} to consume.`;
        } else {
            if (this.spoiled) {
                return `${DFLT_MESSAGE}\n${SICK_MESSAGE}`;
            } else{
                return `${DFLT_MESSAGE}`;
            }
        }
    }
}

