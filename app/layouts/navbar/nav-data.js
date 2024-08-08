import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projetos',
    pathname: '/#project-1',
  },
  {
    label: 'Sobre',
    pathname: '/#details',
  },
  // {
  //   label: 'Articles',
  //   pathname: '/articles',
  // },
  {
    label: 'Contato',
    pathname: '/contact',
  },
];

export const socialLinks = [
  {
    label: 'Linkedin',
    url: `https://www.linkedin.com/in//${config.linkedin}`,
    icon: 'Linkedin',
  },

  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'Github',
  },
];
