<script setup lang="ts">
import { computed } from 'vue';
import { upperFirst, camelCase } from 'lodash-es';
import CArrowMarker from '@/vue/components/CArrowMarker.vue';
import * as Tenses from '@/vue/components/Tenses/Tenses.ts';

const DEFAULTS = {
	gap: 4,
	size: 30,
	width: 1.5
};

const props = defineProps<{
	tenses: string [];
}>();

const width = computed<number>(() => {
	return DEFAULTS.size * (props.tenses.length ?? 0);
});

const height = computed<number>(() => {
	return DEFAULTS.size + DEFAULTS.gap * props.tenses.length - 1 + DEFAULTS.gap * 2;
});

const getComponentName = (tense: string) => {
	return upperFirst(camelCase(tense));
};

const getComponent = (tense: string) => {
	const name = getComponentName(tense);
	return Tenses[name as keyof typeof Tenses] ?? null;
};

</script>
<template>
	<svg
		version="1.1"
		:width="width"
		:height="height"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<CArrowMarker />
		</defs>
		<template v-for='(tense, index) of props.tenses' :key='index'>
			<component
				:is="getComponent(tense)"
				:position="index"
				:title="tense"
				:size="DEFAULTS.size"
				:gap="DEFAULTS.gap"
				:width="DEFAULTS.width"
			/>
		</template>
	</svg>
</template>
