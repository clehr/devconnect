<template>
  <figure class="margin-bottom-15">
    <span class="flex-row--centered">
      <font-awesome-icon :icon="iconFemale.name" :size="iconFemale.size" />
      <font-awesome-icon
        :icon="iconLaptopCode.name"
        :size="iconLaptopCode.size"
      />
    </span>
    <figcaption class="icon__caption">Mentor</figcaption>
    <ul class="align-items-in-center">
      <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
    </ul>
  </figure>
</template>

<script>
export default {
  name: 'Mentor',
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
  justify-content: center;
}
.align-items-in-center {
  text-align: center;
}
.margin-bottom-15 {
  margin-bottom: 15%;
}
</style>
