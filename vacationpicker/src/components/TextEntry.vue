<template>
  <div class="row border-top border-dark my-4">
    <div class="col-md-4 d-flex ">
    </div>

    <div class="col-md-4 d-flex justify-content-center align-items-center">
    <input type="text" v-model="myInput" @keyup.enter="checkClick" placeholder="Type Here?">
    <button @click="checkClick" class="btn btn-success mt-3">
      <i class="bi bi-plus-lg"></i>
    </button>
    </div>

    <div class="col-md-4 d-flex justify-content-center align-items-center">
    <text-detail v-if="click" :my-input="myInput"/>
    </div>
  </div>

</template>

<script>
import textDetail from "@/components/TextDetail";
export default {
  name: "TextEntry",
  components: {textDetail},

  data() {
    return {
      myInput: '',
      click: false,
    }
  },

  methods: {
    checkClick() {
      this.click = true
    },

  },

  /*computed: {
  checkInput(myInput) {
    return {
      input: myInput
    }
  }
}*/

}

</script>

<style scoped>
form {
  width: 100%;
}

</style>