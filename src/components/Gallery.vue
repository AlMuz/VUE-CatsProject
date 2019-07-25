<template>
  <b-row style="min-height: 700px;">
    <b-col lg="4" sm="6" v-for="index in counter" :key="index">
      <ImageComponent :counter="index"></ImageComponent>
    </b-col>
    <b-col offset-lg="4" lg="4" sm="12">
      <infinite-loading @infinite="infiniteHandler" ></infinite-loading>
    </b-col>
  </b-row>
</template>

<script>
import ImageComponent from '@/components/Image.vue';

export default {
  data() {
    return {
      counter: 6,
      loading: true,
    }
  },
  methods: {
    infiniteHandler($state) {

      // this part need to prevent autofire of infinite-loader loading a lot images in first 3 seconds
      if (this.loading) {
        setTimeout(() => {
          this.loading = false;
          this.loadImages($state);
        }, 3000);
      }else {
        this.loadImages($state);
      }
    },
    loadImages($state) {
      this.counter += 6;
      $state.loaded();
    }
  },
  components: {
    ImageComponent,
  },
}
</script>

<style scoped>

</style>
