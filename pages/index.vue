<template>
  <v-container grid-list-md text-xs-center class="responsive-app">
    <v-layout row wrap>
      <v-flex>
        <img
          alt="DevConnect logo"
          src="@/assets/img/logo-above-name--dark.png"
          class="make-responsive"
        />
        <div class="subtitle">
          Create &#9679; Learn &#9679; Grow
        </div>
        <Divider :content="data.intro.title" />
      </v-flex>
      <v-flex>
        <p v-for="item in data.intro.copy" :key="item.key">
          {{ item }}
        </p>
      </v-flex>
      <v-flex>
        <Divider :content="data.mission.title" />
        <OurMission />
        <Divider :content="data.roles.title" />
        <Roles />
        <Divider content="Get involved" />
        <GetInvolved />
        <Divider content="About us" />
        <AboutUs />
      </v-flex>
      <v-flex>
        <Divider />
        <LegalNotice />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AboutUs from '../components/content/AboutUs'
import GetInvolved from '../components/content/GetInvolved'
import OurMission from '../components/content/OurMission'
import LegalNotice from '../components/content/LegalNotice'
import Divider from '../components/Divider'
import Roles from '../components/content/Roles'

export default {
  components: {
    Roles,
    AboutUs,
    GetInvolved,
    OurMission,
    LegalNotice,
    Divider
  },
  computed: {
    data() {
      return this.$store.state.homepage
    }
  },
  head() {
    return {
      title: 'devconnect',
      meta: [
        {
          name: 'twitter:title',
          content: 'DevConnect -  Create \\&#9679; Learn \\&#9679; Grow'
        },
        {
          name: 'twitter:description',
          content:
            'Welcome to DevConnect where everyone who wants to learn is welcome!'
        },
        {
          name: 'twitter:image',
          content: '/assets/img/logo-above-name--dark.png'
        },
        { name: 'twitter:card', content: 'Welcome to DevConnect!' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.responsive-app {
    max-width: 90%;
    margin: 5% auto 10%;
}

.subtitle {
  font-size: x-large;
  font-weight: bold;
  padding-bottom: 20px;
  padding-top: 30px;
}
.make-responsive {
  max-width : "calc(100% - %s)" % space;
}
</style>
