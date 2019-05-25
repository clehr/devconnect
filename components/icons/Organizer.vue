<template>
  <figure class="margin-bottom-15 center">
    <span class="flex-row--centered margin-bottom-minus-4em">
      <font-awesome-icon
        :icon="['fab', iconSlack.name]"
        :size="iconSlack.size"
        class="margin-bottom-2em margin-right-minus-0-4em"
      />
      <font-awesome-icon
        :icon="['fab', iconMeetup.name]"
        :size="iconMeetup.size"
        class="margin-bottom-5em margin-right-minus-0-4em"
      />
      <font-awesome-icon :icon="iconFemale.name" :size="iconFemale.size" />
      <font-awesome-icon
        :icon="['fab', iconTwitter.name]"
        :size="iconTwitter.size"
        class="margin-bottom-5em margin-left-minus-0-4em"
      />
      <font-awesome-icon
        :icon="iconCalendar.name"
        :size="iconCalendar.size"
        class="margin-bottom-2em margin-left-minus-0-4em"
      />
    </span>
    <figcaption class="icon__caption">Organizer</figcaption>
    <ul class="align-items-in-center">
      <li v-for="subpoint in subpoints" :key="subpoint">{{ subpoint }}</li>
    </ul>
  </figure>
</template>

<script>
export default {
  name: 'Organizer',
  props: {
    subpoints: {
      default: () => [],
      type: Array
    }
  },
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

<style scoped>
.icon__caption {
  margin-top: 1em;
  font-size: 1.3em;
  font-weight: bold;
}
.flex-row--centered {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.margin-bottom-5em {
  margin-bottom: 5em;
}

.margin-bottom-2em {
  margin-bottom: 2em;
}
.margin-right-minus-0-4em {
  margin-right: -0.4em;
}
.margin-left-minus-0-4em {
  margin-left: -0.4em;
}
.margin-bottom-minus-4em {
  margin-bottom: -4em;
}
.align-items-in-center {
  text-align: left;
}
.margin-bottom-15 {
  margin-bottom: 15%;
}
.center {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
