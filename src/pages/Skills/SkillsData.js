import htmlLogo from './img/html.png';
import cssLogo from './img/css.png';
import jsLogo from './img/js.png';
import reactLogo from './img/react.png';
import nodeLogo from './img/node.png';
import mysqlLogo from './img/mysql.png';
import mongodbLogo from './img/mongodb.png';
import gpt from './img/gpt.png';
import php from './img/php.png';
import wordpress from './img/wordpress2.png';
import python from './img/python.png';
import figma from './img/figma.png';
import TS from '../Projects/img/typescript.png'

export const skills = [
  { name: 'HTML', logo: htmlLogo, level: 90 },
  { name: 'CSS', logo: cssLogo, level: 90 },
  { name: 'JavaScript', logo: jsLogo, level: 80 },
  { name: 'TypeScript', logo: TS, level: 80 },
  { name: 'React', logo: reactLogo, level: 85 },
  { name: 'Python', logo: python, level: 55 },
  { name: 'WordPress', logo: wordpress, level: 50 },
  { name: 'PHP', logo: php, level: 60 },
  { name: 'Node.js', logo: nodeLogo, level: 60 },
  { name: 'MySQL', logo: mysqlLogo, level: 60 },
  { name: 'MongoDB', logo: mongodbLogo, level: 60 },
  { name: 'Figma', logo: figma, level: 60 },
  { name: 'Prompt Engineering', logo: gpt, level: 100 },
];

export const skillsDescriptions = [
  '⚡ Proficient in designing and developing responsive, user-friendly web interfaces using React.',
  '⚡ Proficient in implementing SPA (Single Page Applications) and PWA (Progressive Web Applications) for optimized user experience.',
  '⚡ Experience in integrating third-party services and APIs for enhanced functionality.',
  '⚡ Skilled in prompt engineering for large language models, focusing on generating precise and contextually relevant outputs.',
];

export const settings = {
  dots: false,
  infinite: true,
  speed: 4000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  arrows: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
           
      },
    },
  ],
};