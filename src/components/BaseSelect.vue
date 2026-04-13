<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="propsClass">
        {{ propsLabel }}
    </label>
    <select :class="`${propsClass}`"
            :id="propsClass"
            v-model="selectValue"
            @change="$emit('valueChanged', selectValue)">
        <option v-for="(option, index) in propsOptions"
                :key="index"
                :class="`${propsClass}__option`">
            {{ (option && typeof option == 'object' && 'value' in option) ? option.value : option }}
        </option>
    </select>
</div>
</template>
<script lang='ts'>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        propsClass: {
            type: String,
            default: ''
        },
        propsText: {
            type: String,
            default: ''
        },
        propsLabel: {
            type: String
        },
        propsValue: {
            type: [String, Number],
        },
        propsOptions: {
            type: Array<unknown>,
            default: []
        }
    },
    setup(props) {
        const selectValue = ref(props.propsValue || props.propsOptions[0]);

        return {
            selectValue
        }
    }
});
</script>