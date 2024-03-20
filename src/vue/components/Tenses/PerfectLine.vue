<script setup lang="ts">
import { random } from 'lodash-es';
import { computed } from 'vue';
import { Props, DEFAULTS } from './defaults.ts';

const props = withDefaults(defineProps<Omit<Props, 'title'>>(), {
	...DEFAULTS
});

const toPointString = (point: number[]) => point.join(',');
const toPointsString = (points: string[]) => points.join(' ');

const points = computed<string>(() => {
	const { position, gap, size } = props;
	const randomPosition = position ? random(0, position - 1) : 0;

	const centerX = position * size + size / 2;
	const centerY = size / 2;

	const bottomY = size + gap * randomPosition + gap * 2;

	const beginingX = randomPosition * size + props.gap;

	return toPointsString([
		toPointString([centerX, centerY]),
		toPointString([centerX, bottomY]),
		toPointString([beginingX, bottomY]),
		toPointString([beginingX, size])
	]);
});
</script>
<template>
	<polyline
		:points="points"
		fill="none"
		stroke="currentColor"
		:stroke-width="width"
		marker-end="url(#arrow)"
	/>
</template>
