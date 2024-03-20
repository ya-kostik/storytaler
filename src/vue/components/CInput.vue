<script setup lang="ts">
import { defineModel } from 'vue';

const model = defineModel();
</script>
<template>
	<input v-model="model" class="
		rounded-md
		px-4
		py-2
		font-medium
		ring-1
		ring-slate-700/10
		hover:bg-slate-50
		shadow-inner
		shadow-slate-700/10
	" />
</template>
