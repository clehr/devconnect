<template>
  <figure class="center margin-bottom-15">
    <span class="flex-column">
      <font-awesome-icon :icon="iconMale.name" :size="iconMale.size" />
    </span>
    <figcaption class="icon__caption">Team Coach</figcaption>
    <ul class="align-items-in-center">
      <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
    </ul>
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
        size: '8x'
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

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.align-items-in-center {
  text-align: left;
}
.margin-bottom-15 {
  margin-bottom: 15%;
}

@media only screen and (min-width: 768px) {
  .margin-bottom-15 {
    margin-bottom: 0;
  }
}
</style>
