<template>
  <div class="justify shorten center">
    <SocialIcon
      class="inline-block grow"
      icon="twitter"
      text="@devconnectHH"
      href="https://twitter.com/devconnectHH"
    />
    <SocialIcon
      class="inline-block grow margin-left-4em"
      icon="meetup"
      text="devconnect HH"
      href="https://www.meetup.com/de-DE/devconnect-hh/"
    />
    <EmailIcon
      class="inline-block grow"
      icon="envelope"
      email="devconnect.hh@gmail.com"
    />
  </div>
</template>

<script>
import SocialIcon from '../components/SocialIcon'
import EmailIcon from '../components/EmailIcon'

export default {
  name: 'GetInvolvedContent',
  components: { EmailIcon, SocialIcon }
}
</script>

<style>
.justify {
  display: flex;
  justify-content: space-between;
}

.shorten {
  width: 50%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.margin-left-4em {
  margin-left: 4em;
}

.grow {
  transition: transform 0.2s ease-in-out;
}

.grow:hover {
  /*  Making button bigger on hover  */
  transform: scale(1.4) perspective(1px);
}
</style>
