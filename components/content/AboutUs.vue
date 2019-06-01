<template>
  <v-layout row wrap align-baseline justify-center>
    <v-flex v-for="member in data.aboutUs" :key="member.id" xs4 sm2>
      <a
        v-if="member.githublink.length"
        :href="member.githublink"
        target="_blank"
      >
        <RoundImage class="grow" :item="member"></RoundImage>
      </a>
      <span v-else :key="member.id">
        <RoundImage class="grow" :item="member"></RoundImage>
      </span>
    </v-flex>
  </v-layout>
</template>

<script>
import RoundImage from '../RoundImage'

export default {
  name: 'AboutUs',
  components: { RoundImage },
  computed: {
    data() {
      return this.$store.state.homepage
    }
  }
}
</script>

<style lang="stylus">
.grow {
  transition: transform 0.2s ease-in-out;
  +breakpoint-up(sm) {
    &:hover {
      color: #135b79;
      transform: scale(1.4) perspective(1px);
    }
  }
}
</style>
