<template lang="html">
  <figure class="card">
    <slot />
    <figcaption>
      <h3 class="card__caption">{{ data.name }}</h3>
    </figcaption>
    <ul class="card__list">
      <li v-for="point in data.points" :key="point.id">
        {{ point }}
      </li>
    </ul>
  </figure>
</template>

<script lang="js">
  export default  {
    name: 'ComponentsUiCard',
    props: {
      data: {
        type: Object,
        default: () => ({})
      }
    },
}
</script>

<style scoped lang="stylus">
.card {
  font-size: 1rem;
  margin: 0 auto;
  width : calc(100% - 1em);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  &__caption {
    margin-top: space * 2;
    margin-bottom: space * 2;
    font-size: 1.3em;
    font-weight: bold;
  }

  &__list {
    +breakpoint-up(sm) {
      max-width: 350px;
    }

    +breakpoint-up(md) {
      width: auto;
    }

    margin: 0;
    padding: 0;
    text-align: left;
    width: 90%;
  }
}
</style>
