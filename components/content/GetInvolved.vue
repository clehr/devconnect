<template>
  <div>
    If you want to join us or even just want to have a look and say hello you
    can find us under: <br /><br />
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
    <br />
    <br />

    Looking forward to see you! :)
  </div>
</template>

<script>
import SocialIcon from '../icons/SocialIcon'
import EmailIcon from '../icons/EmailIcon'

export default {
  name: 'GetInvolved',
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
