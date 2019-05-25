<template>
  <div class="padding-bottom-30px center-30 make-responsive">
    <h2>
      <span>{{ content }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    content: {
      default: () => 'Test',
      type: String
    }
  }
}
</script>

<style scoped>
.center-30 {
  width: 30%;
  margin: 0 auto;
}

.padding-bottom-30px {
  padding-bottom: 30px;
}

h2 {
  border-bottom: 1px solid #4dd0e1;
  line-height: 0.1em;
}

h2 span {
  background: #212121;
  padding: 0 10px;
}

@media screen and (max-width: 800px) {
  .make-responsive {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>
