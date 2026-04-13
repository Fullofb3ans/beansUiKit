<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="String(propsValue)">
        {{ propsLabel }}
    </label>
    <input :class="propsClass"
           :id="String(propsValue)"
           :name="propsName"
           type="radio"
           @change="emitValueChange(propsName, inputValue)"
           v-model="inputValue" />
</div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        propsClass: {
            type: String,
            default: 'radio'
        },
        propsLabel: {
            type: String,
        },
        propsValue: {
            type: [String, Number],
            default: null
        },
        propsName: {
            type: String,
            default: ''
        }
    },
    setup(props, { emit }) {
        const inputValue = ref();

        const emitValueChange = (propsName: string, inputValue: [String, Number]) => {
            emit('valueChanged', propsName, inputValue)
        }
        onMounted(() => {
            if (props.propsValue) {
                inputValue.value = props.propsValue;
            }
        })
        return {
            inputValue,
            emitValueChange
        }
    }
});
</script>