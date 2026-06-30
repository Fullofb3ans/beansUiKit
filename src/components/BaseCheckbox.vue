<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__wrapper`"
           :for="propsClass">
        {{ propsLabel }}
    </label>
    <input :class="propsClass"
           :id="propsClass"
           type="checkbox"
           :checked="propsStatus"
           :value="propsValue"
           v-model="inputValue" />
</div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref, watch } from 'vue';

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        propsClass: {
            type: String,
            default: 'checkbox'
        },
        propsLabel: {
            type: String,
        },
        propsValue: {
            type: [String, Number],
            default: null
        },
        propsStatus: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const inputValue = ref();
        onMounted(() => {
            if (props.propsStatus) {
                inputValue.value = props.propsValue
            }
        })

        watch(() => inputValue.value, () => {
            emit('valueChanged', props.propsValue, inputValue.value),
                { immediate: true }
        })

        return {
            inputValue
        }
    }
});
</script>