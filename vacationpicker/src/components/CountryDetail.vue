<template>
  <h2>
    {{ country.name }}
  </h2>
  <ul class="list-group">
    <li class="list-group-item">
      {{ country.id }}
      <div class="float-end">
        <button @click="setFavorite" class="btn btn-warning">
          <i class="bi bi-star"></i>
        </button>
      </div>
    </li>
    <li class="list-group-item">
      {{ country.name }}
    </li>
    <li class="list-group-item">
      {{ country.capital }}
    </li>

    <li class="list-group-item">
      <img :src=" getImgUrl(country.img)" :alt="country.img" class="img-fluid">
    </li>
  <li class="list-group-item" v-if="hideDetail == true">
      {{ country.details }}
    </li>
    <li class="list-group-item" v-show="onSale">
      <p class="bg-warning px-2">On Sale!</p>
    </li>
    <li class="list-group-item" v-if="isExpensive">
      <p class="bg-warning px-2">Expensive!</p>
    </li>
  </ul>
</template>

<script>
import mixins from "@/mixins/mixins";

export default {
  name: "CountryDetail",
  props: {
    country: {
      type: Object,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
    },

  },
  mixins: [mixins],

  methods: {
    setFavorite() {
      this.$emit('favorite', true)
    }

  },

  computed: {
    onSale() {
      return this.country.cost < 1000;
    },

    isExpensive() {
      return this.country.cost > 4000;
    },
  }
}
</script>

<style scoped>

</style>

