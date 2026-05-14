<template>
<div :class="`${propsClass}__wrapper`">
  <label v-if="propsLabel"
         :class="`${propsClass}__label`">
    {{ propsLabel }}
  </label>
  <button :class="`${propsClass}`"
          :disabled="disabled"
          @click="$emit('clicked')">
    <slot></slot>
  </button>
</div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  components: {},
  emits: ['clicked'],
  props: {
    propsClass: {
      type: String,
      default: 'button'
    },
    propsLabel: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
});
</script>