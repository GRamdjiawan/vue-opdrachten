<template>
  <div class="container">
    <MainNavigation/>
    <router-view/>
  </div>
</template>
<script>
import MainNavigation from "@/components/MainNavigation";

export default {
  name: 'app',
  components: {MainNavigation}
}
</script>
<style>
</style>
