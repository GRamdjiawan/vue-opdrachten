export default {
    data(){
      return {
          // text: 'Mixin tekstje ouleh',
      }
    },

    methods: {
        getImgUrl(img) {
            return require('../assets/countries/' + img)
        }
    }
}