import Consumable from './Consumable';

export default class Pizza extends Consumable {
    private readonly instanceName = 'pizza';
    numberOfSlices: number;
    slicesEaten: number = 0;
    isBad: boolean;
    consumed: boolean;
    name: string | undefined;
    spoiled: boolean | undefined;
    args: any;

    constructor(numberOfSlices: number, isBad: boolean) {
        super();
        this.name = this.instanceName;
        this.numberOfSlices = numberOfSlices;
        this.isBad = isBad;
    }

    eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            this.numberOfSlices--

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return 'You eat a slice of the pizza.';
        } else {
            return super.eat(this);
        }
    }
    use() {
        return super.use();
    }
    private setConsumed(bool: boolean) {
        return this.consumed = bool;
    }
}
