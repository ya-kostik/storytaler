import { sample } from 'lodash-es';

export function generate<T>(count: number, peaces: Array<T>): Array<T> {
	const out: Array<T> = [];
	for (let i = 0; i < count; ++i) {
		const item = sample<T>(peaces);
		if (item) {
			out.push(item);
		}
	}
	return out;
}
