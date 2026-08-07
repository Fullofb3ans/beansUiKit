<template>
<div>
    <!----------------------------------R2U--------------------------------->
    <BaseInput :inputSettings="inputSettings"
               @valueChanged="(value) => console.log(value)">
        <template v-slot:input-icon></template>
    </BaseInput>

    <BaseButton :buttonSettings="buttonSettings"
                @clicked="console.log('clicked')">
        testTitle
    </BaseButton>

    <BaseSelect :selectSettings="selectSettings"
                @valueChanged="console.log('testEmit')">
        <template v-slot:label-icon> </template>
        <template v-slot:select-icon> </template>
        <template v-slot:error-icon> </template>
    </BaseSelect>

    <BaseTextarea :textareaSettings="textareaSettings"
                  @valueChanged="(value) => console.log(value)" />

    <!---------------------------------------------------------------------->
    <BaseCheckbox :propsClass="'checkbox'"
                  :propsLabel="'label'"
                  :propsValue="'1'"
                  :propsStatus="true"
                  @valueChanged="(value, res) => console.log(value, res)" />

    <BaseRadio v-for="item in [1, 2, 3]"
               :key="item + 'r'"
               :propsName="'testRadio'"
               :propsClass="'radio'"
               :propsLabel="'label' + item"
               :propsValue="item"
               @valueChanged="(value, res) => console.log(value, res)" />



</div>
</template>
<script lang="ts">
import BaseButton from './components/BaseButton.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseInput from './components/BaseInput.vue';
import BaseRadio from './components/BaseRadio.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseTextarea from './components/BaseTextarea.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        BaseButton,
        BaseCheckbox,
        BaseInput,
        BaseRadio,
        BaseSelect,
        BaseTextarea
    },
    setup() {
        const selectSettings = {
            class: 'select',
            label: 'selectLabel',
            markedOptions: ['test1'],
            error: 'testError',
            disabled: false,
            placeholder: 'Выберите значение',
            id: 'baseSelect',
            options: ['test1', 'test2', 'test3']
        }

        const inputSettings = {
            class: "testInput",
            label: "testLabel",
            type: "testText",
            value: "test"
        }

        const textareaSettings = {
            class: 'testClass',
            label: 'testLabel',
            value: 'testValue',
            placeholder: 'testPlaceholder',
            name: 'testName',
            disabled: false
        }

        const buttonSettings = {
            label: "testLabel",
            class: "button"
        }

        return {
            inputSettings,
            selectSettings,
            textareaSettings,
            buttonSettings
        }
    }
});
</script>
