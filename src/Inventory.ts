import { Item } from './Item';

export default class Inventory {
    items: Item[] = [];

    constructor() {

    }

    sort(items: Item[]) {
        items.map((item: Item, index: number) => {
            return item.value - items[index + 1].value;
        })
    }

    toString(): string {
        return `${this.items.join(', ')}`;
    }

    addItem(item: Item) {
        return this.items.push(item);
    }
}
