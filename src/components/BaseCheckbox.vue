<template>
	<div :class="`${checkboxProps.class}__wrapper`">
		<label v-if="checkboxProps.label" :class="`${checkboxProps.class}__wrapper`" :for="checkboxProps.name">
			{{ checkboxProps.label }}
		</label>
		<input :class="checkboxProps.class" :id="checkboxProps.name" type="checkbox" v-model="inputValue" />
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, type PropType } from 'vue';
interface IBaseCheckboxProps {
	class: string;
	label: string;
	value: boolean;
	name: string;
}

export default defineComponent({
	components: {},
	emits: ['valueChanged'],
	props: {
		checkboxProps: {
			type: Object as PropType<IBaseCheckboxProps>,
			default: {
				class: 'checkbox',
				label: 'checkboxLabel',
				value: false,
				name: 'name',
			},
		},
	},
	setup(props, { emit }) {
		const inputValue = computed({
			get: () => props.checkboxProps.value,
			set: (value: boolean) => emit('valueChanged', props.checkboxProps.name, value),
		});

		return {
			inputValue,
		};
	},
});
</script>
