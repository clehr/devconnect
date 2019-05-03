<template>
  <div class="center justify shorten-80">
    <Figure
      img="teamwork_light-lady-medium.png"
      caption="Mentoring Community"
      width="150"
      height="150"
    />

    <Figure
      img="laptop_code--light--small.png"
      caption="Hands On Project"
      width="175"
      height="150"
    />

    <Figure
      img="hnd_seedling--light--xs.png"
      caption="Foster Learning"
      width="175"
      height="150"
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
}

.shorten-80 {
  width: 80%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.make-responsive {
  max-width: 10px;
}
</style>
