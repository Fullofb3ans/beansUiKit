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
                @change="valueChanged">
            <option :class="`${propsClass}__placeholder`"
                    v-if="propsPlaceholder"
                    disabled="true"
                    value="">
                {{ propsPlaceholder }}
            </option>
            <option v-for="(option, index) in propsOptions"
                    :key="index"
                    :class="[`${propsClass}__option`, (markedOptions.length && markedOptions.includes(option)) ? `${propsClass}__option--marked` : '']">
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
    emits: {
        valueChanged: (value: string | number) => {
            return typeof value === 'string' || typeof value === 'number'
        }
    },
    props: {
        propsClass: {
            type: String,
            default: 'select'
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
        },
        markedOptions: {
            type: Array<unknown>,
            default: []
        }
    },
    setup(props, { emit }) {
        const selectValue = ref(props.propsValue || '');

        const valueChanged = () => {
            emit('valueChanged', selectValue.value)
        }

        return {
            selectValue,
            valueChanged
        }
    }
});
</script>