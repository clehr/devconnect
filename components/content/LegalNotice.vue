<template>
  <div class="legal-notice">
    <h4 class="legal-notice__title">{{ data.title }}</h4>
    <!-- eslint-disable vue/no-v-html -->
    <p v-for="text in data.text" :key="text.id" v-html="text" />
    <!-- eslint-enable vue/no-v-html -->
  </div>
</template>

<script>
export default {
  name: 'LegalNotice',
  computed: {
    data() {
      return this.$store.state.legalNotice
    }
  }
}
</script>
<style lang="stylus" scoped>
.legal-notice {
  font-size: 1rem;

  &__title {
    font-size: 1.5em;
    font-weight: 700;
  }
}
</style>
