export class Project {
  name: string;
  year: string;
  short_description: string;
  description: string;
  technologies: string[];
  videoUrl: string;
}

export const projects: Project[] = [
  {
    name: 'PagoDirecto',
    year: '2018',
    short_description: 'Frontend. React.',
    description: 'Lorem Ipsum',
    technologies: ['react', 'socketio'],
    videoUrl: ''
  },
  {
    name: 'dev_Grounds',
    year: '2017',
    short_description: 'Fullstack. Express.',
    description: 'Lorem Ipsum',
    technologies: ['react', 'socketio','node', 'express', 'mongodb', 'bootstrap', 'html5', 'css3'],
    videoUrl: 'https://www.youtube.com/embed/t7yGFfUUO_I?'
  },
  {
    name: 'SmartWolf',
    year: '2017',
    short_description: 'Frontend. Bootstrap4.',
    description: 'Lorem Ipsum',
    technologies: ['bootstrap', 'html5', 'css3'],
    videoUrl: 'https://www.youtube.com/embed/iz7jTvkLeBY?'
  }
]