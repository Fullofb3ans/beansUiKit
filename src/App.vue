<template>
<BaseInput :propsClass="'testInput'"
           :propsLabel="'testLabel'"
           :propsType="'testText'"
           :propsValue="'test'"
           @valueChanged="(value) => console.log(value)">
    <template v-slot:input-icon></template>
</BaseInput>

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

<BaseButton :propsLabel="'label'"
            :propsClass="'button'"
            @clicked="console.log('clicked')">
    testTitle
</BaseButton>

<BaseSelect :propsClass="'select'"
            :propsLabel="'selectLabel'"
            :propsOptions="['test1', 'test2']"
            :markedOptions="['test1']"
            :propsValue="'test1'"
            :error="'testError'"
            :disabled="false"
            :propsPlaceholder="'Выберите значение'"
            @valueChanged="console.log('testEmit')">

    <template v-slot:label-icon> </template>
    <template v-slot:select-icon> </template>
    <template v-slot:error-icon> </template>
</BaseSelect>

<BaseTextarea :propsClass="'textarea'"
              :propsLabel="'textareaLabel'"
              :propsValue="'test'"
              @valueChanged="(value) => console.log(value)">
</BaseTextarea>
</template>
<script setup lang="ts">
import BaseButton from './components/BaseButton.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseInput from './components/BaseInput.vue';
import BaseRadio from './components/BaseRadio.vue';
import BaseSelect from './components/BaseSelect.vue';
import BaseTextarea from './components/BaseTextarea.vue';
</script>
