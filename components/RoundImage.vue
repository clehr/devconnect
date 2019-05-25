<template>
  <a :href="githublink" target="_blank">
    <figure class="margin-bottom">
      <img
        class="round"
        :src="require('../assets/' + img)"
        :width="width"
        :height="height"
      />
      <figcaption>
        <h3>{{ name }}</h3>
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  name: 'RoundImage',
  props: {
    name: String,
    width: String,
    height: String,
    img: String,
    githublink: String
  }
}
</script>

<style>
.round {
  border-radius: 50%;
}
.margin-bottom {
  margin-bottom: 10%;
}
</style>
