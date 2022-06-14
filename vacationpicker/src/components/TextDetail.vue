<template>
  <h1>wagwan</h1>

</template>

<script>
export default {
  name: "TextDetail",
  props: {
    myInput: {
      type: String,
      required: true,
      validator(value) {
        return ['warning', 'error', 'info'].indexOf(value) !== -1
      }
    }
  },
}
</script>

<style scoped>

</style>