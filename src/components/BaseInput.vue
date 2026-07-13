<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="propsClass">
        {{ propsLabel }}
    </label>
    <input :class="propsClass"
           :id="propsClass"
           :type="propsType"
           :placeholder="propsPlaceholder"
           :min="min"
           :max="max"
           :disabled="disabled"
           v-model="inputValue" />
    <div v-if="$slots['input-icon']"
         :class="`${propsClass}__icon__wrapper`">
        <slot name="input-icon"></slot>
    </div>
</div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        propsClass: {
            type: String,
            default: 'input'
        },
        propsLabel: {
            type: String,
        },
        propsValue: {
            type: [String, Number],
            default: null
        },
        propsType: {
            type: String,
            default: 'text'
        },
        propsPlaceholder: {
            type: String,
            default: ''
        },
        propsName: {
            type: String,
            default: ''
        },
        min: {
            type: Number
        },
        max: {
            type: Number
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const inputValue = ref<string | number>();

        watch(() => inputValue.value, () => {
            if (inputValue.value) {
                if (props.min && (Number(inputValue.value) < props.min)) {
                    inputValue.value = props.min
                }
                else if (props.max && (Number(inputValue.value) > props.max)) {
                    inputValue.value = props.max
                }
            }
            emit('valueChanged', inputValue.value, props.propsName)
        }, { immediate: true })

        watch(() => props.propsValue, () => {
            if (inputValue.value !== props.propsValue)
                inputValue.value = props.propsValue
        }, { immediate: true })

        return {
            inputValue
        }
    }
});
</script>