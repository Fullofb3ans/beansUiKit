<template>
<div
     :class="[`${selectSettings.class}__wrapper`, selectSettings.disabled ? `${selectSettings.class}__wrapper--disabled` : '']">
    <label v-if="selectSettings.label"
           :class="`${selectSettings.class}__label__wrapper`"
           :for="selectSettings.id">
        <span :class="`${selectSettings.class}__label`">
            {{ selectSettings.label }}
        </span>
        <div v-if="$slots['label-icon']"
             :class="`${selectSettings.class}__label__icon__wrapper`">
            <slot name="label-icon"></slot>
        </div>
    </label>
    <div :class="`${selectSettings.class}__inner`">
        <select :class="`${selectSettings.class}`"
                :disabled="selectSettings.disabled"
                :id="selectSettings.id"
                v-model="selectValue"
                @change="valueChanged">
            <option :class="`${selectSettings.class}__placeholder`"
                    v-if="selectSettings.placeholder"
                    disabled="true"
                    value="">
                {{ selectSettings.placeholder }}
            </option>
            <option v-for="(option, index) in selectSettings.options"
                    :key="index"
                    :value="option && typeof option == 'object' && 'value' in option ? option.value : option"
                    :class="[`${selectSettings.class}__option`, (selectSettings.markedOptions?.length && selectSettings.markedOptions.includes(option)) ? `${selectSettings.class}__option--marked` : '']">
                {{
                    option && typeof option == 'object' && 'label' in option ? option.label : option && typeof option ==
                        'object' && 'value' in option ?
                        option.value : option
                }}
            </option>
        </select>
        <div v-if="$slots['select-icon']"
             :class="`${selectSettings.class}__icon__wrapper`">
            <slot name="select-icon"></slot>
        </div>
    </div>
    <div v-if="selectSettings.error"
         :class="`${selectSettings.class}__error__wrapper`">
        <span :class="`${selectSettings.class}__error`">
            {{ selectSettings.error }}
        </span>
        <div v-if="$slots['error-icon']"
             :class="`${selectSettings.class}__error__icon__wrapper`">
            <slot name="error-icon"></slot>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref, type Component, type PropType, watch } from 'vue';

interface BaseSelectProps {
    id?: string,
    class?: string,
    label?: string,
    value?: string | number,
    placeholder?: string,
    disabled?: boolean,
    error?: string,
    labelIcon?: Component,
    selectIcon?: Component,
    errorIcon?: Component,
    options?: unknown[],
    markedOptions?: unknown[];
}

export default defineComponent({
    emits: ['valueChanged'],
    props: {
        selectSettings: {
            type: Object as PropType<BaseSelectProps>,
            default: {
                class: 'select',
                id: 'baseSelect',
                options: [],
                markedOptions: [],
                disabled: false
            }
        }
    },
    setup(props, { emit }) {
        const selectValue = ref("");

        watch(() => props.selectSettings.value, (newVal) => {
            if (newVal)
                selectValue.value = String(newVal)
            else selectValue.value = ""
        }, { immediate: true })

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