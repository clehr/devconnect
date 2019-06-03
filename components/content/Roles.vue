<template>
  <v-layout row wrap align-baseline class="roles">
    <v-flex
      v-for="role in data.roles"
      :key="role.id"
      xs12
      sm6
      lg3
      class="roles__col"
    >
      <Card :data="role">
        <component
          :is="role.name + 'Icon'"
          v-bind="role.attributes"
          :data="role"
        />
      </Card>
    </v-flex>
  </v-layout>
</template>
<script>
import MenteeIcon from '../icons/MenteeIcon'
import MentorIcon from '../icons/MentorIcon'
import OrganizerIcon from '../icons/OrganizerIcon'
import TeamCoachIcon from '../icons/TeamCoachIcon'
import Card from '../ui/card'

export default {
  name: 'Roles',
  components: {
    TeamCoachIcon,
    MenteeIcon,
    MentorIcon,
    OrganizerIcon,
    Card
  },
  props: {},
  data() {
    return {
      organizerIcon: 'OrganizerIcon',
      menteeIcon: 'MenteeIcon',
      teamcoachIcon: 'TeamCoachIcon'
    }
  },
  computed: {
    data() {
      return this.$store.state.roles
    }
  }
}
</script>
<style lang="stylus" scoped>
// The wrapper ensures a margin is applied to the following below division in small vieport widths.
// Vuetifys spacer helpers seems only support margins and paddings in general,
// they cannot be individually adjusted to the respective viewport width.
// Vuetify spacing helpers: https://vuetifyjs.com/en/framework/spacing
.roles {
  &__col {
    +breakpoint-up(sm){
      margin-bottom: 0;
    }

    margin-bottom: space * 4;
  }
}
</style>
