<template>
  <figure class="margin-bottom-15-p">
    <img
      :src="require('../../assets/' + img)"
      :width="width"
      :height="height"
      class="make-responsive"
    />
    <figcaption>
      <h3 class="make-responsive">{{ caption }}</h3>
      <ul class="align-items-in-center">
        <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
      </ul>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'Figure',
  props: {
    caption: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
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

.align-items-in-center {
  text-align: left;
}
.margin-bottom-15-p {
  margin-bottom: 15%;
}

@media only screen and (min-width: 768px) {
  .margin-bottom-15-p {
    margin-bottom: 0;
  }
}
</style>
