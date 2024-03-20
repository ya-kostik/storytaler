<script setup lang="ts">
import PastContinuous from './PastContinuous.vue';
import { TENSES } from '@/ts/tenses.ts';
import { Props, DEFAULTS } from './defaults.ts';
import PerfectLine from './PerfectLine.vue';

const props = withDefaults(defineProps<Props>(), {
	...DEFAULTS,
	title: TENSES.PAST_PERFECT_CONTINUOUS
});

</script>
<template>
	<PerfectLine v-bind=props />
	<PastContinuous color="red" v-bind=props />
</template>
