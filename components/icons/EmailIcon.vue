<template>
  <div class="margin-bottom">
    <a :href="`mailto:${email}`">
      <font-awesome-icon :icon="icon" size="3x" class="dark-blue" />
      <br />
      {{ displayEmail }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'EmailIcon',
  props: {
    email: String,
    icon: String
  },
  computed: {
    displayEmail: function() {
      return this.email.split('@').join('[at]')
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
  color: #4dd0e1;
}
.margin-bottom {
  margin-bottom: 5%;
}

.dark-blue:hover {
  color: #135b79;
}
</style>
