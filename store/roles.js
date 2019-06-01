export const state = () => ({
  types: {
    mentor: {
      name: 'Mentor',
      points: [
        'Actively develops with the other members in a group of max 6 people',
        'Assists and cares for the other members in all questions regarding IT'
      ]
    },
    mentee: {
      name: 'Mentee',
      points: [
        'Decides with the other members on a project they want to develop together',
        'Grows and connects with other people',
        'Makes first experience in IT in a helpful and caring community'
      ]
    },
    teamcoach: {
      name: 'TeamCoach',
      points: [
        'Guides the others through the team project',
        'Is the connection between other teams',
        'Cares for organizational things regarding the team',
        `Does retrospectives to continuously improve teamwork by reflecting on past events`
      ]
    },
    organizer: {
      name: 'Organizer',
      points: [
        'Assists in organizing meetups and talks',
        'Actively helps to grow DevConnect',
        'Helps with the social media presence'
      ]
    }
  }
})
