<template>
  <div class="padding-bottom-30px center-30">
    <h2>
      <span>{{ content }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    content: String
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
</style>
