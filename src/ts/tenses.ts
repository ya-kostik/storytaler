import { generate as generateCommon } from './generate.js';

export const TENSES = {
	PAST_SIMPLE: 'Past simple',
	PAST_CONTINUOUS: 'Past continuous',
	PAST_PERFECT: 'Past perfect',
	PAST_PERFECT_CONTINUOUS: 'Past perfect continuous'
};

export const PEACES = Object.values(TENSES);

export function generate(count: number): string[] {
	return generateCommon<string>(count, PEACES);
}
