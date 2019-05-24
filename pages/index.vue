<template>
  <div class="responsive-app">
    <img
      alt="DevConnect logo"
      src="../assets/logo-above-name--dark.png"
      class="make-responsive"
    />
    <div class="subtitle">
      Create &#9679; Learn &#9679; Grow
    </div>

    <Divider content="Why mentoring?" class="margin-top-5" />
    <div class="margin-bottom-5 center width-70">
      Our idea of a growing and diverse community is already 5 years old and
      finally it takes a concrete form!<br /><br />

      Especially as a beginner it's hard to find his/her own way into the IT
      world as there is so much to explore.<br /><br />

      Should I become a backend or a frontend developer? Which language do I
      chose? Java, Javascript or maybe better Ruby? Where to start? <br /><br />

      Also many struggle if they are even suited to become developer especially
      when they have reached a certain age. Often the thought is: "I'm too old
      to become a programmer". <br /><br />

      The message of DevConnect is quite clear: "No, you are not! And yes also
      you can become a developer."<br /><br />

      As in our opinion everyone has the potencial to learn new things we want
      to empower that.<br /><br />
      And what is the best way to do that? By having a caring and supportive
      community and mentors that will guide you through the process of getting
      more experience and getting to know a lot of people that are beginners
      like you. <br /><br />

      Today's beginners are tomorrows mentors, so join us today!
    </div>

    <Divider content="Mission" />
    <MissionContent class="margin-bottom-5" />

    <Divider content="Roles" />
    <div class="justify shorten-80 center margin-bottom-5">
      <IconMentor
        :subpoints="[
          'Actively develops with the other members in a group of max 6 people',
          'Assists and cares for the other members in every questions regarding IT'
        ]"
      />
      <IconMentee
        :subpoints="[
          'Decides with the other members on a project they want to develop together',
          'Grows and connects with other people',
          'Makes first experience in IT in a helpful and caring community'
        ]"
      />
      <IconTeamCoach
        :subpoints="[
          'Guides the others through the team project',
          'Is the connection between other teams',
          'Cares for organizational things regarding the team',
          'Does retrospectives with the team with the goal to make everyone happier'
        ]"
      />
      <IconOrganizer
        :subpoints="[
          'Assists in organizing meetups and talks',
          'Actively helps to grow DevConnect',
          'Helps with the social media presence'
        ]"
      />
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
import AboutUsContent from '../components/content/AboutUsContent'
import GetInvolvedContent from '../components/content/GetInvolvedContent'
import MissionContent from '../components/content/MissionContent'
import Impressum from '../components/content/Impressum'
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
  flex-flow: column;
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
.make-responsive {
  max-width: 100%;
}
.responsive-app {
  max-width: 90%;
  margin: 10% auto 10%;
}

@media only screen and (min-width: 768px) {
  .justify {
    flex-flow: row;
  }
}
</style>
