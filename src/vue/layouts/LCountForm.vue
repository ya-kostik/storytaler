<script lang="ts" setup>
import CButton from '@/vue/components/CButton.vue';
import CInput from '@/vue/components/CInput.vue';

export interface Props {
	name?: string;
}

const props = withDefaults(defineProps<Props>(), {
	name: 'count'
});

const emit = defineEmits<{
  submit: [evt: SubmitEvent]
}>();

const number = defineModel<number>({ default: 0 });
</script>
<template>
	<form @submit.prevent="emit('submit', $event as SubmitEvent)" class="grid grid-flow-col auto-cols-min gap-2 justify-center">
		<div>
			<label class="block text-sm font-medium leading-6 text-gray-900">
				<slot name="label">Count:</slot>
				<CInput :name='props.name' type="number" class="block" v-model="number" />
			</label>
		</div>
		<div class="flex flex-col-reverse">
			<CButton><slot name="title">Generate</slot></CButton>
		</div>
	</form>
</template>
