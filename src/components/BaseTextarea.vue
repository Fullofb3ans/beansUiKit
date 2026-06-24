<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="propsClass">
        {{ propsLabel }}
    </label>
    <textarea :class="propsClass"
              :id="propsClass"
              :placeholder="propsPlaceholder"
              :disabled="disabled"
              v-model="inputValue" />
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
        disabled: {
            type: Boolean,
            default: false
        },
    },
    setup(props, { emit }) {
        const inputValue = ref(props.propsValue);

        watch((inputValue), () => {
            emit('valueChanged', inputValue.value, props.propsName)
        }, { deep: true, immediate: true })

        return {
            inputValue
        }
    }
});
</script>