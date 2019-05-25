<template>
  <div class="margin-bottom">
    <a :href="href" target="_blank" class="dark-blue">
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
.margin-bottom {
  margin-bottom: 5%;
}

.dark-blue:hover {
  color: #135b79;
}
</style>
