<template>
  <figure class="round-image">
    <img
      class="round-image__img"
      :src="item.img"
      :width="item.width"
      :height="item.height"
    />
    <figcaption>
      <h4 class="round-image__name">{{ item.name }}</h4>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'RoundImage',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="stylus">
.round-image {
  font-size: 1rem;
  margin-bottom: 10%;

  &__img {
    border-radius: 50%;
  }

  &__name {
    font-size: 1em;
    font-weight: 400;
  }
}
</style>
