<script setup lang="ts">
import { computed } from 'vue';
import { Props, DEFAULTS, calcRadius } from './defaults.ts';
import { TENSES } from '@/ts/tenses.ts';

const props = withDefaults(defineProps<Props>(), {
	...DEFAULTS,
	title: TENSES.PAST_SIMPLE
});

const x = computed(() => {
	return props.position * props.size;
});

const radius = computed(() => {
	return calcRadius(props);
});

const center = computed(() => {
	return props.size / 2;
});
</script>
<template>
	<svg :viewBox="`0 0 ${props.size} ${props.size}`" :x="x" :width="props.size" :height="props.size">
		<rect x='0' y='0' :width="props.size" :height="props.size" fill="none"></rect>
    <circle
			:cx="center"
			:cy="center"
			:r="radius"
			fill="currentColor"
		/>
		<slot name="extension"></slot>
  </svg>
</template>
