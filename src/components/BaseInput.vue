<template>
<div :class="`${inputSettings.class}__wrapper`">
    <label v-if="inputSettings.label"
           :class="`${inputSettings.class}__label`"
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

        const checkMinMax = (valToCompare: number, type: 'min' | 'max') => {
            if (props.inputSettings[type] || Number(props.inputSettings[type])) {
                switch (true) {
                    case type == 'min' && valToCompare < Number(props.inputSettings.min):
                        inputValue.value = props.inputSettings.min;
                        break;
                    case type == 'max' && valToCompare > Number(props.inputSettings.min):
                        inputValue.value = props.inputSettings.max;
                        break;
                    default:
                        inputValue.value = valToCompare;
                        break;
                }
            }
        }

        watch(() => inputValue.value, (newVal) => {
            const numericVal = Number(newVal);
            if (typeof numericVal == 'number') {
                (['min', 'max'] as const).forEach((type) => checkMinMax(numericVal, type))
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