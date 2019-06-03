<template>
  <span class="organizer-icon">
    <font-awesome-icon
      :icon="['fab', iconSlack.name]"
      :size="iconSlack.size"
      class="organizer-icon__slack"
    />
    <font-awesome-icon
      :icon="['fab', iconMeetup.name]"
      :size="iconMeetup.size"
      class="organizer-icon__meetup"
    />
    <font-awesome-icon
      :icon="iconFemale.name"
      :size="iconFemale.size"
      class="organizer-icon__female"
    />
    <font-awesome-icon
      :icon="['fab', iconTwitter.name]"
      :size="iconTwitter.size"
      class="organizer-icon__twitter"
    />
    <font-awesome-icon
      :icon="iconCalendar.name"
      :size="iconCalendar.size"
      class="organizer-icon__calendar"
    />
  </span>
</template>

<script>
export default {
  name: 'OrganizerIcon',
  data: function() {
    return {
      iconFemale: {
        name: 'female',
        size: '10x'
      },
      iconMeetup: {
        name: 'meetup',
        size: '3x'
      },
      iconTwitter: {
        name: 'twitter',
        size: '3x'
      },
      iconSlack: {
        name: 'slack-hash',
        size: '3x'
      },
      iconCalendar: {
        name: 'calendar-check',
        size: '3x'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.organizer-icon {
  position: relative;
  padding-top: 10%;

  &__slack {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-100%, 30%);
  }

  &__meetup {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -110%);
  }

  &__twitter {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -110%);
  }

  &__calendar {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(110%, 30%);
  }
}
</style>
