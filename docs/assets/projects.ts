export class Project {
  name: string;
  year: string;
  short_description: string;
  description: string[];
  technologies: string[];
  url: string;
  videoUrl: string;
}

export const projects: Project[] = [
  {
    name: 'PagoDirecto',
    year: '2018',
    short_description: 'Frontend. React.',
    description: [
      'Design and development of an administrative web application for a digital payment solution. This application is being developed with ReactJS and ES6.',
      'Currently has the following features:',
      '- Register proccess',
      '- Search and presentation of different elements according to several search filters',
      '- Modal popup messages',
      '- Dynamic transitions',
      '- Connecting to our back-end throught fetch API request and socketIO'
    ],
    url: 'https://admin.pagodirecto.com/',
    technologies: ['react', 'socketio'],
    videoUrl: ''
  },
  {
    name: 'dev_Grounds',
    year: '2017',
    short_description: 'Fullstack. Express.',
    description: [
      '(Personal project)',
      'RESTful application developed on Express Js and MongoDB for organizing coding meetings (CRUD for codding meetings and comments) with signup/signin using Passport JS and geolocation with Google Maps and Google Geocoder API.'
    ],
    technologies: ['node', 'express', 'mongodb', 'bootstrap'],
    url: 'https://dev-grounds.herokuapp.com/',
    videoUrl: 'https://www.youtube.com/embed/t7yGFfUUO_I?'
  },
  {
    name: 'SmartWolf',
    year: '2017',
    short_description: 'Frontend. Bootstrap4.',
    description: [
      'Responsive landing page with "contact us" form (written on PHP).',
      'Developed in HTML5, CSS3 and vanilla JS with help of Bootstrap 4 library and using on the best SEO practices.'
    ],
    technologies: ['bootstrap', 'html5', 'css3'],
    url: 'http://www.smartwolf.es/',
    videoUrl: 'https://www.youtube.com/embed/iz7jTvkLeBY?'
  }
]