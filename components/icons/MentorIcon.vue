<template>
  <span class="mentor-icon">
    <font-awesome-icon :icon="iconFemale.name" :size="iconFemale.size" />
    <font-awesome-icon
      :icon="iconLaptopCode.name"
      :size="iconLaptopCode.size"
      class="mentor-icon__laptop"
    />
  </span>
</template>

<script>
export default {
  name: 'MentorIcon',
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
<style lang="stylus" scoped>
.mentor-icon {
  position: relative;

  &__laptop {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(140%, 120%);
  }
}
</style>
