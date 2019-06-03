<template>
  <div class="divider">
    <h2 v-if="content" class="divider__line">
      <span>{{ content }}</span>
    </h2>
    <div v-else class="divider__line"></div>
  </div>
</template>

<script>
export default {
  name: 'Divider',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.divider {

  +breakpoint-up(sm) {
    width: 30%;
  }
  margin: (space * 3) auto;

  &__line {
    border-bottom: 1px solid #4dd0e1;
    line-height: 0.1em;

    > span {
      background: #212121;
      padding: 0 10px;
    }
  }
}
</style>
