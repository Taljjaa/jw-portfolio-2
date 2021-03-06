import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jen Kennedy | Full Stack Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jen Kennedy',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile_picture.jpg',
  // coming out of a boot camp, mention that you want to help people with technology
  paragraphOne: `I have a background in Molecular Biology and a degree in Zoology. 🦉`,
  paragraphTwo: `I taught myself programming for 2 years before deciding to join Flatiron School. 
                I love building all aspects of an application especially the frontend. 
                My ultimate goal is to use coding to lower the barrier for communities and use technology to have a positive impact on the world around me.
                `,
  paragraphThree: 'In my free time I enjoy reading, watching anime, and playing with my dog!',
  resume:
    'https://docs.google.com/document/d/1jg6qBShEtZ4OMEPJe33Pr2EEyi7ctY4AkveQI9DGIpg/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'PlayItForward.png',
    title: 'PlayItForward',
    info: `PlayItForward is a platform to incentivize volunteers to help nonprofits, and keep them motivated to support their communities by gamifying volunteering engagement.`,
    info2: 'Built with React, TypeScript, GraphQL, Apollo, and Tailwind',
    url: '',
    repo: 'https://github.com/Taljjaa/PlayItForward-Client', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'digitalGarden.png',
    title: 'The Learning Project',
    info:
      "The Learning Project, aka my digital garden is a place where I write about techonology I like and take notes about things I'm learning.",
    info2: 'My site is built with Gatsby, MDX, GraphQL, and deployed on Netlify.',
    url: 'https://the-learning-project.netlify.app/',
    repo: 'https://github.com/Taljjaa/jens-digital-garde', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'BookclubBuilder.png',
    title: 'Bookclub Builder',
    info: `Bookclub Builder's goal is to encourage people to read more and unite book lovers. I wanted a simple website that allowed me to create a book club and decide on which books to read through poll.`,
    info2: 'Built with React, Redux, MaterialUI, on the frontend and Ruby on Rails on the backend',
    url: 'https://bookclub-builder.netlify.app/',
    repo: 'https://github.com/Taljjaa/bookclub-builder-frontend', // if no repo, the button will not show up
  },
  // {
  //   id: uuidv1(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jenken131@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/jenkens_',
    },
    {
      id: uuidv1(),
      name: 'pencil',
      url: 'https://the-learning-project.netlify.app/',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jennifer-m-williams/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/Taljjaa',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
