<template>
<div
     :class="[`${buttonSettings.class}__wrapper`, buttonSettings.disabled ? `${buttonSettings.class}__wrapper--disabled` : '']">
    <label v-if="buttonSettings.label"
           :class="`${buttonSettings.class}__label__wrapper`"
           :for="buttonSettings.id">
        <span :class="`${buttonSettings.class}__label`">
            {{ buttonSettings.label }}
        </span>
        <div v-if="$slots['label-icon']"
             :class="`${buttonSettings.class}__label__icon__wrapper`">
            <slot name="label-icon"></slot>
        </div>
    </label>
    <div :class="`${buttonSettings.class}__inner`">
        <select :class="`${buttonSettings.class}`"
                :disabled="buttonSettings.disabled"
                :id="buttonSettings.id"
                v-model="selectValue"
                @change="valueChanged">
            <option :class="`${buttonSettings.class}__placeholder`"
                    v-if="buttonSettings.placeholder"
                    disabled="true"
                    value="">
                {{ buttonSettings.placeholder }}
            </option>
            <option v-for="(option, index) in buttonSettings.options"
                    :key="index"
                    :value="option && typeof option == 'object' && 'value' in option ? option.value : option"
                    :class="[`${buttonSettings.class}__option`, (buttonSettings.markedOptions?.length && buttonSettings.markedOptions.includes(option)) ? `${buttonSettings.class}__option--marked` : '']">
                {{
                    option && typeof option == 'object' && 'label' in option ? option.label : option && typeof option ==
                        'object' && 'value' in option ?
                        option.value : option
                }}
            </option>
        </select>
        <div v-if="$slots['select-icon']"
             :class="`${buttonSettings.class}__icon__wrapper`">
            <slot name="select-icon"></slot>
        </div>
    </div>
    <div v-if="buttonSettings.error"
         :class="`${buttonSettings.class}__error__wrapper`">
        <span :class="`${buttonSettings.class}__error`">
            {{ buttonSettings.error }}
        </span>
        <div v-if="$slots['error-icon']"
             :class="`${buttonSettings.class}__error__icon__wrapper`">
            <slot name="error-icon"></slot>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import { defineComponent, ref, type Component, type PropType, watch } from 'vue';

interface BaseSelectProps {
    id?: string,
    class?: string;
    label?: string;
    value?: string | number;
    options?: unknown[];
    placeholder?: string;
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
        buttonSettings: {
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

        watch(() => props.buttonSettings.value, (newVal) => {
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