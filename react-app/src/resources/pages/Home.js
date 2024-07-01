import Pageheader from '../components/Pageheader/Pageheader';
import Gallery from '../components/Gallery/Gallery';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <main>
      <Pageheader />
      <Gallery />
      <Services />
      <Footer />
    </main>
    );
  };
  
  export default Home;