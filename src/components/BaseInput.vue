<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__wrapper`"
           :for="propsClass">
        {{ propsLabel }}
    </label>
    <input :class="propsClass"
           :id="propsClass"
           :type="propsType"
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
        }
    },
    setup(props, { emit }) {
        const inputValue = ref(props.propsValue);

        watch((inputValue), () => {
            if (inputValue.value || inputValue.value == '')
                emit('valueChanged', inputValue.value)
        }, { deep: true, immediate: true })

        return {
            inputValue
        }
    }
});
</script>