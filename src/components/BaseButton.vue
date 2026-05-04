<template>
<div :class="`${propsClass}__wrapper`">
  <label v-if="propsLabel"
         :class="`${propsClass}__label`">
    {{ propsLabel }}
  </label>
  <button @click="$emit('clicked')"
          :class="`${propsClass}`">
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
    }
  }
});
</script>