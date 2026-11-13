<template>
	<div :class="`${propsClass}__wrapper`">
		<label v-if="propsLabel" :class="`${propsClass}__wrapper`" :for="propsName">
			{{ propsLabel }}
		</label>
		<input :class="propsClass" :id="propsName" type="checkbox" v-model="inputValue" />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
	components: {},
	emits: ['valueChanged'],
	props: {
		propsClass: {
			type: String,
			default: 'checkbox',
		},
		propsLabel: {
			type: String,
		},
		propsValue: {
			type: Boolean,
			default: false,
		},
		propsName: {
			type: String,
			required: true,
		},
	},
	setup(props, { emit }) {
		const inputValue = computed({ get: () => props.propsValue, set: (value: boolean) => emit('valueChanged', props.propsName, value) });

		return {
			inputValue,
		};
	},
});
</script>
