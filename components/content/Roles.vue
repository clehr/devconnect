<template>
  <v-layout row wrap align-baseline class="roles">
    <v-flex
      v-for="role in data.types"
      :key="role.id"
      xs12
      md6
      lg3
      class="roles__item"
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
.roles {
  +breakpoint-up(sm){
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  width: 100%;

  &__item {
    +breakpoint-up(sm){
      columns= 2;
      flex: 0 0 (100% / columns);
      width: (100% / columns);
    }
    +breakpoint-up(md){
      columns= 4;
      flex: 0 0 (100% / columns);
      width: (100% / columns);
      margin-bottom: 0;
    }
    margin-bottom: space * 4;
  }
}
</style>
