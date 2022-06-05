<template>
  <div class="container-fluid">
      <div class="row my-5">
        <div class="col-md-2 "></div>
        <div class="col-md-8 d-flex justify-content-center align-content-center ">
          <h1 class="display-3 ">Pick your
            <span class="text-success">
            vacation
            </span>
<!--            <br> counter: {{counter}}-->
          </h1>

        </div>
        <div class="col-md-2"></div>
      </div>


    <div class="row border-top border-dark">
      <div class="col-md-2"></div>
      <div class="col-md-8 d-flex justify-content-center align-content-center">
<!--        <div class="Buttons-container">-->
<!--          <button @click="countUp" class="btn btn-success">+</button>-->
<!--          <button @click="countDown" class="btn btn-danger">-</button>-->
<!--        </div>-->
      </div>
      <div class="col-md-2"></div>
    </div>

    <div class="row ">



      <div class="col-6 my-5">
<!--        <ul class="list-group " v-for="(country, index) in countryData.countries" v-bind:key="country.id"
             @click="selectCountry(index)">
          <li class="list-group-item"  v-bind:title="country.details" v-bind:id="country.id">
            <span v-bind:id="country.id" v-bind:title="country.details">
                {{ country.name }}
            </span>

          </li>
        </ul>-->


        <div>
            <h2 class="display-6 bg-warning bg-opacity-25 p-3 text-center">
              {{selectedCountry.name}}
              <br>
              Capital: <b>{{selectedCountry.capital}}</b>
              <br>
              <span v-if="onSale" class="text-dark">
                <hr>

                ON SALE!!
              </span>

            </h2>
          <button @click="selectedCountryIndex--" class="btn btn-danger">Back</button>
          <button @click="selectedCountryIndex++" class="btn btn-success">Next</button>
          <button @click="hideDetails" class="btn btn-warning">Hide details</button>
        </div>
      </div>


      <div class="col-4 my-6">
        <h2>{{ selectedCountry.name }}</h2>
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
            <img :src=" getImgUrl(selectedCountry.img)" :alt="selectedCountry.img" class="img-fluid">
          </li>
          <li class="list-group-item" v-if="hideDetail == true">
          {{ selectedCountry.details }}
        </li>
          <li class="list-group-item" v-show="onSale">
            <p class="bg-warning px-2">On Sale!</p>
            <p>{{ text}}</p>
          </li>
        </ul>
      </div>

<!--      <div class="col-md-4 ">
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
    </div>

    <div class="row border-top border-dark">
      <div class="col-md-4 mt-2">
        <h2>Add country</h2>
        <input type="text" v-model="newCountry" @keyup.enter="addCountry(newCountry)" class="form-control" placeholder="Add a new country">
        <br>
        <button @click="addCountry(newCountry)" class="btn btn-outline-dark">Add country</button>


      </div>
      <div class="col-md-4 mt-5">
        <ul class="list-group">
          <li class="list-group-item" v-for="(country, index) in newCountries" :key="index">
            {{country}}
            <button> <i class="bi bi-trash3"></i></button>
          </li>
        </ul>
      </div>
      <div class="col-md-4"></div>
    </div>

  </div>


</template>

<script>
import countryData from "@/data/countryData";
import mixins from "@/mixins/mixins";


export default {
  name: "VacationPicker",
  mixins: [mixins],

  data() {
    return {
      countryData,
      counter: 0,
      selectedCountryIndex: 0,

      selectedCost: 0,
      costs: [0,1000,2000,3000,4000,5000,6000],
      filteredCountries: [],

      //Hij heeft een voorkeur naar de text: '' van de component
      // text: 'component tekstje ouleh'

      newCountry: '',
      newCountries: [],

      hideDetail: true,

    }
  },




  methods: {
    countUp() {
      this.counter++;
    },

    countDown() {
      this.counter--;
    },

    hideDetails() {
      return this.hideDetail = false;
    },

    selectCountry(index) {
      this.selectedCountryIndex = index;
      console.log(this.selectedCountryIndex);

    },


    filterCountries() {
      this.filteredCountries = this.countryData.countries.filter(country => country.cost < this.selectedCost)
    },

    addCountry(country) {
      this.newCountries.push(country);
      this.newCountry = '';
    },
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


  },
  created() {
    console.log('Component VacationPicker.vue created')

  },

}



</script>

<style scoped>

div {
}

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