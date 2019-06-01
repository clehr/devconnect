<template>
  <v-layout row wrap align-baseline class="get-involved">
    <v-flex xs12>
      <p class="get-involved__text">
        If you want to join us or even just want to have a look and say hello
        you can find us under:
      </p>
    </v-flex>
    <v-flex xs12 sm4>
      <SocialIcon
        class="inline-block grow"
        icon="twitter"
        text="@devconnectHH"
        href="https://twitter.com/devconnectHH"
      />
    </v-flex>
    <v-flex xs12 sm4>
      <EmailIcon
        class="inline-block grow"
        icon="envelope"
        email="devconnect.hh@gmail.com"
      />
    </v-flex>
    <v-flex xs12 sm4>
      <SocialIcon
        class="inline-block grow margin-left-4em"
        icon="meetup"
        text="devconnect HH"
        href="https://www.meetup.com/de-DE/devconnect-hh/"
      />
    </v-flex>
    <v-flex xs12>
      <p class="get-involved__subtext">
        Looking forward to see you! :)
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
import SocialIcon from '../icons/SocialIcon'
import EmailIcon from '../icons/EmailIcon'

export default {
  name: 'GetInvolved',
  components: { EmailIcon, SocialIcon }
}
</script>

<style lang="stylus" scoped>
.get-involved {
  &__text {
    margin-bottom: space * 2;
  }
  &__subtext {
    margin-top: space * 2;
  }
}
.grow {
  &:hover {
    transform: scale(1.4) perspective(1px);
  }
  transition: transform 0.2s ease-in-out;
}
</style>
