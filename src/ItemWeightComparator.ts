import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        const diff = +first.value - +second.value;

        if (diff > 0) {
            return 1
        }
        if (diff < 0) {
            return -1
        }
        if (diff === 0) {
            first.compareTo(second);
        }
    }
}
