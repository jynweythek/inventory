import Consumable from './Consumable';

export default class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number = 0;
    public spoiled: boolean;

    constructor(numberOfSlices: number, isBad: boolean) {
        super('pizza', 1, 1, false);
        this.numberOfSlices = numberOfSlices;
        this.spoiled = isBad;
    }

    eat() {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            this.numberOfSlices--;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You eat a slice of the ${this.name}.`;
        }

        return super.eat();
    }
}
