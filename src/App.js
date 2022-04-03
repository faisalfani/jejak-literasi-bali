import HomelLayout from './layouts/HomelLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './components/Carousel';
import './App.css';
import AboutUs from './components/AboutUs';
import OurProgram from 'components/OurProgram';
import Documentation from 'components/Documentation';

function App() {
  return (
    <HomelLayout>
      <Carousel />
      <AboutUs />
      <OurProgram />
      <Documentation />
      <h1>Content</h1>
    </HomelLayout>
  );
}

export default App;
