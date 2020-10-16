export default class Consumable {
    name: string | undefined;
    consumed: boolean | undefined;
    spoiled: boolean | undefined;
    args: any;

    constructor(name?: string | undefined, consumed?: boolean | undefined, spoiled?: boolean | undefined) {
        this.name = name;
        this.consumed = consumed;
        this.spoiled = spoiled;
    }

    use() {
        // if (!this.consumed && !this.spoiled) {
            return this.eat(this.args);
        // }
    }

    eat(args: any) {
        const DFLT_MESSAGE: string = `You eat the ${this.name}.`;
        const SICK_MESSAGE: string = 'You feel sick.';

        if (this.consumed) {
            return `There is nothing left of the ${this ? this.name : args.name} to consume.`;
        } else {
            if (this.spoiled) {
                return `${DFLT_MESSAGE}\n${SICK_MESSAGE}`;
            } else{
                return `${DFLT_MESSAGE}`;
            }
        }
    }
}

