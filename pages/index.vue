<template>
  <div class="responsive-app">
    <img
      alt="DevConnect logo"
      src="../assets/logo-above-name--dark.png"
      class="make-responsive"
    />
    <div class="subtitle">Create &#9679; Learn &#9679; Grow</div>

    <Divider content="Why mentoring?" class="margin-top-5" />
    <div class="margin-bottom-5 center width-70">
      <p>
        Our idea of a growing and diverse community is already 5 years old and
        finally it takes a concrete form!
      </p>
      <p>
        Especially as a beginner it's hard to find his/her own way into the IT
        world as there is so much to explore.
      </p>
      <p>
        Should I become a backend or a frontend developer? Which language do I
        chose? Java, Javascript or maybe better Ruby? Where to start?
      </p>
      <p>
        Also many struggle if they are even suited to become developer
        especially when they have reached a certain age. Often the thought is:
        "I'm too old to become a programmer".
      </p>
      <p>
        The message of DevConnect is quite clear: "No, you are not! And yes, you
        can become a developer too."
      </p>
      <p>
        As in our opinion everyone has the potential to learn new things we want
        to empower that.
      </p>
      <p>
        And what is the best way to do that? By having a caring and supportive
        community and mentors that will guide you through the process of getting
        more experience and getting to know a lot of people that are beginners
        like you.
      </p>
      <p>
        Today's beginners are tomorrow's mentors, so join us today!
      </p>
    </div>

    <Divider content="Our Mission" />
    <OurMission class="margin-bottom-5" />

    <Divider content="Roles" />
    <Roles />

    <Divider content="Get involved" />
    <GetInvolved class="margin-bottom-5" />

    <Divider content="About us" />
    <AboutUs />

    <Impressum class="margin-top-5" />
  </div>
</template>

<script>
import AboutUs from '../components/content/AboutUs'
import GetInvolved from '../components/content/GetInvolved'
import OurMission from '../components/content/OurMission'
import Impressum from '../components/content/Impressum'
import Divider from '../components/Divider'
import Roles from '../components/content/Roles'

export default {
  components: {
    Roles,
    AboutUs,
    GetInvolved,
    OurMission,
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
  margin: 5% auto 10%;
}
</style>
