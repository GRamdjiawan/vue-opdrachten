<template>
  <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 "></div>
        <div class="col-md-8 d-flex justify-content-center align-content-center">
          <h1>Pick your vacation <br> counter: {{counter}}</h1>

        </div>
        <div class="col-md-2"></div>
      </div>


    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8 d-flex justify-content-center align-content-center">
        <div class="Buttons-container">
          <button @click="countUp" class="btn btn-success">+</button>
          <button @click="countDown" class="btn btn-danger">-</button>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>

    <div class="row">
      <div class="col-6">
        <ul class="list-group" v-for="(country, index) in countryData.countries" v-bind:key="country.id"
             @click="selectCountry(index)">
          <li class="list-group-item"  v-bind:title="country.details" v-bind:id="country.id">
            {{country.name}}
          </li>
        </ul>
      </div>


      <div class="col-6">
        <h2>Selected:</h2>
        <ul class="list-group" >
          <li class="list-group-item">
            {{ selectedCountry.id }}
          </li>
          <li class="list-group-item">
            {{ selectedCountry.name }}
          </li>
          <li class="list-group-item">
            {{ selectedCountry.capital }}
          </li>
          <li class="list-group-item">
            {{ selectedCountry.details }}
          </li>
          <li class="list-group-item">
            <img :src=" getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid">
          </li>
          <li class="list-group-item" v-if="isExpensive">
            <p class="bg-danger">Expensive!</p>
          </li>
        </ul>
      </div>
    </div>
  </div>


</template>

<script>
import countryData from "@/data/countryData";
export default {
  name: "VacationPicker",

  data() {
    return {
      countryData,
      counter: 0,
      selectedCountryIndex: 0,

    }
  },

  methods: {
    countUp() {
      this.counter++;
    },

    countDown() {
      this.counter--;
    },

    selectCountry(index) {
      this.selectedCountryIndex = index;
      console.log(this.selectedCountryIndex);

    },

    getImgUrl(img){
      return require('../assets/countries/' + img)
    }

  },

  computed: {
    selectedCountry() {

      return {
        id: this.countryData.countries[this.selectedCountryIndex].id,
        name: this.countryData.countries[this.selectedCountryIndex].name,
        capital: this.countryData.countries[this.selectedCountryIndex].capital,
        cost: this.countryData.countries[this.selectedCountryIndex].cost,
        details: this.countryData.countries[this.selectedCountryIndex].details,
        img: this.countryData.countries[this.selectedCountryIndex].img,
      }
    },

    isExpensive() {
      return countryData.countries[this.selectedCountryIndex].cost > 4000;
    },

  }
}



</script>

<style scoped>

div {
}

h1 {
  text-align: center;
}

.countries {
  width: 100%;
  font-size: 20pt;
  font-weight: bold;
  border: 1px solid black;
  margin: 10px 0px;
  padding: 10px;

}

</style>