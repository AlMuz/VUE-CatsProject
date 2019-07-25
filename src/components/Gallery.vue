<template>
  <b-row>
    <b-col lg="4" sm="6" v-for="index in counter" :key="index">
      <ImageComponent :counter="index"></ImageComponent>
    </b-col>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </b-row>
</template>

<script>
import ImageComponent from '@/components/Image.vue';

export default {
  data() {
    return {
      counter: 10,
    }
  },
  methods: {
    infiniteHandler($state) {
      this.counter += 10;
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
