<script lang="ts" setup>
import { ref, watch } from 'vue';
import { generate } from '@/ts/tenses.ts';
import LCountForm from '@/vue/layouts/LCountForm.vue';
import LTensesSVG from '@/vue/layouts/LTensesSVG.vue';
import LDownloadVue from '@/vue/layouts/LDownload.vue';

const numberOfSentences = ref<number>(15);
const tenses = ref<Array<string>>(generate(numberOfSentences.value));
const regenerate = () => tenses.value = generate(numberOfSentences.value);
const svgContainer = ref<HTMLDivElement | null>(null);
watch(numberOfSentences, regenerate);

</script>
<template>
	<div class="w-auto min-h-screen flex items-center">
		<div class="mx-auto">
			<LCountForm @submit="regenerate" v-model="numberOfSentences">
				<template v-slot:label>The number of sentences:</template>
			</LCountForm>
			<div ref="svgContainer" class="mx-auto mt-8">
				<LTensesSVG :tenses="tenses" />
			</div>
			<LDownloadVue
				v-if="svgContainer"
				:svgContainer="svgContainer"
				:tenses="tenses"
				class="mx-auto mt-8 block"
			/>
		</div>
	</div>
</template>
