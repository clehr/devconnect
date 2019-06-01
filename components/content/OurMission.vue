<template>
  <v-layout row wrap align-baseline class="our-mission">
    <v-flex
      v-for="point in data.points"
      :key="point.id"
      xs12
      md4
      class="our-mission__item"
    >
      <Card :data="point">
        <img :src="point.img" :width="point.width" :height="point.height" />
      </Card>
    </v-flex>
  </v-layout>
</template>
<script>
import Card from '../ui/card'

export default {
  name: 'OurMission',
  components: { Card },
  props: {},
  computed: {
    data() {
      return this.$store.state.ourMission
    }
  }
}
</script>
<style lang="stylus" scoped>
.our-mission {
    &__item {
      margin-bottom: space * 4;

      +breakpoint-up(md) {
        margin-bottom: 0;
      }
    }
}
</style>
