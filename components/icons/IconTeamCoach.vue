<template>
  <figure class="width-15p">
    <img src="../../assets/teacher-pult.png" class="full-width" />
    <figcaption class="icon__caption text-left">Team Coach</figcaption>
    <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
  </figure>
</template>

<script>
export default {
  name: 'IconTeamCoach',
  props: {
    subpoints: Object
  }
}
</script>

<style scoped>
.icon__caption {
  margin-top: 1em;
  font-size: 1.3em;
  font-weight: bold;
}
.width-15p {
  width: 15%;
}
.full-width {
  width: 100%;
}
.text-left {
  text-align: left;
}
</style>
