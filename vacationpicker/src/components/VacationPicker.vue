<template>
  <div class="container-fluid">
    <div class="row mt-5 border-bottom border-dark">
      <div class="col-md-2 "></div>
      <div class="col-md-8 d-flex justify-content-center align-content-center ">
        <h1 class="display-3 ">Pick your
          <span class="text-success">
            vacation
            </span>
        </h1>
      </div>
      <div class="col-md-2"></div>
    </div>

    <div class="row ">
<!--      <div class="col-md-6">
    <ul class="list-group">
          <li class=" list-group-item"  v-for="(country, index) in countryData.countries" v-bind:key="country.id" @click="selectedCountryIndex = index ">
              {{ index + 1 }}-
              {{ country.name }}
          </li>
        </ul>
      </div>-->
      <div class="col-md-6 border border-dark d-flex flex-column justify-content-evenly">

     <h2 class="display-6 bg-warning bg-opacity-25 p-3 text-center">
       Country: <b>{{selectedCountry.name}}</b>
        <br>
        Capital: <b>{{ selectedCountry.capital }}</b>
        <br>
     </h2>
        <br>

        <span v-if="onSale" class="text-dark border border-dark">
            ON SALE!!
          </span>
        <br>

        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button @click="selectedCountryIndex--" class="btn btn-danger">Back</button>
          <button @click="selectedCountryIndex++" class="btn btn-success">Next</button>
          <button @click="hideDetails" class="btn btn-warning">Hide details</button>
        </div>
      </div>

      <div class="col-md-6">
        <country-detail v-if="selectedCountry" @favorite="favorite($event)" :country="selectedCountry"/>
      </div>
    </div>
  </div>
</template>
<script>
import countryData from "@/data/countryData";
import mixins from "@/mixins/mixins";
import countryDetail from "@/components/CountryDetail";

export default {
  name: "VacationPicker",
  components: { countryDetail},
  mixins: [mixins],
  data() {
    return {
      countryData,
      counter: 0,
      selectedCountryIndex: 0,
      selectedCost: 0,
      costs: [0, 1000, 2000, 3000, 4000, 5000, 6000],
      filteredCountries: [],
      newCountry: '',
      newCountries: [],
      hideDetail: true,
      favoriteCountry: false,
    }
  },
  methods: {
    hideDetails() {
      return this.hideDetail = false;
    },
    favorite(fav) {
      if (fav === true) {
        this.favoriteCountry = fav
      } else {
        return this.favoriteCountry;
      }
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
    onSale() {
      return countryData.countries[this.selectedCountryIndex].cost < 1000;
    },
    isExpensive() {
      return this.country.cost > 4000;
    },
  },
}
</script>
<style scoped>
h1 {
  text-align: center;
  font-weight: bold;
}

/*countries {
  width: 100%;
  font-size: 20pt;
  font-weight: bold;
  border: 1px solid black;
  margin: 10px 0px;
  padding: 10px;
}*/
</style>