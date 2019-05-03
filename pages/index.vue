<template>
  <div>
    <img alt="DevConnect logo" src="../assets/logo-above-name--dark.png" />
    <div class="subtitle">
      Create &#9679; Learn &#9679; Grow
    </div>

    <Divider content="Why mentoring?" class="margin-top-5" />
    <div class="margin-bottom-5 center width-70">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </div>

    <Divider content="Mission" />
    <MissionContent class="margin-bottom-5" />

    <Divider content="Roles" />
    <div class="justify shorten-80 center margin-bottom-5">
      <IconMentor />
      <IconMentee />
      <IconTeamCoach />
      <IconOrganizer />
    </div>

    <Divider content="Get involved" />
    <GetInvolvedContent class="margin-bottom-5" />

    <Divider content="About us" />
    <AboutUsContent />

    <Impressum class="margin-top-5" />
  </div>
</template>

<script>
import IconOrganizer from '../components/icons/IconOrganizer'
import IconTeamCoach from '../components/icons/IconTeamCoach'
import IconMentor from '../components/icons/IconMentor'
import IconMentee from '../components/icons/IconMentee'
import AboutUsContent from '../components/AboutUsContent'
import GetInvolvedContent from '../components/GetInvolvedContent'
import MissionContent from '../components/MissionContent'
import Impressum from '../components/Impressum'
import Divider from '../components/Divider'

export default {
  components: {
    IconOrganizer,
    IconTeamCoach,
    IconMentor,
    IconMentee,
    AboutUsContent,
    GetInvolvedContent,
    MissionContent,
    Impressum,
    Divider
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
          content: '../assets/logo-above-name--dark.png'
        },
        { name: 'twitter:card', content: 'Welcome to DevConnect!' }
      ]
    }
  }
}
</script>

<style>
.subtitle {
  font-size: x-large;
  font-weight: bold;
  padding-bottom: 20px;
  padding-top: 30px;
}

figure {
  display: inline-block;
}

.justify {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.shorten-80 {
  width: 80%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
.margin-top-5 {
  margin-top: 5%;
}

.margin-bottom-5 {
  margin-bottom: 5%;
}

.width-70 {
  width: 70%;
}
</style>
