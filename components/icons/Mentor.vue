<template>
  <figure class="icon--mentor">
    <span class="flex-row--centered">
      <font-awesome-icon :icon="iconFemale.name" :size="iconFemale.size" />
      <font-awesome-icon
        :icon="iconLaptopCode.name"
        :size="iconLaptopCode.size"
      />
    </span>
    <figcaption class="icon__caption">Mentor</figcaption>
    <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
  </figure>
</template>

<script>
export default {
  name: 'IconMentor',
  props: {
    subpoints: {
      default: () => [],
      type: Array
    }
  },
  data: function() {
    return {
      iconFemale: {
        name: 'female',
        size: '10x'
      },
      iconLaptopCode: {
        name: 'laptop-code',
        size: '3x'
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
.flex-row--centered {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
