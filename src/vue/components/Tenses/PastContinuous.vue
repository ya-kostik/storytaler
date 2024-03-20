<script setup lang="ts">
import { computed } from 'vue';
import { TENSES } from '@/ts/tenses.ts';
import PastSimple from './PastSimple.vue';
import { Props, DEFAULTS, calcRadius } from './defaults.ts';

const props = withDefaults(defineProps<Props>(), {
	...DEFAULTS,
	title: TENSES.PAST_CONTINUOUS
});

const size = computed(() => calcRadius(props) * 2);
const y = computed(() => props.size - props.width / 2);
const x1 = computed(() => (props.size - size.value) / 2)
const x2 = computed(() => x1.value + size.value);



</script>
<template>
<PastSimple v-bind=props>
	<template v-slot:extension>
		<line :x1="x1" :y1="y" :x2="x2" :y2="y" :stroke-width="props.width" stroke="black" />
	</template>
</PastSimple>
</template>
