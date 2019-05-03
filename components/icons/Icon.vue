<template>
  <div>
    <font-awesome-icon :icon="icon" :size="size" />
    <br />
    <h3>{{ text }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    text: String,
    icon: String,
    size: String
  }
}
</script>

<style>
a {
  text-decoration: none;
}
a:visited {
  color: #4dd0e1;
}
</style>
