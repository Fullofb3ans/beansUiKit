<template>
<div :class="[`${propsClass}__wrapper`, disabled ? `${propsClass}__wrapper--disabled` : '']">
    <label v-if="propsLabel"
           :class="`${propsClass}__label`"
           :for="propsClass">
        <span>{{ propsLabel }}</span>
        <div v-if="$slots['label-icon']"
             :class="`${propsClass}__label__icon__wrapper`">
            <slot name="label-icon"></slot>
        </div>
    </label>
    <div :class="`${propsClass}__inner`">
        <select :class="`${propsClass}`"
                :disabled="disabled"
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
        <div v-if="$slots['select-icon']"
             :class="`${propsClass}__icon__wrapper`">
            <slot name="select-icon"></slot>
        </div>
    </div>
    <div v-if="error"
         :class="`${propsClass}__error__wrapper`">
        <span :class="`${propsClass}__error`">
            {{ error }}
        </span>
        <div :class="`${propsClass}__error__icon__wrapper`">
            <slot v-if="$slots['error-icon']"
                  name="error-icon"></slot>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref, type Component, type PropType, watch } from 'vue';

interface BaseSelectProps {
    propsClass?: string;
    propsLabel?: string;
    propsValue?: string | number;
    propsOptions?: unknown[];
    propsPlaceholder?: string;
    disabled?: boolean;
    error?: string;
    labelIcon?: Component;
    selectIcon?: Component;
    errorIcon?: Component;
    markedOptions?: unknown[];
}

export default defineComponent({
    emits: ['valueChanged'],
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
            type: Array as PropType<unknown[]>,
            default: () => []
        },
        propsPlaceholder: {
            type: String,
        },
        error: {
            type: String
        },
        labelIcon: {
            type: Object as PropType<Component>,
        },
        selectIcon: {
            type: Object as PropType<Component>,
        },
        errorIcon: {
            type: Object as PropType<Component>
        },
        markedOptions: {
            type: Array as PropType<unknown[]>,
            default: () => []
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props: BaseSelectProps, { emit }) {
        const selectValue = ref("");

        watch((props), () => {
            if (props.propsValue)
                selectValue.value = String(props.propsValue);
        })

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