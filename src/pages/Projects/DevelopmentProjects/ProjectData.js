import smirk from "../img/smirk2.png";
import blueCactus from '../img/bluecactus.png';
import weatherHub from '../img/weatherHub.png';
import sortstream from '../img/SortStream2.png'
import quote from '../img/quote.png';
import react from '../../Skills/img/react.png';
import Python from '../../Skills/img/python.png';
import MUI from '../img/mui.png';
import Bootstrap from '../img/bootstrap.png';
import TS from '../img/typescript.png'
import SQL from '../img/sql.png'

const projectData = [
  {
    title: "Quote Generator",
    image: quote,
    description: "Quote Generator is a full-stack application that allows users to save and generate quotes. It is crafted with a modern React frontend, powered by a Python microservice, and backed by SQLite. The application features a user-friendly interface that enables users to effortlessly save their favorite quotes and generate random ones at their leisure. Quote Generator is a robust and scalable application that showcases my skills in developing and deploying full-stack applications, utilizing a variety of technologies and frameworks.",
    link: "https://github.com/TurboTeam335/random_quote",
    deployedLink: "https://turboteam335.github.io/random_quote/",
    technologies: [react, TS, Python, MUI, SQL],
  },
  {
    title: "SortStream",
    image: sortstream,
    description: "SortStream is an innovative Python application tailored to simplify file management in any directory, especially beneficial for streamlining download folders. This script is perfect for users who regularly handle a multitude of file types and are seeking an efficient solution to maintain an orderly and structured digital workspace. SortStream elegantly categorizes files, ensuring that your directories are not just organized, but also intuitively arranged for ease of access and productivity.",
    link: "https://github.com/TurboTeam335/SortStream",
    // deployedLink: "https://bluecactushorticulture.com/",
    technologies: [Python],
  },
  {
    title: "Blue Cactus",
    image: blueCactus,
    description: "Blue Cactus Horticulture is an innovative garden design and landscaping service in Seattle, emphasizing sustainable practices and personalized customer experiences. This project, encapsulated in a React-based web application, features dynamic navigation and fluid page transitions, elevating the user experience. Utilizing Material UI for its aesthetic interface and EmailJS for efficient customer communication.",
    link: "https://github.com/TurboTeam335/blue-cactus",
    deployedLink: "https://blue-cactus-seattle.com/",
    technologies: [react, MUI],
  },
  {
    title: "WeatherHub.",
    image: weatherHub,
    description: "WeatherHub is a user-friendly weather forecasting application designed to provide users with real-time climatic insights. Utilizing the Open Weather API, it offers detailed weather conditions and forecasts, aiding in informed planning and preparation. This project showcases my ability to integrate third-party APIs and develop intuitive interfaces, handling a diverse range of meteorological data.",
    link: "https://github.com/TurboTeam335/weather-react",
    deployedLink: "https://turboteam335.github.io/weather-react/",
    technologies: [react, MUI],
  },
  // {
  //   title: "appointme.",
  //   image: appointme,
  //   description: "appointme. offers a comprehensive and efficient solution for vendors by providing them with a user-friendly dashboard. This dashboard allows vendors to easily schedule clients, manage a comprehensive client database, and create detailed profiles showcasing the range of services offered along with associated costs to potential clients. With appointme., vendors can streamline their operations and enhance their ability to attract and serve clients effectively.",
    // link: "https://github.com/EFP18/AppointMe",
  //   deployedLink: "https://appointme-deploy-73ae09842608.herokuapp.com/"
  // },
  // {
  //   title: "SMIRK: Stock Market Insights & Ridiculous Knowledge",
  //   image: smirk,
  //   description: "SMIRK is a comprehensive stock analysis tool designed to empower investors with real-time data and insights. Leveraging an advanced stock exchange API, the application presents users with up-to-the-minute market trends, facilitating informed investment decisions. This project showcases my proficiency in using third-party APIs and creating user-friendly interfaces that handle a wide array of data.",
  //   link: "https://github.com/TurboTeam335/smirk",
  //   deployedLink: "https://turboteam335.github.io/smirk/",
  //   technologies: [react, Bootstrap],
  // },
  // {
  //   title: "BookEnds",
  //   image: bookends,
  //   description: "BookEnds is a community-driven platform that connects book lovers and fosters a culture of sharing within neighborhoods. The platform allows users to search for available books in book-share boxes across their neighborhood. It demonstrates my skills in creating full-stack applications, focusing on user experience, and promoting community interaction.",
  //   link: "https://github.com/TurboTeam335/BookEnd",
  //   deployedLink: "https://frozen-castle-12259.herokuapp.com/"
  // },
  // {
  //   title: "Portfolio",
  //   image: portfolio,
  //   description: "This Portfolio is a showcase of my latest accomplishments and endeavors. It epitomizes my dedication to creating polished web experiences, incorporating the latest web technologies and design principles. Feel free to explore the repository for this site to gain insights into my coding practices and design sensibilities.",
  //   link: "https://github.com/TurboTeam335/dm-portfolio",
  //   // deployedLink: "https://turboteam335.github.io/Weather-Dashboard/"
  // },
];

export default projectData;
