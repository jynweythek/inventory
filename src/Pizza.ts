import Consumable from './Consumable';

export default class Pizza extends Consumable {
    private readonly instanceName = 'pizza';
    private numberOfSlices: number;
    private slicesEaten: number = 0;
    private isBad: boolean;
    public consumed: boolean;
    public name: string | undefined;
    public spoiled: boolean | undefined;
    public args: any;

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
