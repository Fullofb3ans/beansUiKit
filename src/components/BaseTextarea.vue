<template>
<div :class="`${textareaSettings.class}__wrapper`">
    <label v-if="textareaSettings.label"
           :class="`${textareaSettings.label}__label`"
           :for="textareaSettings.class">
        {{ textareaSettings.label }}
    </label>
    <textarea :class="textareaSettings.class"
              :id="textareaSettings.class"
              :placeholder="textareaSettings.placeholder"
              :disabled="textareaSettings.disabled"
              v-model="inputValue" />
</div>
</template>
<script lang='ts'>
import { defineComponent, ref, watch, type PropType } from 'vue';

interface ITextareaSettings {
    class?: string,
    label: string,
    value?: string | number,
    type?: string,
    placeholder?: string,
    name?: string,
    disabled?: boolean
}

export default defineComponent({
    components: {},
    emits: ['valueChanged'],
    props: {
        textareaSettings: {
            type: Object as PropType<ITextareaSettings>,
            default: {
                class: 'textarea',
                value: '',
                placeholder: '',
                name: '',
                disabled: false
            }
        }
    },
    setup(props, { emit }) {
        const inputValue = ref(props.textareaSettings.value);

        watch(() => inputValue.value, () => {
            emit('valueChanged', inputValue.value, props.textareaSettings.name)
        }, { immediate: true })

        return {
            inputValue
        }
    }
});
</script>