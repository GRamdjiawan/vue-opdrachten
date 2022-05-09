<template>
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 d-flex justify-content-center align-content-center">
          <h1>Pick your vacation</h1>
        </div>
        <div class="col-md-2"></div>
      </div>


    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 d-flex justify-content-center align-content-center">
        <div class="Buttons-container">
          <button @click="counter++" class="btn btn-success">+</button>
          <button @click="counter--" class="btn btn-danger">-</button>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>

    <div class="row" v-for="country in countryData.countries" v-bind:key="country.id">
      <div class="col-md-2"></div>
      <div class="col-md-8 d-flex justify-content-center align-content-center">
        <div class="countries" v-bind:title="country.details" v-bind:id="country.id">
          {{country.name}}
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>

  </div>


</template>

<script>
import countryData from "@/data/countryData";
export default {
  name: "VacationPicker",

  data(){
    return{
      countryData,
      counter: 0,
      list1: [10,20,30,40,50],
    }
  }

}
</script>

<style scoped>

div {
}

.countries {
  width: 100%;
  text-align: center;
  font-size: 20pt;
  font-weight: bold;
  border: 1px solid black;
  margin: 10px 0px;

}

</style>