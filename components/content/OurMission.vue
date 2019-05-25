<template>
  <div class="center justify shorten-80">
    <Figure
      img="teamwork_light-lady-medium.png"
      caption="Mentoring Community"
      width="150"
      height="150"
      :subpoints="[
        'Join a welcoming community with more than 80 members',
        'Your level of experience does not matter we welcome everyone from Junior\n' +
          '      to Senior',
        ' We are a trying to build up a diverse community with a learn friendly open\n' +
          '      environment'
      ]"
    />

    <Figure
      img="laptop_code--light--small.png"
      caption="Hands On Project"
      width="175"
      height="150"
      :subpoints="[
        'Gather ideas in your own team of maximal 6 people',
        'Realize your own projects with supervision from a mentor',
        'Get experience by working on fun projects'
      ]"
    />

    <Figure
      img="hnd_seedling--light--xs.png"
      caption="Foster Learning"
      width="175"
      height="150"
      :subpoints="[
        'Grow as a person by tackling challenges as a team',
        'Find and improve your own ideas of what it means to be a developer',
        'Inspire others by telling your story of becoming/being a software developer'
      ]"
    />
  </div>
</template>

<script>
import Figure from '../icons/Figure'

export default {
  name: 'MissionContent',
  components: { Figure }
}
</script>

<style>
.justify {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-flow: column;
}

.shorten-80 {
  width: 80%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (min-width: 768px) {
  .justify {
    flex-flow: row;
  }
}
</style>
