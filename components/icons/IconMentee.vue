<template>
  <figure>
    <span class="flex-column">
      <font-awesome-icon
        class="margin-bottom-minus-0-25em"
        :icon="iconGraduationCap.name"
        :size="iconGraduationCap.size"
      />
      <font-awesome-icon :icon="iconMale.name" :size="iconMale.size" />
    </span>
    <figcaption class="icon__caption">Mentee</figcaption>
    <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
  </figure>
</template>

<script>
export default {
  name: 'IconMentee',
  props: {
    subpoints: Object
  },
  data: function() {
    return {
      iconMale: {
        name: 'male',
        size: '10x'
      },
      iconGraduationCap: {
        name: 'graduation-cap',
        size: '3x'
      }
    }
  }
}
</script>

<style scoped>
.margin-bottom-minus-0-25em {
  margin-bottom: -0.25em;
}
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
