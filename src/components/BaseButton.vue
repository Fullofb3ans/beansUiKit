<template>
<div :class="`${propsClass}__wrapper`">
  <label v-if="propsLabel"
         :class="`${propsClass}__label`">
    {{ propsLabel }}
  </label>
  <button @click="$emit('clicked')"
          :class="`${propsClass}`">
    {{ propsTitle }}
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
    propsTitle: {
      type: String,
      default: ''
    },
    propsLabel: {
      type: String,
    }
  }
});
</script>