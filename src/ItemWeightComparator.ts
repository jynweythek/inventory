import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    compare(first: Item, second: Item) {
            return first.compareTo(second);
    }
}
