<script setup lang="ts">
const props = withDefaults(defineProps<{
	id?: string;
}>(), {
	id: 'arrow'
});
</script>
<template>
	<marker
		:id="props.id"
		viewBox="0 0 10 10"
		refX="5"
		refY="5"
		markerWidth="6"
		markerHeight="6"
		orient="auto-start-reverse">
		<path d="M 0 0 L 10 5 L 0 10 z" />
	</marker>
</template>
