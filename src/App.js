import HomelLayout from './layouts/HomelLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './components/Carousel';
import './App.css';
import AboutUs from './components/AboutUs';
import OurProgram from 'components/OurProgram';
import Documentation from 'components/Documentation';
import Article from 'components/Article';
import Testimonial from 'components/Testimonial';
import OurTeam from 'components/OurTeam';
import Partner from 'components/Partner';

function App() {
  return (
    <HomelLayout>
      <Carousel />
      <AboutUs />
      <OurProgram />
      <Documentation />
      <Article />
      <Testimonial />
      <OurTeam />
      <Partner />
    </HomelLayout>
  );
}

export default App;
