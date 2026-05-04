<template>
<BaseInput :propsClass="'input'"
           :propsLabel="'label'"
           :propsType="'text'"
           :propsValue="'test'"
           @valueChanged="(value) => console.log(value)" />

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
            :error="'testError'"
            :disabled="true"
            :propsPlaceholder="'Выберите значение'"
            @valueChanged="console.log('testEmit')" />
</template>
<script setup lang="ts">
import BaseButton from './components/BaseButton.vue';
import BaseCheckbox from './components/BaseCheckbox.vue';
import BaseInput from './components/BaseInput.vue';
import BaseRadio from './components/BaseRadio.vue';
import BaseSelect from './components/BaseSelect.vue';

</script>
