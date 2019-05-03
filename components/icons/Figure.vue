<template>
  <figure>
    <img
      :src="require('../../assets/' + img)"
      :width="width"
      :height="height"
    />
    <figcaption>
      <h3>{{ caption }}</h3>
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
    img: String
  }
}
</script>
