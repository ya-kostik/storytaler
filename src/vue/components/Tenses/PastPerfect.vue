<script setup lang="ts">
import PastSimple from './PastSimple.vue';
import { TENSES } from '@/ts/tenses.ts';
import { Props, DEFAULTS } from './defaults.ts';
import PerfectLine from './PerfectLine.vue';

const props = withDefaults(defineProps<Props>(), {
	...DEFAULTS,
	title: TENSES.PAST_PERFECT
});

</script>
<template>
	<PerfectLine v-bind=props />
	<PastSimple color="red" v-bind=props />
</template>
