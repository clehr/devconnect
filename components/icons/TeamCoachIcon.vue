<template>
  <span class="flex-column">
    <font-awesome-icon :icon="iconMale.name" :size="iconMale.size" />
  </span>
</template>

<script>
export default {
  name: 'TeamCoachIcon',
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

<style lang="stylus" scoped></style>
