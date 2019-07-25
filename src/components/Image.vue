<template>
  <b-img-lazy
    :src="getImageUrl(counter)"
    fluid
    class="mt-1"
    :alt="'Image ' + counter">
  </b-img-lazy>
</template>

<script>
export default {
  props: ['counter'],
  methods: {
    getImageUrl(count) {
      console.log(count);
      return `https://cataas.com/cat?time=${count}`
    }
  }
}
</script>

<style scoped>
</style>
