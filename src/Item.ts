import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    id: number;
    value: number;
    weight: number;
    name: string;

    static numberOfItems() {
        return id;
    }

    static reset() {
        return id = 0;
    }

    constructor(name: string, value: number, weight: number) {
        this.id = id++;
        this.name = name;
        this.value = value;
        this.weight = weight;
    }

    public compareTo(other: Item): number {
        const diff = +this.value - +other.value;

        if (diff > 0) {
            return 1
        }
        if (diff < 0) {
            return -1
        }
        if (diff === 0) {
            return this.name.localeCompare(other.name, 'en', {
                'sensitivity': 'base'
            });
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight.toFixed(2)}`;
    }

    public use(): void {}
}
