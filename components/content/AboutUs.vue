<template>
  <div class="width-65p center justify">
    <RoundImage
      class="grow"
      img="chris.jpeg"
      width="75"
      height="75"
      name="Christian"
      githublink="https://github.com/clehr"
    />
    <RoundImage
      class="grow"
      img="steffi.jpeg"
      width="75"
      height="75"
      name="Stefanie"
      githublink="https://github.com/StefanieStoppel/"
    />
    <RoundImage
      class="grow"
      img="flo.jpg"
      width="75"
      height="75"
      name="Flo"
      githublink="https://github.com/clehr"
    />
    <RoundImage
      class="grow"
      img="angelie.jpeg"
      width="75"
      height="75"
      name="Angelie"
      githublink="https://github.com/clehr"
    />
    <RoundImage
      class="grow"
      img="mary.jpeg"
      width="75"
      height="75"
      name="Mary"
      githublink="https://github.com/clehr"
    />
    <RoundImage
      class="grow"
      img="holger.png"
      width="75"
      height="75"
      name="Holger"
      githublink="https://github.com/holgzn"
    />
  </div>
</template>

<script>
import RoundImage from '../RoundImage'

export default {
  name: 'AboutUsContent',
  components: { RoundImage }
}
</script>

<style>
.justify {
  display: flex;
  justify-content: space-between;
}

.width-65p {
  width: 65%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.grow {
  transition: transform 0.2s ease-in-out;
}

.grow:hover {
  /*  Making button bigger on hover  */
  transform: scale(1.4) perspective(1px);
}
</style>
