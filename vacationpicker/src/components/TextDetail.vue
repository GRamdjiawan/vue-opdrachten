<template>
<h2>{{myInput}}</h2>
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