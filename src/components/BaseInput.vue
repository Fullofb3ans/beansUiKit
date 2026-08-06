<template>
<div :class="`${inputSettings.class}__wrapper`">
    <label v-if="inputSettings.label"
           :class="`${inputSettings.label}__label`"
           :for="inputSettings.name">
        {{ inputSettings.label }}
    </label>
    <input :class="inputSettings.class"
           :id="inputSettings.name"
           :type="inputSettings.type"
           :placeholder="inputSettings.placeholder"
           :min="inputSettings.min"
           :max="inputSettings.max"
           :disabled="inputSettings.disabled"
           v-model="inputValue" />
    <div v-if="$slots['input-icon']"
         :class="`${inputSettings.class}__icon__wrapper`">
        <slot name="input-icon"></slot>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, type PropType } from 'vue';
interface IBaseInputProps {
    class?: string,
    label?: string,
    value?: string | number,
    type?: string,
    placeholder?: string,
    name?: string
    min?: number,
    max?: number,
    disabled?: boolean
}

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        inputSettings: {
            type: Object as PropType<IBaseInputProps>,
            default: {
                class: 'input',
                value: null,
                type: 'text',
                placeholder: '',
                name: '',
                disabled: false
            }
        },
    },
    setup(props, { emit }) {
        const inputValue = ref<string | number>();

        watch(() => inputValue.value, (newVal) => {
            if (newVal) {
                if (props.inputSettings.min && (Number(newVal) < props.inputSettings.min)) {
                    inputValue.value = props.inputSettings.min
                }
                else if (props.inputSettings.max && (Number(newVal) > props.inputSettings.max)) {
                    inputValue.value = props.inputSettings.max
                }
            }
            emit('valueChanged', inputValue.value, props.inputSettings.name)
        }, { immediate: true })

        watch(() => props.inputSettings.value, () => {
            if (inputValue.value !== props.inputSettings.value)
                inputValue.value = props.inputSettings.value
        }, { immediate: true })

        return {
            inputValue,
        }
    }
});
</script>