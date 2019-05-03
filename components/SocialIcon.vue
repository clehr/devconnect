<template>
  <div>
    <a :href="href" target="_blank">
      <font-awesome-icon :icon="['fab', icon]" size="3x" />
      <br />
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    text: String,
    icon: String,
    href: String
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
