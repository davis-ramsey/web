export class Attributes<T> {
	constructor(private data: T) {}

	get = <K extends keyof T>(key: K): T[K] => {
		return this.data[key];
	};
	set(update: T): void {
		// Object.assign(this.data, update);
		for (let key in update) this.data[key] = update[key];
	}
	getAll(): T {
		return this.data;
	}
}
