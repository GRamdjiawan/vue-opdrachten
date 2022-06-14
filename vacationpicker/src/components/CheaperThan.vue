<template>
  <!--     <div class="col-md-4 ">
          <h2 class="mt-3">Destinations cheaper than:</h2>
          <select class="form-control-sm" v-model="selectedCost"  @change="filterCountries()">
            <option v-for="(cost, index) in costs" :key="index" :value="cost">
              {{cost}}
            </option>

          </select>
          <ul class="list-group" >
            <li v-for="(country, index) in filteredCountries" :key="index" class="list-group-item">
              {{country.name}} (EUR: {{country.cost}})
            </li>
          </ul>
        </div>-->
</template>

<script>
export default {
  name: "CheaperThan"
}
</script>

<style scoped>

</style>