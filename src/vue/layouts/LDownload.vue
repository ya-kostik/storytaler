<script setup lang="ts">
import { computed } from 'vue';
import CAnchor from '@/vue/components/CAnchor.vue';

const props = defineProps<{
	svgContainer: HTMLDivElement,
	tenses: string[]
}>();

const createHref = () => {
	const blob = new Blob([props.svgContainer.innerHTML], {
		type: 'image/svg+xml'
	});
	return URL.createObjectURL(blob);
};

const shorten = (tenses: string[]) => {
	return tenses.slice(0, 15).map((tense) => {
		return tense.split(' ').
			map((word) => word
				? word[0].toUpperCase()
				: ''
			).
			join('');
	}).join(' ') + '...';
};

const createDownload = () => {
	return `${shorten(props.tenses)}.svg`;
};

const anchor = computed<{
	href: string,
	download: string
}>((oldValue) => {
	if (oldValue?.href) {
		URL.revokeObjectURL(oldValue?.href);
	}
	return {
		href: createHref(),
		download: createDownload()
	};
});

</script>
<template>
	<CAnchor v-bind="anchor">
		<slot name="title">Download</slot>
	</CAnchor>
</template>
