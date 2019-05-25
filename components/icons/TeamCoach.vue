<template>
  <figure>
    <span class="flex-column">
      <font-awesome-icon :icon="iconMale.name" :size="iconMale.size" />
    </span>
    <figcaption class="icon__caption">Team Coach</figcaption>
    <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
  </figure>
</template>

<script>
export default {
  name: 'TeamCoach',
  props: {
    subpoints: {
      default: () => [],
      type: Array
    }
  },
  data: function() {
    return {
      iconMale: {
        name: 'chalkboard-teacher',
        size: '10x'
      }
    }
  }
}
</script>

<style scoped>
.icon__caption {
  margin-top: 1em;
  font-size: 1.3em;
  font-weight: bold;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
</style>
