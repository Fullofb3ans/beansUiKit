<template>
<div :class="`${buttonSettings.label}__wrapper`">
  <div v-if="buttonSettings.label"
       :class="`${buttonSettings.class}__label`">
    {{ buttonSettings.label }}
  </div>
  <button :class="`${buttonSettings.class}`"
          :disabled="buttonSettings.disabled"
          :type="'button'"
          @click="$emit('clicked')">
    <slot></slot>
  </button>
</div>
</template>
<script lang='ts'>

import { defineComponent, type PropType } from 'vue';

interface IButtonSettings {
  class?: string,
  label?: string,
  disabled?: boolean
}

export default defineComponent({
  components: {},
  emits: ['clicked'],
  props: {
    buttonSettings: {
      type: Object as PropType<IButtonSettings>,
      default: {
        class: 'button',
        disabled: false
      }
    }
  }
});
</script>