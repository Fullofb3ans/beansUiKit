<template>
<div :class="`${propsClass}__wrapper`">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="propsClass">
        <span>{{ propsLabel }}</span>
        <Component v-if=labelIcon
                   :is="labelIcon" />
    </label>
    <div :class="`${propsClass}__inner`">
        <select :class="`${propsClass}`"
                :id="propsClass"
                v-model="selectValue"
                @change="$emit('valueChanged', selectValue)">
            <option :class="`${propsClass}__placeholder`"
                    v-if="propsPlaceholder"
                    disabled
                    selected>
                {{ propsPlaceholder }}
            </option>
            <option v-for="(option, index) in propsOptions"
                    :key="index"
                    :class="`${propsClass}__option`">
                {{ (option && typeof option == 'object' && 'value' in option) ? option.value : option }}
            </option>
        </select>
        <Component v-if="selectIcon"
                   :is="selectIcon" />
    </div>
</div>
</template>
<script lang='ts'>
import { defineComponent, ref, type Component, type PropType } from 'vue';

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
        },
        propsPlaceholder: {
            type: String,
        },
        labelIcon: {
            type: Object as PropType<Component>,
        },
        selectIcon: {
            type: Object as PropType<Component>,
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