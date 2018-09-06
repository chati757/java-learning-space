<template>
  <a
    v-bind="$attrs"
    v-on="$listeners"><slot /></a>
</template>

<script>
export default {
  layout:'users',
  name: 'atag',
  props: {
  }
}
</script>

