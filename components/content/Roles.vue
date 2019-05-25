<template>
  <div class="justify shorten-80 center margin-bottom-5">
    <IconMentor
      :subpoints="[
        'Actively develops with the other members in a group of max 6 people',
        'Assists and cares for the other members in every questions regarding IT'
      ]"
    />
    <IconMentee
      :subpoints="[
        'Decides with the other members on a project they want to develop together',
        'Grows and connects with other people',
        'Makes first experience in IT in a helpful and caring community'
      ]"
    />
    <IconTeamCoach
      :subpoints="[
        'Guides the others through the team project',
        'Is the connection between other teams',
        'Cares for organizational things regarding the team',
        'Does retrospectives with the team with the goal to make everyone happier'
      ]"
    />
    <IconOrganizer
      :subpoints="[
        'Assists in organizing meetups and talks',
        'Actively helps to grow DevConnect',
        'Helps with the social media presence'
      ]"
    />
  </div>
</template>
<script>
import IconMentee from '../icons/IconMentee'
import IconMentor from '../icons/IconMentor'
import IconOrganizer from '../icons/IconOrganizer'
import IconTeamCoach from '../icons/IconTeamCoach'

export default {
  name: 'Roles',
  components: { IconMentee, IconMentor, IconOrganizer, IconTeamCoach }
}
</script>
<style>
figure {
  display: inline-block;
}

.justify {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-flow: column;
}

.shorten-80 {
  width: 80%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.margin-bottom-5 {
  margin-bottom: 5%;
}

@media only screen and (min-width: 768px) {
  .justify {
    flex-flow: row;
  }
}
</style>
