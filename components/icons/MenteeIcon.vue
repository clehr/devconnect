<template>
  <span class="mentee-icon">
    <font-awesome-icon
      class="mentee-icon__cap"
      :icon="iconGraduationCap.name"
      :size="iconGraduationCap.size"
    />
    <font-awesome-icon :icon="iconMale.name" :size="iconMale.size" />
  </span>
</template>

<script>
export default {
  name: 'Mentee',
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

<style lang="stylus" scoped>
.mentee-icon {
  display: block;
  position: relative;
  padding-top: 2%;

  &__cap {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-20%);
  }
}
</style>
