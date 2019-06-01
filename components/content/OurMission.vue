<template>
  <v-layout row wrap align-baseline class="our-mission">
    <v-flex
      v-for="point in data.mission.points"
      :key="point.id"
      xs12
      md4
      class="our-mission__col"
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
  &__col {
    +breakpoint-up(md) {
      margin-bottom: 0;
    }
    margin-bottom: space * 4;
  }
}
</style>
