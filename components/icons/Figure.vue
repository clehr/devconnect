<template>
  <figure>
    <img
      :src="require('../../assets/' + img)"
      :width="width"
      :height="height"
      class="make-responsive"
    />
    <figcaption>
      <h3 class="make-responsive">{{ caption }}</h3>
      <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'Figure',
  props: {
    caption: String,
    width: String,
    height: String,
    img: String,
    subpoints: {
      default: () => [],
      type: Array
    }
  }
}
</script>

<style scoped>
.make-responsive {
  max-width: 100%;
  height: auto;
}
</style>
