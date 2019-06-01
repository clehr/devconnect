export const state = () => ({
  mission: {
    points: [
      {
        name: 'Mentoring Community',
        img: require('@/assets/img/teamwork_light-lady-medium.png'),
        width: '125',
        height: '125',
        points: [
          'Join a welcoming community with more than 80 members',
          'Your level of experience does not matter we welcome everyone from Junior to Senior',
          `We are a trying to build up a diverse community with a friendly open
        learning environment`
        ]
      },
      {
        name: 'Hands On Project',
        img: require('@/assets/img/laptop_code--light--small.png'),
        width: '150',
        height: '125',
        points: [
          'Gather ideas in your own team of maximal 6 people',
          'Realize your own projects with supervision from a mentor',
          'Get experience by working on fun projects'
        ]
      },
      {
        img: require('@/assets/img/hnd_seedling--light--xs.png'),
        name: 'Foster Learning',
        width: '150',
        height: '125',
        points: [
          'Grow as a person by tackling challenges as a team',
          'Find and improve your own ideas of what it means to be a developer',
          'Inspire others by telling your story of becoming/being a software developer'
        ]
      }
    ]
  }
})
